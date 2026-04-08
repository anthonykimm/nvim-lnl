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
      { label: '01', title: 'Before', body: 'What editor did I use before? What was my workflow like? This is where the story begins.' },
      { label: '02', title: 'The Switch', body: 'What made me try Vim? The moment of curiosity that started it all.' },
      { label: '03', title: 'The Struggle', body: 'The early days. Forgetting to switch modes. Editing at half speed. Almost giving up.' },
      { label: '04', title: 'The Click', body: 'The moment it all made sense. When editing became an extension of thinking.' },
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
    layout: 'setup',
    title: 'My Setup',
    subtitle: 'What to watch for',
    tags: ['Theme', 'Telescope', 'LSP', 'Treesitter', 'Harpoon'],
    footnote: 'Your editor becomes a reflection of how you work.',
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
    ],
    footnote: 'The vim philosophy extends beyond your editor.',
  },
  {
    layout: 'closing',
    title: 'Questions?',
    command: ':wq',
  },
];
