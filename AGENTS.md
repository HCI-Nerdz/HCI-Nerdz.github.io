# Agent notes — HCI-Nerdz.github.io

## House rules (do not fork here)

Editorial titles and channel voice live in **`dev-centr/agent-rules`**:

- `$AGENT_RULES_PATH/agents/editorial/titles.md` — cold-reader gate
- Skills `writing-news` / `writing-blog`
- Org overlay: `HCI-Nerdz/agent-rules` (pointer only)

`STYLE.adoc` in this repo is a **human-facing pointer**, not agent doctrine.
Workstation facts: `$CODE_ROOT/machine.md` + `$CODE_ROOT/harness.md` — never commit; never invent a per-repo copy.

Philosophy: [/blog/titles-as-orientation/](/blog/titles-as-orientation/) · https://ryanjohnson.dev/blog/posts/blog-as-inner-thought/

## Content map

- News: `src/content/news/` · RSS `/news/rss.xml` — outward / shared record
- Blog: `src/content/blog/` · RSS `/blog/rss.xml` — inward / essays
- Demos: `/demos/` via `src/lib/demos.ts` (in-site under `/demos/<slug>/`). Categories are **industry-familiar UI domains** (navigation, windowing, settings, …) — not the pattern names. Each demo requires `releasedAt` + `modifiedAt` (ISO `YYYY-MM-DD`). Index: accordion per domain (closed by default; hash deep-links open a panel); Sort by Release Date | Updated (`localStorage` `hci-demos-date-mode`). Cards use resting-lanczos WebP tiers (`public/demo-shots/`, `pnpm shots`). Context Edge is a **family** (Map / Modal / Path shots) — do not thumb only the desk or hub href. CSS `VizCard` is the fallback when tiers are missing.
- Docs hub: `https://hci-nerdz.github.io/docs/`
- Deploy: Astro 5 → `dist/` via GitHub Pages Actions

## Patterns

- Scoped UX architecture: many small tools under one roof; feedforward is interaction-layer, not a synonym
- Literature for Scoped UX: `HCI-Nerdz/docs` `literature/scoped-ux-architecture/` (Gemini export + PDF); catalog `/docs/hci-nerdz/literature.html`
- Instruction flows: demo `/demos/instruction-flow/`; Antora package `@antora-supplemental/instruction-flow` (`asciidoc-interactive`); literature `HCI-Nerdz/docs` `literature/instruction-flows/`
- Pass-through extensions: demo `/demos/pass-through-extensions/`; Windows helper `HCI-Nerdz/pass-through-extensions`
- Open-with interrupt: essay `/blog/when-double-click-skips-the-choice/`; docs `open-with-interrupt` (implementation recipes)
- Visitor-first repo homepage: essay `/blog/when-the-file-tree-owns-the-first-viewport/`; docs `visitor-first-repo-homepage`; upstream https://github.com/orgs/community/discussions/204347
- Context-bound settings: essay `/blog/making-settings-follow-the-activity/`; docs `context-bound-settings`; demo `/demos/context-bound-settings/`
- Config field vocabulary: essay `/blog/config-ui-as-the-field-vocabulary/` (companion to UniConfig Config Panel)
- Context Edge: essay `/blog/ecosystem-nav-at-the-screen-edge/`; docs `context-edge`; demo `/demos/context-edge/`; MVP `https://hci-nerdz.github.io/context-edge/`
- Labels versus wires: symptom essay `/blog/docs-path-renames-as-unpaid-chores/` + demo `/demos/navigating-by-content/`; diagnosis essay `/blog/labels-versus-wires/`; docs `navigating-by-content` (concept title Labels versus wires); Mermaid via `MermaidBoot`. Pair symptom ↔ diagnosis surfaces when useful — titles still obey house cold-reader gate. **Systems umbrella:** Internet Reliability @ DevCentr (not this site). Instruction-flows keeps *Navigating by content*.
- Spatial web windows: essay `/blog/when-the-browser-flattens-working-memory/`; docs `spatial-web-windows`; demo `/demos/spatial-web-windows/`; fork `Desktop-Tooling/spatial-browser`
- Grounded tokens: essay `/blog/making-model-assumptions-transparent/` (legacy slug redirects); docs `grounded-tokens`; demo `/demos/grounded-tokens/`; literature `HCI-Nerdz/docs` `literature/grounded-tokens/`
- Homepage domains map orients HCI lanes (including naming & reference); keep out of the hero
