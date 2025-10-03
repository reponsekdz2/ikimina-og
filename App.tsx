import React, { useState, useEffect, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import AuthPage from './components/auth/AuthPage';
import Dashboard from './components/Dashboard';
import JobApplicationModal from './components/JobApplicationModal';
// FIX: Using `import type` as these are only used as types.
import type { User, Role, Job } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [applyingForJob, setApplyingForJob] = useState<Job | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };
  
  const handleCancelAuth = () => {
      setSelectedRole(null);
  }

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedRole(null);
  };
  
  const handleApplyClick = useCallback((job: Job) => {
    setApplyingForJob(job);
  }, []);

  const handleCloseModal = useCallback(() => {
    setApplyingForJob(null);
  }, []);

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
    if (selectedRole) {
      return (
        <AuthPage
          role={selectedRole}
          onAuthSuccess={handleAuthSuccess}
          onCancel={handleCancelAuth}
        />
      );
    }
    return <LandingPage onRoleSelect={handleRoleSelect} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
  };

  return (
    <>
      {renderContent()}
      {applyingForJob && (
        <JobApplicationModal job={applyingForJob} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default App;