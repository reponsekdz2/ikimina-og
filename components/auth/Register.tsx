import React from 'react';
import type { Role, User } from '../../types';
import { MailIcon, LockIcon, UserIcon } from '../../constants';
import { useTranslations } from '../../hooks';

interface RegisterProps {
    role: Role;
    onAuthSuccess: (user: User) => void;
    switchToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ role, onAuthSuccess, switchToLogin }) => {
    const { t } = useTranslations();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate registration
         const mockUser: User = {
            id: Date.now(),
            name: 'New User',
            email: 'new@example.com',
            role: role
        };
        onAuthSuccess(mockUser);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="sr-only">{t('auth.register.name')}</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="name" id="name" required placeholder={t('auth.register.name')} className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-rwanda-blue outline-none transition" />
                </div>
            </div>
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
            <button type="submit" className="w-full bg-gradient-to-r from-rwanda-green to-rwanda-yellow text-white font-bold py-3 px-4 rounded-full hover:shadow-lg hover:shadow-rwanda-yellow/50 transition-all duration-300">
                {t('auth.register.create')}
            </button>
            <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                {t('auth.register.haveAccount')}{' '}
                <button type="button" onClick={switchToLogin} className="font-medium text-rwanda-blue hover:underline">
                    {t('auth.register.signIn')}
                </button>
            </p>
        </form>
    );
};

export default Register;