---
title: "ClearType when monitors disagree"
description: "The ClearType tuner offers per-monitor choice. GDI still takes one RGB/BGR vote for the session. DirectWrite only splits layouts when apps opt in—so mixed panels stay a product-representation problem."
pubDate: 2026-08-05
tags: ["windows", "cleartype", "displays", "product-representation", "typography", "directwrite"]
---

You plug in a BGR desktop panel next to an RGB laptop. Windows asks which monitors to tune. You answer carefully. One of the panels still looks wrong.

That is not user error. It is a mismatch between the story the settings UI tells and the scopes the text stack actually implements.

## Two scopes, one wizard

ClearType subpixel layout is not one dial.

1. **Session-global GDI orientation** — `SystemParametersInfo` (`SPI_SETFONTSMOOTHINGORIENTATION`) and `HKCU\Control Panel\Desktop\FontSmoothingOrientation`. No monitor handle. Classic GDI text follows this everywhere.
2. **Per-display Avalon keys** — `HKCU` / `HKLM\SOFTWARE\Microsoft\Avalon.Graphics\DISPLAYn\PixelStructure` (and friends), documented for WPF. DirectWrite *can* load monitor defaults via `CreateMonitorRenderingParams`, but only if the application bothers.

The inbox ClearType Text Tuner (`cttune.exe`) writes into *both* planes. Independent page-by-page registry maps (bp2008’s [ClearType Investigations](https://github.com/bp2008/BetterClearTypeTuner/wiki/ClearType-Investigations) wiki; [Reupen’s 2025 walkthrough](https://blog.yuo.be/2025/05/20/what-does-each-step-in-the-cleartype-tuner-do/)) show the RGB/BGR step updating the global Desktop value **and** the display-named `PixelStructure` entries.

So “tune this monitor” is half-true: Avalon slots can diverge; GDI still casts one vote.

## Better ClearType Tuner is blunt on purpose

[Better ClearType Tuner](https://github.com/bp2008/BetterClearTypeTuner) does not pretend. Its README states that per-monitor support appears non-functional in modern Windows, so the app sets every monitor the same. The code loops all `Screen` device names and writes identical Avalon DWORDs, then sets orientation through SPI.

If you use it to force BGR for the external panel, you also force BGR onto the internal panel’s Avalon keys and onto the global GDI orientation. That warning is accurate.

What is *not* accurate is the comforting sequel: “just use `cttune.exe` and keep RGB on the laptop while the external stays BGR.” You may get better Avalon/DirectWrite behavior for apps that honor per-monitor params. You do not get two GDI orientations. You also depend on each app calling the monitor-aware DirectWrite factory method—Microsoft’s own [multi-monitor DirectWrite how-to](https://learn.microsoft.com/en-us/windows/win32/directwrite/how-to-add-support-for-multiple-monitors) warns that `CreateRenderingParams` is primary-only.

## Product representation again

The monitor checklist is a representation of capability the OS only partially has. That is the same pattern as [product representation is the bug](/blog/product-representation-is-the-bug/): knowledge and structure exist behind the glass (per-display keys, `HMONITOR` APIs); the dominant path (GDI SPI, primary-only defaults, apps that never refresh params on `WM_WINDOWPOSCHANGED`) narrates a single layout.

Honest tools either:

- expose the global dial clearly (Better ClearType Tuner), or
- expose both planes and teach the difference (docs, not a three-click wizard myth).

## Where to go next

- **HCI docs** — [ClearType per-monitor settings](https://hci-nerdz.github.io/docs/hci-nerdz/cleartype-per-monitor.html)
- **Engineering deep dive + citations** — [Dev-Centr explanation](https://docs.devcentr.org/general-knowledge/explanation/cleartype-per-monitor-settings.html)
- **Finding Microsoft’s material when search fails** — [Finding Windows internals documentation](https://docs.devcentr.org/general-knowledge/how-to/finding-windows-internals-docs.html)

Primary Microsoft references worth keeping open: [WPF ClearType registry settings](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/advanced/cleartype-registry-settings), [`CreateMonitorRenderingParams`](https://learn.microsoft.com/en-us/windows/win32/api/dwrite/nf-dwrite-idwritefactory-createmonitorrenderingparams), [`SystemParametersInfo` font smoothing orientation](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-systemparametersinfoa).
