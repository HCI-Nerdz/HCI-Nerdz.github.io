#!/usr/bin/env python3
"""Convert project-inbox demo to UTF-8 actor-model-agentic-ui demo."""
import pathlib
import subprocess

repo = pathlib.Path(r"Z:\code\github.com\hci-nerdz\HCI-Nerdz.github.io")
raw = subprocess.check_output(
    ["git", "-C", str(repo), "show", "d314fdc:src/pages/demos/project-inbox/index.astro"]
)
if len(raw) >= 2 and raw[1] == 0:
    text = raw.decode("utf-16-le")
else:
    text = raw.decode("utf-8")

replacements = [
    ("Project inbox desk · HCI Nerdz", "Actor-model agentic UI desk · HCI Nerdz"),
    ("Demo · Project inbox", "Demo · Actor-model agentic UI"),
    ("Project inbox desk", "Actor-model agentic UI desk"),
    ("when-parallel-agents-still-read-as-one-thread", "when-chat-should-spawn-a-node"),
    ("project-inbox.html", "actor-model-agentic-ui.html"),
    ("/demos/project-inbox/", "/demos/actor-model-agentic-ui/"),
    ("Project inbox demo", "Actor-model agentic UI demo"),
    ("Coordinator</span>", "Coordinator node</span>"),
    ("Chapter 1", "Epoch 1"),
    ("Chapter 2", "Epoch 2"),
    ("Start next chapter", "Next epoch"),
    ("chapter-label", "epoch-label"),
    ("chapter-btn", "epoch-btn"),
    ("btn-next-chapter", "btn-next-epoch"),
    ("Task inbox grid", "Task node grid"),
    ("Task fork chat", "Node fork chat"),
    ('fork-title">Task', 'fork-title">Node'),
    ("Message this task context", "Message this node"),
    ("interface Chapter", "interface Epoch"),
    ("const chapters: Chapter", "const epochs: Epoch"),
    ("let chapterIdx = 0", "let epochIdx = 0"),
    ("currentChapter()", "currentEpoch()"),
    ("chapters[chapterIdx]", "epochs[epochIdx]"),
    ("chapters.length", "epochs.length"),
    ("chapterIdx += 1", "epochIdx += 1"),
    ("chapterIdx = 0", "epochIdx = 0"),
    ("label: 'Chapter", "label: 'Epoch"),
    ("Chapter 2 —", "Epoch 2 —"),
    ("prior chapter", "prior epoch"),
    ("new chapter", "new epoch"),
]
for old, new in replacements:
    text = text.replace(old, new)

if "lineage-strip" not in text:
    text = text.replace(
        '</div>\n\n      <div class="inbox-region"',
        '</div>\n\n      <p class="lineage-strip" id="lineage-strip">Spawn: coord-001 → disc-org-connect → task nodes</p>\n\n      <div class="inbox-region"',
    )

out = repo / "src/pages/demos/actor-model-agentic-ui/index.astro"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(text, encoding="utf-8")
print(f"wrote {out} ({out.stat().st_size} bytes)")

redirect = """---
// Redirect legacy project-inbox demo URL
return Astro.redirect('/demos/actor-model-agentic-ui/', 301);
---
"""
(repo / "src/pages/demos/project-inbox/index.astro").write_text(redirect, encoding="utf-8")
print("wrote redirect")
