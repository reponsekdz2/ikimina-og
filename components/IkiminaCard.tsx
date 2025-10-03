import React from 'react';
import type { Ikimina, Role } from '../types';

interface IkiminaCardProps {
    group: Ikimina;
    role: Role;
    onManage?: (group: Ikimina) => void;
}

const IkiminaCard: React.FC<IkiminaCardProps> = ({ group, role, onManage }) => {
    const progress = group.progress;
    const circumference = 2 * Math.PI * 52; // 2 * pi * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const categoryColors = {
        Business: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        Youth: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        Personal: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
        Agriculture: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300',
    };

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start">
                    <div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[group.category]}`}>{group.category}</span>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white mt-2">{group.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">by {group.creator}</p>
                    </div>
                    <div className="relative">
                        <svg className="w-28 h-28 transform -rotate-90">
                            <circle className="text-gray-200 dark:text-slate-700" strokeWidth="8" stroke="currentColor" fill="transparent" r="52" cx="56" cy="56" />
                            <circle className="text-rwanda-green" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" stroke="currentColor" fill="transparent" r="52" cx="56"cy="56" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-rwanda-green">{progress}%</span>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Target: <span className="font-bold text-slate-800 dark:text-white">{group.target.toLocaleString()} RWF</span></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Members: <span className="font-bold text-slate-800 dark:text-white">{group.members.length}</span></p>
                </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
                {role === 'seeker' && (
                    <>
                        <button className="w-full py-2 px-4 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition">Join Group</button>
                        <button className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-full hover:bg-opacity-90 transition text-sm">Request Loan</button>
                    </>
                )}
                {role === 'employer' && <button onClick={() => onManage && onManage(group)} className="w-full py-2 px-4 bg-rwanda-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">Manage Group</button>}
            </div>
        </div>
    );
};

export default IkiminaCard;
