import { useState, useEffect } from 'react';
import type {
  TitleSlideData,
  BulletSlideData,
  TwoColumnSlideData,
  TimelineSlideData,
  CardGridSlideData,
  HierarchySlideData,
  DemoSlideData,
  TieredSlideData,
  ClosingSlideData,
  ModesSlideData,
} from '../types';

/* ── Title Slide ── */
export function TitleSlide({ title, subtitle, command }: TitleSlideData) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState(0); // 0=typing, 1=subtitle, 2=command

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(title.slice(0, i));
      if (i >= title.length) {
        clearInterval(interval);
        setTimeout(() => setPhase(1), 300);
        setTimeout(() => setPhase(2), 700);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [title]);

  return (
    <div className="slide title-slide">
      <h1 className="title-text">
        <span className="prompt-accent">{'>'}</span>
        {displayed}
        <span className="cursor-block blink">_</span>
      </h1>
      <p className={`title-subtitle ${phase >= 1 ? 'visible' : ''}`}>{subtitle}</p>
      {command && (
        <p className={`title-command ${phase >= 2 ? 'visible' : ''}`}>
          <code>{command}</code>
        </p>
      )}
    </div>
  );
}

/* ── Bullet Slide ── */
export function BulletSlide({ title, bullets, footnote }: BulletSlideData) {
  return (
    <div className="slide bullet-slide">
      <h2 className="slide-title stagger" style={{ '--i': 0 } as React.CSSProperties}>{title}</h2>
      <ul className="bullet-list">
        {bullets.map((b, i) => (
          <li key={i} className="stagger" style={{ '--i': i + 1 } as React.CSSProperties}>
            <span className="bullet-marker" />
            {b}
          </li>
        ))}
      </ul>
      {footnote && (
        <p className="footnote stagger" style={{ '--i': bullets.length + 1 } as React.CSSProperties}>
          {footnote}
        </p>
      )}
    </div>
  );
}

/* ── Two-Column Slide ── */
export function TwoColumnSlide({ title, left, right, footnote }: TwoColumnSlideData) {
  return (
    <div className="slide two-col-slide">
      <h2 className="slide-title stagger" style={{ '--i': 0 } as React.CSSProperties}>{title}</h2>
      <div className="columns">
        <div className="column stagger" style={{ '--i': 1 } as React.CSSProperties}>
          <h3>{left.heading}</h3>
          <ul>
            {left.items.map((item, i) => (
              <li key={i}><span className="bullet-marker" />{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-divider" />
        <div className="column stagger" style={{ '--i': 2 } as React.CSSProperties}>
          <h3>{right.heading}</h3>
          <ul>
            {right.items.map((item, i) => (
              <li key={i}><span className="bullet-marker" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {footnote && (
        <p className="footnote stagger" style={{ '--i': 3 } as React.CSSProperties}>
          {footnote}
        </p>
      )}
    </div>
  );
}

/* ── Timeline Slide ── */
export function TimelineSlide({ title, steps, footnote, activeStep }: TimelineSlideData & { activeStep: number }) {
  return (
    <div className="slide timeline-slide">
      <h2 className="slide-title stagger" style={{ '--i': 0 } as React.CSSProperties}>{title}</h2>
      <div className="timeline-content">
        <div className="timeline">
          <div className="timeline-track" />
          {steps.map((step, i) => (
            <div
              key={i}
              className={`timeline-card stagger${i === activeStep ? ' active' : ''}${activeStep >= 0 && i < activeStep ? ' past' : ''}`}
              style={{ '--i': i + 1 } as React.CSSProperties}
            >
              <span className="timeline-number">{step.label}</span>
              <span className="timeline-label">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="timeline-detail">
          {activeStep >= 0 && steps[activeStep]?.bullets && (
            <ul className="timeline-bullets" key={activeStep}>
              {steps[activeStep].bullets.map((bullet, i) => (
                <li key={i} style={{ '--i': i } as React.CSSProperties}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {activeStep < 0 && footnote && (
        <p className="footnote stagger" style={{ '--i': steps.length + 1 } as React.CSSProperties}>
          {footnote}
        </p>
      )}
    </div>
  );
}

/* ── Card Grid Slide ── */
export function CardGridSlide({ title, cards, categories, footnote }: CardGridSlideData) {
  return (
    <div className="slide card-grid-slide">
      <h2 className="slide-title stagger" style={{ '--i': 0 } as React.CSSProperties}>{title}</h2>
      {categories && (
        <div className="category-row stagger" style={{ '--i': 1 } as React.CSSProperties}>
          <span className="category-label">{categories[0]}</span>
          <span className="category-label">{categories[1]}</span>
        </div>
      )}
      <div className={`card-grid cols-${cards.length}`}>
        {cards.map((card, i) => (
          <div
            key={i}
            className="card stagger"
            data-accent={card.accent}
            style={{ '--i': i + (categories ? 2 : 1) } as React.CSSProperties}
          >
            <h3>{card.heading}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
      {footnote && (
        <p
          className="footnote stagger"
          style={{ '--i': cards.length + (categories ? 2 : 1) } as React.CSSProperties}
        >
          {footnote}
        </p>
      )}
    </div>
  );
}

/* ── Hierarchy Slide ── */
export function HierarchySlide({ title, layers }: HierarchySlideData) {
  const top = layers[0];
  const mid = layers[1];
  return (
    <div className="slide hierarchy-slide">
      <h2 className="slide-title stagger" style={{ '--i': 0 } as React.CSSProperties}>{title}</h2>
      <div className="hierarchy">
        <div
          className="h-node stagger"
          data-accent={top.accent}
          style={{ '--i': 1 } as React.CSSProperties}
        >
          <span className="h-label">{top.label}</span>
          <span className="h-desc">{top.description}</span>
        </div>
        <div className="h-connector stagger" style={{ '--i': 2 } as React.CSSProperties} />
        <div
          className="h-node stagger"
          data-accent={mid.accent}
          style={{ '--i': 3 } as React.CSSProperties}
        >
          <span className="h-label">{mid.label}</span>
          <span className="h-desc">{mid.description}</span>
        </div>
        <div className="h-connector stagger" style={{ '--i': 4 } as React.CSSProperties} />
        <div className="h-children">
          {mid.children?.map((child, i) => (
            <div
              key={i}
              className="h-child stagger"
              data-accent={child.accent}
              style={{ '--i': 5 + i } as React.CSSProperties}
            >
              {child.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Demo Slide ── */
export function DemoSlide({ title }: DemoSlideData) {
  return (
    <div className="slide demo-slide">
      <div className="terminal-window stagger" style={{ '--i': 0 } as React.CSSProperties}>
        <div className="terminal-chrome">
          <span className="term-dot red" />
          <span className="term-dot yellow" />
          <span className="term-dot green" />
          <span className="terminal-title">nvim</span>
        </div>
        <div className="terminal-body">
          <h2 className="demo-title">{title}</h2>
          <div className="terminal-prompt">
            <span className="prompt-char">~</span>
            <span className="prompt-char">~</span>
            <span className="prompt-char">~</span>
          </div>
          <div className="terminal-cmdline">
            <span className="prompt-colon">:</span>
            <span className="cursor-block blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Tiered Slide ── */
export function TieredSlide({ title, tiers, footnote }: TieredSlideData) {
  let idx = 1;
  return (
    <div className="slide tiered-slide">
      <h2 className="slide-title stagger" style={{ '--i': 0 } as React.CSSProperties}>{title}</h2>
      {tiers.map((tier, ti) => {
        const headIdx = idx++;
        return (
          <div key={ti} className="tier">
            <h3 className="tier-heading stagger" style={{ '--i': headIdx } as React.CSSProperties}>
              {tier.heading}
            </h3>
            <div className="tier-items">
              {tier.items.map((item, i) => {
                const itemIdx = idx++;
                return (
                  <div
                    key={i}
                    className={`tier-item stagger ${item.highlight ? 'highlighted' : ''}`}
                    style={{ '--i': itemIdx } as React.CSSProperties}
                  >
                    <span className="item-name">{item.name}</span>
                    <span className="item-desc">{item.description}</span>
                    {item.highlight && <span className="rec-badge">recommended</span>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {footnote && (
        <p className="footnote stagger" style={{ '--i': idx } as React.CSSProperties}>
          {footnote}
        </p>
      )}
    </div>
  );
}

/* ── Modes Slide ── */
const NORMAL_DURATIONS = [1000, 1000, 1000, 1000, 1000, 2000];
const NORMAL_POSITIONS: [number, number][] = [
  [0, 9],   // greet
  [1, 9],   // j — down
  [1, 25],  // $ — end of line
  [1, 21],  // b — name
  [1, 19],  // b — +
  [0, 9],   // gap
];
const NORMAL_LINES = [
  'function greet(name) {',
  '  return "Hello, " + name;',
  '}',
];
const VISUAL_DURATIONS = [500, 600, 500, 500, 800, 500, 2500];
const VISUAL_WIDTHS = [0, 7, 9, 12, 17, 17, 0];
const VISUAL_SEL_START = 9;
const VISUAL_LINE_ORIG = '  return "Hello, " + name;';
const VISUAL_LINE_UPPER = '  return "HELLO, " + NAME;';
const CMD_COMMANDS = [':wq', ':set number', ':%s/Hello/World/g'];

function VisualModeBuffer() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let current = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      current = (current + 1) % VISUAL_DURATIONS.length;
      setPhase(current);
      timer = setTimeout(tick, VISUAL_DURATIONS[current]);
    };
    timer = setTimeout(tick, VISUAL_DURATIONS[0]);
    return () => clearTimeout(timer);
  }, []);

  const w = VISUAL_WIDTHS[phase];
  const isUpper = phase === 5 || phase === 6;
  const line = isUpper ? VISUAL_LINE_UPPER : VISUAL_LINE_ORIG;

  let line2Content: React.ReactNode;
  if (w > 0) {
    const before = line.slice(0, VISUAL_SEL_START);
    const selected = line.slice(VISUAL_SEL_START, VISUAL_SEL_START + w);
    const after = line.slice(VISUAL_SEL_START + w);
    line2Content = (
      <>
        {before}
        <span className="mode-visual-hl">{selected}</span>
        {after}
      </>
    );
  } else {
    line2Content = line;
  }

  return (
    <>
      <div className="mode-editor-line">
        <span className="mode-editor-ln">1</span>
        <span className="mode-editor-code">function greet(name) {'{'}</span>
      </div>
      <div className="mode-editor-line">
        <span className="mode-editor-ln">2</span>
        <span className="mode-editor-code">{line2Content}</span>
      </div>
      <div className="mode-editor-line">
        <span className="mode-editor-ln">3</span>
        <span className="mode-editor-code">{'}'}</span>
      </div>
    </>
  );
}

function NormalModeBuffer() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let current = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      current = (current + 1) % NORMAL_DURATIONS.length;
      setStep(current);
      timer = setTimeout(tick, NORMAL_DURATIONS[current]);
    };
    timer = setTimeout(tick, NORMAL_DURATIONS[0]);
    return () => clearTimeout(timer);
  }, []);

  const [cursorLine, cursorCol] = NORMAL_POSITIONS[step];

  return (
    <>
      {NORMAL_LINES.map((line, i) => {
        let content: React.ReactNode;
        if (i === cursorLine) {
          content = (
            <>
              {line.slice(0, cursorCol)}
              <span className="mode-normal-cursor">{line[cursorCol]}</span>
              {line.slice(cursorCol + 1)}
            </>
          );
        } else {
          content = line;
        }
        return (
          <div key={i} className="mode-editor-line">
            <span className="mode-editor-ln">{i + 1}</span>
            <span className="mode-editor-code">{content}</span>
          </div>
        );
      })}
    </>
  );
}

function ModeBuffer({ modeId }: { modeId: string }) {
  if (modeId === 'visual') return <VisualModeBuffer />;
  if (modeId === 'normal') return <NormalModeBuffer />;

  const lines = [
    { num: '1', code: 'function greet(name) {' },
    { num: '2', code: '  return "Hello, " + name;' },
    { num: '3', code: '}' },
  ];

  return (
    <>
      {lines.map((line, i) => (
        <div key={i} className="mode-editor-line">
          <span className="mode-editor-ln">{line.num}</span>
          <span className="mode-editor-code">{line.code}</span>
        </div>
      ))}
      {modeId === 'insert' && (
        <div className="mode-editor-line">
          <span className="mode-editor-ln">4</span>
          <span className="mode-insert-text">greet("World")</span>
        </div>
      )}
    </>
  );
}

function CommandAnimation() {
  const [cmdIdx, setCmdIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const cmd = CMD_COMMANDS[cmdIdx];
    if (charCount < cmd.length) {
      const timer = setTimeout(() => setCharCount(c => c + 1), 120);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setCmdIdx((prev) => (prev + 1) % CMD_COMMANDS.length);
      setCharCount(0);
    }, 2000);
    return () => clearTimeout(timer);
  }, [cmdIdx, charCount]);

  return (
    <>
      <span className="mode-cmd-displayed">
        {CMD_COMMANDS[cmdIdx].slice(0, charCount)}
      </span>
      <span className="mode-cmd-cursor-el" />
    </>
  );
}

function ModeStatus({ modeId }: { modeId: string }) {
  switch (modeId) {
    case 'normal':  return <span className="mode-bar-label">NORMAL</span>;
    case 'insert':  return <span className="mode-bar-label">-- INSERT --</span>;
    case 'visual':  return <span className="mode-bar-label">-- VISUAL --</span>;
    case 'command': return <CommandAnimation />;
    default:        return null;
  }
}

export function ModesSlide({ title, modes, activeMode }: ModesSlideData & { activeMode: number }) {
  return (
    <div className="slide modes-slide">
      <h2 className="slide-title stagger" style={{ '--i': 0 } as React.CSSProperties}>{title}</h2>
      <div className="modes-tabs stagger" style={{ '--i': 1 } as React.CSSProperties}>
        {modes.map((mode, i) => (
          <div
            key={mode.id}
            className={`mode-pill${i === activeMode ? ' active' : ''}`}
          >
            {mode.name}
          </div>
        ))}
      </div>
      {activeMode >= 0 && (
        <div className="modes-body" key={activeMode}>
          <p className="mode-desc">{modes[activeMode].description}</p>
          <div className="mode-editor">
            <div className="mode-editor-lines">
              <ModeBuffer modeId={modes[activeMode].id} />
            </div>
            <div className="mode-editor-bar">
              <ModeStatus modeId={modes[activeMode].id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Closing Slide ── */
export function ClosingSlide({ title, command }: ClosingSlideData) {
  const [displayedCmd, setDisplayedCmd] = useState('');
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 100);
    const t2 = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayedCmd(command.slice(0, i));
        if (i >= command.length) clearInterval(interval);
      }, 150);
    }, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [command]);

  return (
    <div className="slide closing-slide">
      <h2 className={`closing-title ${showTitle ? 'visible' : ''}`}>{title}</h2>
      <p className="closing-command">
        {displayedCmd}
        <span className="cursor-block blink">_</span>
      </p>
    </div>
  );
}
