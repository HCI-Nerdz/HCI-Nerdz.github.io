---
title: "The bug is product representation"
description: "When capability exists but the first-class UI hides it, the product is lying about what counts — and that is an HCI bug, not a power-user gap."
pubDate: 2026-08-01
tags: ["discoverability", "honesty", "product-representation"]
---

Most "missing features" I file are not missing. The engine already knows. Search already works. The config file already has the truth. What is missing is the **surface** that teaches ordinary users that the capability exists.

That gap is larger than a convenience nit. It is *product representation*: what the UI advertises as real involvement, real success, real configuration.

## Commenting is participation — until the UI says otherwise

GitHub's Issues and Pull Requests filter bars expose Author, Label, Assignee, and Mentions as first-class dropdowns. They do not expose Commenter or Involves — even though `commenter:` and `involves:` already work in search and are documented.

Commenting is how most people contribute to projects they do not own. Mentions are something done *to* you. Commenting is something you did. The latter is the better proxy for real participation. By advertising Mentions and burying Commenter behind syntax, the product teaches users that authorship and @-mentions count, while replies are second-class unless you already know the secret language.

I wrote this up for GitHub's community forum as [Add Commenter (and Involves) to Issues/PRs filter dropdowns](https://github.com/orgs/community/discussions/202870). The closing line still holds:

> The bug is discoverability and product representation, not missing backend search.

## Settings GUIs that drift from the file

The same pattern shows up in editors. A settings UI that does not reflect language overrides, or that offers no jump-to-JSON for the key it claims to edit, creates a breakdown in trust between the GUI and the actual configuration file. Schema autocomplete while editing JSON is complementary. It is not a substitute for a discoverable settings surface — which is why I asked Zed for an [extension settings UI](https://github.com/zed-industries/zed/issues/60647) beyond raw `settings.json`.

## What HCI Nerdz takes from this

If the backend can answer the question, the first-class UI should ask it.

- Parity of affordances: if Mentions is a dropdown, Commenter should be too.
- Honest severity and exit codes: help is success; warnings should not look like errors.
- Theme and preview fidelity: the surface should inherit the host contract, not ship a light island in a dark room.

For the broader ethical frame — attention, cognitive overhead, heirloom software — see the [Vision](https://ryanjohnson.website/vision/) essay and our [philosophy](/philosophy/) page. For the shell-altitude sibling of progressive disclosure (help that does not dump walls of text), see [OpenShellOrg](https://openshellorg.github.io/).

Same enemy. Different altitudes.
