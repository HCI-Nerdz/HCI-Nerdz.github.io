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

/**
 * High-level demo taxonomy for HCI Nerdz.
 * Categories stay listed even when empty — they are the roadmap as much as the catalog.
 */
export const demoCategories: DemoCategory[] = [
  {
    id: "processing-maps",
    title: "Processing maps",
    description:
      "Sequence-first composers for ordered systems — typed steps, nested parallelism, path replay.",
    demos: [
      {
        id: "pipeline-composer",
        title: "Pipeline composer",
        summary:
          "Typed processing map for edge/request paths. Insert-between sockets, nested composites, and replay that surfaces apex/www redirect loops.",
        viz: "pipeline",
        href: "https://hci-nerdz.github.io/pipeline-composer/",
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
    id: "scoped-ux-architecture",
    title: "Scoped UX architecture",
    description:
      "Many small tools, each with a clear job, under one roof — hard boundaries, shared shell, room for feedforward that matches reality.",
    demos: [
      {
        id: "scoped-ux-desk",
        title: "Scoped UX desk",
        summary:
          "Three narrow tools (Projects, Environment, Remote) with feedforward previews. Toggle mega-tool mode to feel the junk drawer return.",
        viz: "scoped",
        href: "/demos/scoped-ux/",
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
    id: "product-representation",
    title: "Product representation",
    description:
      "First-class UI for jobs the backend already supports — filters, modes, and affordances that match real involvement.",
    demos: [
      {
        id: "pass-through-extensions",
        title: "Pass-through peel",
        summary:
          "Meta-suffixes like .example and .template are badges on a real type. Peel them and resolve open/icon from the stem — the way Explorer should.",
        viz: "peel",
        href: "/demos/pass-through-extensions/",
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
    ],
  },
  {
    id: "selection-dialogs",
    title: "Selection & dialogs",
    description:
      "Unified pickers and open/save flows — files and folders in one place when the job is “open something.”",
    demos: [],
  },
  {
    id: "search-filters",
    title: "Search & filters",
    description:
      "Discoverable filter surfaces instead of power-user syntax as the only door.",
    demos: [
      {
        id: "audio-lexicon",
        title: "Audio lexicon",
        summary:
          "Pro-audio filter literacy: term tree, history, visualization, and A/B audition — then EqualizerAPO / OBS export when a term maps.",
        viz: "audio",
        href: "https://hci-nerdz.github.io/audio-lexicon/",
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
    id: "theme-visual-contracts",
    title: "Theme & visual contracts",
    description:
      "Previews, diagrams, and chrome that inherit the host theme — immersion as a contract, not a preference.",
    demos: [],
  },
  {
    id: "spatial-windowing",
    title: "Spatial windowing",
    description:
      "Multi-window desktop web UX — lite palettes, SharedWorker hubs, intent routing, and Document PiP for professional tools.",
    demos: [
      {
        id: "spatial-web-windows",
        title: "Spatial web windows desk",
        summary:
          "Photo-grade desk with torn-off histogram (Document PiP) and curves remote (chromeless popup). Toggle monolith vs spatial vs mobile intent.",
        viz: "spatial",
        href: "/demos/spatial-web-windows/",
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
        summary:
          "Facsimile desk for how terminals fit real work: prompt context while you type, tabs in one window, a calling window that indexes separate sessions, a project manager next to a DevCentr grid, contained tiling zones you can spawn and delete, and session re-association. Desk mocks only — native windowing stays in open-terminal.",
        viz: "spatial",
        href: "https://hci-nerdz.github.io/shell-context-demo/",
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
    id: "attention-disclosure",
    title: "Attention & progressive disclosure",
    description:
      "Budget the first screen; deepen on demand. Tools that respect cognitive load instead of spending it.",
    demos: [
      {
        id: "instruction-flow",
        title: "Instruction flow",
        summary:
          "Menu-style install guides: choose a path, see only the next clear steps, rewind and share the URL. Continuations nest under decisions instead of dumping every platform variant at once.",
        viz: "flow",
        href: "/demos/instruction-flow/",
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
      {
        id: "context-edge",
        title: "Context Edge",
        summary:
          "Map, Modal, and Path variants — hover rails, click-through map, and framework islands. The desk page is the essay mock; the family below is the shipped MVP.",
        viz: "rails",
        href: "https://hci-nerdz.github.io/context-edge/",
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
        summary:
          "Decision backbone for deep subtrees: parent steps as edge layers or a top-bar preview stack. Soft SPA routes and hard document loads share one chrome — mega-directory content without mega-page scanning.",
        viz: "rails",
        href: "https://hci-nerdz.github.io/virtual-pages/",
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
    ],
  },
  {
    id: "attention-inbox",
    title: "Attention & inbox",
    description:
      "Inbox UX that respects cognitive budget — glanceable sentiment, pile canvases, trays without autoload.",
    demos: [
      {
        id: "actor-model-agentic-ui",
        title: "Actor-model agentic UI",
        summary:
          "Harness canvas of conversation previews (PM statuses, drag, archive with position memory) plus classic task grid, fork panel, epochs, and serialized contrast. Same node graph; Piles is the email-canvas sibling.",
        viz: "piles",
        href: "/demos/actor-model-agentic-ui/",
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
      {
        id: "piles",
        title: "Piles",
        summary:
          "Canvas email with sentiment signals — pile previews on a desk-like surface, urgency glow, vertical tab tray, grid mode.",
        viz: "piles",
        href: "https://hci-nerdz.github.io/piles/",
        shots: [
          { id: "piles", label: "Landing canvas", href: "https://hci-nerdz.github.io/piles/" },
          { id: "piles-gmail", label: "Gmail chrome", href: "https://hci-nerdz.github.io/piles/gmail-chrome/" },
          { id: "piles-components", label: "Components", href: "https://hci-nerdz.github.io/piles/components/" },
        ],
        related: [
          { label: "Essay", href: "/blog/attention-is-not-inventory/" },
          { label: "Docs", href: "https://hci-nerdz.github.io/docs/hci-nerdz/piles.html" },
          { label: "Repo", href: "https://github.com/HCI-Nerdz/piles" },
          { label: "Desktop app", href: "https://github.com/Desktop-Tooling/piles" },
        ],
      },
    ],
  },
  {
    id: "feedback-severity",
    title: "Feedback & severity",
    description:
      "Clear signals — warnings that look like warnings, help that is not failure, toasts that explain why.",
    demos: [
      {
        id: "grounded-tokens",
        title: "Grounded tokens",
        summary:
          "Mark heuristic versus researched tokens in AI assistant output — dashed underline for assumptions, solid for verified facts. Replay the fork-name case study.",
        viz: "flow",
        href: "/demos/grounded-tokens/",
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
    id: "naming-reference",
    title: "Naming & reference",
    description:
      "Start from rename/URL breakage people already feel; diagnose labels-as-wires; treat with content identity and reverse consumers.",
    demos: [
      {
        id: "navigating-by-content",
        title: "When the rename breaks the README",
        summary:
          "Symptom demo: flip between string-wired URLs and content hashes. Rename the pretty path and watch who breaks — or who doesn't.",
        viz: "rails",
        href: "/demos/navigating-by-content/",
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
            href: "/blog/when-renaming-a-page-breaks-half-your-docs/",
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
    ],
  },
  {
    id: "settings-source-of-truth",
    title: "Settings & source of truth",
    description:
      "GUIs that reflect the real config, with jump-to-source when the file is the authority — and settings that stay bound to live activity context.",
    demos: [
      {
        id: "context-bound-settings",
        title: "Context-bound settings desk",
        summary:
          "Activity UI publishes context; a dependent settings pane matches applicability and shows only bound controls. Toggle the across-town catalog to feel the storage room return.",
        viz: "settings",
        href: "/demos/context-bound-settings/",
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
    ],
  },
];

export function demoCount(categories: DemoCategory[] = demoCategories): number {
  return categories.reduce((n, c) => n + c.demos.length, 0);
}

export function allDemos(categories: DemoCategory[] = demoCategories): Demo[] {
  return categories.flatMap((c) => c.demos);
}
