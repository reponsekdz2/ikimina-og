import React, { useContext } from 'react';
import { LanguageContext, LanguageContextType } from './LanguageContext';
import { translations } from './translations';

export const useTranslations = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslations must be used within a LanguageProvider');
    }
    const { language, setLanguage } = context;

    const t = (key: string, replacements?: { [key: string]: string | number }) => {
        let translation = translations[language]?.[key] || translations['en'][key] || key;
        
        if (replacements && typeof translation === 'string') {
            Object.keys(replacements).forEach(placeholder => {
                const regex = new RegExp(`{${placeholder}}`, 'g');
                translation = translation.replace(regex, String(replacements[placeholder]));
            });
        }
        return translation;
    };
    
    const tc = (key: string, replacements: { [key: string]: React.ReactNode }): (string | React.ReactNode)[] => {
        const translationTemplate = translations[language]?.[key] || translations['en'][key] || key;
        if (typeof translationTemplate !== 'string') return [translationTemplate];

        const regex = new RegExp(`({${Object.keys(replacements).join('|')}})`, 'g');
        const parts = translationTemplate.split(regex).filter(part => part);

        return parts.map((part, index) => {
            if (part.startsWith('{') && part.endsWith('}')) {
                const placeholder = part.slice(1, -1);
                return React.isValidElement(replacements[placeholder]) 
                    ? React.cloneElement(replacements[placeholder] as React.ReactElement, { key: index }) 
                    : part;
            }
            return part;
        });
    };

    return { t, tc, language, setLanguage };
};