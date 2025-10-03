import React from 'react';
import type { User, Transaction } from '../../types';
import { MOCK_TRANSACTIONS } from '../../constants';
import Widget from '../shared/Widget';
import { useTranslations } from '../../hooks';

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
    const { t } = useTranslations();
    const balance = 250000; // Mock balance

    const getScoreColor = (score: number) => {
        if (score > 700) return 'text-green-500';
        if (score > 600) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('wallet.title')}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                     <Widget title={t('wallet.balance')}>
                         <div className="p-6 text-center">
                            <p className="text-lg text-gray-500 dark:text-gray-400">{t('wallet.currentBalance')}</p>
                            <p className="text-5xl font-bold font-display text-rwanda-green my-2">{balance.toLocaleString()} RWF</p>
                            <div className="flex justify-center gap-4 mt-6">
                                <button className="px-6 py-2 bg-rwanda-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">{t('wallet.deposit')}</button>
                                 <button className="px-6 py-2 bg-gray-200 dark:bg-slate-700 font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition">{t('wallet.payLoan')}</button>
                                 <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-opacity-90 transition">{t('wallet.withdraw')}</button>
                            </div>
                        </div>
                    </Widget>
                </div>
                 <div className="lg:col-span-1">
                     <Widget title={t('wallet.creditScore')}>
                        <div className="p-6 text-center flex flex-col items-center justify-center h-full">
                           <p className="text-lg text-gray-500 dark:text-gray-400">{t('wallet.creditScoreValue')}</p>
                           <p className={`text-5xl font-bold font-display my-2 ${getScoreColor(user.creditScore || 0)}`}>{user.creditScore || 'N/A'}</p>
                           <p className="text-xs text-gray-500 dark:text-gray-400">{t('wallet.creditScoreDesc')}</p>
                       </div>
                    </Widget>
                </div>
            </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2">
                     <Widget title={t('wallet.history')}>
                        <div className="divide-y divide-gray-200 dark:divide-slate-700">
                            {MOCK_TRANSACTIONS.map(tx => (
                                <TransactionRow key={tx.id} transaction={tx} />
                            ))}
                        </div>
                    </Widget>
                 </div>
                 <div className="lg:col-span-1">
                      <Widget title={t('wallet.requestLoan')}>
                        <form className="space-y-4 p-2">
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('wallet.loanAmount')}</label>
                                <input type="number" placeholder="e.g. 100000" className="w-full mt-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
                            </div>
                             <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('wallet.loanPurpose')}</label>
                                <input type="text" placeholder="e.g. Business startup" className="w-full mt-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
                            </div>
                            <button type="submit" className="w-full bg-rwanda-green text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-all duration-300">{t('wallet.submitRequest')}</button>
                        </form>
                    </Widget>
                 </div>
             </div>
        </div>
    );
};

export default WalletView;