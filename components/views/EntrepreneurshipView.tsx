import React from 'react';
import type { User } from '../../types';
import Widget from '../shared/Widget';

interface EntrepreneurshipViewProps {
    user: User;
}

const EntrepreneurshipView: React.FC<EntrepreneurshipViewProps> = ({ user }) => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">Entrepreneurship Hub</h2>
            <Widget title="Upcoming Workshops">
                <p>No workshops scheduled at this time. Check back soon!</p>
            </Widget>
             <Widget title="Resources">
                <ul>
                    <li><a href="#" className="text-rwanda-blue hover:underline">How to write a business plan</a></li>
                    <li><a href="#" className="text-rwanda-blue hover:underline">Funding opportunities in Rwanda</a></li>
                </ul>
            </Widget>
        </div>
    );
};

export default EntrepreneurshipView;
