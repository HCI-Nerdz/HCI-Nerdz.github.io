---
title: "When example files lose their type"
description: "Meta-suffixes like .example and .template are badges on a real file type — Explorer’s last-suffix rule throws the type away, and Windows never grew a pass-through association kind."
pubDate: 2026-08-02
tags: ["file-explorer", "product-representation", "windows", "associations", "pass-through"]
---

Programmers leave gifts for the next reader: `appsettings.json.example`, `.env.example`, `nginx.conf.template`, `php.ini.dist`. The content is JSON, env, conf, ini. The trailing token is a *badge* — “this is an example of that type,” not “this is a new species of document called EXAMPLE.”

Windows File Explorer disagrees. It takes the segment after the last dot, looks up a ProgID, and shrugs. Double-click the example and you get a dead type, a generic “how do you want to open this?” prompt, or nothing useful. The editor that already owns `.json` never gets the call.

That is not a missing third-party codec. It is a missing association *kind*.

![Side-by-side File Explorer comparison: today appsettings.json.example is an EXAMPLE File with no handler; pass-through peels to JSON with an example badge](/images/pass-through-extensions/explorer-before-after.png)

## Last suffix wins — until it shouldn’t

The Win32 association model is stem-blind on purpose for the common case: `report.pdf` is a PDF. Multi-dot names still collapse to the final segment. That rule is correct for `archive.tar.gz` if you treat `.gz` as the openable codec (messy, but a *content* story). It is wrong for role badges.

| Filename | What humans mean | What last-suffix means |
| --- | --- | --- |
| `appsettings.json.example` | JSON example config | `.example` mystery file |
| `site.conf.template` | conf template | `.template` mystery file |
| `php.ini.dist` | distro default ini | `.dist` mystery file |

The registry can attach *some* handler to `.example`. What it does not express is: *this suffix is transparent — resolve open, edit, and icon from the name underneath, and pass the real path to that handler.*

## Pass-through extensions

Call the missing kind a **pass-through extension**: a small allow-list of meta-suffixes that peel from the right before association lookup.

Boring list, on purpose:

- `.example`
- `.template` / `.tmpl`
- `.sample`
- `.dist`
- `.default`
- `.skeleton`
- `.stub`
- `.orig`
- `.bak`
- `.old`

Users should be able to extend that list (the [Windows app](https://github.com/HCI-Nerdz/pass-through-extensions) already does).

Peel while the rightmost token stays on the list. Stop. Resolve `.json` (or `.conf`, or `.ini`) and invoke *that* open verb against `appsettings.json.example` — do not rename the file, do not pretend the path lost its badge.

Compression tails (`.gz`, `.bz2`, `.xz`) are not pass-through. Different problem. Different UX.

## Product representation again

The filesystem already encodes the type in the stem. Humans already read it. Only the shell throws it away at the last mile. That is the same class of bug as [hiding Commenter when search already knows](/blog/product-representation-is-the-bug/): the engine (here, the name) knows; the first-class surface refuses to ask.

Intuition over backwards convention applies. Migrating association metadata is temporary. Living with “every example file is unopenable” is permanent and compounding across every repo on every Windows machine.

## What we can ship without Redmond

Microsoft can still add a real passthru flag to ProgIDs. Until then:

1. **Docs** — [Pass-through extensions](https://hci-nerdz.github.io/docs/hci-nerdz/pass-through-extensions.html) on the Antora hub
2. **Demo** — [Pass-through peel](/demos/pass-through-extensions/) — type a name, watch last-suffix vs peel
3. **App** — [`pass-through-extensions`](https://github.com/HCI-Nerdz/pass-through-extensions) settings UI + broker: toggle built-ins (including `.old`), add custom meta-types, Apply to Explorer

![Pass-through Extensions settings app with built-in meta-types and Apply to Explorer](/images/pass-through-extensions/settings-app.png)

![Settings app with a custom .backup meta-type added by the user](/images/pass-through-extensions/settings-app-custom.png)

4. **Feedback** — Feedback Hub / WinUI wishlist: *documented meta-suffix association that delegates open and icon to the stem*; PowerToys is a natural host for the workaround meanwhile ([microsoft/PowerToys#49631](https://github.com/microsoft/PowerToys/issues/49631))

Editors should grow matching `files.associations` defaults. Open dialogs inside apps should accept the same peel. But Explorer is where the double-click contract lives — that is the honesty surface that matters first.

## Try the peel

Open the [interactive demo](/demos/pass-through-extensions/), paste `docker-compose.yml.example`, and compare the two resolution stories. Then install the helper if you want the real Explorer behavior on your machine — without waiting for a PO to discover meta-types.
