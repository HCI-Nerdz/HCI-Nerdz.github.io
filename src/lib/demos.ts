export interface Demo {
  id: string;
  title: string;
  summary: string;
  href: string;
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
        href: "https://hci-nerdz.github.io/pipeline-composer/",
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
      "Many small tools, each with a clear job, under one roof — hard boundaries, shared shell, room for honest feedforward.",
    demos: [
      {
        id: "scoped-ux-desk",
        title: "Scoped UX desk",
        summary:
          "Three narrow tools (Projects, Environment, Remote) with feedforward previews. Toggle mega-tool mode to feel the junk drawer return.",
        href: "/demos/scoped-ux/",
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
        href: "/demos/pass-through-extensions/",
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
        href: "https://hci-nerdz.github.io/audio-lexicon/",
        related: [
          {
            label: "Open lexicon",
            href: "https://hci-nerdz.github.io/audio-lexicon/app.html",
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
          "Menu-style install guides: choose a path, see only the next honest steps, rewind and share the URL. Continuations nest under decisions instead of dumping every platform variant at once.",
        href: "/demos/instruction-flow/",
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
    id: "feedback-severity",
    title: "Feedback & severity",
    description:
      "Honest signals — warnings that look like warnings, help that is not failure, toasts that explain why.",
    demos: [],
  },
  {
    id: "settings-source-of-truth",
    title: "Settings & source of truth",
    description:
      "GUIs that reflect the real config, with jump-to-source when the file is the authority.",
    demos: [],
  },
];

export function demoCount(categories: DemoCategory[] = demoCategories): number {
  return categories.reduce((n, c) => n + c.demos.length, 0);
}
