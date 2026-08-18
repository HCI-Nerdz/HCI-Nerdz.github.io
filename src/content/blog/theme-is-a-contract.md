---
title: "Theme as a contract"
description: "Previews, diagrams, and chrome that refuse the host theme are not aesthetic preferences — they break immersion and trust."
pubDate: 2026-08-01
tags: ["theme", "preview", "accessibility"]
---

If you work in a dark editor and the preview pane paints a light brochure, the tool is telling you the preview is someone else's product bolted on. That is not a polish issue. It is a contract violation between host and guest.

## What theme fidelity means

Editor chrome already publishes tokens: backgrounds, link colors, selection, borders. Markdown preview often respects them. AsciiDoc and diagram stacks frequently do not — hard-coded light code blocks, always-underlined links that dim on hover into unreadability, Mermaid SVGs with baked fills that fight light and dark alike.

The rule HCI Nerdz pushes:

- Inherit host tokens (`editor.background`, `textLink.foreground`, and friends)
- Emit CSS variables with fallbacks for diagrams so one asset survives theme switches
- Treat preview as part of the editor, not a marketing iframe

That posture shows up in Mermaid CSS-var work under OpenShellOrg and in Valentus / Antora supplemental theming under [antora-supplemental](https://github.com/antora-supplemental) — partner altitude for docs publishing UX.

## Motion has a theme contract too

DevCentr's [Brand and UI Motion Formats](https://docs.devcentr.org/general-knowledge/explanation/brand-motion.html) note is not only about SVG vs Lottie vs Rive. It is about *portable harbor*: marks you can read in git, agent-edit, and embed without shipping a player "just because." Interactive motion can be worth a runtime when the job is interactive. A looping logo rarely is.

HCI takeaway: pick the format that matches the job, keep an SVG twin when the interactive export is binary, and do not tax every page with a motion runtime that the surface does not need.

## Load budgets are theme's cousin

DevCentr's notes on [UI-heavy web applications](https://docs.devcentr.org/home/architecture/ui-heavy-web-apps.html) stress deliberate load budgets: what ships on the critical path before the inbox, map, or list is interactive. Theme fidelity without a lean first paint is still a broken first impression. Framework choice does not fix a critical path that pulls telemetry, flags, and half the suite before first interaction.

## Bottom line

Theme is how the product says "I live here with you." When the surface refuses the host, it is declaring independence from the user's environment — and that declaration costs trust.
