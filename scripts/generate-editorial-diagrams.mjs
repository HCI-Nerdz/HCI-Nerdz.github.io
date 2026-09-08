import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareThemedMermaidSvgDualOutput } from '@dev-centr/mermaid-svg-css-vars';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const images = join(root, 'public/images/an-alternative-to-urls');
const check = process.argv.includes('--check');
const diagrams = [
  {
    name: 'editorial-naming-layers',
    title: 'Editorial application and network naming layers',
    description: 'An application graph of labels and reverse consumers remains distinct from content-named network delivery.',
  },
  {
    name: 'editorial-identity-stack',
    title: 'Editorial content identity stack',
    description: 'A consumer prefers a content hash, can follow a mutable pointer, and is tracked when labels move.',
  },
];

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd: root, shell: process.platform === 'win32' });
    let stderr = '';
    child.stderr.on('data', (chunk) => (stderr += chunk));
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolvePromise() : reject(new Error(`${command} exited ${code}\n${stderr}`)));
  });
}

async function assertOrWrite(path, content) {
  if (check) {
    const current = await readFile(path, 'utf8').catch(() => '');
    if (current !== content) throw new Error(`stale editorial diagram: ${path.slice(root.length + 1)}`);
  } else {
    await writeFile(path, content, 'utf8');
  }
}

const temp = await mkdtemp(join(tmpdir(), 'hci-editorial-diagrams-'));
try {
  const config = join(temp, 'mermaid-config.json');
  await writeFile(config, `${JSON.stringify({
    htmlLabels: false,
    flowchart: { htmlLabels: false, curve: 'basis' },
    securityLevel: 'strict',
    theme: 'default',
  }, null, 2)}\n`);

  for (const diagram of diagrams) {
    const base = join(images, diagram.name, diagram.name);
    const manifest = JSON.parse(await readFile(`${base}.theme.json`, 'utf8'));
    const raw = join(temp, `${basename(base)}.raw.svg`);
    await run('pnpm', ['exec', 'mmdc', '-i', `${base}.mmd`, '-o', raw, '-c', config, '-b', 'transparent']);
    const result = prepareThemedMermaidSvgDualOutput(await readFile(raw, 'utf8'), manifest, {
      metadata: { role: 'img', title: diagram.title, description: diagram.description },
    });
    const errors = result.diagnostics.filter(({ severity }) => severity === 'error');
    if (errors.length || !result.standaloneSvg || !result.hostSvg) {
      throw new Error(`${diagram.name}: ${JSON.stringify(result.diagnostics, null, 2)}`);
    }
    await assertOrWrite(`${base}.svg`, result.standaloneSvg);
    await assertOrWrite(`${base}.host.svg`, result.hostSvg);
  }
} finally {
  await rm(temp, { recursive: true, force: true });
}
