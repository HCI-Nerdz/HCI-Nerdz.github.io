---
title: "When config files withhold the vocabulary"
description: "A settings UI is not chrome on a text file. It is the shared list of legal fields — including the ones the author never wrote. Generic config panels exist in fragments; the missing product treats schema minus instance as the default altitude."
pubDate: 2026-08-17
draft: false
tags: ["settings", "config", "schema", "field-discovery", "product-representation", "dconf"]
---

Ada opens `terraform.tfvars`. Two keys: `region` and `environment`. The rest of the module's inputs — the ones reused across every stack she has ever copied — live in `variables.tf`, in the provider schema, in last quarter's example that someone deleted. The file reflects what she saved. It is silent about what she is *allowed* to save.

That silence is not a personality trait of Terraform. It is the natural state of INI, YAML, TOML, SDLang, `cfg`, JSON. Syntax is not vocabulary. A form needs the second document: types, enums, defaults, a one-line *why*. Without it, a generic "config GUI" can only replay the two keys she already knew.

![Sparse config text on the left; schema-backed settings rows including unused fields on the right](/images/uniconfig/config-vocabulary-split.png)

## Settings as a shared field list

[When settings live across town](/blog/when-settings-live-across-town/) is about *where* a settings surface sits relative to work. This is the cousin problem: *what the surface is allowed to name* when the artifact is a file some other team authored.

GNOME already answers it for apps that opt in. Ship a `.gschema.xml`; `dconf-editor` renders keys the application never wrote to disk. KDE's KConfigXT is the same contract in XML. Windows ADMX templates generate Policy UI from a catalog. Developers get SchemaStore plus hover text inside the editor — discovery as autocomplete, not as a Control Panel.

None of those products will open Ada's tfvars *and* her `.gitconfig` *and* a `dub.sdl` with the same widgets, then remember the path after she touches it. Elektra tried the hierarchical mount. Augeas tried `/files/etc`. Schema-to-form toys (JSON Schema form builders) try the on-the-fly slice. The durable design is all three: **storage plugins, a schema catalog, one panel**.

![Three planes: file formats at the bottom, schema catalog in the middle, generic panel on top](/images/uniconfig/config-three-planes.png)

## Schema minus instance

The useful default altitude is not the raw buffer. It is the schema minus the instance — unset optional fields sitting there in muted type, with an include toggle, so Ada can discover `user.email` the same way dconf-editor shows keys GNOME apps left at default.

Arbitrary maps (`tags = { anything: anything }`) remain hostile. HCL *programs* are not settings documents. Those need domain adapters; they should not poison the INI path. SDLang is a decent profile carrier because metadata does not have to hide in a comment convention JSON never grew.

Dev-Centr is shipping that stack as **UniConfig Config Panel**: a D library for the tree, a dlangui desktop for the panel, SDLang profiles for globs. The HCI claim does not depend on the toolkit. It depends on treating field vocabulary as a first-class UI, not as something the last author happened to type.

Docs: [UniConfig](https://docs.devcentr.org/uniconfig/). Record: [Config files get a Control Panel](https://devcentr.org/news/2026-08-17-config-files-get-a-control-panel).
