import React from 'react';

interface RegisterProps {
    onRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
    // In a real app, this would be a full registration form.
    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-medium">Full Name</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600" />
            </div>
             <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full mt-1 p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600" />
            </div>
             <div>
                <label className="text-sm font-medium">Password</label>
                <input type="password" className="w-full mt-1 p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600" />
            </div>
            <button onClick={onRegister} className="w-full mt-4 px-4 py-3 font-semibold text-white bg-rwanda-blue rounded-lg hover:bg-opacity-90 transition">
                Create Account
            </button>
        </div>
    );
};

export default Register;
