---
title: "When renaming a page breaks half your docs"
description: "Pretty URLs are for people. When we wire systems to those names, a rename becomes unpaid chores across every project that trusted the string."
pubDate: 2026-08-11
draft: false
tags: ["devx", "naming", "docs", "reference-integrity", "navigating-by-content"]
---

I am tired of updating URLs.

Not the thoughtful kind of tired — the kind where you rename one docs path for clarity, then spend the afternoon grepping sibling repos because somebody pasted `https://…/old-path` into a README six months ago. The rename was correct. The breakage was predictable. The work is still yours.

![Icon: stable content core with a detachable name tag](/images/navigating-by-content/icon.svg)

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

## Two essays, one idea

This piece is the gut check.

The technical companion — [When the name is not the wire](/blog/when-the-name-is-not-the-wire/) — stacks the fix: content hashes for identity, mutable pointers when content actually changes, and a producer-owned consumer list for today's string-shaped web.
The docs topic [Navigating by content](https://hci-nerdz.github.io/docs/hci-nerdz/navigating-by-content.html) is the full proposal.
The [demo](/demos/navigating-by-content/) shows rename-break versus content-stable fetch in one screen.

connectome-fs is the long game on the same mistake: paths as navigation, nodes as truth.
If you live in graphs and editions, start there after the gut check.
