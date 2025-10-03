import React from 'react';
import type { User } from '../../types';
import Widget from '../shared/Widget';
import { useTranslations, useAnimatedCounter } from '../../hooks';

interface WalletViewProps {
    user: User;
}

const TransactionHistory: React.FC = () => (
    <div className="divide-y divide-gray-200 dark:divide-slate-700">
        {[
            { type: 'Ikimina Contribution', amount: -25000, date: '2024-10-25' },
            { type: 'Freelance Gig Payout', amount: 50000, date: '2024-10-22' },
            { type: 'Course Fee', amount: -15000, date: '2024-10-20' },
        ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-3">
                <div>
                    <p className="font-semibold text-slate-800 dark:text-white">{tx.type}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tx.date}</p>
                </div>
                <p className={`font-bold ${tx.amount > 0 ? 'text-rwanda-green' : 'text-red-500'}`}>{tx.amount.toLocaleString()} RWF</p>
            </div>
        ))}
    </div>
);

const WalletView: React.FC<WalletViewProps> = ({ user }) => {
    const { t } = useTranslations();
    const balance = useAnimatedCounter(125000, 1500);

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('wallet.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Widget title={t('wallet.balance')}>
                    <div className="text-center">
                        <p className="text-5xl font-bold font-display text-rwanda-green">{Math.round(balance).toLocaleString()} RWF</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">{t('wallet.available')}</p>
                        <div className="mt-6 flex gap-4 justify-center">
                            <button className="px-6 py-2 bg-rwanda-blue text-white font-semibold rounded-full">{t('wallet.deposit')}</button>
                            <button className="px-6 py-2 bg-gray-200 dark:bg-slate-700 font-semibold rounded-full">{t('wallet.withdraw')}</button>
                        </div>
                    </div>
                </Widget>
                 <Widget title={t('wallet.quickActions')}>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <button className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition">
                            <span className="text-3xl">💸</span>
                            <p className="font-semibold mt-2 text-sm">{t('wallet.send')}</p>
                        </button>
                        <button className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition">
                            <span className="text-3xl">🏦</span>
                            <p className="font-semibold mt-2 text-sm">{t('wallet.loan')}</p>
                        </button>
                    </div>
                </Widget>
            </div>
            
            <Widget title={t('wallet.history')}>
                <TransactionHistory />
            </Widget>
        </div>
    );
};

export default WalletView;