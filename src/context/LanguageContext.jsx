import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLang;
    }
  }, [currentLang]);

  const changeLanguage = (lang) => {
    if (['en', 'hi', 'mr'].includes(lang)) {
      setCurrentLang(lang);
    }
  };

  // Helper function to get translation based on key string path, e.g. t('nav.features')
  const t = (path) => {
    const keys = path.split('.');
    let currentObject = translations[currentLang] || translations['en'];
    let fallbackObject = translations['en'];

    for (const key of keys) {
      if (currentObject && currentObject[key] !== undefined) {
        currentObject = currentObject[key];
      } else {
        currentObject = null;
      }

      if (fallbackObject && fallbackObject[key] !== undefined) {
        fallbackObject = fallbackObject[key];
      } else {
        fallbackObject = null;
      }
    }

    return currentObject !== null ? currentObject : (fallbackObject !== null ? fallbackObject : path);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t }}>
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
