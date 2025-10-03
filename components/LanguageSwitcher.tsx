import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from '../hooks';
import { LANGUAGES, Language } from '../translations';

const FaGlobe = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 32c86.4 0 157.1 60.5 174.1 139.4-29.4-23.5-66.2-39.4-106.1-39.4-12.7 0-25.1 1.3-37 3.7-14.7-21.3-33.8-39.4-55.8-53.1-23.2-14.5-49.3-22.6-77.2-25.6C179.9 89.2 216.4 80 256 80zm-87.4 75.4c23.5 13.5 43.1 31.5 57.3 53.1 11.4 17.5 19.8 37.1 24.5 58.2-22.3-2-45-2-67.8-2-33.3 0-64.2 4.4-91.5 12.5C98.4 252.6 88.3 222.4 84 190.5c19.1 1.7 38.4 5.9 56.6 12.9zm87.4 232.6c-86.4 0-157.1-60.5-174.1-139.4 29.4 23.5 66.2 39.4 106.1 39.4 12.7 0 25.1-1.3 37-3.7 14.7 21.3 33.8 39.4 55.8 53.1 23.2 14.5 49.3 22.6 77.2 25.6-23.3 22.9-58.8 31.6-96.1 31.6zm87.4-75.4c-23.5-13.5-43.1-31.5-57.3-53.1-11.4-17.5-19.8-37.1-24.5-58.2 22.3 2 45 2 67.8 2 33.3 0 64.2-4.4 91.5-12.5 7.3-28-2.8-58.2-13.1-84-19.1-1.7-38.4-5.9-56.6-12.9z"></path>
    </svg>
);


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
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 py-1 z-10">
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