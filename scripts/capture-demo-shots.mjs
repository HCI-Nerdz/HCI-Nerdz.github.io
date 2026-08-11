/**
 * Capture demo family shots, then bake resting-lanczos tiers (Lanczos3 → 400w/800w).
 * Same contract as github.com/dev-centr/resting-lanczos `generate-tiers.mjs`.
 * Manifest: src/data/demo-shots.json
 */
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const manifestPath = path.join(root, 'src/data/demo-shots.json');
const mastersDir = path.join(root, 'scripts/shot-masters');
const outDir = path.join(root, 'public/demo-shots');

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const { shots, aspect = '16:10', tiers = [400, 800] } = manifest;

await mkdir(mastersDir, { recursive: true });
await mkdir(outDir, { recursive: true });

const { chromium } = await import('playwright');

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: 'dark',
});

for (const shot of shots) {
  const dest = path.join(mastersDir, `${shot.id}.png`);
  console.log(`capture ${shot.id} ← ${shot.url}`);
  await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 90_000 });
  await page.waitForTimeout(600);
  if (shot.hover) {
    await page.locator(shot.hover).first().hover({ force: true });
    await page.waitForTimeout(320);
  }
  const loc = page.locator(shot.selector || 'main').first();
  if ((await loc.count()) > 0) {
    await loc.screenshot({ path: dest, type: 'png' });
  } else {
    await page.screenshot({ path: dest, type: 'png' });
  }
}

await browser.close();

function parseAspect(s) {
  if (String(s).includes(':')) {
    const [a, b] = String(s).split(':');
    return Number(a) / Number(b);
  }
  return Number(s);
}

const aspectRatio = parseAspect(aspect);
const tierSizes = tiers.map((width) => ({
  width: Number(width),
  height: Math.round(Number(width) / aspectRatio),
}));

for (const shot of shots) {
  const input = path.join(mastersDir, `${shot.id}.png`);
  const meta = await sharp(input).metadata();
  const sw = meta.width;
  const sh = meta.height;
  if (!sw || !sh) throw new Error(`could not read ${input}`);

  let extract;
  const srcAspect = sw / sh;
  if (srcAspect > aspectRatio) {
    const newW = Math.round(sh * aspectRatio);
    extract = { left: Math.floor((sw - newW) / 2), top: 0, width: newW, height: sh };
  } else {
    const newH = Math.round(sw / aspectRatio);
    extract = { left: 0, top: 0, width: sw, height: newH };
  }

  for (const { width, height } of tierSizes) {
    const dest = path.join(outDir, `${shot.id}-${width}.webp`);
    await sharp(input)
      .extract(extract)
      .resize(width, height, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 90, effort: 6 })
      .toFile(dest);
    console.log(`wrote ${dest} (${width}x${height}, lanczos3)`);
  }
}

console.log(`wrote ${shots.length} masters + Lanczos tiers → ${outDir}`);
