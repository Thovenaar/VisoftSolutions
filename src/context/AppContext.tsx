import { useState, useEffect, type ReactNode } from 'react';
import type { Language } from '../i18n';
import { AppContext } from './useAppContext';

// Only an explicit toggle is saved. These keys replace the old 'theme' and
// 'language' keys, which were written on every visit (see index.html).
const THEME_KEY = 'themeChoice';
const LANGUAGE_KEY = 'languageChoice';

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage unavailable (private mode, blocked): the choice lasts for this visit only.
  }
}

function getInitialTheme(): 'light' | 'dark' {
  return read(THEME_KEY) === 'dark' ? 'dark' : 'light';
}

function getInitialLanguage(): Language {
  const stored = read(LANGUAGE_KEY);
  if (stored === 'en' || stored === 'nl') return stored;
  return navigator.language.startsWith('nl') ? 'nl' : 'en';
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    save(THEME_KEY, next);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'nl' : 'en';
    setLanguage(next);
    save(LANGUAGE_KEY, next);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
}
