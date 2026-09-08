import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const check = process.argv.includes('--check');
const docs = resolve(process.env.HCI_DOCS_ROOT || '../docs/docs/modules/ROOT/images');
const copies = [
  ['actor-model-agentic-ui/node-graph-topology.svg', 'public/demos/actor-model-agentic-ui/node-graph-topology.svg'],
  ['actor-model-agentic-ui/node-graph-topology.host.svg', 'public/demos/actor-model-agentic-ui/node-graph-topology.host.svg'],
  ['project-inbox/actor-topology.svg', 'public/demos/project-inbox/actor-topology.svg'],
  ['project-inbox/actor-topology.host.svg', 'public/demos/project-inbox/actor-topology.host.svg'],
  ['project-inbox/actor-topology.svg', 'public/demos/actor-model-agentic-ui/actor-topology.svg'],
  ['project-inbox/actor-topology.host.svg', 'public/demos/actor-model-agentic-ui/actor-topology.host.svg'],
  ['spatial-web-windows/communication-topology.svg', 'public/demos/spatial-web-windows/communication-topology.svg'],
  ['spatial-web-windows/communication-topology.host.svg', 'public/demos/spatial-web-windows/communication-topology.host.svg'],
  ['grounded-tokens/provenance-legend.svg', 'public/images/grounded-tokens/provenance-legend.svg'],
  [
    'an-alternative-to-urls/label-wire-breakage/label-wire-breakage.svg',
    'public/images/an-alternative-to-urls/label-wire-breakage/label-wire-breakage.svg',
  ],
  [
    'an-alternative-to-urls/label-wire-breakage/label-wire-breakage.host.svg',
    'public/images/an-alternative-to-urls/label-wire-breakage/label-wire-breakage.host.svg',
  ],
  [
    'an-alternative-to-urls/application-vs-network-naming/application-vs-network-naming.svg',
    'public/images/an-alternative-to-urls/application-vs-network-naming/application-vs-network-naming.svg',
  ],
  [
    'an-alternative-to-urls/application-vs-network-naming/application-vs-network-naming.host.svg',
    'public/images/an-alternative-to-urls/application-vs-network-naming/application-vs-network-naming.host.svg',
  ],
  [
    'an-alternative-to-urls/content-identity-resolution-stack/content-identity-resolution-stack.svg',
    'public/images/an-alternative-to-urls/content-identity-resolution-stack/content-identity-resolution-stack.svg',
  ],
  [
    'an-alternative-to-urls/content-identity-resolution-stack/content-identity-resolution-stack.host.svg',
    'public/images/an-alternative-to-urls/content-identity-resolution-stack/content-identity-resolution-stack.host.svg',
  ],
];

for (const [from, to] of copies) {
  const source = resolve(docs, from);
  const destination = resolve(to);
  if (check) {
    const [a, b] = await Promise.all([readFile(source), readFile(destination)]);
    if (!a.equals(b)) throw new Error(`stale generated diagram: ${to}`);
  } else {
    await mkdir(dirname(destination), { recursive: true });
    await copyFile(source, destination);
  }
}
