---
title: "Color fonts as theme integrity: COLRv1 and Nabla"
description: "COLRv1 adds gradients, blending modes, and compositing to the earlier COLRv0 layer model—making rich, palette-tunable text feel like a rendering contract, not a brittle SVG stack."
pubDate: 2026-08-18
draft: false
tags: ["color-fonts", "COLR", "nabla", "typography", "web"]
---

When a UI makes a promise about its palette, the typography renderer should keep that promise.
If the font effect is “just baked into an SVG overlay,” the app can’t reliably change the palette without changing the design stack too.

That’s the HCI angle on color fonts: *theme integrity* as a rendering contract.
COLR color fonts are how the font file itself starts carrying the multi-layer paint model—so the application doesn’t have to re-layer visuals every time it needs to recolor, animate, or blend.

## COLRv0 vs COLRv1 (why the distinction matters)

COLRv0 supported solid color layers plus an alpha channel.
It was flexible enough to ship “multiple colors,” but the visual effect range stayed comparatively small.

COLRv1 expands what the layers can do:

* gradients (linear / radial / conic),
* blending modes (for example `screen`, `multiply`, `overlay`),
* and compositing, where layers can fill shapes with other drawn shapes.

Nabla’s explainer frames this as “more than multi-layer color”—it’s multi-layer effects.
That’s the part that turns color fonts from decoration into a system-level capability.

== Nabla / typearture.com as the COLRv1 story

Nabla is presented as an ambassador for COLRv1, with an explainer that highlights the practical model:

* the font file contains outline “layers,” each with color / gradient / blend info,
* the export process assembles those layers into a character,
* and the color-table concept makes palette values adjustable from code.

In other words: the palette is no longer locked to a static vector stack.
It becomes a parameter.

## Why this is HCI (not “font nerd vibes”)

An app’s theme toggle (and its responsiveness to user preferences) only holds when every renderer participates in the same contract.
If the type renderer can’t express the palette and effect rules the UI is asking for, you get mismatch:

* colors that drift,
* animations that fight the design,
* and compositing work that lives in the wrong place (outside the font, inside brittle DOM stacks).

COLRv1’s effect palette supports richer visual techniques while keeping those effects inside the font model—so the renderer can stay faithful as the UI palette changes.

## Web availability note

Per Nabla’s published compatibility claim, Nabla is supported in most browsers aside from Safari and iOS browser engines.
On the web, that matters for progressive enhancement: the app can fall back to simpler color behavior while keeping the “type as contract” design intent.

## Primary references

* Nabla explainer: https://nabla.typearture.com/whatisCOLRV1.html
* Typearture / Nabla design + publishing: https://typearture.com

