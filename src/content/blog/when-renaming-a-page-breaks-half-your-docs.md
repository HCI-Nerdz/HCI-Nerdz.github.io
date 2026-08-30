---
title: "When renaming a page breaks half your docs"
description: "Pretty URLs are for people. When we wire systems to those names, a rename becomes unpaid chores across every project that trusted the string."
pubDate: 2026-08-11
draft: false
tags: ["devx", "naming", "docs", "reference-integrity", "labels-versus-wires"]
---

I am tired of updating URLs.

Not the thoughtful kind of tired — the kind where you rename one docs path for clarity, then spend the afternoon grepping sibling repos because somebody pasted `https://…/old-path` into a README six months ago. The rename was correct. The breakage was predictable. The work is still yours.

<img class="concept-icon" src="/images/navigating-by-content/icon.svg" width="168" height="128" alt="Stable content core with a detachable name tag" />

## Symptom face

This essay is the **symptom** entry: what you already feel.
URL rot, rename fallout, string archaeology — the waiting-room complaint.
Diagnosis and treatment live elsewhere so we can revise the theory without renaming the ache, and revise the ache without moving the architecture page.

## Pretty names are not wires

Canonical URLs exist so humans can read and share a place.
They should not be the *identity* of the thing.

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
Anything that still shows the old pretty name updates because the system knows who was pointing at the label — or because dependents never stored the label as identity in the first place.

That is the DevX win.
Less attention spent on string archaeology.
More attention on the change you meant to make.

## Paired faces

| Face | Where |
| --- | --- |
| Symptom (this piece) | The gut check |
| Diagnosis | [Labels versus wires](/blog/labels-versus-wires/) |
| Diagnosis + treatment | Docs: [Labels versus wires](https://hci-nerdz.github.io/docs/hci-nerdz/navigating-by-content.html) |
| Symptom demo | [Rename simulation](/demos/navigating-by-content/) |

connectome-fs is the long game on the same mistake: paths as navigation, nodes as truth.
If you live in graphs and editions, start there after the gut check.
