import React, { useState } from 'react';
import type { User } from '../types';
import Sidebar from './Sidebar';
import SeekerDashboard from './SeekerDashboard';
import EmployerDashboard from './EmployerDashboard';
import IkiminaView from './views/IkiminaView';
import WalletView from './views/WalletView';
import EntrepreneurshipView from './views/EntrepreneurshipView';
import ForumView from './views/ForumView';
import ProfileView from './views/ProfileView';
import AchievementsView from './views/AchievementsView';
import SuccessStoriesView from './views/SuccessStoriesView';
import AICoachView from './views/AICoachView';
import LanguageSwitcher from './LanguageSwitcher';
import { UserIcon } from '../constants';

interface DashboardProps {
    user: User;
    onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
    const [activeView, setActiveView] = useState('dashboard');

    const renderView = () => {
        switch (activeView) {
            case 'dashboard':
                return user.role === 'seeker' ? <SeekerDashboard /> : <EmployerDashboard />;
            case 'ikimina':
                return <IkiminaView user={user} />;
            case 'wallet':
                return <WalletView user={user} />;
            case 'entrepreneurship':
                return <EntrepreneurshipView user={user} />;
            case 'forum':
                return <ForumView user={user} />;
            case 'profile':
                return <ProfileView user={user} />;
            case 'achievements':
                return <AchievementsView user={user} />;
            case 'stories':
                return <SuccessStoriesView user={user} />;
            case 'coach':
                return <AICoachView user={user} />;
            default:
                return user.role === 'seeker' ? <SeekerDashboard /> : <EmployerDashboard />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
            <Sidebar user={user} activeView={activeView} setActiveView={setActiveView} onLogout={onLogout} />
            <main className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto">
                <header className="flex justify-end items-center mb-8 gap-4">
                    <LanguageSwitcher />
                    <div className="flex items-center gap-2">
                        <img src={user.cvData.photoUrl} alt={user.name} className="w-8 h-8 rounded-full" />
                        <span className="font-semibold text-sm hidden sm:inline">{user.name}</span>
                    </div>
                </header>
                <div className="flex-grow">
                    {renderView()}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
