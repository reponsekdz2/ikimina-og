import React, { useState } from 'react';
import type { Role, User } from './types';
import AuthPage from './components/auth/AuthPage';
import Dashboard from './components/Dashboard';
import { MOCK_EMPLOYER_USER, MOCK_SEEKER_USER } from './constants';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (role: Role) => {
        // In a real app, you would fetch user data after login
        if (role === 'seeker') {
            setUser(MOCK_SEEKER_USER);
        } else {
            setUser(MOCK_EMPLOYER_USER);
        }
    };

    const handleLogout = () => {
        setUser(null);
    };
    
    if (!user) {
        return <AuthPage onLogin={handleLogin} />;
    }

    return <Dashboard user={user} onLogout={handleLogout} />;
};

export default App;
