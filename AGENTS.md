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
- Demos: `/demos/` via `src/lib/demos.ts` (in-site under `/demos/<slug>/`). Home + catalog use `VizCard` CSS stages (display-size, no bitmap downscale). Photo thumbs later: DevCentr `resting-lanczos` (Lanczos3 + srcset).
- Docs hub: `https://hci-nerdz.github.io/docs/`
- Deploy: Astro 5 → `dist/` via GitHub Pages Actions

## Patterns

- Scoped UX architecture: many small tools under one roof; feedforward is interaction-layer, not a synonym
- Literature for Scoped UX: `HCI-Nerdz/docs` `literature/scoped-ux-architecture/` (Gemini export + PDF); catalog `/docs/hci-nerdz/literature.html`
- Instruction flows: demo `/demos/instruction-flow/`; Antora package `@antora-supplemental/instruction-flow` (`asciidoc-interactive`)
- Pass-through extensions: demo `/demos/pass-through-extensions/`; Windows helper `HCI-Nerdz/pass-through-extensions`
- Open-with interrupt: essay `/blog/when-double-click-skips-the-choice/`; docs `open-with-interrupt` (implementation recipes)
- Visitor-first repo homepage: essay `/blog/when-the-file-tree-owns-the-first-viewport/`; docs `visitor-first-repo-homepage`; upstream https://github.com/orgs/community/discussions/204347
- Context-bound settings: essay `/blog/when-settings-live-across-town/`; docs `context-bound-settings`; demo `/demos/context-bound-settings/`
- Context rails: essay `/blog/when-platforms-overload-the-entrypoint/`; docs `context-rails`; demo `/demos/context-rails/`; MVP `https://hci-nerdz.github.io/context-rails/`
