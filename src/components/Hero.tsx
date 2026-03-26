import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import translations from '../i18n';

export default function Hero() {
  const { language } = useAppContext();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-x-clip">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[32rem] h-[32rem] bg-indigo-500/15 dark:bg-indigo-500/[0.06] rounded-full blur-[180px]" />
        <div className="absolute top-1/3 -right-48 w-[32rem] h-[32rem] bg-purple-500/15 dark:bg-purple-500/[0.06] rounded-full blur-[180px]" />
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-violet-500/10 dark:bg-violet-500/[0.04] rounded-full blur-[180px]" />
      </div>

      <div className="absolute inset-0 dot-grid opacity-60" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase rounded-full glass text-indigo-600 dark:text-indigo-400">
            {t.greeting}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 text-gray-900 dark:text-white"
        >
          Thomas
          <br />
          <span className="gradient-text">Vieveen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-500 max-w-md mx-auto mb-12 font-light"
        >
          {t.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-300 text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            {t.cta}
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm glass text-gray-700 dark:text-gray-300 hover:-translate-y-0.5 transition-all duration-300"
          >
            {language === 'en' ? 'Learn more' : 'Meer info'}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-800/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            {language === 'en' ? 'Unavailable for freelance' : 'Niet beschikbaar voor freelance'}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            {language === 'en' ? 'Available for projects' : 'Beschikbaar voor projecten'}
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
