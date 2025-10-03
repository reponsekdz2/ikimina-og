import React from 'react';
import type { DashboardView } from '../types';
import { DashboardIcon, IkiminaIcon, WalletIcon, EntrepreneurshipIcon, ProfileIcon, ForumIcon, LogoutIcon, AchievementIcon, StoriesIcon, CoachIcon } from '../constants';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from '../hooks';

interface SidebarProps {
  currentView: DashboardView;
  onViewChange: (view: DashboardView) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, onLogout }) => {
    const { t } = useTranslations();
    
    const navItems: { view: DashboardView; key: string; icon: React.ReactNode }[] = [
        { view: 'dashboard', key: 'sidebar.dashboard', icon: <DashboardIcon /> },
        { view: 'ikimina', key: 'sidebar.ikimina', icon: <IkiminaIcon /> },
        { view: 'wallet', key: 'sidebar.wallet', icon: <WalletIcon /> },
        { view: 'entrepreneurship', key: 'sidebar.entrepreneurship', icon: <EntrepreneurshipIcon /> },
        { view: 'achievements', key: 'sidebar.achievements', icon: <AchievementIcon /> },
        { view: 'stories', key: 'sidebar.stories', icon: <StoriesIcon /> },
        { view: 'forum', key: 'sidebar.forum', icon: <ForumIcon /> },
        { view: 'coach', key: 'sidebar.coach', icon: <CoachIcon /> },
        { view: 'profile', key: 'sidebar.profile', icon: <ProfileIcon /> },
    ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900/80 backdrop-blur-lg flex-shrink-0 flex flex-col border-r border-gray-200 dark:border-slate-800 transition-colors duration-500">
        <div className="h-20 flex items-center justify-center border-b border-gray-200 dark:border-slate-800">
             <h1 className="text-2xl font-extrabold font-display text-slate-800 dark:text-white">
                <span className="text-rwanda-blue">Kazi</span><span className="text-rwanda-green">Connect</span>
            </h1>
        </div>
        <nav className="flex-grow px-4 py-6 space-y-2">
            {navItems.map(item => (
                <button
                    key={item.view}
                    onClick={() => onViewChange(item.view)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-semibold transition-all duration-200 ${
                        currentView === item.view 
                        ? 'bg-rwanda-blue/10 text-rwanda-blue dark:bg-rwanda-blue/20 dark:text-rwanda-yellow' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
                >
                    {item.icon}
                    <span>{t(item.key)}</span>
                </button>
            ))}
        </nav>
        <div className="px-4 py-6 border-t border-gray-200 dark:border-slate-800 space-y-4">
            <LanguageSwitcher />
            <button
                onClick={onLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-semibold text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
                <LogoutIcon />
                <span>{t('sidebar.logout')}</span>
            </button>
        </div>
    </aside>
  );
};

export default Sidebar;