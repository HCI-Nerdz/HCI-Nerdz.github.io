---
title: "Pass-through extensions added to the repertoire"
description: "Meta-suffixes like .example and .template should peel to the inner file type — essay, interactive demo, docs, and a Windows settings app."
pubDate: 2026-08-02
---

**Pass-through extensions** join the published repertoire: meta-suffixes (`.example`, `.template`, `.dist`, `.old`, and friends) that should inherit open, edit, and icon behavior from the type underneath — instead of stranding Explorer on a dead last-suffix ProgID.

## What shipped

- An [essay](/blog/when-example-files-lose-their-type/) on when example files lose their type
- An [interactive peel demo](/demos/pass-through-extensions/) that contrasts last-suffix vs pass-through resolution
- A docs topic on the [Antora hub](https://hci-nerdz.github.io/docs/hci-nerdz/pass-through-extensions.html)
- A Windows [settings app](https://github.com/HCI-Nerdz/pass-through-extensions) — toggle built-ins, add custom meta-types, Apply for the current user

The [peel demo](/demos/pass-through-extensions/) shows today vs pass-through as HTML on the dark site (not a light-mode comparison graphic).

## Why it belongs here

`appsettings.json.example` is a JSON file wearing a badge. Humans read it that way. Win32 association lookup does not. The bug is product representation in the shell: the name already encodes the type; the double-click surface throws it away.

That sits with honesty and intuition-over-backwards-convention — and with the long game of filing the missing OS feature while shipping the workaround we can run today. See also the [screenshot follow-up](/news/pass-through-extensions-screenshots/).
