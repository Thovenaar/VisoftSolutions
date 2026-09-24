const colors = ['bg-brand-yellow', 'bg-brand-orange', 'bg-brand-red', 'bg-brand-green', 'bg-brand-teal'];

/** The five logo colors, as a full-width strip or a row of small squares. */
export default function MosaicStrip({ variant = 'strip' }: { variant?: 'strip' | 'squares' }) {
  if (variant === 'squares') {
    return (
      <span aria-hidden="true" className="flex gap-1.5">
        {colors.map((c) => (
          <span key={c} className={`size-3 ${c}`} />
        ))}
      </span>
    );
  }

  return (
    <div aria-hidden="true" className="grid grid-cols-5 h-1">
      {colors.map((c) => (
        <div key={c} className={c} />
      ))}
    </div>
  );
}
