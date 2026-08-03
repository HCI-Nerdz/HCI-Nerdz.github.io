---
title: "Fundamental contexts for portable UI"
description: "Maybe portability is not one mega-spec but a small set of fundamental contexts — structure, placement, events, 2D/3D surfaces, zoom — composed on purpose."
pubDate: 2026-08-02
tags: ["portability", "architecture", "discussion", "prototype-strategy"]
---

This is exploratory — a mapped brainstorm, not a finished spec.

The recurring frustration in cross-framework UI work is the hunt for **one language that exports everything**. Decades of prior art suggest that hunt ends in runtimes, not translators. Maybe the honest move is smaller: identify a few **fundamental contexts** every interactive system actually has, specify those sharply, and leave the rest native.

## UI is not just structure

A screen is not a tree of widgets. It is several related areas working together:

- **Domain state** — what the system means right now (the IR)
- **Interaction state** — focus, selection, open palettes, in-flight drags
- **Presentation** — how those states become perceivable and operable
- **Host contract** — theme, density, platform conventions, accessibility tree

Collapsing all of that into a single "component tree" export is why Mitosis-like tools plateau at structure and Stencil-like tools plateau at encapsulation. The behavior and the host contract leak out anyway.

## Two separable composition questions

Two questions often get conflated:

1. **What is this thing made of?** — visual and semantic composition of a component and its internals (a step expands into a sub-pipeline; a button contains a label and icon)
2. **Where does this thing sit relative to others?** — placement in layout, z-order on a canvas, slot in a sequence

DOM frameworks merge them in JSX. Node editors merge them in x/y coordinates. A portable attempt probably should **not** merge them in one mega-AST. The [prototype strategy](/blog/share-the-ir-not-the-pixels/) split — core IR, headless controller, swappable renderers — is one way to keep (1) in the domain and let (2) vary by renderer.

## Contexts every system has

Strip a UI stack to foundations and the same contexts keep appearing:

| Context | Question it answers | Spec sharable? |
| --- | --- | --- |
| **Events / interactivity** | What can the user do; what fires when | Partially — state machines, roles, shortcuts |
| **2D presentation** | Rectangles, text, vectors, hit targets | Renderer capability profile, not pixel export |
| **3D presentation** | Some systems need it; most HCI Nerdz prototypes do not (yet) | Same as 2D — capability, not asset dump |
| **Structure / semantics** | Types, validation, evaluation | Yes — this is the IR |
| **Layout / placement** | Position relative to siblings and viewport | Renderer-native; zoom changes the rules |
| **Zoom / navigation** | When detail exceeds viewport | **Fundamental** — changes the interaction paradigm |

That last row is easy to underestimate. A linear DOM list and a zoomable canvas are not two skins on the same interaction. Zoomability introduces focus context, level-of-detail, and spatial memory. Treat it as its own context, not a CSS tweak.

## Zoom as paradigm shift

At low zoom you see the spine: five stages, one parallel group. At high zoom you edit inside the group: socket types, join policy, nested sub-pipeline. The **domain IR does not change**; the **controller's navigation mode** does (which subtree is active, what insert palette applies, what keyboard scope is armed).

[`pipeline-composer`](https://hci-nerdz.github.io/pipeline-composer/) is deliberately starting DOM-first for clarity and a11y, with a canvas renderer planned for deep nesting. Same IR; different navigation context. That is the experiment.

## Prior art tackled parts — compose them on purpose

None of these failed because the authors were foolish. Each chose a boundary:

- **Zag.js / Ark UI** — headless machines for widget behavior; you bring markup
- **Mitosis / Stencil** — structural component portability; not full app semantics
- **Web Components** — stable element surface; behavior and a11y still authored
- **XState** — explicit orchestration; views remain native
- **Node editors** (XYFlow, Rete, JointJS, GoJS) — canvas graphs; domain typing often late
- **QML / XUL / UIML** — runtime languages; export to alien hosts was never the win
- **Power Automate / Logic Apps** — product proof for visual pipelines; closed runtime

HCI Nerdz is not trying to beat them at their own boundary. The attempt is to **stack** the boundaries: IR from the processing-map work, machines from the Zag/XState tradition, DOM renderer for honesty, canvas renderer for depth, thin wrappers per framework.

## Spec language vs language capabilities

There is a tension worth naming:

- A **full UI spec language** tends to become a programming language — because conditionals, data binding, and validation are inseparable from expressiveness
- **Native host UI** stays more capable per platform — because it is the platform

What *can* be specified without pretending to be a mega-language:

- **IR** — types, invariants, evaluation, serialization
- **Machines** — controller states, guards, effects on the IR
- **Renderer capabilities** — "DOM sequential list with insert sockets" vs "infinite canvas with zoom levels and LOD"

What probably must stay native:

- Theme tokens and density
- Component chrome that matches host design systems
- Platform accessibility idioms beyond ARIA baselines
- Marketing copy, empty states, delight

Portable UI is a **negotiation**, not a victory condition.

## A possible map (incomplete)

```text
                    ┌─────────────┐
                    │  Core IR    │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │ Controller  │◄── events / interactivity context
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
       ┌──────▼─────┐ ┌────▼────┐ ┌─────▼─────┐
       │ DOM        │ │ Canvas  │ │ (3D later)│
       │ renderer   │ │ + zoom  │ │           │
       └────────────┘ └─────────┘ └───────────┘
              │            │
              └─────┬──────┘
                    │
             thin host wrappers
           (React / Solid / Vue / WC)
```

This is the same architecture as [Sharing the IR, not the pixels](/blog/share-the-ir-not-the-pixels/), drawn as contexts instead of layers.

## Open questions

- Is five contexts enough, or do we need explicit **time** (animation, async) and **persistence** (undo scope) as first-class contexts?
- Can renderer capability profiles be shared JSON Schema, or are they always prose plus tests?
- Where does **theme as contract** ([Theme as a contract](/blog/theme-is-a-contract/)) sit — host-native only, or a thin token map in the IR?
- Do processing maps generalize to non-sequential domains without forcing a fake spine?

Comments and prototypes welcome. This page will move as [`pipeline-composer`](https://github.com/HCI-Nerdz/pipeline-composer) tries DOM vs canvas on the same IR.

## Links

- Strategy template: [Sharing the IR, not the pixels](/blog/share-the-ir-not-the-pixels/)
- Docs: [Prototype strategy](https://hci-nerdz.github.io/docs/hci-nerdz/prototype-strategy.html) · [Fundamental contexts (stub)](https://hci-nerdz.github.io/docs/hci-nerdz/fundamental-contexts.html)
- Processing maps: [Sequence as top-level organization](/blog/pipeline-composer-interfaces/) · [Docs topic](https://hci-nerdz.github.io/docs/hci-nerdz/processing-maps.html)
- Demo: [pipeline-composer](https://hci-nerdz.github.io/pipeline-composer/) · [Demos index](/demos/)
