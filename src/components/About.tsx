import { useAppContext } from '../context/useAppContext';
import translations from '../i18n';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const stack: [string, string[]][] = [
  ['backend', ['.NET / C#', 'Orleans', 'EF Core', 'Node.js']],
  ['cloud', ['Azure', 'Service Bus', 'Functions', 'Bicep']],
  ['data', ['Cosmos DB', 'SQL Server', 'ElasticSearch']],
  ['frontend', ['TypeScript', 'React', 'Angular']],
  ['infra', ['Docker', 'Kubernetes', 'Azure DevOps']],
  ['ai', ['OpenAI', 'Anthropic', 'Azure AI']],
  ['commerce', ['Shopify']],
  ['process', ['Scrum', 'CI/CD', 'Git']],
];

const keyWidth = Math.max(...stack.map(([key]) => key.length));

export default function About() {
  const { language } = useAppContext();
  const t = translations[language].about;

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 md:pt-32 grid lg:grid-cols-2 gap-12 lg:gap-18 items-start"
    >
      <FadeIn>
        <SectionHeader label={t.label} title={t.title} />
        <p className="mt-7 text-lg leading-[1.7] text-body">{t.p1}</p>
        <p className="mt-5 text-lg leading-[1.7] text-body">{t.p2}</p>
      </FadeIn>

      <FadeIn delay={0.1} className="code-card rounded-2xl overflow-hidden">
        <div className="flex border-b border-[#222B30] font-mono text-[13px]">
          <span className="px-5 py-3.5 text-[#E4E8EA] border-r border-[#222B30] shadow-[inset_0_-2px_0_#3CC7B5]">
            stack.json
          </span>
        </div>
        <pre className="m-0 px-7 pt-6 pb-7 font-mono text-[13px] sm:text-sm leading-[1.85] text-[#B4BEC3] overflow-x-auto">
          {'{\n'}
          {stack.map(([key, values], i) => (
            <span key={key}>
              {'  '}
              <span className="text-[#7FD8CB]">"{key}"</span>:{' '.repeat(keyWidth - key.length + 1)}[
              {values.map((value, j) => (
                <span key={value}>
                  <span className="text-brand-yellow">"{value}"</span>
                  {j < values.length - 1 ? ', ' : ''}
                </span>
              ))}
              ]{i < stack.length - 1 ? ',' : ''}
              {'\n'}
            </span>
          ))}
          {'}'}
        </pre>
      </FadeIn>
    </section>
  );
}
