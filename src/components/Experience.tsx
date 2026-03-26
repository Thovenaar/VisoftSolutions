import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import translations from '../i18n';
import FadeIn from './FadeIn';

export default function Experience() {
  const { language } = useAppContext();
  const t = translations[language].experience;

  return (
    <section id="experience" className="relative py-32 px-6">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent dark:via-indigo-500/[0.02] pointer-events-none" />

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
              <>Where I&rsquo;ve <span className="gradient-text">made impact</span></>
            ) : (
              <>Waar ik <span className="gradient-text">impact</span> heb gemaakt</>
            )}
          </h2>
        </FadeIn>

        {/* Work timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-6">
            {t.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-xl glass items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={16} />
                  </div>

                  <div className="glass rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.company}
                        </h3>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                          {item.role}
                        </p>
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-600 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-20 mb-8 tracking-tight flex items-center gap-3">
            <GraduationCap size={22} className="text-purple-500" />
            {t.educationTitle}
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {t.education.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                <span className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 block">
                  {item.period}
                </span>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  {item.institution}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-500">{item.degree}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certificates */}
        <FadeIn>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-16 mb-8 tracking-tight flex items-center gap-3">
            <Award size={22} className="text-amber-500" />
            {t.certificatesTitle}
          </h3>
        </FadeIn>

        <div className="flex flex-wrap gap-4">
          {t.certificates.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-500">{cert.issuer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
