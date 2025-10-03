import React from 'react';
import type { User } from '../../types';
import SeekerDashboard from '../SeekerDashboard';
import EmployerDashboard from '../EmployerDashboard';

const DashboardHome: React.FC<{ user: User }> = ({ user }) => {
    return user.role === 'seeker' ? <SeekerDashboard /> : <EmployerDashboard />;
};

export default DashboardHome;
