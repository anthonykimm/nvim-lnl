interface StatuslineProps {
  slideIndex: number;
  totalSlides: number;
}

export function Statusline({ slideIndex, totalSlides }: StatuslineProps) {
  const pct = Math.round(((slideIndex + 1) / totalSlides) * 100);

  return (
    <div className="statusline">
      <span className="sl-mode">NORMAL</span>
      <span className="sl-file">presentation.md</span>
      <span className="sl-spacer" />
      <span className="sl-info">markdown</span>
      <span className="sl-pos">{slideIndex + 1}:1</span>
      <span className="sl-pct">{pct === 100 ? 'Bot' : `${pct}%`}</span>
    </div>
  );
}
