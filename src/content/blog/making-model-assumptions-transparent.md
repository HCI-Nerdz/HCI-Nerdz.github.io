---
title: "Making model assumptions transparent"
description: "Assistant chat treats guesses and researched facts as the same confident prose. Trust needs provenance on the tokens themselves — so you can see what the model assumed before you pay for the mistake."
pubDate: 2026-08-28
draft: false
tags: ["ai-assistants", "grounded-tokens", "provenance", "product-representation", "attention", "cursor", "trust"]
---

When an AI assistant writes a repo slug, a path, a version number, or a config key, you usually cannot tell whether it **looked that up** or **filled a plausible blank**. The harness may know. The transcript does not. Every span arrives with the same typographic confidence.

That is a trust problem before it is a tokenizer problem. If the surface hides *how* a claim was produced, you cannot judge whether to believe it until something breaks.

## A familiar failure

You ask the agent to update your Bitwarden fork onto `main`. It announces it is retrying **AMDphreak/clients**. Still failing on **AMDphreak/clients**. Checking whether the fork is actually there.

Only after wasted turns does it admit the fork is **AMDphreak/bitwarden-clients**, not **AMDphreak/clients**.

The naming mistake is understandable. Upstream is `bitwarden/clients`; forks often keep the short name. What is not understandable is the surface: you could not see *guess versus lookup* until the apology paragraph.

![Cursor agent chat: heuristic AMDphreak/clients versus researched AMDphreak/bitwarden-clients](/demos/grounded-tokens/case-study-fork-name.png)

## What “transparent” would mean

**Grounded tokens** are inline marks on salient spans in assistant output — repo slugs, paths, version numbers, config keys — that say how each token was produced:

- **Heuristic** — pattern fill, analogy, default; not verified yet
- **Researched** — confirmed by tool output, file read, API, or crawl
- **Corrected** — a former heuristic explicitly replaced after verification fails

Same sentence, different epistemic weight. The UI should carry that weight *in the tokens*, not only in a later “sorry, I meant…” line.

Call the metadata story **provenance**. Grounded tokens are the visual layer people actually see.

## Why chat feels trustworthy when it is not

On a real desktop, dangerous controls look different from safe ones. Red delete buttons, disabled fields, lock icons — mechanistic cues so working memory does not have to reconstruct policy from uniform chrome.

Agent chat inverted that. The harness knows tool calls, retries, and HTTP status codes. The transcript renders every token as plain prose with equal weight. You become the diff engine: mine each slug wondering whether GitHub was consulted or the model free-associated from upstream naming.

That mining tax is the same product-representation failure [attention is not inventory](/blog/attention-is-not-inventory/) and [when the UI hides what counts](/blog/when-the-ui-hides-what-counts/) describe elsewhere. Capability exists; the surface lies about what was exercised.

## Visual language

| Class | Encoding | Role |
| --- | --- | --- |
| Heuristic | Dashed warm underline | Shout first — this is the guess |
| Researched | Solid cool underline; hover for source | Quiet default; reveal on demand |
| Corrected | Struck heuristic + researched replacement | Show upgrade, not only prose correction |

Do not rely on color alone. Underline *style* is primary; warm versus cool reinforces without becoming the only channel.

Emphasize guesses more than verified facts. Users need early warning, not decoration on every grounded span.

## What changes in the fork-name scene

With grounded tokens enabled, the first **AMDphreak/clients** reads as **heuristic** while the agent hammers a slug that does not exist. You can interrupt before turn three: “that name is dashed — did you look?”

After `gh repo view` succeeds, **AMDphreak/bitwarden-clients** carries a **researched** mark. The correction lives in the tokens, not only in the narrative apology.

Toggle provenance off and you are back to today’s uniform confidence — useful as contrast, not as the default.

## For product teams

If you ship agent UI in Cursor or any host:

1. **Lead with minutes lost**, not tokenizer plumbing.
2. **Ship a thirty-second replay** before the RFC. The fork-name scene is the spec.
3. **Default loud heuristics, subtle researched marks.** Catch assumptions; do not trophy every verified token.
4. **Accessibility** — `aria-description`, legend, pattern not color-only.

This essay, the [docs topic](https://hci-nerdz.github.io/docs/hci-nerdz/grounded-tokens.html), and the [interactive demo](/demos/grounded-tokens/) are linked on purpose — pick the entry that matches your role; they tell one story.

## Where to go next

- **Docs** — [Grounded tokens](https://hci-nerdz.github.io/docs/hci-nerdz/grounded-tokens.html)
- **Demo** — [Detecting AI lies](/demos/grounded-tokens/)
- **Literature** — [cursor-seed-2026-08-28](https://github.com/HCI-Nerdz/docs/blob/main/literature/grounded-tokens/cursor-seed-2026-08-28.md)
