---
title: "When forges lack super-orgs"
description: "GitHub called them Projects, but humans needed a word for grouping assets under a brand. The missing hierarchy between company, product family, and repository is a schema failure with UX teeth."
pubDate: 2026-08-09
draft: false
tags: ["schema", "github", "information-architecture", "product-representation"]
---

Platforms keep forcing a flat story onto a nested world.

A person or company thinks in layers: **ecosystem brand → product family → repository → working set**. GitHub gives you user/org → repository, then bolted on a feature named **Projects** that means boards and tables — not “a project” in the ordinary sense of a coordinated body of work with many assets. The reserved word was spent on the wrong level of the ontology.

## What minds already model

| Layer | Job | Example |
| --- | --- | --- |
| Super-org / holding brand | Governance, legal, portfolio | Microsoft, Red Hat, a systems lab |
| Focused org / product family | Shared charter, issue gravity, docs hub | VS Code’s orbit, a filesystem substrate org |
| Repository | Versioned artifact boundary | `connectome-fs`, one adapter, one demo |
| Working set | What *you* have open today | Worktree, edition, agent sandbox |

People invent nesting with org-owned orgs, meta-repos, README maps, and Discord folklore because the forge refuses to admit the middle layers. Microsoft owning multiple GitHub orgs is not elegant; it is a workaround for a missing type.

## Why this is HCI, not pedantry

Naming is product representation. When the UI says Project and means kanban, newcomers mis-file intent. When there is no first-class **family** above a repo, maintainers either:

* dump systems work into a personal account (unsafe for big vision),
* inflate a developer-tools org until it means “everything,” or
* mint yet another org and accept duplicated chrome.

That is cognitive tax paid forever: wrong inbox, wrong footer, wrong mental model for contributors.

## The hierarchy that wants modeling

At minimum:

1. **Portfolio** (super-org) — who stands behind the work
2. **Charter org** — what class of problems this cluster owns
3. **Product / substrate** — durable public name
4. **Repositories** — shippable boundaries
5. **Surfaces** — docs, news, demos, adapters (may be repos or site modules)

GitHub’s Projects (v2) sit beside issues; they do not parent repositories. Topics and lists are tags, not containment. Organization nesting is informal and awkward.

A forge that took human ontology seriously would let a portfolio own charter orgs the way a filesystem owns directories — with inheritance of permissions, default templates, and a browsable tree that matches how people already talk.

## What we did instead

We put the graph filesystem substrate under its own org, [connectome-fs](https://github.com/connectome-fs), rather than personal or Dev-Centr product space. Partner orgs (Dev-Centr, OpenShellOrg, HCI-Nerdz) stay lanes of *audience*, not owners of the VFS. That is governance by workaround until platforms grow a super-org type.

Dev-Centr’s practitioner note on the same lapse: [When code platforms flatten portfolios](https://devcentr.org/news/2026-08-09-forges-flatten-portfolios).
