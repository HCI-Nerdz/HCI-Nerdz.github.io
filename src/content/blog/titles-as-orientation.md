---
title: "Titles as orientation"
description: "A title should place the reader in a mental room — not equate two rigid nouns, jam the org name into every headline, or leave modifiers floating without an object."
pubDate: 2026-08-03
tags: ["writing", "titles", "attention", "cognitive-load", "philosophy"]
---

A title is not decoration on top of an article. It is the first interface. It either orients the reader or spends their attention before the first paragraph.

Journalism already teaches some of this — headline present, prefer a verb, drop surplus articles for punch — but the usual guides stop at newspaper mechanics. They do not explain why *Theme is a contract* feels wrong while *Attention is not inventory* feels right, or why *HCI Nerdz adds X* is noise on a site that is already HCI Nerdz. Those distinctions are cognitive, not merely stylistic.

## News on your own site: the org is already in context

On an org’s own news desk, the reader’s attention is already contextualized. Unless someone else is the actor, naming the org in every headline is redundant.

> It is implied in our news article that we are the ones doing things unless otherwise noted.

So a notification-style item should read like a status line, not a press release about ourselves:

- Prefer: **Instruction flows added to the repertoire**
- Avoid: **HCI Nerdz adds instruction flows to the repertoire**

Wire-service rules that demand an explicit subject still apply when the actor is *not* obvious (another org, an upstream project, a person). On first-party news, omit the org the way headlines omit *the*.

## The implied *On* — and dropping *the*

Essay titles that use an action should still pass the invisible-**[On]** test: *On navigating by content*. Headline grammar has long dropped articles for brevity; that habit is not only about column inches. *The* often over-specifies a mass or abstract noun the reader already holds loosely.

- Prefer: **Navigating by content** / **Navigation by content**
- Avoid: **Navigating by the content** (overformal; the article adds little once *On …* is implied)

Classic headline practice agrees on dropping *a/an/the* when meaning stays clear. What the textbooks rarely add: keep the drop when it *reduces formality* without reducing orientation.

## *Is* equates; *as* orients

Equating two well-defined nouns (*Theme is a contract*) treats both as closed constants and asserts identity. That does not help the reader enter an abstract idea. It sounds like a finished definition, not an invitation.

> You're taking two well defined nouns and equating them, when usually a title like that would take a more complex idea expressed as a verb… *Theme as a contract*… *Theming is a contract*… *A theme is a contract*.

Useful moves:

| Shape | Effect |
| --- | --- |
| *X is Y* | Rigid equation of concepts; little room to ask “which?” |
| *X as Y* | Framing — X under the aspect Y; orients without closing the definition |
| *Xing is Y* | Process/verb noun; admits behavior beyond the dictionary sense of X |
| *A X is Y* | Existential opener — “there exists a theme such that…”; invites *which theme?* |

Concepts live in a rigid part of the mind. *A theme* declares a variable and leaves the binding for later — like a name at the top of a program whose definition appears below. Titles that open questions orient; titles that slam two constants together often do not.

## Disproof and situation titles earn their commitment

**Attention is not inventory** works because it contradicts an assumption. The reader already has a question: *why not?* / *how not?* A title that committed that hard without a novel finding would be bullying; with a finding, it is a thesis.

**When 'non-technical' products lie** works because *when* situates a class of events. The reader is placed in a scene, not handed an identity equation.

## Floating modifiers disorient

*Sequence as the top-level* leaves *top-level* without an object. Readers ask: top-level *what?*

> Typically “the top-level” makes no sense to a human… “Sequence as top-level organization of concepts” might hit the mark better.

Abstract modifiers (*top-level*, *first-class*, *core*) need a noun they apply to. Orient by attaching them to a context, not by floating them as if everyone shared your jargon frame.

## One strong idea per news item

If a story contains two independently strong claims — upstream rejected a feature; we shipped it anyway — prefer two articles that cross-link. A semicolon title that tries to carry both often smuggles the second idea as a punchline instead of letting each claim stand.

Name things with human labels when the CLI token is an implementation detail (*Antora live-editing* before `` `antora serve` ``), unless the exact invocation *is* the news.

## Big idea first

Implementation nuance belongs after the human job. *Treating dark mode as an overlay* can be a good essay; *Reimplementing dark mode as an overlay* leads with the larger act and keeps the insight as a qualifier. Outsiders should recognize the topic before they recognize your architecture preference.

## Identity pieces can be questions

*Supplemental is not a soft fork of Antora* asserts. *What is Antora Supplemental?* is the question readers already have. Match the title to the mental query when the piece is definitional.

## Soft welcomes and honest inaccuracy

A first news post should often be welcome-shaped: motivation, philosophy, who is involved, and links to the people who will help run it. Soft welcomes (*Welcome to the continuing blog*) can work when the audience already knew a prior surface — the title assumes continuity. Titles are often slightly inaccurate in predictable, stymied ways; that is part of the genre. Fix the ones that *disorient*; forgive the ones that only *approximate*.

## What this means for HCI Nerdz

Titles are progressive disclosure for text. They budget attention, teach what kind of piece follows, and either merge navigation with content — or force the reader to hold the real topic in working memory until paragraph three.

Related: [STYLE.adoc](https://github.com/HCI-Nerdz/HCI-Nerdz.github.io/blob/main/STYLE.adoc) (house rules), and the personal write-up on [ryanjohnson.dev](https://ryanjohnson.dev/blog/posts/titles-as-orientation/).
