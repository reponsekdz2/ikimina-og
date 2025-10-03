import React, { useState } from 'react';
import type { Role } from '../../types';
import Login from './Login';
import Register from './Register';

interface AuthPageProps {
    onLogin: (role: Role) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-900 p-4">
            <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold font-display text-rwanda-blue">KaziConnect</h1>
                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                        {isLoginView ? 'Welcome back! Sign in to your account.' : 'Create your account to get started.'}
                    </p>
                </div>
                {isLoginView ? (
                    <Login onLogin={onLogin} />
                ) : (
                    <Register onRegister={() => setIsLoginView(true)} />
                )}
                 <p className="text-sm text-center text-slate-500 dark:text-slate-400">
                    {isLoginView ? "Don't have an account?" : 'Already have an account?'}
                    <button onClick={() => setIsLoginView(!isLoginView)} className="font-medium text-rwanda-blue hover:underline ml-1">
                        {isLoginView ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
