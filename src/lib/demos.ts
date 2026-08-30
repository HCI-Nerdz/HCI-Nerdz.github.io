export type DemoViz =
  | 'pipeline'
  | 'audio'
  | 'scoped'
  | 'peel'
  | 'flow'
  | 'rails'
  | 'settings'
  | 'piles'
  | 'spatial';

/** Sort / display mode for the demos index timeline. */
export type DemoDateMode = 'released' | 'modified';

export interface DemoShot {
  /** Filename stem for resting-lanczos tiers (`{id}-400.webp`). */
  id: string;
  label: string;
  href: string;
}

export interface Demo {
  id: string;
  title: string;
  summary: string;
  href: string;
  viz: DemoViz;
  /**
   * When this demo first shipped / entered the catalog (ISO date `YYYY-MM-DD`).
   * Required for new catalog entries.
   */
  releasedAt: string;
  /**
   * Last substantive demo update (ISO date `YYYY-MM-DD`) — page chrome, shots,
   * or catalog wiring; not essay retitles alone.
   * Required for new catalog entries.
   */
  modifiedAt: string;
  /**
   * Capture targets for the catalog card.
   * One shot = screenshot of that surface. Several = a family (Context Edge variants),
   * not one thumb of the family landing page.
   */
  shots?: DemoShot[];
  /** Optional essay or docs deep-links */
  related?: { label: string; href: string }[];
}

export interface DemoCategory {
  id: string;
  title: string;
  description: string;
  demos: Demo[];
}

/** Demo plus the category it lives under (for catalog helpers). */
export interface CatalogDemo extends Demo {
  categoryId: string;
  categoryTitle: string;
}

/**
 * Industry-familiar UI domains for the demos catalog.
 * Categories are broad topics people already recognize — not the pattern names themselves.
 * Empty categories are intentional roadmap slots.
 */
export const demoCategories: DemoCategory[] = [
  {
    id: "navigation",
    title: "Navigation",
    description: "Getting around products and docs — edge maps, layered routes, and step-by-step paths that deepen on demand.",
    demos: [
      {
        id: "context-edge",
        title: "Context Edge",
        summary: "Map, Modal, and Path variants — hover rails, click-through map, and framework islands. The desk page is the essay mock; the family below is the shipped MVP.",
        viz: "rails",
        href: "https://hci-nerdz.github.io/context-edge/",
        releasedAt: "2026-08-10",
        modifiedAt: "2026-08-30",
        shots: [
          {
            id: "edge-bar-map",
            label: "Map Edge",
            href: "https://hci-nerdz.github.io/context-edge/demos/vanilla-mature/",
          },
          {
            id: "edge-bar-modal",
            label: "Modal Edge",
            href: "https://hci-nerdz.github.io/context-edge/demos/modal-edge/",
          },
          {
            id: "edge-bar-path",
            label: "Path Edge",
            href: "https://hci-nerdz.github.io/context-edge/demos/path-edge/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/ecosystem-nav-at-the-screen-edge/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/context-edge.html",
          },
          {
            label: "Desk mock",
            href: "/demos/context-edge/",
          },
          {
            label: "Repo",
            href: "https://github.com/HCI-Nerdz/context-edge",
          },
        ],
      },
      {
        id: "virtual-pages",
        title: "Virtual pages",
        summary: "Decision backbone for deep subtrees: parent steps as edge layers or a top-bar preview stack. Soft SPA routes and hard document loads share one chrome — mega-directory content without mega-page scanning.",
        viz: "rails",
        href: "https://hci-nerdz.github.io/virtual-pages/",
        releasedAt: "2026-08-30",
        modifiedAt: "2026-08-30",
        shots: [
          {
            id: "virtual-pages",
            label: "Virtual pages desk",
            href: "https://hci-nerdz.github.io/virtual-pages/",
          },
        ],
        related: [
          {
            label: "Edge layers",
            href: "https://hci-nerdz.github.io/virtual-pages/#/edge",
          },
          {
            label: "Preview stack",
            href: "https://hci-nerdz.github.io/virtual-pages/#/preview",
          },
          {
            label: "Flat contrast",
            href: "https://hci-nerdz.github.io/virtual-pages/#/contrast",
          },
          {
            label: "Browser notes",
            href: "https://github.com/HCI-Nerdz/virtual-pages/blob/main/docs/browser-vpages.adoc",
          },
          {
            label: "Repo",
            href: "https://github.com/HCI-Nerdz/virtual-pages",
          },
        ],
      },
      {
        id: "instruction-flow",
        title: "Instruction flow",
        summary: "Menu-style install guides: choose a path, see only the next clear steps, rewind and share the URL. Continuations nest under decisions instead of dumping every platform variant at once.",
        viz: "flow",
        href: "/demos/instruction-flow/",
        releasedAt: "2026-08-02",
        modifiedAt: "2026-08-18",
        shots: [
          {
            id: "instruction-flow",
            label: "Instruction flow",
            href: "/demos/instruction-flow/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/instruction-flows/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/instruction-flows.html",
          },
          {
            label: "Antora extension",
            href: "https://github.com/antora-supplemental/asciidoc-interactive",
          },
        ],
      },
    ],
  },
  {
    id: "windowing-spatial",
    title: "Windowing & spatial UI",
    description: "Multi-window and desk layouts — lite palettes, torn-off tools, and session surfaces that stay spatially separate.",
    demos: [
      {
        id: "spatial-web-windows",
        title: "Spatial web windows desk",
        summary: "Photo-grade desk with torn-off histogram (Document PiP) and curves remote (chromeless popup). Toggle monolith vs spatial vs mobile intent.",
        viz: "spatial",
        href: "/demos/spatial-web-windows/",
        releasedAt: "2026-08-28",
        modifiedAt: "2026-08-28",
        shots: [
          {
            id: "spatial-web-windows",
            label: "Spatial web windows desk",
            href: "/demos/spatial-web-windows/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/when-the-browser-flattens-working-memory/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/spatial-web-windows.html",
          },
          {
            label: "Dev-Centr",
            href: "https://docs.devcentr.org/dev-centr/latest/architecture/ui-heavy-web-apps.html#spatial-windows-and-lite-palettes",
          },
          {
            label: "Browser fork",
            href: "https://github.com/Desktop-Tooling/spatial-browser",
          },
        ],
      },
      {
        id: "shell-context-demo",
        title: "Open Terminal layout desk",
        summary: "Facsimile desk for how terminals fit real work: prompt context while you type, tabs in one window, a calling window that indexes separate sessions, a project manager next to a DevCentr grid, contained tiling zones you can spawn and delete, and session re-association. Desk mocks only — native windowing stays in open-terminal.",
        viz: "spatial",
        href: "https://hci-nerdz.github.io/shell-context-demo/",
        releasedAt: "2026-08-28",
        modifiedAt: "2026-08-28",
        shots: [
          {
            id: "shell-context-demo",
            label: "Open Terminal layout desk",
            href: "https://hci-nerdz.github.io/shell-context-demo/",
          },
        ],
        related: [
          {
            label: "Desk page",
            href: "/demos/shell-context/",
          },
          {
            label: "Zones",
            href: "https://hci-nerdz.github.io/shell-context-demo/#/zones",
          },
          {
            label: "Manager",
            href: "https://hci-nerdz.github.io/shell-context-demo/#/manager",
          },
          {
            label: "OpenShellOrg host",
            href: "https://openshellorg.github.io/docs/shell-architecture/open-terminal-host.html",
          },
          {
            label: "Repo",
            href: "https://github.com/HCI-Nerdz/shell-context-demo",
          },
        ],
      },
    ],
  },
  {
    id: "settings-context",
    title: "Settings & context",
    description: "Configuration beside the work — bound settings panes and scoped tools under one shell instead of a junk drawer.",
    demos: [
      {
        id: "context-bound-settings",
        title: "Context-bound settings desk",
        summary: "Activity UI publishes context; a dependent settings pane matches applicability and shows only bound controls. Toggle the across-town catalog to feel the storage room return.",
        viz: "settings",
        href: "/demos/context-bound-settings/",
        releasedAt: "2026-08-10",
        modifiedAt: "2026-08-10",
        shots: [
          {
            id: "context-bound-settings",
            label: "Context-bound settings",
            href: "/demos/context-bound-settings/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/making-settings-follow-the-activity/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/context-bound-settings.html",
          },
        ],
      },
      {
        id: "scoped-ux-desk",
        title: "Scoped UX desk",
        summary: "Three narrow tools (Projects, Environment, Remote) with feedforward previews. Toggle mega-tool mode to feel the junk drawer return.",
        viz: "scoped",
        href: "/demos/scoped-ux/",
        releasedAt: "2026-08-01",
        modifiedAt: "2026-08-18",
        shots: [
          {
            id: "scoped-ux-desk",
            label: "Scoped UX desk",
            href: "/demos/scoped-ux/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/scoped-ux-architecture/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/scoped-ux-architecture.html",
          },
        ],
      },
    ],
  },
  {
    id: "search-filters",
    title: "Search & filters",
    description: "Discoverable filter surfaces instead of power-user syntax as the only door.",
    demos: [
      {
        id: "audio-lexicon",
        title: "Audio lexicon",
        summary: "Pro-audio filter literacy: term tree, history, visualization, and A/B audition — then EqualizerAPO / OBS export when a term maps.",
        viz: "audio",
        href: "https://hci-nerdz.github.io/audio-lexicon/",
        releasedAt: "2026-08-08",
        modifiedAt: "2026-08-08",
        shots: [
          {
            id: "audio-lexicon",
            label: "Audio lexicon",
            href: "https://hci-nerdz.github.io/audio-lexicon/",
          },
        ],
        related: [
          {
            label: "Open lexicon",
            href: "https://hci-nerdz.github.io/audio-lexicon/",
          },
          {
            label: "Repo",
            href: "https://github.com/HCI-Nerdz/audio-lexicon",
          },
        ],
      },
    ],
  },
  {
    id: "information-architecture",
    title: "Information architecture",
    description: "How content is labeled, typed, and composed — identity vs pretty paths, peelable types, and sequence maps.",
    demos: [
      {
        id: "navigating-by-content",
        title: "When the rename breaks the README",
        summary: "Symptom demo: flip between string-wired URLs and content hashes. Rename the pretty path and watch who breaks — or who doesn't.",
        viz: "rails",
        href: "/demos/navigating-by-content/",
        releasedAt: "2026-08-11",
        modifiedAt: "2026-08-11",
        shots: [
          {
            id: "navigating-by-content",
            label: "When the rename breaks the README",
            href: "/demos/navigating-by-content/",
          },
        ],
        related: [
          {
            label: "Symptom essay",
            href: "/blog/docs-path-renames-as-unpaid-chores/",
          },
          {
            label: "Diagnosis essay",
            href: "/blog/labels-versus-wires/",
          },
          {
            label: "Treatment docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/navigating-by-content.html",
          },
        ],
      },
      {
        id: "pass-through-extensions",
        title: "Pass-through peel",
        summary: "Meta-suffixes like .example and .template are badges on a real type. Peel them and resolve open/icon from the stem — the way Explorer should.",
        viz: "peel",
        href: "/demos/pass-through-extensions/",
        releasedAt: "2026-08-02",
        modifiedAt: "2026-08-03",
        shots: [
          {
            id: "pass-through-extensions",
            label: "Pass-through peel",
            href: "/demos/pass-through-extensions/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/when-example-files-lose-their-type/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/pass-through-extensions.html",
          },
          {
            label: "Windows helper",
            href: "https://github.com/HCI-Nerdz/pass-through-extensions",
          },
        ],
      },
      {
        id: "pipeline-composer",
        title: "Pipeline composer",
        summary: "Typed processing map for edge/request paths. Insert-between sockets, nested composites, and replay that surfaces apex/www redirect loops.",
        viz: "pipeline",
        href: "https://hci-nerdz.github.io/pipeline-composer/",
        releasedAt: "2026-08-01",
        modifiedAt: "2026-08-01",
        shots: [
          {
            id: "pipeline-composer",
            label: "Pipeline composer",
            href: "https://hci-nerdz.github.io/pipeline-composer/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/pipeline-composer-interfaces/",
          },
          {
            label: "Strategy",
            href: "/blog/share-the-ir-not-the-pixels/",
          },
          {
            label: "Contexts",
            href: "/blog/fundamental-contexts-for-portable-ui/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/processing-maps.html",
          },
          {
            label: "Repo",
            href: "https://github.com/HCI-Nerdz/pipeline-composer",
          },
        ],
      },
    ],
  },
  {
    id: "inbox-attention",
    title: "Inbox & attention",
    description: "Glanceable canvases and task grids that respect cognitive budget — piles, trays, and agent work as a desk.",
    demos: [
      {
        id: "piles",
        title: "Piles",
        summary: "Canvas email with sentiment signals — pile previews on a desk-like surface, urgency glow, vertical tab tray, grid mode.",
        viz: "piles",
        href: "https://hci-nerdz.github.io/piles/",
        releasedAt: "2026-08-28",
        modifiedAt: "2026-08-28",
        shots: [
          {
            id: "piles",
            label: "Landing canvas",
            href: "https://hci-nerdz.github.io/piles/",
          },
          {
            id: "piles-gmail",
            label: "Gmail chrome",
            href: "https://hci-nerdz.github.io/piles/gmail-chrome/",
          },
          {
            id: "piles-components",
            label: "Components",
            href: "https://hci-nerdz.github.io/piles/components/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/attention-is-not-inventory/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/piles.html",
          },
          {
            label: "Repo",
            href: "https://github.com/HCI-Nerdz/piles",
          },
          {
            label: "Desktop app",
            href: "https://github.com/Desktop-Tooling/piles",
          },
        ],
      },
      {
        id: "actor-model-agentic-ui",
        title: "Actor-model agentic UI",
        summary: "Harness canvas of conversation previews (PM statuses, drag, archive with position memory) plus classic task grid, fork panel, epochs, and serialized contrast. Same node graph; Piles is the email-canvas sibling.",
        viz: "piles",
        href: "/demos/actor-model-agentic-ui/",
        releasedAt: "2026-08-28",
        modifiedAt: "2026-08-29",
        shots: [
          {
            id: "actor-model-agentic-ui",
            label: "Actor-model agentic UI desk",
            href: "/demos/actor-model-agentic-ui/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/persisting-agent-work-as-a-node-graph/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/actor-model-agentic-ui.html",
          },
          {
            label: "DevCentr harness",
            href: "https://docs.devcentr.org/agent-rules/actor-model-agentic-ui.html",
          },
        ],
      },
    ],
  },
  {
    id: "feedback-trust",
    title: "Feedback & trust",
    description: "Signals that say what they mean — provenance marks, severity that looks like severity, help that is not failure.",
    demos: [
      {
        id: "grounded-tokens",
        title: "Grounded tokens",
        summary: "Mark heuristic versus researched tokens in AI assistant output — dashed underline for assumptions, solid for verified facts. Replay the fork-name case study.",
        viz: "flow",
        href: "/demos/grounded-tokens/",
        releasedAt: "2026-08-28",
        modifiedAt: "2026-08-28",
        shots: [
          {
            id: "grounded-tokens",
            label: "Grounded tokens replay",
            href: "/demos/grounded-tokens/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/making-model-assumptions-transparent/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/grounded-tokens.html",
          },
          {
            label: "Literature",
            href: "https://github.com/HCI-Nerdz/docs/blob/main/literature/grounded-tokens/cursor-seed-2026-08-28.md",
          },
        ],
      },
    ],
  },
  {
    id: "theming-visual-contracts",
    title: "Theming & visual contracts",
    description: "Previews, diagrams, and chrome that inherit the host theme — immersion as a contract, not a preference.",
    demos: [],
  },
  {
    id: "selection-dialogs",
    title: "Selection & dialogs",
    description: "Unified pickers and open/save flows — files and folders in one place when the job is “open something.”",
    demos: [],
  },
];

export function demoCount(categories: DemoCategory[] = demoCategories): number {
  return categories.reduce((n, c) => n + c.demos.length, 0);
}

export function allDemos(categories: DemoCategory[] = demoCategories): Demo[] {
  return categories.flatMap((c) => c.demos);
}

export function catalogDemos(categories: DemoCategory[] = demoCategories): CatalogDemo[] {
  return categories.flatMap((c) =>
    c.demos.map((d) => ({
      ...d,
      categoryId: c.id,
      categoryTitle: c.title,
    })),
  );
}

export function demoDate(demo: Pick<Demo, 'releasedAt' | 'modifiedAt'>, mode: DemoDateMode): string {
  return mode === 'released' ? demo.releasedAt : demo.modifiedAt;
}

export function sortDemosByDate<T extends Demo>(demos: T[], mode: DemoDateMode): T[] {
  return [...demos].sort((a, b) => {
    const byDate = demoDate(b, mode).localeCompare(demoDate(a, mode));
    if (byDate !== 0) return byDate;
    return a.title.localeCompare(b.title);
  });
}

export function demosSortedByDate(
  mode: DemoDateMode,
  categories: DemoCategory[] = demoCategories,
): CatalogDemo[] {
  return sortDemosByDate(catalogDemos(categories), mode);
}

/** Categories with demos sorted by mode; categories ordered by newest demo (empties last). */
export function categoriesForIndex(
  mode: DemoDateMode,
  categories: DemoCategory[] = demoCategories,
): DemoCategory[] {
  return categories
    .map((c) => ({
      ...c,
      demos: sortDemosByDate(c.demos, mode),
    }))
    .sort((a, b) => {
      const aEmpty = a.demos.length === 0;
      const bEmpty = b.demos.length === 0;
      if (aEmpty !== bEmpty) return aEmpty ? 1 : -1;
      const aMax = a.demos[0] ? demoDate(a.demos[0], mode) : '';
      const bMax = b.demos[0] ? demoDate(b.demos[0], mode) : '';
      if (bMax !== aMax) return bMax.localeCompare(aMax);
      return a.title.localeCompare(b.title);
    });
}

export function emptyCategories(categories: DemoCategory[] = demoCategories): DemoCategory[] {
  return categories.filter((c) => c.demos.length === 0);
}

export function formatDemoDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00Z`);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function dateModeLabel(mode: DemoDateMode): string {
  return mode === 'released' ? 'Released' : 'Updated';
}

export function demoCountLabel(n: number): string {
  if (n === 0) return 'no demos yet';
  return n === 1 ? '1 demo' : `${n} demos`;
}
