---
title: "Seeing parallel agents as a task grid"
description: "Twelve concurrent repo jobs should not serialize into one scroll. A task grid with status lights and fork chats shows parallel work as parallel."
pubDate: 2026-08-28
draft: false
tags: ["ai-assistants", "project-inbox", "attention", "scoped-ux", "actor-model", "cursor"]
---

When many agent jobs run at once, a single chat scroll lies about the work. You need a **task grid** — status per job, click into a fork — so parallel work looks parallel.

You connect every org to Cursor. The bot reports **9 of 12 running**, blocked on `openshellorg/prohelp#1`, `libmir/asdf#30`, and `atilaneves/unit-thr…`. Then it reports **9 of 12 running** again. And again. A Done card for **Merge docs#3 onto main** slides past. Then the same Done card. Somewhere above that, a paragraph about Bitwarden permissions you already read twice.

The work is parallel. The transcript is a single conveyor belt.

![Serialized multi-repo updates in one chat scroll](/demos/project-inbox/serialized-wall.png)

## The inbox that is not email

**Project inbox** is a task grid for agent harnesses — not a message list, a **progress monitor**.

Each card is one parallel job: title, status dot, one-line summary. Cards live in their own scroll region above (or beside) the coordinator chat. Click a card and you get the fork — only the lines that pertain to that job — without mining the main scroll.

Forks are cosmetic. On disk there is still one append-only thread; the harness **routes** lines to cards by topic. That keeps storage simple while fixing the surface lie: concurrent work should look concurrent.

## Why artifacts were not enough

Some harnesses already emit Done blocks and Open-in-Cursor buttons. Good — but they still **land inside** the historical scroll. When twelve jobs run, Done cards become breadcrumbs you triangulate backward through repeated aggregate headers.

Artifacts answered "here is a result." They did not answer "where are all my jobs **right now**?"

The inbox grid is the always-visible answer.

## Chapters when coherence breaks

Long parallel runs drift. A blocked CLA on repo A changes what repo B should do; the user reframes the mission; three cards finish while two new ones spawn.

**Chapters** freeze the grid layout. Chapter 1's card positions stay inspectable even after you start Chapter 2. Only tasks that change in the new phase appear in the new snapshot. You do not lose history; you stop pretending one endless scroll still matches the mental model.

When you click **Start next chapter** in the demo, watch the grid re-issue — immutable for that phase — while the main thread keeps coordinator voice.

## Actor mailboxes without pretending isolation

Each task publishes a **mailbox summary** — latest status, blockers, repo slug — that sibling tasks read at init. They do not need the full fork transcript to know "docs#3 is done" or "openshellorg is blocked on CLA."

Optional **wait graph**: task B declares it depends on task A; the harness blocks (or warns) if B's model call would analyze A's partial output. That is the actor lesson — share state through messages, not shared mutable chat — without shipping twelve separate products.

DevCentr's lightweight harness implements routing and storage; this essay and the docs own the attention surface. See [DevCentr — Project inbox](https://docs.devcentr.org/agent-rules/project-inbox.html) for `PROJECT_INBOX` variables.

## Grounded tokens inside forks

[Grounded tokens](/blog/making-model-assumptions-transparent/) mark *how a span was produced* inside a message.

Project inbox marks *which job a message belongs to* across messages.

Use both: the grid tells you **which card to open**; provenance tells you **whether to trust the slug** once you are there.

## What you should feel in the demo

1. **Grid first** — four distinct cards (not four copies of the same Done step).
2. **Click a blocked card** — localized fork explains CLA vs permission vs external repo without the other eleven jobs noise.
3. **Toggle serialized mode** — the junk drawer returns; that is today's default, not the goal.
4. **Chapter bar** — start Chapter 2; layout re-issues; prior chapter stays in the selector.

## Open questions (tell us if we missed one)

* **Enforce or warn** on wait-graph violations when a task reads stale sibling state?
* **Manual card pin** vs harness-only chapter layouts?
* **Many top-level coordinators** messaging the same mailbox paths — when does hierarchy stop fitting?

We are biased toward hierarchical coordinator + inbox first; the storage model already allows many-to-many if the UX catches up.

## Where to go next

- **Demo** — [Project inbox desk](/demos/project-inbox/)
- **Docs** — [Project inbox](https://hci-nerdz.github.io/docs/hci-nerdz/project-inbox.html)
- **Harness** — [DevCentr project inbox](https://docs.devcentr.org/agent-rules/project-inbox.html)
- **News** — [Project inbox added to the repertoire](/news/project-inbox-added-to-repertoire/)
- **Related** — [Persisting agent work as a node graph](/blog/persisting-agent-work-as-a-node-graph/)
