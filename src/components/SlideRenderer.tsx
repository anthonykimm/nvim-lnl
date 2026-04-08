import type { SlideData } from '../types';
import {
  TitleSlide,
  BulletSlide,
  TwoColumnSlide,
  TimelineSlide,
  CardGridSlide,
  HierarchySlide,
  DemoSlide,
  SetupSlide,
  TieredSlide,
  ClosingSlide,
  ModesSlide,
} from './Layouts';

interface SlideRendererProps {
  slide: SlideData;
  subStep?: number;
}

export function SlideRenderer({ slide, subStep = -1 }: SlideRendererProps) {
  switch (slide.layout) {
    case 'title':
      return <TitleSlide {...slide} />;
    case 'bullet':
      return <BulletSlide {...slide} />;
    case 'two-column':
      return <TwoColumnSlide {...slide} />;
    case 'timeline':
      return <TimelineSlide {...slide} activeStep={subStep} />;
    case 'card-grid':
      return <CardGridSlide {...slide} />;
    case 'hierarchy':
      return <HierarchySlide {...slide} />;
    case 'demo':
      return <DemoSlide {...slide} />;
    case 'setup':
      return <SetupSlide {...slide} />;
    case 'tiered':
      return <TieredSlide {...slide} />;
    case 'closing':
      return <ClosingSlide {...slide} />;
    case 'modes':
      return <ModesSlide {...slide} activeMode={subStep} />;
  }
}
