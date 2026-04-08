interface ProgressDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export function ProgressDots({ total, current, onDotClick }: ProgressDotsProps) {
  return (
    <div className="progress-dots">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          className={`progress-dot ${i === current ? 'active' : ''}`}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
