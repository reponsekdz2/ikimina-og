import React, { useState } from 'react';
import type { Role, AuthScreen, User } from '../../types';
import Login from './Login';
import Register from './Register';
import { useTranslations } from '../../hooks';

interface AuthPageProps {
  role: Role;
  onAuthSuccess: (user: User) => void;
  onCancel: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ role, onAuthSuccess, onCancel }) => {
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const { t } = useTranslations();

  const switchToRegister = () => setAuthScreen('register');
  const switchToLogin = () => setAuthScreen('login');

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 dark:from-slate-800 dark:via-slate-900 dark:to-black">
      <div className="w-full max-w-md relative">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-slate-700/50">
           <button onClick={onCancel} className="absolute top-4 left-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition">&larr; {t('auth.back')}</button>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-slate-800 dark:text-white">{t('auth.welcome')}</h1>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              {t('auth.signInAs', { role: role })}
            </p>
          </div>

          {authScreen === 'login' ? (
            <Login role={role} onAuthSuccess={onAuthSuccess} switchToRegister={switchToRegister} />
          ) : (
            <Register role={role} onAuthSuccess={onAuthSuccess} switchToLogin={switchToLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;