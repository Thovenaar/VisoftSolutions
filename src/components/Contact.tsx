import { ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import translations from '../i18n';
import FadeIn from './FadeIn';
import MosaicStrip from './MosaicStrip';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const { language } = useAppContext();
  const t = translations[language].contact;

  return (
    <section id="contact" className="mt-24 md:mt-32 bg-surface border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-20 md:pt-28 pb-10">
        <FadeIn className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-end">
          <div>
            <SectionHeader label={t.label} title={t.title} />
            <p className="mt-6 text-lg md:text-[19px] leading-relaxed text-body">{t.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:thomas@visoftsolutions.nl"
              className="flex justify-between items-center gap-4 px-6 py-5.5 rounded-xl bg-primary text-on-primary hover:opacity-90 transition-opacity"
            >
              <span className="min-w-0">
                <span className="block font-mono text-xs opacity-70">{t.email}</span>
                <span className="block text-lg sm:text-[19px] font-semibold truncate">thomas@visoftsolutions.nl</span>
              </span>
              <ArrowUpRight size={20} className="shrink-0" />
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-vieveen-b06773102/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center gap-4 px-6 py-5.5 rounded-xl border border-line text-ink hover:bg-chip transition-colors"
            >
              <span>
                <span className="block font-mono text-xs text-muted">{t.linkedin}</span>
                <span className="block text-lg sm:text-[19px] font-semibold">Thomas Vieveen</span>
              </span>
              <ArrowUpRight size={20} className="shrink-0" />
            </a>
          </div>
        </FadeIn>

        <footer className="mt-20 pt-7 border-t border-line flex flex-col sm:flex-row gap-4 justify-between sm:items-center font-mono text-[13px] text-muted">
          <span>© {new Date().getFullYear()} ViSoft Solutions · KVK 94481784</span>
          <MosaicStrip variant="squares" />
        </footer>
      </div>
    </section>
  );
}
