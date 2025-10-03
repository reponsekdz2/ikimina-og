import React from 'react';
import { useTranslations } from '../hooks';
import type { User } from '../types';

interface SidebarProps {
    user: User;
    activeView: string;
    setActiveView: (view: string) => void;
    onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, activeView, setActiveView, onLogout }) => {
    const { t } = useTranslations();
    
    const baseNav = [
        { id: 'dashboard', label: t('sidebar.dashboard') },
        { id: 'ikimina', label: t('sidebar.ikimina') },
        { id: 'forum', label: t('sidebar.forum') },
        { id: 'stories', label: t('sidebar.stories') },
    ];
    
    const seekerNav = [
        ...baseNav,
        { id: 'wallet', label: t('sidebar.wallet') },
        { id: 'entrepreneurship', label: t('sidebar.entrepreneurship') },
        { id: 'achievements', label: t('sidebar.achievements') },
        { id: 'coach', label: t('sidebar.coach') },
        { id: 'profile', label: t('sidebar.profile') },
    ];

    const employerNav = [
        ...baseNav,
        { id: 'profile', label: t('sidebar.profile') },
    ];

    const navItems = user.role === 'seeker' ? seekerNav : employerNav;

    return (
        <aside className="w-64 bg-white dark:bg-slate-800/50 p-6 flex-col hidden lg:flex">
            <h1 className="text-2xl font-bold font-display text-rwanda-blue dark:text-white mb-10">KaziConnect</h1>
            <nav className="flex-grow">
                <ul className="space-y-2">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button 
                                onClick={() => setActiveView(item.id)} 
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeView === item.id ? 'bg-rwanda-blue/10 text-rwanda-blue font-semibold' : 'text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <button onClick={onLogout} className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
