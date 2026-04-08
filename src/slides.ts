import type { SlideData } from './types';

export const slides: SlideData[] = [
  {
    layout: 'title',
    title: 'vim',
    subtitle: 'A guide to the text editor you\'ve been avoiding',
    command: '$ nvim presentation.md',
  },
  {
    layout: 'bullet',
    title: 'What is Vim?',
    bullets: [
      'A modal text editor \u2014 Vim (1991), evolved from vi (1976)',
      'Your keyboard does everything \u2014 no mouse needed',
      'Modes: Normal, Insert, Visual, Command',
      'Installed on virtually every Unix system',
    ],
  },
  {
    layout: 'two-column',
    title: 'Vim vs Neovim',
    left: {
      heading: 'Vim',
      items: [
        'Vimscript configuration',
        'Synchronous architecture',
        'Stable, mature ecosystem',
        'Battle-tested, decades of stability',
      ],
    },
    right: {
      heading: 'Neovim',
      items: [
        'Lua-based configuration',
        'Async architecture',
        'Built-in LSP support',
        'Active plugin ecosystem',
      ],
    },
    footnote: 'Neovim is a modernized fork (2014) \u2014 same philosophy, better foundations.',
  },
  {
    layout: 'bullet',
    title: 'Why Neovim?',
    bullets: [
      'Speed \u2014 instant startup, zero lag, even on huge files',
      'Focus \u2014 nothing on screen you didn\'t put there',
      'Composability \u2014 combine motions + actions like words in a sentence',
      'Build a lean environment tailored to how you think',
    ],
  },
  {
    layout: 'modes',
    title: 'The Four Modes',
    modes: [
      { id: 'normal', name: 'Normal', description: 'Default mode. Every key is a command.' },
      { id: 'insert', name: 'Insert', description: 'Type text into the buffer.' },
      { id: 'visual', name: 'Visual', description: 'Select text for operations.' },
      { id: 'command', name: 'Command', description: 'Execute editor commands.' },
    ],
  },
  {
    layout: 'timeline',
    title: 'My Journey',
    steps: [
      {
        label: '01',
        title: 'Before',
        bullets: [
          'VSCode was just the default',
          '"Vim" was just a word I\'d heard',
          'Felt mysterious, in the dark',
        ],
      },
      {
        label: '02',
        title: 'The Switch',
        bullets: [
          'Uni systems unit \u2014 SSH\'d into servers with no GUI',
          'Realised how much more efficient it could be',
          'Fell into a massive Neovim rabbit hole',
        ],
      },
      {
        label: '03',
        title: 'The Struggle',
        bullets: [
          'Productivity took a nosedive',
          'Instinctively reaching for the mouse',
          'Wrong keys causing random edits',
          'Never sure which mode I was in',
        ],
      },
      {
        label: '04',
        title: 'The Click',
        bullets: [
          'Forced myself to stick with it',
          'After 2\u20133 months \u2014 all muscle memory',
          'Less thinking, more doing',
          'Customising config and plugins to my liking',
          'Now I can\'t go back',
        ],
      },
    ],
  },
  {
    layout: 'card-grid',
    title: 'Why I Recommend It',
    cards: [
      {
        heading: 'Productivity',
        body: 'Composable commands. Express intent, not steps. Macros, marks, registers.',
        accent: 'green',
      },
      {
        heading: 'Fun',
        body: 'Every edit is a small puzzle. Years in, you\'re still finding faster ways.',
        accent: 'cyan',
      },
      {
        heading: 'Customizable',
        body: 'Your editor, your rules. Every keybinding tailored. Built for how you think.',
        accent: 'purple',
      },
    ],
    footnote: 'Expect 1\u20132 months of slower productivity \u2014 then you break through the ceiling.',
  },
  {
    layout: 'card-grid',
    title: 'Under the Hood',
    cards: [
      {
        heading: 'LSP',
        body: 'Autocomplete, go-to-definition, error diagnostics, hover docs',
        accent: 'cyan',
      },
      {
        heading: 'Treesitter',
        body: 'Smart syntax highlighting, code-aware text objects',
        accent: 'green',
      },
      {
        heading: 'Telescope',
        body: 'Fuzzy finder for files, grep, git commits, LSP symbols',
        accent: 'purple',
      },
      {
        heading: 'Lazy.nvim',
        body: 'Package manager \u2014 installs, updates, lazy-loads plugins',
        accent: 'amber',
      },
    ],
    categories: ['Core Technologies', 'Essential Plugins'],
  },
  {
    layout: 'hierarchy',
    title: 'Managing It All',
    layers: [
      {
        label: 'You',
        description: 'Your config (init.lua) drives everything',
        accent: 'coral',
      },
      {
        label: 'Lazy.nvim',
        description: 'Manages all your plugins',
        accent: 'amber',
        children: [
          { label: 'Mason', accent: 'cyan' },
          { label: 'nvim-lspconfig', accent: 'green' },
          { label: 'Telescope', accent: 'purple' },
          { label: 'Treesitter', accent: 'green' },
        ],
      },
    ],
  },
  {
    layout: 'demo',
    title: 'Live Demo',
  },
  {
    layout: 'tiered',
    title: 'My Setup',
    tiers: [
      {
        heading: 'Must Have',
        items: [
          { name: 'Telescope', description: 'Fuzzy finder \u2014 files, grep, buffers, symbols' },
          { name: 'LSP', description: 'Autocomplete, diagnostics, go-to-definition' },
          { name: 'Treesitter', description: 'Smart syntax highlighting and text objects' },
          { name: 'Oil', description: 'Edit your filesystem like a buffer' },
        ],
      },
      {
        heading: 'Nice to Have',
        items: [
          { name: 'Conform', description: 'Auto-formatter for every language' },
          { name: 'Gitsigns', description: 'Git diff markers in the gutter' },
          { name: 'Markdown Preview', description: 'Live rendered preview in the browser' },
          { name: 'Diffview', description: 'Rich side-by-side git diff view' },
        ],
      },
    ],
    footnote: '+ many more \u2014 there\u2019s probably a Neovim plugin for anything you need.',
  },
  {
    layout: 'tiered',
    title: 'How to Start',
    tiers: [
      {
        heading: 'Entry Points',
        items: [
          { name: 'VSCode Vim Extension', description: 'Learn motions without leaving your editor' },
          { name: 'vimtutor', description: 'Run vimtutor in any terminal \u2014 30 min interactive tutorial' },
        ],
      },
      {
        heading: 'Starter Configurations',
        items: [
          { name: 'Kickstart.nvim', description: 'Minimal, learn as you go', highlight: true },
          { name: 'LazyVim', description: 'Batteries included, polished defaults' },
          { name: 'NVChad', description: 'Clean UI, easy to customize' },
          { name: 'AstroNvim', description: 'Great docs, strong community' },
        ],
      },
    ],
  },
  {
    layout: 'card-grid',
    title: 'Vim Outside Vim',
    cards: [
      {
        heading: 'tmux',
        body: 'Terminal multiplexer \u2014 split panes, sessions, pairs naturally with Neovim',
        accent: 'green',
      },
      {
        heading: 'Zsh Vi Mode',
        body: 'Vi keybindings in your shell \u2014 navigate and edit commands like you edit code',
        accent: 'amber',
      },
      {
        heading: 'Vimium',
        body: 'Browser extension \u2014 navigate links, tabs, and pages entirely from your keyboard',
        accent: 'cyan',
      },
      {
        heading: 'Aerospace',
        body: 'Tiling window manager for macOS \u2014 arrange windows and workspaces with vim-like keys',
        accent: 'purple',
      },
    ],
    footnote: 'The vim philosophy extends beyond your editor.',
  },
  {
    layout: 'closing',
    title: 'Questions?',
    command: ':wq',
  },
];
