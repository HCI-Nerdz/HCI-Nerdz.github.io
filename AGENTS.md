# Agent notes — HCI-Nerdz.github.io

## Editorial titles

Follow **STYLE.adoc**. Philosophy: [/blog/titles-as-orientation/](/blog/titles-as-orientation/).

- **News faces outward** (what entered the record); **blog faces inward** (ideas, ideals, philosophy, craft tutorials, thinking in public). Stance essay: https://ryanjohnson.dev/blog/posts/blog-as-inner-thought/
- First-party news omits the org — `Instruction flows added to the repertoire`, not `HCI Nerdz adds…`.
- Essay action: implied **[On]**; drop surplus *the* — `Navigating by content`.
- Prefer *as* / process / *a X* / *when* / disproof over rigid `X is Y`.
- Attach floating modifiers to an object.
- Antora topics: concept names.
- Machine/env facts: `$CODE_ROOT/MEMORIES.md` only — do not recreate per-repo `MEMORIES.md`.

## Content map

- News: `src/content/news/` · RSS `/news/rss.xml` — outward / shared record
- Blog: `src/content/blog/` · RSS `/blog/rss.xml` — inward / essays
- Demos: `/demos/` via `src/lib/demos.ts` (in-site under `/demos/<slug>/`). Cards use resting-lanczos WebP tiers (`public/demo-shots/`, `pnpm shots`). Context Edge is a **family** (Map / Modal / Path shots) — do not thumb only the desk or hub href. CSS `VizCard` is the fallback when tiers are missing.
- Docs hub: `https://hci-nerdz.github.io/docs/`
- Deploy: Astro 5 → `dist/` via GitHub Pages Actions

## Patterns

- Scoped UX architecture: many small tools under one roof; feedforward is interaction-layer, not a synonym
- Literature for Scoped UX: `HCI-Nerdz/docs` `literature/scoped-ux-architecture/` (Gemini export + PDF); catalog `/docs/hci-nerdz/literature.html`
- Instruction flows: demo `/demos/instruction-flow/`; Antora package `@antora-supplemental/instruction-flow` (`asciidoc-interactive`); literature `HCI-Nerdz/docs` `literature/instruction-flows/`
- Pass-through extensions: demo `/demos/pass-through-extensions/`; Windows helper `HCI-Nerdz/pass-through-extensions`
- Open-with interrupt: essay `/blog/when-double-click-skips-the-choice/`; docs `open-with-interrupt` (implementation recipes)
- Visitor-first repo homepage: essay `/blog/when-the-file-tree-owns-the-first-viewport/`; docs `visitor-first-repo-homepage`; upstream https://github.com/orgs/community/discussions/204347
- Context-bound settings: essay `/blog/when-settings-live-across-town/`; docs `context-bound-settings`; demo `/demos/context-bound-settings/`
- Config field vocabulary: essay `/blog/when-config-files-withhold-the-vocabulary/` (companion to UniConfig Config Panel)
- Context Edge: essay `/blog/when-platforms-overload-the-entrypoint/`; docs `context-edge`; demo `/demos/context-edge/`; MVP `https://hci-nerdz.github.io/context-edge/`
- Labels versus wires: symptom essay `/blog/when-renaming-a-page-breaks-half-your-docs/` + demo `/demos/navigating-by-content/`; diagnosis essay `/blog/when-the-name-is-not-the-wire/`; docs `navigating-by-content` (concept title Labels versus wires); Mermaid via `MermaidBoot`. Symptom ↔ diagnosis/treatment dialectic — see STYLE. **Systems umbrella:** Internet Reliability @ DevCentr (not this site). Instruction-flows keeps *Navigating by content*.
- Spatial web windows: essay `/blog/when-the-browser-flattens-working-memory/`; docs `spatial-web-windows`; demo `/demos/spatial-web-windows/`; fork `Desktop-Tooling/spatial-browser`
- Grounded tokens: essay `/blog/making-model-assumptions-transparent/` (legacy slug redirects); docs `grounded-tokens`; demo `/demos/grounded-tokens/`; literature `HCI-Nerdz/docs` `literature/grounded-tokens/`
- Homepage domains map orients HCI lanes (including naming & reference); keep out of the hero
