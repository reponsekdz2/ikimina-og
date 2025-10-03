import React from 'react';
import type { Role } from '../../types';

interface LoginProps {
    onLogin: (role: Role) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    // Mock login, in a real app this would be a form with state, validation, and an API call.
    return (
        <div className="space-y-6">
            <p className="text-center text-sm text-slate-600 dark:text-slate-300">For demonstration purposes, please select a role to log in.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => onLogin('seeker')}
                    className="w-full px-4 py-3 font-semibold text-white bg-rwanda-blue rounded-lg hover:bg-opacity-90 transition"
                >
                    Login as Job Seeker
                </button>
                <button
                    onClick={() => onLogin('employer')}
                    className="w-full px-4 py-3 font-semibold text-white bg-rwanda-green rounded-lg hover:bg-opacity-90 transition"
                >
                    Login as Employer
                </button>
            </div>
        </div>
    );
};

export default Login;
