---
title: "Broken links after a URL rename"
description: "A docs URL rename should change a human label. Treat that string as identity, and every README that trusted it becomes a broken link."
pubDate: 2026-08-11
draft: false
tags: ["devx", "naming", "docs", "reference-integrity", "labels-versus-wires", "url"]
---

A docs URL rename should change a **human label**. Too often it leaves **broken links** everywhere that baked `https://…/old-path` as if it were an API — READMEs, Antora nav, blog citations, CI configs.

That breakage is the symptom. The rename was usually correct. The afternoon of grepping strangers' strings is still yours.

<img class="concept-icon" src="/images/navigating-by-content/icon.svg" width="168" height="128" alt="Stable content core with a detachable name tag" />

## Symptom face

This essay is the **symptom** entry: what you already feel.
Broken links after a rename, URL rot, string archaeology — the waiting-room complaint.
Diagnosis and treatment live elsewhere so we can revise the theory without renaming the ache, and revise the ache without moving the architecture page.

## URLs are for people

You may not believe it, but URLs are really for people — readable places you can share and remember.
But they should not be the *identity* of the thing.

When another project's docs treat your path as a functional dependency, you have turned a label into a wire.
Labels change.
Wires that pretend to be labels snap.

Package registries already know the healthier pattern for code: reverse dependents.
Prose and sites never got that standard.
So we keep discovering consumers the hard way — or we ask an AI to *guess* which trees matter.

## What “good” feels like

You move a guide.
You change the human-facing title.
Nothing that depended on *the content* breaks.
Anything that still shows the old human-facing name updates because the system knows who was pointing at the label — or because dependents never stored the label as identity in the first place.

That is the DevX win.
Less attention spent on string archaeology.
More attention on the change you meant to make.

## Paired faces

| Face | Where |
| --- | --- |
| Symptom (this piece) | The gut check |
| Diagnosis | [An alternative to URLs](/blog/an-alternative-to-urls/) |
| Diagnosis + treatment | Docs: [An alternative to URLs](https://hci-nerdz.github.io/docs/hci-nerdz/navigating-by-content.html) |
| Symptom demo | [Broken links after a URL rename](/demos/broken-links-after-a-url-rename/) |

connectome-fs is the long game on the same mistake: paths as navigation, nodes as truth.
If you live in graphs and editions, start there after the gut check.
