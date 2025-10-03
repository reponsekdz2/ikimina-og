import React, { useState } from 'react';
import { User, Job, DashboardView, Ikimina } from '../types';
import Sidebar from './Sidebar';
import DashboardHome from './views/DashboardHome';
import IkiminaView from './views/IkiminaView';
import WalletView from './views/WalletView';
import EntrepreneurshipView from './views/EntrepreneurshipView';
import ProfileView from './views/ProfileView';
import IkiminaManagementModal from './IkiminaManagementModal';


interface DashboardProps {
    user: User;
    onApplyClick: (job: Job) => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    onLogout: () => void;
}

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);


const Dashboard: React.FC<DashboardProps> = ({ user, onApplyClick, isDarkMode, toggleDarkMode, onLogout }) => {
    const [activeView, setActiveView] = useState<DashboardView>('dashboard');
    const [managingIkimina, setManagingIkimina] = useState<Ikimina | null>(null);

    const renderActiveView = () => {
        switch (activeView) {
            case 'dashboard':
                return <DashboardHome user={user} onApplyClick={onApplyClick} onManageIkimina={setManagingIkimina} />;
            case 'ikimina':
                return <IkiminaView user={user} onManageIkimina={setManagingIkimina} />;
            case 'wallet':
                return <WalletView user={user} />;
            case 'entrepreneurship':
                return <EntrepreneurshipView user={user} />;
            case 'profile':
                return <ProfileView user={user} />;
            default:
                return <DashboardHome user={user} onApplyClick={onApplyClick} onManageIkimina={setManagingIkimina}/>;
        }
    }
    
    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-slate-900">
            <Sidebar activeView={activeView} setActiveView={setActiveView} onLogout={onLogout} user={user} />
            <div className="flex-1 flex flex-col">
                <header className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg sticky top-0 z-40 shadow-sm border-b border-gray-200 dark:border-slate-700">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div>
                                <h2 className="text-xl font-bold capitalize">{activeView}</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                                </button>
                                <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">Welcome, {user.name}</span>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    {renderActiveView()}
                </main>
            </div>
            {managingIkimina && (
                <IkiminaManagementModal 
                    ikimina={managingIkimina}
                    onClose={() => setManagingIkimina(null)}
                />
            )}
        </div>
    );
};

export default Dashboard;
