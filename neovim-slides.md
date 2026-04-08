# Vim/Neovim — A 30-Minute Talk
 
## Design Brief
 
Build a web-based slide deck. The design should be minimalistic, dark, and clean with impeccable attention to detail.
 
**Theme:** Dark background (#0E1017), monospace headings (JetBrains Mono or Fira Code), clean sans-serif body text (Inter or system sans-serif). Accent colors: cyan (#56B6C2), green (#98C379), coral (#E06C75), amber (#D19A66). Text: off-white (#E5E5E5) for primary, muted (#A0A8B8) for secondary. Minimal content per slide — let the speaker do the talking.
 
**Format:** 16:9 aspect ratio, short bullets, no code snippets on slides (demos are live), no branding.
 
---
 
## Slide 1 — Title
 
**vim**
 
A guide to the text editor you've been avoiding
 
_`$ nvim presentation.md`_
 
---
 
## Slide 2 — What is Vim?
 
- A modal text editor — born from vi (1991)
- Your keyboard does everything — no mouse needed
- Modes: Normal, Insert, Visual, Command
- Every key has a purpose in every mode
- Installed on virtually every Unix system
 
---
 
## Slide 3 — Vim vs Neovim
 
Two-column layout:
 
### Vim
- Vimscript configuration
- Synchronous architecture
- Stable, mature ecosystem
- Available everywhere
 
### Neovim
- Lua-based configuration
- Async architecture
- Built-in LSP support
- Active plugin ecosystem
 
_Neovim is a modernized fork (2014) — same philosophy, better foundations._
 
---
 
## Slide 4 — Why not just use an IDE?
 
- IDEs come with clutter — buttons, panes, menus you rarely use
- Too many distractions competing for your attention
- Neovim lets you pick exactly what you need
- You build a lean, focused environment
- It's not replacing your IDE — it's removing the noise
 
---
 
## Slide 5 — My Journey
 
Four cards in a horizontal timeline:
 
1. **Before** — What I used before vim
2. **The Switch** — What made me try it
3. **The Struggle** — Early frustration & friction
4. **The Click** — The moment it all made sense
 
_Speaker fills in personal details live._
 
---
 
## Slide 6 — Why I Recommend It
 
Three pillars, card layout:
 
### Productivity
Composable commands. Express intent, not steps. Macros, marks, registers.
 
### Fun
Game-like satisfaction. Always learning new tricks. Years in, still discovering.
 
### Customizable
Your editor, your rules. Every keybinding tailored. Built for how you think.
 
_Expect 1-2 months of slower productivity — then you break through the ceiling._
 
---
 
## Slide 7 — Under the Hood
 
2x2 grid of concept cards:
 
### LSP (Language Server Protocol)
Autocomplete, go-to-definition, error diagnostics, hover docs
 
### Treesitter
Smart syntax highlighting, code-aware text objects
 
### Telescope
Fuzzy finder for files, grep, git commits, LSP symbols
 
### Lazy.nvim
Package manager — installs, updates, lazy-loads plugins
 
---
 
## Slide 8 — Managing It All
 
Three cards with arrows between them:
 
**Lazy.nvim** (Package Manager) → **Mason** (LSP Manager) → **You** (Config)
 
- Lazy.nvim: Installs & manages your plugins
- Mason: Installs language servers for you
- You: Pick what you need, nothing more
 
---
 
## Slide 9 — Live Demo
 
Command/description pairs:
 
| Command | What it does |
|---------|-------------|
| `ci"` | Change inside quotes |
| `.` | Repeat last action |
| `Ctrl-v` | Visual block mode — multi-line editing |
| `:%s/old/new/g` | Global find-and-replace |
| `qq ... @q` | Record and replay macros |
 
_Speaker demos each command live in the terminal._
 
---
 
## Slide 10 — My Setup
 
**[ live walkthrough ]**
 
Tags/chips: Theme, Telescope, LSP, Treesitter, Harpoon
 
_Your editor becomes a reflection of how you work._
 
_Speaker opens their actual Neovim config and walks through it._
 
---
 
## Slide 11 — How to Start
 
Two tiers:
 
### Entry points
- **VSCode Vim Extension** — Zero risk, learn motions in your current editor
- **vimtutor** — Run `vimtutor` in any terminal. 30 min interactive tutorial
 
### Starter Configurations
- **Kickstart.nvim** — My pick. Minimal, learn as you go
- **LazyVim** — Batteries included, polished defaults
- **NVChad** — Clean UI, easy to customize
- **AstroNvim** — Great docs, strong community
 
---
 
## Slide 12 — Extras
 
### Vimium
Browser extension for Chrome & Firefox. Vim keybindings for navigating the web — links, tabs, scrolling, all from your keyboard.
 
_The vim philosophy extends beyond your editor._
 
---
 
## Slide 13 — Closing
 
**Questions?**
 
`:wq`
