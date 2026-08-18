/**
 * Rasterize site favicons from the transparent eye and the padded avatar tile.
 * Transparent: favicon.svg (source), favicon.ico (16/32), favicon-32.png, favicon-192.png
 * Padded tile: apple-touch-icon.png (180), optional org avatar 512 PNG
 */
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const publicDir = path.join(root, 'public');
const markSvg = path.join(publicDir, 'logo-mark.svg');
const avatarSvg = path.join(publicDir, 'logo-mark-avatar.svg');
const orgAvatarPng = path.resolve(root, '..', '.github', 'profile', 'assets', 'logo-mark-512.png');

function pngsToIco(images) {
  const count = images.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const entries = images.map((img) => {
    const entry = { width: img.width, height: img.height, size: img.buffer.length, offset };
    offset += img.buffer.length;
    return entry;
  });
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  let cursor = 6;
  for (const entry of entries) {
    out.writeUInt8(entry.width >= 256 ? 0 : entry.width, cursor);
    out.writeUInt8(entry.height >= 256 ? 0 : entry.height, cursor + 1);
    out.writeUInt8(0, cursor + 2);
    out.writeUInt8(0, cursor + 3);
    out.writeUInt16LE(1, cursor + 4);
    out.writeUInt16LE(32, cursor + 6);
    out.writeUInt32LE(entry.size, cursor + 8);
    out.writeUInt32LE(entry.offset, cursor + 12);
    cursor += 16;
  }
  let dataAt = headerSize;
  for (const img of images) {
    img.buffer.copy(out, dataAt);
    dataAt += img.buffer.length;
  }
  return out;
}

async function raster(svgPath, size) {
  const input = await readFile(svgPath);
  return sharp(input, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

await mkdir(publicDir, { recursive: true });
await copyFile(markSvg, path.join(publicDir, 'favicon.svg'));

const png16 = await raster(markSvg, 16);
const png32 = await raster(markSvg, 32);
const png192 = await raster(markSvg, 192);
const png180 = await raster(avatarSvg, 180);

await writeFile(path.join(publicDir, 'favicon-32.png'), png32);
await writeFile(path.join(publicDir, 'favicon-192.png'), png192);
await writeFile(path.join(publicDir, 'apple-touch-icon.png'), png180);
await writeFile(
  path.join(publicDir, 'favicon.ico'),
  pngsToIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
  ]),
);

const png512 = await raster(avatarSvg, 512);
await mkdir(path.dirname(orgAvatarPng), { recursive: true });
await writeFile(orgAvatarPng, png512);

console.log('wrote favicon.svg, favicon.ico (16/32), favicon-32.png, favicon-192.png, apple-touch-icon.png (180, avatar tile)');
console.log(`wrote org avatar ${orgAvatarPng}`);
