import React from 'react';
import type { Ikimina } from '../types';

interface IkiminaCardProps {
    ikimina: Ikimina;
}

const IkiminaCard: React.FC<IkiminaCardProps> = ({ ikimina }) => {
    const progressPercentage = Math.round((ikimina.progress / ikimina.target) * 100);

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-white">{ikimina.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Created by {ikimina.creator}</p>
                </div>
                <span className="text-xs font-semibold bg-rwanda-blue/10 text-rwanda-blue px-2 py-1 rounded-full">{ikimina.category}</span>
            </div>
            <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">Progress</span>
                    <span className="font-bold text-rwanda-green">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-rwanda-green h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1 text-gray-500 dark:text-gray-400">
                    <span>{ikimina.progress.toLocaleString()} RWF</span>
                    <span>{ikimina.target.toLocaleString()} RWF</span>
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                <button className="px-4 py-1 bg-rwanda-blue/10 text-rwanda-blue font-semibold rounded-full text-sm">View Details</button>
            </div>
        </div>
    );
};

export default IkiminaCard;
