import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';
import { updateMetaTags } from '@/lib/seo';
import { useCookieConsent } from './CookieConsentContext';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(section: keyof typeof translations.en, key: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { consent } = useCookieConsent();
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the language from URL or localStorage, default to 'en'
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const storedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    
    let initialLang: Language = 'en';
    if (urlLang === 'fr' || urlLang === 'en') {
      initialLang = urlLang;
    } else if (storedLang === 'fr' || storedLang === 'en') {
      initialLang = storedLang;
    } else if (browserLang === 'fr') {
      initialLang = 'fr';
    }
    
    return initialLang;
  });

  useEffect(() => {
    // Update meta tags whenever language changes
    updateMetaTags(language);
    // Store language preference only if we have consent
    if (consent) {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = <T = string>(section: keyof typeof translations.en, key: string): T => {
    const keys = key.split('.');
    let value: any = translations[language][section];
    for (const k of keys) {
      value = value[k];
    }
    return value as T;
  };

  const value = { language, setLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
