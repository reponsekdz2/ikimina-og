import React from 'react';
import type { Role, User } from '../../types';
import { MailIcon, LockIcon } from '../../constants';

interface LoginProps {
    role: Role;
    onAuthSuccess: (user: User) => void;
    switchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ role, onAuthSuccess, switchToRegister }) => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        const mockUser: User = {
            id: 1,
            name: role === 'seeker' ? 'Jane Doe' : 'Kigali Tech',
            email: 'test@example.com',
            role: role
        };
        onAuthSuccess(mockUser);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon />
                    </div>
                    <input type="email" name="email" id="email" required placeholder="Email Address" className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-rwanda-blue outline-none transition" />
                </div>
            </div>
             <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockIcon />
                    </div>
                    <input type="password" name="password" id="password" required placeholder="Password" className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-rwanda-blue outline-none transition" />
                </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-bold py-3 px-4 rounded-full hover:shadow-lg hover:shadow-rwanda-green/50 transition-all duration-300">
                Sign In
            </button>
            <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                Don't have an account?{' '}
                <button type="button" onClick={switchToRegister} className="font-medium text-rwanda-blue hover:underline">
                    Register
                </button>
            </p>
        </form>
    );
};

export default Login;
