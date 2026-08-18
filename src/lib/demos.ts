export type DemoViz =
  | 'pipeline'
  | 'audio'
  | 'scoped'
  | 'peel'
  | 'flow'
  | 'rails'
  | 'settings';

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
   * One shot = screenshot of that surface. Several = a family (Edge Bar variants),
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
        id: "context-rails",
        title: "Edge Bar",
        summary:
          "Map, Modal, and Path variants — hover rails, click-through map, and framework islands. The desk page is the essay mock; the family below is the shipped MVP.",
        viz: "rails",
        href: "https://hci-nerdz.github.io/context-rails/",
        shots: [
          {
            id: "edge-bar-map",
            label: "Map Edge",
            href: "https://hci-nerdz.github.io/context-rails/demos/vanilla-mature/",
          },
          {
            id: "edge-bar-modal",
            label: "Modal Edge",
            href: "https://hci-nerdz.github.io/context-rails/demos/modal-edge/",
          },
          {
            id: "edge-bar-path",
            label: "Path Edge",
            href: "https://hci-nerdz.github.io/context-rails/demos/path-edge/",
          },
        ],
        related: [
          {
            label: "Essay",
            href: "/blog/when-platforms-overload-the-entrypoint/",
          },
          {
            label: "Docs",
            href: "https://hci-nerdz.github.io/docs/hci-nerdz/context-rails.html",
          },
          {
            label: "Desk mock",
            href: "/demos/context-rails/",
          },
          {
            label: "Repo",
            href: "https://github.com/HCI-Nerdz/context-rails",
          },
        ],
      },
    ],
  },
  {
    id: "feedback-severity",
    title: "Feedback & severity",
    description:
      "Clear signals — warnings that look like warnings, help that is not failure, toasts that explain why.",
    demos: [],
  },
  {
    id: "naming-reference",
    title: "Naming & reference",
    description:
      "Pretty URLs and path labels for humans; content identity and reverse consumers for wires — DevX as HCI.",
    demos: [
      {
        id: "navigating-by-content",
        title: "Navigating by content",
        summary:
          "Flip between string-wired URLs and content hashes. Rename the pretty path and watch who breaks — or who doesn't.",
        viz: "rails",
        href: "/demos/navigating-by-content/",
        shots: [
          {
            id: "navigating-by-content",
            label: "Navigating by content",
            href: "/demos/navigating-by-content/",
          },
        ],
        related: [
          {
            label: "Relatable essay",
            href: "/blog/when-renaming-a-page-breaks-half-your-docs/",
          },
          {
            label: "Technical essay",
            href: "/blog/when-the-name-is-not-the-wire/",
          },
          {
            label: "Docs",
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
            href: "/blog/when-settings-live-across-town/",
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
