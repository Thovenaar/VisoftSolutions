import { useAppContext } from '../context/AppContext';
import translations from '../i18n';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

export default function Experience() {
  const { language } = useAppContext();
  const t = translations[language].experience;

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 md:pt-32">
      <FadeIn>
        <SectionHeader label={t.label} title={t.title}>
          <p className="mt-3.5 text-lg text-body">{t.subtitle}</p>
        </SectionHeader>
      </FadeIn>

      <div className="mt-12">
        {t.items.map((item, i) => (
          <FadeIn key={item.company} delay={i * 0.05} className="grid md:grid-cols-[200px_minmax(0,1fr)]">
            <div className="font-mono text-sm text-muted pl-8 md:pl-0 pt-1 pb-2 md:pb-0 border-l border-rail md:border-l-0">
              {item.period}
            </div>
            <div className="relative border-l border-rail pl-8 md:pl-10 pb-11">
              <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-canvas border-2 border-accent" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-2xl font-semibold tracking-[-0.01em] text-ink">{item.company}</span>
                <span className="font-mono text-sm text-accent">{item.role}</span>
              </div>
              <p className="mt-2.5 leading-relaxed text-body max-w-215">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.education.map((item) => (
          <div key={item.degree} className="p-5.5 rounded-xl border border-line bg-surface">
            <div className="font-mono text-xs text-muted">{item.period}</div>
            <div className="mt-2 font-semibold text-ink">{item.degree}</div>
            <div className="mt-0.5 text-sm text-muted">{item.institution}</div>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
