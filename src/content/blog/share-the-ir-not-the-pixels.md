---
title: "Sharing the IR, not the pixels: a strategy for multi-ecosystem UI prototypes"
description: "For interaction-heavy prototypes, share meaning and behavior — domain IR plus a headless controller — and hand-write thin views per ecosystem. Do not aim to auto-convert full UI."
pubDate: 2026-08-02
tags: ["prototype-strategy", "pipeline", "architecture", "portability"]
---

Most "write once, render everywhere" pitches fail because they target the wrong layer.

They try to export *pixels* — layout trees, component skins, framework-specific event wiring — across React, Solid, Vue, and Web Components. That layer is where ecosystems diverge fastest. It is also where accessibility, theme contracts, and host conventions live. Auto-converting it produces uncanny UI: technically mounted, cognitively wrong.

HCI Nerdz prototypes should share something narrower and more durable:

- **Meaning** — the domain intermediate representation (IR): types, validation, evaluation, replay, serialization
- **Behavior** — a headless interaction controller: selection, insertion, drag phases, keyboard paths, undo
- **Views** — hand-written renderers and thin framework wrappers per host

Do not aim to auto-convert full UI across ecosystems. Share the IR and the controller. Write thin views.

This is a **reusable strategy template** for interaction-heavy HCI Nerdz work — not a prescription only for [`pipeline-composer`](https://github.com/HCI-Nerdz/pipeline-composer).

## The four layers

### 1. Core — domain IR

The core owns what the system *is*, independent of any UI framework:

- Types for steps, sockets, composites, and sample inputs
- Validation — what can sit where, what emits what
- Evaluation and replay — walk a sample through the map
- Serialize / deserialize — the same artifact the engine would load

For a processing map, the core answers: "Is this composition legal?" and "What happens to this request?" without knowing whether the user clicked a button or pressed `j`.

### 2. Controller — headless interaction state machine

The controller owns how the user *moves* through the domain:

- Focus, selection, multi-select, marquee semantics
- Insert palette open/close, filtered by socket type
- Drag-and-drop phases (pickup, hover valid socket, drop, cancel)
- Keyboard shortcuts and roving tabindex policy
- Undo/redo and transactional edits

Think [Zag.js](https://zag-js.com/) or [XState](https://xstate.js.org/) shape: explicit states, guarded transitions, effects that mutate the IR through the core API. The controller is framework-agnostic TypeScript (or similar). It emits *intent* and *view-model slices*, not DOM.

### 3. Renderers — pick the surface for the job

Renderers translate view-model + controller events into a concrete surface:

- **DOM first** — lists, buttons, landmarks, live regions. Best default for clarity, accessibility, and theme inheritance.
- **Canvas / zoomable plane later** — when nesting goes deep: sub-pipelines inside parallel groups inside another pipeline. Zoom and pan change the interaction paradigm; they are not a cosmetic skin on the same DOM list.

The same IR and controller can back both. The renderer swap is intentional, not a compile target fantasy.

### 4. Thin framework wrappers

Each host gets a small adapter:

- Bind controller subscriptions to framework reactivity (React, Solid, Vue, Web Components)
- Map controller commands to host event handlers
- Choose a renderer (DOM today; canvas module when needed)

Wrappers stay thin. If logic creeps into the wrapper, it belongs in core or controller.

## What not to promise

**Do not promise universal UI export.** Historical UI languages — UIML, XUL, QML — mostly succeeded as *runtimes*, not as exporters that faithfully translated arbitrary designs across toolchains. They defined a world and rendered inside it. That is a different ambition from "compile this Figma tree to five frameworks."

**Prior art tackles parts, not the whole picture:**

| Layer | Examples | What they share |
| --- | --- | --- |
| Headless behavior | Zag.js, Ark UI | State machines for widgets; host binds DOM |
| Multi-target components | Mitosis, Stencil | Structural JSX → several outputs; still not full semantic portability |
| Encapsulation | Web Components | Stable element contract; you still author behavior and a11y |
| Orchestration | XState | Explicit machines; you still build views |
| Node editors | XYFlow, Rete, JointJS, GoJS | Canvas graphs; domain IR often bolted on later |
| Declarative UI runtimes | QML, XUL | Runtime + language; not open portable cores |

HCI Nerdz can compose these parts *intentionally* rather than chase a mega-spec. See also [Fundamental contexts for portable UI](/blog/fundamental-contexts-for-portable-ui/) for the broader framing.

## Product proof without a portable core

**Microsoft Power Automate** (and Azure Logic Apps, ADF-style designers, and kin) prove enterprise appetite for visual pipelines. Millions of users compose ordered flows in a canvas. That is product proof that processing maps matter — not an open, portable IR you can drop into arbitrary apps.

The lesson is demand, not format:

- Visual pipeline editors are worth building
- The hard part is rigorous domain typing + replay, not iconography
- Vendors optimize for their runtime, not for export to your prototype

Our open prototypes should still export — but export *meaning* (IR + evaluation), not a pixel-perfect clone of Microsoft's chrome.

## Same IR, two renderers

[`pipeline-composer`](https://hci-nerdz.github.io/pipeline-composer/) is the first proving ground:

- **Today:** DOM renderer — sequential spine, typed insert sockets, nested composites, path replay
- **Next:** zoomable canvas renderer for deep nesting — parallel groups containing sub-pipelines containing another parallel group

Both read the same core. Both talk to the same controller. The user skill transfer is in the *map semantics*, not in whether a step is a `<li>` or a rounded rect.

That split is the strategy in one sentence: **share the IR, not the pixels.**

## When to use this template

Reach for core → controller → renderers → thin wrappers when a prototype is:

- Interaction-heavy (drag, insert-between, keyboard paths, undo)
- Domain-typed (sockets, rule kinds, validation messages that teach)
- Likely to ship in more than one host (docs site, npm package, embed in DevCentr tooling)
- Expected to grow a second renderer (DOM now, canvas when nesting hurts)

Skip the split for static marketing pages and one-off demos with no reuse story.

## Links

- Demo: [hci-nerdz.github.io/pipeline-composer](https://hci-nerdz.github.io/pipeline-composer/)
- Repository: [github.com/HCI-Nerdz/pipeline-composer](https://github.com/HCI-Nerdz/pipeline-composer)
- Docs template: [Prototype strategy: core, controller, renderers](https://hci-nerdz.github.io/docs/hci-nerdz/prototype-strategy.html)
- Sibling essay: [Sequence as top-level organization](/blog/pipeline-composer-interfaces/)
- Discussion: [Fundamental contexts for portable UI](/blog/fundamental-contexts-for-portable-ui/)
- Demos index: [/demos/](/demos/)
