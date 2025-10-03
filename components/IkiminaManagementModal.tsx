import React from 'react';
import type { Ikimina } from '../types';

interface IkiminaManagementModalProps {
  ikimina: Ikimina;
  onClose: () => void;
}

const IkiminaManagementModal: React.FC<IkiminaManagementModalProps> = ({ ikimina, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 w-full max-w-3xl relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold font-display text-slate-800 dark:text-white">Manage "{ikimina.name}"</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Oversee members and track contributions.</p>
        
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
                    <p className="text-2xl font-bold text-rwanda-green">{ikimina.progress}%</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Members</p>
                    <p className="text-2xl font-bold text-rwanda-blue">{ikimina.members.length}</p>
                </div>
            </div>

            <h3 className="text-lg font-bold pt-4">Members List</h3>
            <div className="divide-y divide-gray-200 dark:divide-slate-700">
                {ikimina.members.map(member => (
                    <div key={member.id} className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-4">
                            <img src={member.avatarUrl} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <p className="font-semibold text-slate-800 dark:text-white">{member.name}</p>
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${member.contributionStatus === 'Paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'}`}>
                                    {member.contributionStatus}
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="px-3 py-1 text-sm font-medium text-rwanda-blue border border-rwanda-blue rounded-full hover:bg-rwanda-blue hover:text-white transition">Approve</button>
                            <button className="px-3 py-1 text-sm font-medium text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="px-6 py-2 bg-gray-200 dark:bg-slate-700 font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition">Close</button>
        </div>
      </div>
    </div>
  );
};

export default IkiminaManagementModal;