---
title: "Broken links after a URL rename"
description: "Rename a docs URL for clarity, and every README that baked the old string becomes a broken link — the cleanup is still yours."
pubDate: 2026-08-11
draft: false
tags: ["devx", "naming", "docs", "reference-integrity", "labels-versus-wires", "url"]
---

Rename a docs URL for clarity, and **broken links** show up everywhere that baked `https://…/old-path` as if it were an API — READMEs, Antora nav, blog citations, CI configs.

The rename was usually correct. The afternoon of grepping strangers' strings is still yours.

<img class="concept-icon" src="/images/an-alternative-to-urls/icon.svg" width="168" height="128" alt="Stable content core with a detachable name tag" />

## URLs are for people

You may not believe it, but URLs are really for people — readable places you can share and remember.
They should not be the *only* way systems find the thing.

When another project's docs treat your path as a hard dependency, a rename does not just update a bookmark.
It breaks a promise those projects never knew they had made.

Package registries already know a healthier pattern for code: reverse dependents.
Prose and sites never got that standard.
So we keep discovering consumers the hard way — or we ask an AI to *guess* which trees matter.

## What “good” feels like

You move a guide.
You change the human-facing title.
Nothing that depended on *the content* breaks.
Anything that still shows the old human-facing name updates because the system knows who was pointing at it — or because dependents never stored the pretty path as identity in the first place.

Less attention spent on string archaeology.
More attention on the change you meant to make.

## Where to go next

- Why this happens, and what to do: [An alternative to URLs](/blog/an-alternative-to-urls/) · [docs](https://hci-nerdz.github.io/docs/hci-nerdz/an-alternative-to-urls.html)
- Watch a rename snap (or not): [demo](/demos/broken-links-after-a-url-rename/)
- Longer game on the same mistake: [connectome-fs](https://github.com/connectome-fs/connectome-fs)
