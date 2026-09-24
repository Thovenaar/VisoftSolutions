import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import translations, { type VentureLogo } from '../i18n';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

function Logo({ logo, name }: { logo: VentureLogo; name: string }) {
  switch (logo) {
    case 'visoft':
      return <img src="/logo.png" alt={name} className="h-5.5 w-auto" />;
    case 'metriks':
      return <img src="/logos/metriks.svg" alt={name} className="h-7.5 w-auto" />;
    case 'xuivi':
      return <img src="/logos/xuivi.svg" alt={name} className="size-11" />;
    case 'shop':
      return (
        <span className="size-11 rounded-[10px] bg-brand-orange flex items-center justify-center text-[#0F1417]">
          <ShoppingBag size={20} />
        </span>
      );
  }
}

export default function Ventures() {
  const { language } = useAppContext();
  const t = translations[language].ventures;
  const visit = translations[language].projects.visit;

  return (
    <section id="ventures" className="mt-24 md:mt-32 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
          <SectionHeader label={t.label} title={t.title} />
          <p className="max-w-105 text-[17px] leading-relaxed text-body">{t.intro}</p>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {t.items.map((venture, i) => (
            <FadeIn key={venture.name} delay={(i % 2) * 0.1} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-canvas p-7 flex flex-col gap-4">
                <div className="flex justify-between items-center min-h-11">
                  <Logo logo={venture.logo} name={venture.name} />
                  <span className="font-mono text-[13px] text-muted">{venture.period}</span>
                </div>
                <div>
                  <h3 className="text-[26px] font-bold tracking-[-0.02em] text-ink flex items-center gap-2">
                    {venture.url ? (
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${visit} ${venture.name}`}
                        className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                      >
                        {venture.name}
                        <ArrowUpRight size={18} className="text-accent" />
                      </a>
                    ) : (
                      venture.name
                    )}
                  </h3>
                  <div className="mt-1 font-mono text-sm text-accent">{venture.role}</div>
                </div>
                <p className="leading-relaxed text-body grow">{venture.description}</p>
                <div className="flex gap-6 pt-4 border-t border-line">
                  {venture.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[22px] font-bold text-ink">{stat.value}</div>
                      <div className="font-mono text-xs text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
