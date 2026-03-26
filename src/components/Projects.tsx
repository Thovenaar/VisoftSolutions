import { ExternalLink } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import translations from '../i18n';
import FadeIn from './FadeIn';

export default function Projects() {
  const { language } = useAppContext();
  const t = translations[language].projects;

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent dark:via-purple-500/[0.02] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-indigo-500/50" />
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
              {t.title}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-16">
            {language === 'en' ? (
              <>Things I&rsquo;ve <span className="gradient-text">built</span></>
            ) : (
              <>Wat ik heb <span className="gradient-text">gebouwd</span></>
            )}
          </h2>
        </FadeIn>

        <div className="space-y-16">
          {t.categories.map((category, ci) => (
            <FadeIn key={ci} delay={ci * 0.1}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((project, pi) => (
                  <div
                    key={pi}
                    className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-base font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h4>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 shrink-0 ml-3"
                          aria-label={`Visit ${project.name}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs rounded-md bg-gray-100/80 dark:bg-white/[0.04] text-gray-500 dark:text-gray-500 border border-gray-200/50 dark:border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
