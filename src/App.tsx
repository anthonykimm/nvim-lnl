import { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from './slides';
import type { TimelineSlideData, ModesSlideData } from './types';
import { SlideRenderer } from './components/SlideRenderer';
import './App.css';

function getSubStepCount(slide: (typeof slides)[number]): number {
  if (slide.layout === 'timeline') return (slide as TimelineSlideData).steps.length;
  if (slide.layout === 'modes') return (slide as ModesSlideData).modes.length;
  return 0;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    const hash = window.location.hash.replace('#/', '');
    const num = parseInt(hash);
    return num >= 1 && num <= slides.length ? num - 1 : 0;
  });
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const [subStep, setSubStep] = useState(-1);
  const isTransitioning = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const maxSubSteps = getSubStepCount(slides[currentSlide]);

  // Scale viewport to fit screen
  useEffect(() => {
    const resize = () => {
      const vp = viewportRef.current;
      if (!vp) return;
      const scaleX = window.innerWidth / 1280;
      const scaleY = window.innerHeight / 720;
      const scale = Math.min(scaleX, scaleY);
      vp.style.transform = `scale(${scale})`;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Sync hash
  useEffect(() => {
    window.location.hash = `/${currentSlide + 1}`;
  }, [currentSlide]);

  const goTo = useCallback((index: number, dir: 'up' | 'down', enterFromKeyboard = true) => {
    if (isTransitioning.current || index < 0 || index >= slides.length) return;
    isTransitioning.current = true;
    setDirection(dir);
    setCurrentSlide(index);

    const target = slides[index];
    if (enterFromKeyboard && (target.layout === 'timeline' || target.layout === 'modes') && dir === 'up') {
      setSubStep(getSubStepCount(target) - 1);
    } else {
      setSubStep(-1);
    }

    setTimeout(() => { isTransitioning.current = false; }, 280);
  }, []);

  const next = useCallback(() => {
    if (maxSubSteps > 0 && subStep < maxSubSteps - 1) {
      setSubStep(subStep + 1);
      return;
    }
    goTo(currentSlide + 1, 'down');
  }, [currentSlide, subStep, maxSubSteps, goTo]);

  const prev = useCallback(() => {
    if (maxSubSteps > 0 && subStep >= 0) {
      setSubStep(subStep - 1);
      return;
    }
    goTo(currentSlide - 1, 'up');
  }, [currentSlide, subStep, maxSubSteps, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case 'j':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'k':
        case 'ArrowUp':
          e.preventDefault();
          prev();
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Handle hash changes (browser back/forward)
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#/', '');
      const num = parseInt(hash);
      if (num >= 1 && num <= slides.length) {
        const idx = num - 1;
        setDirection(idx > currentSlide ? 'down' : 'up');
        setCurrentSlide(idx);
        setSubStep(-1);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [currentSlide]);

  return (
    <div className="presentation">
      <div className="slide-viewport" ref={viewportRef}>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
        <div className="slide-counter">
          {currentSlide + 1}/{slides.length}
        </div>
        <div
          className="slide-container"
          key={currentSlide}
          data-direction={direction}
        >
          <SlideRenderer slide={slides[currentSlide]} subStep={subStep} />
        </div>
      </div>
      <div className="keyboard-hint" key={`hint-${currentSlide}`}>
        <kbd>j</kbd><kbd>k</kbd> or <kbd>&uarr;</kbd><kbd>&darr;</kbd> to navigate
      </div>
    </div>
  );
}

export default App;
