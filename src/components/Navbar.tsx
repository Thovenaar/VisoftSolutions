import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/useAppContext';
import translations from '../i18n';
import MosaicStrip from './MosaicStrip';

export default function Navbar() {
  const { theme, toggleTheme, language, toggleLanguage } = useAppContext();
  const t = translations[language].nav;
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#work', label: t.work },
    { href: '#experience', label: t.experience },
    { href: '#ventures', label: t.ventures },
    { href: '#about', label: t.about },
  ];

  const iconButton =
    'h-11 rounded-lg border border-line bg-surface text-body hover:text-ink transition-colors cursor-pointer flex items-center justify-center';

  return (
    <nav className="sticky top-0 z-50">
      <MosaicStrip />
      <div className="bg-surface/90 backdrop-blur-xl border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-18 flex items-center justify-between gap-6">
          <a href="#top" aria-label="ViSoft Solutions home" className="shrink-0">
            <img src="/logo.png" alt="ViSoft" className="h-6.5 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-8 font-mono text-sm">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-body hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-[13px]">
            <button onClick={toggleLanguage} className={`${iconButton} px-3.5`} aria-label="Toggle language">
              <span className={language === 'en' ? 'text-ink font-bold' : ''}>en</span>
              <span className="px-1.5 text-muted">|</span>
              <span className={language === 'nl' ? 'text-ink font-bold' : ''}>nl</span>
            </button>
            <button onClick={toggleTheme} className={`${iconButton} w-11`} aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a
              href="#contact"
              className="hidden sm:flex h-11 px-4.5 items-center rounded-lg bg-primary text-on-primary font-sans text-[15px] font-semibold hover:opacity-90 transition-opacity"
            >
              {t.cta}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${iconButton} w-11 lg:hidden`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-line"
            >
              {[...links, { href: '#contact', label: t.contact }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 sm:px-8 py-3.5 font-mono text-sm text-body hover:text-accent hover:bg-chip transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
