import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from '../hooks';
import { LANGUAGES, Language } from '../translations';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLanguageChange = (langCode: Language) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <FaGlobe />
                <span>{language.toUpperCase()}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 py-1">
                    {LANGUAGES.map(lang => (
                         <a
                            href="#"
                            key={lang.code}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLanguageChange(lang.code);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm ${language === lang.code ? 'bg-rwanda-blue/10 text-rwanda-blue font-semibold' : 'text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700'}`}
                         >
                            {lang.name}
                         </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;