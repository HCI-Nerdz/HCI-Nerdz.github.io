---
title: "Instruction flows added to the repertoire"
description: "Menu-style install guides join the catalog — essay, interactive demo, Antora extension, and docs topic."
pubDate: 2026-08-02
---

**Instruction flows** join the published repertoire: a pattern for choose-your-own-adventure install and setup guides that behave like old CLI menu games — one decision at a time, then only the steps that follow.

## What shipped

- An [essay](/blog/navigating-by-content/) on navigating by the content itself
- An [interactive demo](/demos/instruction-flow/) with nested continuations, rewind, and shareable URL state
- A docs topic with a live `[instructionflow]` block on the [Antora hub](https://hci-nerdz.github.io/docs/hci-nerdz/instruction-flows.html)
- Wiring for [`@antora-supplemental/instruction-flow`](https://github.com/antora-supplemental/asciidoc-interactive) so the Antora sample is real generator output, not a mock

## Why it belongs here

Multi-platform install docs usually dump every OS and package manager at once, or exile long branches (Docker, CI) to tangent pages. Both force readers to hold the real decision tree in working memory. Instruction flows treat that tree as the product surface: buttons for orthogonal choices, continuations under the chosen path, kitchen-sink expand only when you ask for it.

That sits with progressive disclosure and product representation — capability should show up as a clear path, not as a wall of conditionals or a footnote link.

## What is not done yet

A portable HCI-Nerdz **core** (shared IR + headless controller) is still ahead of us. Today the site demo and the Antora package each carry their own runtime. The Antora adapter stays at [antora-supplemental](https://github.com/antora-supplemental/asciidoc-interactive); the pattern and demos live here.
