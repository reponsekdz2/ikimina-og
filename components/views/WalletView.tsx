import React from 'react';
import type { User, Transaction } from '../../types';
import { MOCK_TRANSACTIONS } from '../../constants';
import Widget from '../shared/Widget';

interface WalletViewProps {
    user: User;
}

const TransactionRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
    const isCredit = transaction.amount > 0;
    return (
        <div className="flex items-center justify-between py-3">
            <div>
                <p className="font-semibold text-slate-800 dark:text-white">{transaction.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date} - <span className="capitalize">{transaction.type}</span></p>
            </div>
            <p className={`font-bold text-lg ${isCredit ? 'text-green-500' : 'text-red-500'}`}>
                {isCredit ? '+' : ''}{transaction.amount.toLocaleString()} RWF
            </p>
        </div>
    );
}

const WalletView: React.FC<WalletViewProps> = ({ user }) => {
    const balance = 250000; // Mock balance

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">My Wallet</h2>
            
            <Widget title="Account Balance">
                 <div className="p-6 text-center">
                    <p className="text-lg text-gray-500 dark:text-gray-400">Current Balance</p>
                    <p className="text-5xl font-bold font-display text-rwanda-green my-2">{balance.toLocaleString()} RWF</p>
                    <div className="flex justify-center gap-4 mt-6">
                        <button className="px-6 py-2 bg-rwanda-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">Deposit</button>
                         <button className="px-6 py-2 bg-gray-200 dark:bg-slate-700 font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition">Pay Loan</button>
                         <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-opacity-90 transition">Withdraw</button>
                    </div>
                </div>
            </Widget>

            <Widget title="Transaction History">
                <div className="divide-y divide-gray-200 dark:divide-slate-700">
                    {MOCK_TRANSACTIONS.map(tx => (
                        <TransactionRow key={tx.id} transaction={tx} />
                    ))}
                </div>
            </Widget>
        </div>
    );
};

export default WalletView;
