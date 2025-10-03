import React from 'react';
import { DashboardView, User } from '../types';
import { DashboardIcon, IkiminaIcon, WalletIcon, EntrepreneurshipIcon, UserIcon as ProfileIcon, LogoutIcon, ForumIcon } from '../constants';
import { useTranslations } from '../hooks';

interface SidebarProps {
    activeView: DashboardView;
    setActiveView: (view: DashboardView) => void;
    onLogout: () => void;
    user: User;
}

const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                ? 'bg-rwanda-green/20 text-rwanda-green' 
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
        >
            {icon}
            <span className="font-semibold">{label}</span>
        </button>
    );
};


const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, onLogout, user }) => {
    const { t } = useTranslations();
    const navItems = [
        { id: 'dashboard', label: t('sidebar.nav.dashboard'), icon: <DashboardIcon className="h-6 w-6" /> },
        { id: 'ikimina', label: t('sidebar.nav.ikimina'), icon: <IkiminaIcon className="h-6 w-6" /> },
        { id: 'wallet', label: t('sidebar.nav.wallet'), icon: <WalletIcon className="h-6 w-6" /> },
        { id: 'entrepreneurship', label: t('sidebar.nav.learn'), icon: <EntrepreneurshipIcon className="h-6 w-6" /> },
        { id: 'forum', label: t('sidebar.nav.forum'), icon: <ForumIcon className="h-6 w-6" /> },
        { id: 'profile', label: t('sidebar.nav.profile'), icon: <ProfileIcon className="h-6 w-6" /> },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-slate-800 flex-shrink-0 flex flex-col p-4 border-r border-gray-200 dark:border-slate-700">
            <div className="flex-shrink-0 px-4 mb-8">
                <h1 className="text-2xl font-bold font-display text-slate-800 dark:text-white">
                    KaziConnect<span className="text-rwanda-green">.</span>
                </h1>
            </div>

            <div className="flex items-center space-x-3 mb-8 px-2">
                <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <p className="font-bold text-slate-800 dark:text-white truncate">{user.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{user.role}</p>
                </div>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map(item => (
                    <NavItem 
                        key={item.id}
                        label={item.label}
                        icon={item.icon}
                        isActive={activeView === item.id}
                        onClick={() => setActiveView(item.id as DashboardView)}
                    />
                ))}
            </nav>

            <div>
                <button 
                    onClick={onLogout}
                    className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                    <LogoutIcon className="h-6 w-6" />
                    <span className="font-semibold">{t('sidebar.nav.logout')}</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;