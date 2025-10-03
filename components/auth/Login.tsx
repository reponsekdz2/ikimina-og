import React from 'react';
import type { Role, User } from '../../types';
import { MailIcon, LockIcon, MOCK_USER } from '../../constants';
import { useTranslations } from '../../hooks';

interface LoginProps {
    role: Role;
    onAuthSuccess: (user: User) => void;
    switchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ role, onAuthSuccess, switchToRegister }) => {
    const { t } = useTranslations();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Use the detailed mock user for demonstration
        const mockUser: User = {
            ...MOCK_USER,
            role: role,
            name: role === 'seeker' ? MOCK_USER.name : 'Kigali Tech',
        };
        onAuthSuccess(mockUser);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="email" className="sr-only">{t('auth.login.email')}</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon />
                    </div>
                    <input type="email" name="email" id="email" required placeholder={t('auth.login.email')} className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-rwanda-blue outline-none transition" />
                </div>
            </div>
             <div>
                <label htmlFor="password" className="sr-only">{t('auth.login.password')}</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockIcon />
                    </div>
                    <input type="password" name="password" id="password" required placeholder={t('auth.login.password')} className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-rwanda-blue outline-none transition" />
                </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-bold py-3 px-4 rounded-full hover:shadow-lg hover:shadow-rwanda-green/50 transition-all duration-300">
                {t('auth.login.signIn')}
            </button>
            <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                {t('auth.login.noAccount')}{' '}
                <button type="button" onClick={switchToRegister} className="font-medium text-rwanda-blue hover:underline">
                    {t('auth.login.register')}
                </button>
            </p>
        </form>
    );
};

export default Login;