import React, { useState, useCallback } from 'react';
import type { User, Job, Role, DashboardView, Ikimina } from '../types';
import Sidebar from './Sidebar';
import IkiminaManagementModal from './IkiminaManagementModal';
import DashboardHome from './views/DashboardHome';
import IkiminaView from './views/IkiminaView';
import WalletView from './views/WalletView';
import EntrepreneurshipView from './views/EntrepreneurshipView';
import ProfileView from './views/ProfileView';
import ForumView from './views/ForumView';
import AchievementsView from './views/AchievementsView';
import SuccessStoriesView from './views/SuccessStoriesView';
import AICoachView from './views/AICoachView';

interface DashboardProps {
  user: User;
  onApplyClick: (job: Job) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onApplyClick, isDarkMode, toggleDarkMode, onLogout }) => {
    const [currentView, setCurrentView] = useState<DashboardView>('dashboard');
    const [managingIkimina, setManagingIkimina] = useState<Ikimina | null>(null);

    const handleViewChange = (view: DashboardView) => {
        setCurrentView(view);
    };

    const handleManageIkimina = useCallback((ikimina: Ikimina) => {
        setManagingIkimina(ikimina);
    }, []);

    const handleCloseIkiminaModal = useCallback(() => {
        setManagingIkimina(null);
    }, []);

    const renderView = () => {
        switch (currentView) {
            case 'dashboard':
                return <DashboardHome user={user} onApplyClick={onApplyClick} onManageIkimina={handleManageIkimina} />;
            case 'ikimina':
                return <IkiminaView user={user} onManageIkimina={handleManageIkimina} />;
            case 'wallet':
                return <WalletView user={user} />;
            case 'entrepreneurship':
                return <EntrepreneurshipView user={user} />;
            case 'profile':
                return <ProfileView user={user} />;
            case 'forum':
                return <ForumView user={user} />;
            case 'achievements':
                return <AchievementsView user={user} />;
            case 'stories':
                return <SuccessStoriesView user={user} />;
            case 'coach':
                return <AICoachView user={user} />;
            default:
                return <DashboardHome user={user} onApplyClick={onApplyClick} onManageIkimina={handleManageIkimina} />;
        }
    };
    
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
            <Sidebar currentView={currentView} onViewChange={handleViewChange} onLogout={onLogout} />
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-20 flex items-center justify-between px-8 border-b border-gray-200 dark:border-slate-800 flex-shrink-0">
                    <div>
                        <h2 className="text-xl font-bold capitalize">{currentView}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back, {user.name}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-100 dark:bg-slate-800">
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-8">
                    {renderView()}
                </div>
            </main>
            {managingIkimina && <IkiminaManagementModal ikimina={managingIkimina} onClose={handleCloseIkiminaModal} />}
        </div>
    );
};

export default Dashboard;