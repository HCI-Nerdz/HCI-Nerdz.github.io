---
title: "When platforms overload the entrypoint"
description: "Cloud consoles and suite apps keep stuffing new platforms into the entrypoint header. Context Edge puts ecosystem nav at the edges — streets under skyscrapers — with stable color overlays so you know which world you are in."
pubDate: 2026-08-10
draft: false
tags: ["navigation", "context", "ecosystem", "progressive-disclosure", "desktop", "product-representation"]
---

Google's cloud console — and a lot of other suite apps — follow a design philosophy of embedding new platforms inside the entrypoint platform without properly separating the interface design language. The new surface *overloads* the old one. Controls no longer make clear which platform is providing the current context.

I want a more intelligent way to deal with that context problem, at least on desktop: put a **context navigation system** on the top edge, the left edge, or both (same or different context types). The edge reveals itself when you need it. Hover makes the bar bigger — enough space for a label — or, in a mature system, the mere presence of a colored (or dark/white) bar is enough. Click opens a full wireframe nav between platforms and modes, instead of overloading the website header with subsection duty it was never meant to carry.

Call the pattern **context edge**. Nav becomes substrate again.

## Streets under skyscrapers

Cities already know the split. Streets are how you get between places. Skyscrapers are the places. Streets do not get summoned on top of the skyscrapers. The skyscrapers are features; the streets are the nav substrate, at the bottom.

![City street canyon as circulation under skyscrapers — streets as substrate](/images/context-edge/streets-as-substrate.png)

Digital products keep drawing the street map across the roof. Designers park subsections in the top navbar because it is the only chrome they trust. It is ephemeral. It is ugly when dense. It is illogical: the nav shows *on top of* the content when navigation is really the substrate for access to different activities.

## Platforms overload the entrypoint

The anti-pattern is easy to recognize once you name it. A cloud console header carries Compute, Storage, Networking, IAM, Billing, Monitoring — plus the page title — as if every building in the district needed a signboard nailed to the same lintel.

![Cloud-console-style header stuffed with subsection platform tabs](/images/context-edge/platforms-overload-entrypoint.png)

Microsoft-scale ecosystems have the same disease with more buildings. Reddit and Stack Overflow push subsection and role chrome into the same ephemeral strip. Users keep relearning how to move because the map is never a place — it is a rotating sticker on whatever you happened to open.

## Rails at the edges

Keep the activity plane. Put thin rails on the top and/or left edges. Idle, they are almost nothing — a presence, a color. If both edges are the *same* kind of nav node, they share a color. Hover *either* and *both* present their stuff. Labels stay on the top edge — readable, not rotated up the left. Mature systems can drop the label: the bar alone suggests “summon context here.”

The left edge is not a modern icon sidebar. Those glyphs rarely carry their own meaning; designers then park a cue word under a bigger icon so the *combination of shapes* becomes distinguishable. That is a patch. Here the job is to *identify the level and click into it*. At most one mark per level.

![Desktop shell with thin top and left Context Edge rails idle](/images/context-edge/rails-idle-edges.png)

![Same shell: top and left rails expanded together, same color](/images/context-edge/rails-hover-expand.png)

Clicking the rail does not dump another row of tabs onto the header. It opens a **wireframe navigation interface** — a street map of platforms and modes you can traverse without relearning each product's local chrome.

![Full-screen wireframe ecosystem navigation summoned from the rails](/images/context-edge/wireframe-ecosystem-nav.png)

That is the job split: content owns the skyscraper; rails summon the streets.

## Color as platform identity

Different platforms or apps in the ecosystem should assume a different base color that reads as an *overlay* on the ultimate base. Users associate activity in a subplatform with a stable, non-competing visual field. Duo-tone schemes and soft radial gradients multiply the ways to differentiate without turning every header into a logo parade.

![Three shells with distinct duo-tone platform overlays](/images/context-edge/platform-overlay-colors.png)

When the overlay is stable, you do not need the navbar to scream the product name on every pixel. The room itself tells you which building you are in.

## Path as a color series

A third variant treats the edge as a *path trace*. Instead of one wash around the frame, the L-edge shows a *series* of unique colors for the hops in the org tree — Home → Cloud → Console → Billing → Accounts. That sequence orients you faster than a crumb string, and it can still borrow an org’s primary hues for early hops without collapsing “different app = different color”: the *sequence* is the identity, not a single swatch.

![Idle L-rails striped with the path’s colors](/images/context-edge/path-edge-idle.png)

Hover expands both edges. Words on the top. Left edge: current level top-most (one mark), ancestors stacking down. A setting can cap how far those ancestor bands climb before they compress; expand the rail and scroll to unfold toward the root. File explorers grow downward from the root. You want to see *where you are* first — so the current mark owns the top-left corner.

![Expanded path rails: top labels, current mark at top-left](/images/context-edge/path-edge-hover.png)

## What has to be true underneath

Rails belong to the *ecosystem shell*, not to each page's DIY header.

1. **Shell chrome** owns edge sides, hover expand, and the wireframe nav.
2. **Platform registry** carries id, label, route/entry, and overlay tokens.
3. **Activity UI** stays local — in-app sections can remain in-page; *cross-platform* moves go through rails.
4. **Keyboard and explicit activate** matter — hover expand is desktop progressive enhancement, not the only door.

This is progressive disclosure for ecosystems: the map is available without living permanently on top of the work.

## Framework fit (short)

The pattern shines where shell state can sit next to routed content — **Solid / SolidStart** (signals for hover, open, overlay), **React / Next.js** (client layout wrapper; watch the RSC boundary), **Svelte / SvelteKit** (motion-friendly layouts). **Astro islands** are excellent for demos and docs sites. Full notes live in the docs.

## Where to go next

- **Docs** — [Context Edge](https://hci-nerdz.github.io/docs/hci-nerdz/context-edge.html)
- **Demo** — [Context Edge desk](/demos/context-edge/)
- **MVP** — [Multi-framework Astro islands](https://hci-nerdz.github.io/context-edge/) · [repo](https://github.com/HCI-Nerdz/context-edge)
- **Path Edge** — [breadcrumb colors](https://hci-nerdz.github.io/context-edge/demos/path-edge/)
- **Sibling** — [When settings live across town](/blog/when-settings-live-across-town/) (bind settings to activity; rails bind *platforms* to the shell)
