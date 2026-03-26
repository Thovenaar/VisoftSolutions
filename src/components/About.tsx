import { Code2, Cloud, ShoppingCart, Users, Sparkles, Braces, BrainCircuit } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import translations from '../i18n';
import FadeIn from './FadeIn';

const skills = [
  '.NET / C#', 'Azure', 'TypeScript', 'React', 'Angular', 'Node.js',
  'Orleans', 'Azure Service Bus', 'Azure Functions', 'Cosmos DB',
  'SQL Server', 'Entity Framework', 'Docker', 'Kubernetes',
  'REST APIs', 'Microservices', 'ElasticSearch', 'Azure DevOps',
  'CI/CD', 'Bicep', 'Azure AD B2C', 'Azure Blob Storage',
  'Scrum / Agile', 'E-commerce', 'Shopify', 'Git',
  'LLMs (OpenAI, Anthropic, Gemini, Grok)', 'Azure AI Services', 'AI Integration',
];

const highlights = [
  { icon: Code2, stat: '10+', labelEn: 'Years .NET', labelNl: 'Jaar .NET' },
  { icon: Cloud, stat: '7+', labelEn: 'Years Cloud', labelNl: 'Jaar Cloud' },
  { icon: ShoppingCart, stat: '10K+', labelEn: 'Products Sold', labelNl: 'Producten Verkocht' },
  { icon: Users, stat: '7+', labelEn: 'Years Self-Employed', labelNl: 'Jaar Ondernemer' },
];

export default function About() {
  const { language } = useAppContext();
  const t = translations[language].about;

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-indigo-500/50" />
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
              {t.title}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            {language === 'en' ? (
              <>Building at the intersection of <span className="gradient-text">tech & business</span></>
            ) : (
              <>Op het snijvlak van <span className="gradient-text">technologie & business</span></>
            )}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-6 h-full">
              <Sparkles size={20} className="text-indigo-500 mb-3" />
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.p1}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-6 h-full">
              <Braces size={20} className="text-purple-500 mb-3" />
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.p2}</p>
            </div>
          </FadeIn>
        </div>

        {/* AI highlight */}
        <FadeIn delay={0.25}>
          <div className="glass rounded-2xl p-6 mb-12 border border-indigo-500/20 dark:border-indigo-400/20 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 shrink-0">
                <BrainCircuit size={22} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  {language === 'en' ? 'AI-Ready' : 'AI-Ready'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.ai}</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Stats bento grid */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map(({ icon: Icon, stat, labelEn, labelNl }, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 text-center group hover:-translate-y-1 transition-all duration-300"
              >
                <Icon
                  size={24}
                  className="mx-auto mb-3 text-gray-400 dark:text-gray-600 group-hover:text-indigo-500 transition-colors duration-300"
                />
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                  {language === 'en' ? labelEn : labelNl}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={0.2}>
          <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-4">
            {t.skillsLabel}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm rounded-lg glass text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
