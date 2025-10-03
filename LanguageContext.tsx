import React, { createContext, useState, useEffect, ReactNode } from 'react';
import type { Language } from './translations';

export interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('language');
            if (savedLang && ['en', 'fr', 'rw'].includes(savedLang)) {
                return savedLang as Language;
            }
             const browserLang = navigator.language.split('-')[0];
            if(browserLang === 'fr') return 'fr';
            if(browserLang === 'rw') return 'rw';
        }
        // Per project plan, Kinyarwanda is primary, but English and French are options.
        // Defaulting to English as most initial content is in English.
        return 'en';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', language);
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};