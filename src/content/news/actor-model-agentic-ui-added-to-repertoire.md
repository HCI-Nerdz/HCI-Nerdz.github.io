---
title: "Actor-model agentic UI added to the repertoire"
description: "Persisted node graph for agent harnesses — typed actors, spawn-on-drift, disk addresses, task grid view — with essay, docs, demo, and DevCentr ACTOR_AGENTIC_UI variables."
pubDate: 2026-08-28
draft: false
tags: ["ai-assistants", "repertoire", "demos", "docs", "actor-model", "agentic-ui"]
---

In my brainstorms about how agent harnesses should work, I noticed how similar agentic work is to the Actor model of computing, and so I borrowed lessons and ideas from it. Actor model involves individual compute nodes called Actors, similar to how people work in real life, where one person has their own stuff and works on their own stuff, then sends a message about the stuff or a copy of the stuff to someone else. In order to apply this idea in an agentic environment, we have to think of each agent as an actor that performs its own thinking and can let other actors see what it's thinking. We create a **graph** of nodes on disk.

Each agent is a node in that graph, and each takes on a type (`discussion`, `task`, `coordinator`, …). The harness keeps track by having the main agent — the coordinator — spawn the others when work forks, instead of keeping all of the activity in the same chat log.

When a chat drifts off its job — say a merge thread wanders into CLA policy — that tangent shouldn't stay in the same transcript. It becomes a child node on disk. Parent and child write down each other's address (memory address in RAM or file path on disk) before the child begins to work. Coworkers (two agents spawned by the same manager) can read a mailbox summary without loading the whole transcript.

Parallel repo jobs still show up as a task grid: status light, short summary, click into a fork. That's a view over the graph, not a different model. Discussion nodes may never appear in the grid and still matter — that's where coordination happened, or where a tangent got its own room instead of noise.

This replaces the older project-inbox framing (grid only). Essay, docs, desk demo, and the DevCentr harness variables are linked below.

- **Essay** — [Persisting agent work as a node graph](/blog/persisting-agent-work-as-a-node-graph/)
- **Docs** — [Actor-model agentic UI](https://hci-nerdz.github.io/docs/hci-nerdz/actor-model-agentic-ui.html)
- **Demo** — [Actor-model agentic UI desk](/demos/actor-model-agentic-ui/)
- **Harness** — [DevCentr — Actor-model agentic UI](https://docs.devcentr.org/agent-rules/actor-model-agentic-ui.html)

Prior name *project inbox* — task grid only — redirects to this topic.
