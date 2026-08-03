---
title: "Pass-through extensions: screenshots and a settings app"
description: "Explorer before/after art, the WPF configurator (built-ins + custom meta-types), and the peel demo — plus the PowerToys ask."
pubDate: 2026-08-03
---

The [pass-through extensions](/blog/when-example-files-lose-their-type/) pattern now has pictures and a configurable Windows app, not just a peel algorithm.

## What you can see

![Side-by-side: today vs pass-through for appsettings.json.example](/images/pass-through-extensions/explorer-before-after.png)

- [Peel demo](/demos/pass-through-extensions/) — interactive resolution plus the screenshot board at the top
- [Essay](/blog/when-example-files-lose-their-type/) — embeds the Explorer comparison and settings shots
- [Windows app](https://github.com/HCI-Nerdz/pass-through-extensions) — toggle built-ins (including `.old`), add your own meta-types, Apply to Explorer

![Pass-through Extensions settings app](/images/pass-through-extensions/settings-app.png)

![Custom .backup meta-type in the settings app](/images/pass-through-extensions/settings-app-custom.png)

## Upstream

Filed for PowerToys as a File Explorer utility: [microsoft/PowerToys#49631](https://github.com/microsoft/PowerToys/issues/49631). The OS still needs a first-class passthru association kind for icons, previews, and common Open dialogs.
