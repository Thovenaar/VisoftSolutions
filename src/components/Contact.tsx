import { Mail, ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import translations from '../i18n';
import FadeIn from './FadeIn';

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    icon: Mail,
    href: 'mailto:thomas@visoftsolutions.nl',
    label: 'Email',
    sublabel: 'thomas@visoftsolutions.nl',
  },
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/thomas-vieveen-b06773102/',
    label: 'LinkedIn',
    sublabel: 'Thomas Vieveen',
  },
];

export default function Contact() {
  const { language } = useAppContext();
  const t = translations[language].contact;

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-indigo-500/50" />
              <span className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
                {t.title}
              </span>
              <div className="h-px w-12 bg-indigo-500/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {language === 'en' ? (
                <>Let&rsquo;s <span className="gradient-text">work together</span></>
              ) : (
                <>Laten we <span className="gradient-text">samenwerken</span></>
              )}
            </h2>
            <p className="text-gray-500 dark:text-gray-500 max-w-md mx-auto">{t.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
          {socials.map(({ icon: Icon, href, label, sublabel }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group glass rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 block"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/[0.08] flex items-center justify-center mx-auto mb-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 flex items-center justify-center gap-1">
                  {label}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-600">{sublabel}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
