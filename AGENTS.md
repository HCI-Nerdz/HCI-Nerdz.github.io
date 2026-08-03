# Agent notes — HCI-Nerdz.github.io

## Editorial titles

Follow **STYLE.adoc**. Philosophy: [/blog/titles-as-orientation/](/blog/titles-as-orientation/).

- First-party news omits the org — `Instruction flows added to the repertoire`, not `HCI Nerdz adds…`.
- Essay action: implied **[On]**; drop surplus *the* — `Navigating by content`.
- Prefer *as* / process / *a X* / *when* / disproof over rigid `X is Y`.
- Attach floating modifiers to an object.
- Antora topics: concept names.
- Machine/env facts: `$CODE_ROOT/MEMORIES.md` only — do not recreate per-repo `MEMORIES.md`.

## Content map

- News: `src/content/news/` · RSS `/news/rss.xml`
- Blog: `src/content/blog/` · RSS `/blog/rss.xml`
- Demos: `/demos/` via `src/lib/demos.ts` (in-site under `/demos/<id>/`)
- Docs hub: `https://hci-nerdz.github.io/docs/`
- Deploy: Astro 5 → `dist/` via GitHub Pages Actions

## Patterns

- Scoped UX architecture: many small tools under one roof; feedforward is interaction-layer, not a synonym
- Instruction flows: demo `/demos/instruction-flow/`; Antora package `@antora-supplemental/instruction-flow` (`asciidoc-interactive`)
- Pass-through extensions: demo `/demos/pass-through-extensions/`; Windows helper `HCI-Nerdz/pass-through-extensions`
