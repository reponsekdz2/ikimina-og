import React from 'react';
import type { User } from '../../types';
import { BotIcon, UserIcon } from '../../constants';
import { useTranslations } from '../../hooks';

interface AICoachViewProps {
    user: User;
}

const AICoachView: React.FC<AICoachViewProps> = ({ user }) => {
    const { t } = useTranslations();
    
    const suggestions = [
        t('coach.suggestion1'),
        t('coach.suggestion2'),
        t('coach.suggestion3'),
    ];

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('coach.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{t('coach.subtitle')}</p>
            </div>
            
            <div className="flex-grow bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700 flex flex-col">
                <div className="flex-grow space-y-6 overflow-y-auto pr-2">
                    {/* Mock Chat History */}
                    <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rwanda-blue/10 flex items-center justify-center text-rwanda-blue">
                            <BotIcon />
                        </div>
                        <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg rounded-bl-none text-sm text-slate-700 dark:text-slate-200">
                           <p>Hello {user.name.split(' ')[0]}! I'm your AI Career Coach. How can I assist you today? You can ask me to review your CV, give you interview tips, or suggest a career path based on your skills.</p>
                        </div>
                    </div>
                     <div className="flex gap-3 justify-end">
                         <div className="p-4 bg-rwanda-blue text-white rounded-lg rounded-br-none text-sm">
                           <p>Can you give me some tips for a project manager interview?</p>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-gray-500">
                             <UserIcon className="h-6 w-6" />
                        </div>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t dark:border-slate-700">
                     <div className="flex flex-wrap gap-2 mb-4">
                        {suggestions.map(s => (
                            <button key={s} className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-slate-700/80 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">{s}</button>
                        ))}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={t('coach.placeholder')}
                            className="w-full pl-4 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none transition"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-white bg-rwanda-blue rounded-full m-1">
                           &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AICoachView;