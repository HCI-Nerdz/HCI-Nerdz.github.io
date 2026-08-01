---
title: "When 'non-technical' products lie"
description: "Marketing a tool as friendly while forcing archaeology through CSS hierarchies and secret modes is an HCI failure — not a documentation gap."
pubDate: 2026-08-01
tags: ["accessibility", "workflows", "heirloom"]
---

Calling a product "for non-technical users" is a promise about cognitive load. If the workflow then requires CSS hierarchy archaeology, plugin spelunking, and tribal knowledge to publish a page, the promise is false.

That is the core of the WordPress critique on [ryanjohnson.website](https://ryanjohnson.website/) — marketed accessibility collapsing when Pages vs Posts, themes, and plugins refuse a coherent model. The user did not fail. The product representation failed.

## Write. Publish. Done.

[Scribe](https://github.com/AMDphreak/scribe) exists as a counter-example in intent: edit Markdown or AsciiDoc in a static site repo without forcing Git, Markdown dialects, and the command line into the critical path for every author. The slogan is the HCI requirement: *Write. Publish. Done.*

Non-technical does not mean powerless. It means the first-class path matches the job the person believes they have.

## Docs that match how we work

OpenShellOrg's news voice and DevCentr's docs culture push the same idea from another angle: documentation should live next to the work, not float away as a marketing brochure that drifts from authoring reality. Diátaxis structure, AsciiDoc, Antora, Valentus — these are publishing choices that keep docs as a product surface, not a graveyard.

Literate programming notes in DevCentr ([Literate Programming](https://docs.devcentr.org/general-knowledge/explanation/literate-programming.html)) push intent-first narrative. HCI cares because unexplained surfaces are how products start lying.

## Web complexity tax

[Understanding Web Dev for Systems Developers](https://ryanjohnson.website/understanding-web-dev-for-systems-developers/) maps why the web stack feels like a violation of KISS: language pile-ups, framework inversion of control, and terminology that obscures what the machine is doing. That essay is systems-developer orientation. The HCI lesson is adjacent: every extra language and tool on the critical path is a cognitive tax paid by humans who only wanted to ship a surface.

## Practical rule

If your marketing says "anyone can use this," your first screen must prove it. Progressive disclosure can hide power. It must not hide the job.
