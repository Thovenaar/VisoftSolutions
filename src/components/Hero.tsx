import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import translations from '../i18n';

const ease = [0.21, 0.47, 0.32, 0.98] as const;
const statColors = ['bg-brand-yellow', 'bg-brand-orange', 'bg-brand-red', 'bg-brand-teal'];

export default function Hero() {
  const { language } = useAppContext();
  const t = translations[language].hero;
  const stats = translations[language].stats;

  return (
    <>
      <header id="top" className="bg-blueprint border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28 grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-7"
          >
            <div className="font-mono text-sm text-accent">{t.role}</div>
            <h1 className="text-6xl sm:text-7xl xl:text-[112px] font-bold leading-[0.98] tracking-[-0.04em] text-ink">
              Thomas Vieveen
            </h1>
            <p className="text-lg md:text-[22px] leading-relaxed text-body max-w-155">{t.intro}</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#contact"
                className="px-6.5 py-4 rounded-lg bg-primary text-on-primary font-semibold hover:opacity-90 transition-opacity"
              >
                {t.cta}
              </a>
              <a
                href="#work"
                className="px-6.5 py-4 rounded-lg border border-line bg-surface font-semibold text-ink hover:border-muted transition-colors"
              >
                {t.secondary}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="rounded-2xl bg-surface border border-line shadow-[0_1px_2px_rgba(15,20,23,0.04),0_12px_32px_-12px_rgba(15,20,23,0.12)]"
          >
            <div className="p-7 pb-6 border-b border-line">
              <div className="font-mono text-xs tracking-[0.06em] uppercase text-muted">{t.currentlyLabel}</div>
              <div className="mt-2.5 text-2xl font-semibold tracking-[-0.01em] text-ink">{t.currentlyTitle}</div>
              <p className="mt-2 leading-relaxed text-body">{t.currentlyText}</p>
            </div>
            <dl className="text-[15px]">
              {t.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex justify-between gap-4 px-7 py-4 ${i < t.facts.length - 1 ? 'border-b border-line-soft' : ''}`}
                >
                  <dt className="font-mono text-[13px] text-muted">{fact.label}</dt>
                  <dd className="flex items-center gap-2 font-semibold text-ink text-right">
                    {fact.status && (
                      <span className={`size-2 rounded-full ${fact.status === 'on' ? 'bg-[#3E9A2A]' : 'bg-brand-red'}`} />
                    )}
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </header>

      <section aria-label="Highlights" className="bg-surface border-b border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 sm:px-8 lg:px-10 py-8 lg:py-9 border-line ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''} ${i === 0 ? 'lg:pl-16' : ''}`}
            >
              <div className="flex items-center gap-2 font-mono text-[13px] text-muted">
                <span className={`size-2 ${statColors[i]}`} />
                {stat.label}
              </div>
              <div className="mt-2.5 text-4xl md:text-[56px] font-bold tracking-[-0.03em] text-ink">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
