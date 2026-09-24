import type { ReactNode } from 'react';

interface Props {
  label: string;
  title: string;
  children?: ReactNode;
}

export default function SectionHeader({ label, title, children }: Props) {
  return (
    <div>
      <div className="font-mono text-sm text-accent">{label}</div>
      <h2 className="mt-3 text-4xl md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05] text-ink">{title}</h2>
      {children}
    </div>
  );
}
