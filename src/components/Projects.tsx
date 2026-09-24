import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import translations, { type ProjectCategory } from '../i18n';
import FadeIn from './FadeIn';
import MosaicStrip from './MosaicStrip';
import SectionHeader from './SectionHeader';

const tileColors = ['bg-brand-yellow', 'bg-brand-teal', 'bg-brand-red', 'bg-brand-orange', 'bg-brand-green'];
const filterKeys = ['all', 'own', 'client', 'wordpress'] as const;

/** Cards shown in the unfiltered view before "show all". */
const visibleLimit = 5;

export default function Projects() {
  const { language } = useAppContext();
  const t = translations[language].projects;
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const [showAll, setShowAll] = useState(false);

  const matches = t.items
    .map((project, i) => ({ ...project, color: tileColors[i % tileColors.length] }))
    .filter((project) => filter === 'all' || project.category === filter);
  const collapsible = filter === 'all' && matches.length > visibleLimit;
  const items = collapsible && !showAll ? matches.slice(0, visibleLimit) : matches;

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 md:pt-32">
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeader label={t.label} title={t.title} />
        <div role="group" className="flex flex-wrap gap-1 p-1 rounded-[10px] bg-chip font-mono text-[13px] self-start md:self-auto">
          {filterKeys.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={`h-11 px-4 rounded-[7px] cursor-pointer transition-colors ${
                filter === key ? 'bg-surface text-ink shadow-sm' : 'text-body hover:text-ink'
              }`}
            >
              {t.filters[key]}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="mt-11 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((project) => (
          <article key={project.name} className="rounded-2xl bg-surface border border-line p-7 flex flex-col gap-4.5">
            <div className="flex justify-between items-center min-h-11">
              <div className="flex items-center gap-3">
                <span
                  className={`size-11 rounded-[10px] ${project.color} flex items-center justify-center text-xl font-bold text-[#0F1417]`}
                >
                  {project.name[0]}
                </span>
                <span className="font-mono text-xs text-muted">{t.categories[project.category]}</span>
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.visit} ${project.name}`}
                  className="size-11 rounded-lg border border-line flex items-center justify-center text-accent hover:bg-chip transition-colors"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
            <h3 className="text-[26px] font-bold tracking-[-0.02em] text-ink">{project.name}</h3>
            <p className="leading-relaxed text-body grow">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-chip font-mono text-xs text-body">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}

        <a
          href="#contact"
          className="rounded-2xl bg-invert text-on-invert p-8 flex flex-col justify-between gap-6 min-h-64 dark:border dark:border-line group"
        >
          <MosaicStrip variant="squares" />
          <span>
            <span className="block text-[32px] font-bold tracking-[-0.02em] leading-tight">{t.cta.title}</span>
            <span className="block mt-2.5 text-invert-muted">{t.cta.text}</span>
          </span>
          <span className="flex items-center gap-2.5 font-mono text-sm text-[#3CC7B5]">
            {t.cta.action}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>

      {collapsible && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="h-11 px-4.5 rounded-lg border border-line bg-surface font-mono text-[13px] text-body hover:text-ink transition-colors cursor-pointer"
          >
            {showAll ? t.showFewer : t.showAll.replace('{n}', String(matches.length - visibleLimit))}
          </button>
        </div>
      )}
    </section>
  );
}
