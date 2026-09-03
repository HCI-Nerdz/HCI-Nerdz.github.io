---
title: "Navigating by content"
description: "On menu-style docs for multi-platform install guides — one decision at a time, nested continuations, shareable paths, and an Antora extension that makes it real."
pubDate: 2026-08-02
tags: ["progressive-disclosure", "documentation", "antora", "attention", "product-representation"]
---

Most install guides fail the same way.

Either they dump every OS, package manager, and container variant onto one page — a kitchen sink the reader must filter by hand — or they splinter the Docker path into a tangent article and hope people notice the “oh by the way” link in the intro. Both are product-representation bugs. The capability exists; the surface lies about how the job is structured.

## The claim

Treat complex setup as an **instruction flow**: a menu-driven path through decisions and steps, the way old CLI menu games forced one choice before revealing the next room.

1. Capture operational context the user already decided (OS, hosting model).
2. Show instructions for the current step only.
3. Offer orthogonal options with short implications — and links to deeper comparisons when needed.
4. Insert the chosen subflow as a continuation under that step, not as a separate nav destination.

In plain language: *navigate by the content itself*.

## Why docs nav is usually fake hierarchy

A typical docs site has a flat left-hand tree and a long page that pretends to be linear. The real decision tree — Windows vs Linux, global vs Docker, npm vs pnpm — lives in the author’s head and in scattered conditionals. Readers hold that tree in working memory. That is the same cognitive tax we refuse in GUIs: [attention is not inventory](/blog/attention-is-not-inventory/).

Instruction flows merge navigation and content for the part of the doc that is actually a wizard. The rest of the article can stay prose. The flow can be the whole page or one section.

## What good looks like

- **Buttons, not walls** — `Which package manager? [npm][pnpm][yarn][bun]` on one line when the options are short.
- **Continuations** — choosing Docker expands Docker under that list item; it does not exile Docker to a sibling article because the author got nervous about length.
- **Rewind** — other options stay visible so people can try another path without starting from the homepage.
- **Shareable state** — URL variables encode the path (`?os=linux&method=docker`) so Slack pastes carry the tailored guide.
- **Print / scrape fidelity** — expand-all (or a hidden DOM skeleton) keeps the full graph available for printing, SEO, and AI without making the default view a firehose.

## Antora, not a fork of Antora

Day one does not need a rewrite of the site generator. An [Asciidoctor block extension](https://github.com/antora-supplemental/asciidoc-interactive) can emit a self-contained flow (JSON graph + small client script) inside any page. Antora’s supplemental UI can host shared CSS/JS later. Full-site mode — replacing the sidebar with a root flow — is a later product, not a prerequisite.

That package already ships an MVP: `[instructionflow]` example blocks with JSON5 graphs, back / start-over / expand-for-print, and query-string path state. AsciiDoc-native list authoring and inline choice macros are the next authoring layer on the same runtime.

## Relation to other HCI Nerdz claims

| Pattern | Job |
| --- | --- |
| [Progressive disclosure](/blog/attention-is-not-inventory/) | Budget the first screen; deepen on demand |
| [Scoped UX architecture](/blog/scoped-ux-architecture/) | Keep each tool (here: each decision) from becoming a junk drawer |
| [Processing maps](/blog/sequence-as-top-level-organization/) | When the *runtime* is ordered; instruction flows are when the *reading path* is ordered |

Instruction flows are progressive disclosure for documentation jobs that are really decision trees.

## Try it

- [Interactive demo](/demos/instruction-flow/) — continuation-insert install guide
- [Docs topic](https://hci-nerdz.github.io/docs/hci-nerdz/instruction-flows.html) — pattern + Antora wiring
- [Extension repo](https://github.com/antora-supplemental/asciidoc-interactive) — `@antora-supplemental/instruction-flow`
