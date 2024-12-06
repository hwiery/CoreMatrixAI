import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentLanguage, setLanguage as setDataLanguage } from '../src/data/data';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getCurrentLanguage());
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const loadTranslations = async (lang) => {
    setIsLoading(true);
    try {
      const modules = {
        landing: await import(`../translations/landing_${lang}.json`),
        terms: await import(`../translations/terms_${lang}.json`),
        privacy: await import(`../translations/privacy_${lang}.json`),
        about: await import(`../translations/about_${lang}.json`),
        contact: await import(`../translations/contact_${lang}.json`),
        careers: await import(`../translations/careers_${lang}.json`),
        'join-developer': await import(`../translations/join_developer_${lang}.json`)
      };

      const loadedTranslations = Object.entries(modules).reduce((acc, [key, module]) => {
        acc[key] = module.default || {};
        return acc;
      }, {});

      console.log('Loaded translations:', loadedTranslations);

      setTranslations(loadedTranslations);
    } catch (error) {
      console.error('Failed to load translations:', error);
      setTranslations({});
    } finally {
      setIsLoading(false);
    }
  };

  const t = (key) => {
    if (!key) return '';
    
    try {
      const [page, ...rest] = key.split('.');
      const pageTranslations = translations[page];
      
      console.log('Translation lookup:', {
        key,
        page,
        rest,
        pageTranslations,
        fullTranslations: translations
      });

      if (!pageTranslations) {
        console.warn(`No translations found for page: ${page}`);
        return key;
      }

      let value = pageTranslations;
      for (const k of rest) {
        value = value?.[k];
        if (value === undefined) {
          console.warn(`Missing translation for key: ${key}`);
          return key;
        }
      }

      return value;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  const toggleLanguage = async () => {
    const newLanguage = language === 'en' ? 'ko' : 'en';
    setLanguage(newLanguage);
    setDataLanguage(newLanguage);
    await loadTranslations(newLanguage);
  };

  if (isLoading) {
    return <div>Loading translations...</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};