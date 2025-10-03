import React, { useState, useEffect } from 'react';
import type { Role, User, Job } from './types';
import { MOCK_USER_SEEKER, MOCK_USER_EMPLOYER } from './constants';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import JobApplicationModal from './components/JobApplicationModal';
import AuthPage from './components/auth/AuthPage';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authFlow, setAuthFlow] = useState<{ active: boolean; role: Role | null }>({ active: false, role: null });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleRoleSelect = (selectedRole: Role) => {
    setAuthFlow({ active: true, role: selectedRole });
  };
  
  const handleAuthSuccess = (user: User) => {
      const fullUser = user.role === 'seeker' ? MOCK_USER_SEEKER : MOCK_USER_EMPLOYER;
      setCurrentUser({ ...fullUser, name: user.name, email: user.email });
      setAuthFlow({ active: false, role: null });
  };

  const handleAuthCancel = () => {
      setAuthFlow({ active: false, role: null });
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const renderContent = () => {
    if (currentUser) {
      return (
        <Dashboard 
          user={currentUser} 
          onApplyClick={handleApplyClick} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onLogout={handleLogout}
        />
      );
    }
    if (authFlow.active && authFlow.role) {
      return (
        <AuthPage 
          role={authFlow.role} 
          onAuthSuccess={handleAuthSuccess} 
          onCancel={handleAuthCancel}
        />
      );
    }
    return <LandingPage onRoleSelect={handleRoleSelect} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {renderContent()}
      {isModalOpen && selectedJob && (
        <JobApplicationModal job={selectedJob} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
