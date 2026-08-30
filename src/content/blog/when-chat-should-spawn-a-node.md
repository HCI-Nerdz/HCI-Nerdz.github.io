---
title: "When chat should spawn a node"
description: "Actor-model agentic UI — chats drift, parallel jobs branch, and linear threads lie about all of it. Persist a node graph on disk; spawn children when topic forks; parent and child record each other's address."
pubDate: 2026-08-28
draft: false
tags: ["ai-assistants", "actor-model", "agentic-ui", "nodes", "attention", "cursor"]
---

You connect every org to Cursor. The bot reports **9 of 12 running** — then reports it again. And again. A Done card for **Merge docs#3** slides past, duplicated. A paragraph about Bitwarden permissions you already read twice sits between two unrelated repo updates.

That is not one conversation. It is many actors pretending to be one scroll.

![Serialized multi-repo updates in one chat scroll](/demos/actor-model-agentic-ui/serialized-wall.png)

## Linear chat is the wrong primitive

Chat products assume a single thread **drifts** until the user resets. Agent harnesses violate that constantly:

* A coordinator **discussion** spawns twelve **task** nodes across repos
* A **task** chat wanders into CLA policy — that tangent should **spawn** a **discussion** child, not pollute the merge transcript
* A discussion inside a task spawns more tasks when the user says "also do these three forks"

We need a **graph**, not a longer scroll.

## Node = actor

A **node** is an **actor**: bounded chat context with:

* A **type** (`coordinator`, `discussion`, `task`, …)
* A disk **address** (`$CHAT_ROOT/nodes/{id}/`)
* **Spawn lineage** — parent lists children in `spawned[]`; child records `spawnedBy`
* A **mailbox summary** coworkers read without loading the full transcript

Same thing, two words: *node* for the graph; *actor* for the concurrency model.

## Spawn on drift

When chat in node A drifts from A's topic, the harness creates node B:

1. Write B's `meta.json` with `spawnedBy: A`
2. Append B to A's `spawned[]`; flush A's `meta.json`
3. Only then accept messages on B's `chat.jsonl`
4. A gets a routing marker; new lines belong to B

Parent knows child's name. Child knows parent's address. **Both on disk** — not a session-only fork in RAM.

Trigger: model proposes spawn, user clicks **Spawn tangent**, or policy (non-task speech inside a task node).

## The grid is a view, not the model

Parallel repo jobs still deserve a **task grid** — status dot, summary, click for fork chat. That grid is a **filter** over the graph (`type=task`), not the whole story.

Discussion nodes may never appear in the grid but still matter: they are where coordination happened before tasks existed, or where a CLA tangent became its own context instead of noise.

## Epochs when coherence breaks

When the mission reframes — CLA clears, batch phase changes, user says "forget the last plan" — start a **new epoch**. Freeze the grid layout for that epoch. Prior epochs stay inspectable.

This replaces the earlier "chapter" language; epochs name the same immutability without implying email.

## Disk is non-negotiable

Yes, every spawn hits the filesystem. `graph.json`, per-node `meta.json`, per-node `chat.jsonl`, mailbox `summaries/latest.json`. I/O cost beats losing lineage when the session ends or the model compacts context.

DevCentr's harness documents the schema and `ACTOR_AGENTIC_UI` variables. HCI Nerdz owns the surface — grid, lineage strip, spawn affordances.

## Grounded tokens inside nodes

[Grounded tokens](/blog/making-model-assumptions-transparent/) mark *how a span was produced* inside a message.

Actor-model UI marks *which node owns the message* across the graph.

Use both.

## Where to go next

- **Demo** — [Actor-model agentic UI desk](/demos/actor-model-agentic-ui/)
- **Docs** — [Actor-model agentic UI](https://hci-nerdz.github.io/docs/hci-nerdz/actor-model-agentic-ui.html)
- **Harness** — [DevCentr — Actor-model agentic UI](https://docs.devcentr.org/agent-rules/actor-model-agentic-ui.html)
- **Prior essay** — [When parallel agents still read as one thread](/blog/when-parallel-agents-still-read-as-one-thread/) (grid symptom; this essay names the graph)
