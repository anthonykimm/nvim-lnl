export interface TitleSlideData {
  layout: 'title';
  title: string;
  subtitle: string;
  command?: string;
}

export interface BulletSlideData {
  layout: 'bullet';
  title: string;
  bullets: string[];
  footnote?: string;
}

export interface TwoColumnSlideData {
  layout: 'two-column';
  title: string;
  left: { heading: string; items: string[] };
  right: { heading: string; items: string[] };
  footnote?: string;
}

export interface TimelineSlideData {
  layout: 'timeline';
  title: string;
  steps: { label: string; title: string; body?: string }[];
  footnote?: string;
}

export interface CardGridSlideData {
  layout: 'card-grid';
  title: string;
  cards: { heading: string; body: string; accent?: string }[];
  categories?: [string, string];
  footnote?: string;
}

export interface HierarchySlideData {
  layout: 'hierarchy';
  title: string;
  layers: {
    label: string;
    description: string;
    accent?: string;
    children?: { label: string; accent?: string }[];
  }[];
}

export interface DemoSlideData {
  layout: 'demo';
  title: string;
}

export interface SetupSlideData {
  layout: 'setup';
  title: string;
  subtitle: string;
  tags: string[];
  footnote?: string;
}

export interface TieredSlideData {
  layout: 'tiered';
  title: string;
  tiers: {
    heading: string;
    items: { name: string; description: string; highlight?: boolean }[];
  }[];
}

export interface ClosingSlideData {
  layout: 'closing';
  title: string;
  command: string;
}

export interface ModesSlideData {
  layout: 'modes';
  title: string;
  modes: { id: string; name: string; description: string }[];
}

export type SlideData =
  | TitleSlideData
  | BulletSlideData
  | TwoColumnSlideData
  | TimelineSlideData
  | CardGridSlideData
  | HierarchySlideData
  | DemoSlideData
  | SetupSlideData
  | TieredSlideData
  | ClosingSlideData
  | ModesSlideData;
