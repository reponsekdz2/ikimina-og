import React from 'react';
// FIX: Changed import path to be relative
import type { Role } from '../types';
import RoleCard from './RoleCard';
import LanguageSwitcher from './LanguageSwitcher';
// FIX: Changed import path to be relative
import { useTranslations } from '../hooks';

interface LandingPageProps {
  onRoleSelect: (role: Role) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onRoleSelect, isDarkMode, toggleDarkMode }) => {
    const { t } = useTranslations();
    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 dark:from-slate-800 dark:via-slate-900 dark:to-black transition-colors duration-500">
            <div className="absolute top-6 right-6 flex items-center gap-4">
                <LanguageSwitcher />
                <button onClick={toggleDarkMode} className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50">
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </div>
            <div className="text-center max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-extrabold font-display text-slate-800 dark:text-white">
                    <span className="text-rwanda-blue">Kazi</span><span className="text-rwanda-green">Connect</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
                   {t('landing.tagline')}
                </p>
            </div>
            <div className="mt-12 w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-center text-slate-700 dark:text-slate-200 mb-6">{t('landing.cta')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <RoleCard role="seeker" onClick={() => onRoleSelect('seeker')} />
                    <RoleCard role="employer" onClick={() => onRoleSelect('employer')} />
                </div>
            </div>
             <footer className="w-full max-w-4xl mt-16 text-center">
                <div className="bg-white/50 dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50">
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200">{t('landing.footer.newsletter.title')}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{t('landing.footer.newsletter.description')}</p>
                    <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                        <input 
                            type="email"
                            placeholder={t('landing.footer.newsletter.placeholder')}
                            className="flex-grow w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-slate-700 focus:ring-2 focus:ring-rwanda-blue outline-none transition"
                            aria-label={t('landing.footer.newsletter.placeholder')}
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-bold rounded-full hover:shadow-lg hover:shadow-rwanda-green/50 transition-all duration-300"
                        >
                            {t('landing.footer.newsletter.button')}
                        </button>
                    </form>
                </div>
            </footer>
        </main>
    );
};

export default LandingPage;