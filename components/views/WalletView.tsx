import React from 'react';
import type { User } from '../../types';
import Widget from '../shared/Widget';

const WalletView: React.FC<{ user: User }> = ({ user }) => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">My Wallet</h2>
            <Widget title="Current Balance">
                <p className="text-4xl font-bold text-rwanda-green">50,000 RWF</p>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Available for withdrawal or use on the platform.</p>
            </Widget>
             <Widget title="Transaction History">
                <p className="text-slate-500 dark:text-slate-400">No recent transactions.</p>
            </Widget>
        </div>
    );
};

export default WalletView;
