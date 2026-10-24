---
title: "When the same menu means two things"
description: "A sidebar item that opens a team page in one context and a project page in another is a mode. Spatial memory still fires, and it lands on the wrong function."
pubDate: 2026-10-23
tags: ["modes", "spatial-memory", "navigation", "consistency"]
---

If a menu item stays in the same place but does a different job depending on a filter you set somewhere else, it is a mode. HCI has spent forty years explaining why modes cause errors, and the spatial-memory research explains why this kind of mode hurts people who find things by where they are.

## The click that went to the wrong room

I know where things are on screens the way I know where the light switch is in my kitchen. I don't read the label. My hand goes to the place.

Vercel's dashboard got a new sidebar this year. It became the default on 26 February 2026, and the [changelog](https://vercel.com/changelog/dashboard-navigation-redesign-rollout) describes "consistent tabs for unified navigations across both team and project levels" and "projects as filters so you can switch between team and project versions of the same page in one click."

On paper that sounds tidy. In use, it goes like this: I open a project, do some work, jump to the team view to check something, and come back. My hand goes to the sidebar item I always use. The item is in the same spot with the same label. What opens is the team-wide version of the page, because the project filter is no longer set. The thing that decides what the click means sits somewhere my eyes weren't looking.

Nothing moved, but the meaning of the spot changed.

## Why the research calls this a mode

Jef Raskin's *The Humane Interface* (2000) gives the definition I keep coming back to. An interface is modal for a gesture when the state that decides the outcome is not where your attention is, and the same gesture gives different results depending on that state. A sidebar item whose target depends on an out-of-view scope filter fits that definition.

Don Norman's 1981 paper "[Categorization of action slips](https://doi.org/10.1037/0033-295X.88.1.1)" names what happens next. He puts *mode errors* in the class of slips where the intention forms wrong: you do the right thing for one state while the system is in another. Larry Tesler spent much of his career taking modes out of text editing, and wrote about it in "[A personal history of modeless text editing and cut/copy-paste](https://doi.org/10.1145/2212877.2212896)" (2012). The point was never that modes are ugly. They make people do things they didn't mean to do.

## Why it hurts the people who know the UI best

Spatial memory is what experienced users run on. Joey Scarr, Andy Cockburn, Carl Gutwin and Andrea Bunt built [CommandMaps](https://doi.org/10.1145/2207676.2207713) (CHI 2012), a flat and spatially stable command layout, and found that experienced users were significantly faster with it than with menus or the Ribbon. A year later, Scarr, Cockburn, Gutwin and Sylvain Malacria [tested how robust that is](https://doi.org/10.1145/2470654.2466430): spatial memory held up when the layout was moved or scaled, and suffered when the layout reflowed.

Leah Findlater and Joanna McGrenere [compared static, adaptive, and adaptable menus](https://doi.org/10.1145/985692.985704) (CHI 2004). The static menu was significantly faster than the adaptive one, and most people preferred the version they controlled themselves.

Location overloading is a strange case in that literature. The layout is perfectly stable, so spatial memory keeps working. It just points at the wrong function. A layout that reflows at least looks different. An overloaded slot gives you no visual cue that anything changed.

Nielsen's heuristics say the same thing in plain words. [Consistency and standards](https://www.nngroup.com/articles/ten-usability-heuristics/): users should not have to wonder whether different situations or actions mean the same thing. Recognition rather than recall: users should not have to remember information from one part of the interface to another. An overloaded sidebar asks me to remember which scope I left the filter in.

## The fair case for doing it anyway

Screen space is limited, and Scarr and colleagues open the CommandMaps paper by saying that this limit is why menus are hierarchical in the first place. Two sidebars for two scopes cost room. [Progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/) is a real benefit too: showing only what the current context needs cuts clutter, and novices make fewer mistakes.

Vercel's goal of consistent structure across team and project is reasonable. The trouble isn't that both scopes share one structure. The trouble is that the scope isn't visible at the place where I click. Raskin's definition turns on where attention is, so the fix is to put the scope there. Put it in the item itself, in its label, color, or breadcrumb. Or give each scope its own fixed place, so my hand can learn two locations instead of one location with a hidden switch.

I collected the sources, with DOIs, on the docs page [Location overloading](https://hci-nerdz.github.io/docs/hci-nerdz/location-overloading/). The next time a redesign promises "consistent tabs," the question to ask is which state decides what the tab does, and whether I can see that state when my hand is already moving.
