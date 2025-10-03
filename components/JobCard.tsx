import React from 'react';
import type { Job } from '../types';

interface JobCardProps {
    job: Job;
    onApply: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex-grow">
                <h4 className="font-bold text-lg text-slate-800 dark:text-white">{job.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{job.employer}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <span className="text-sm font-semibold text-rwanda-green">{job.salary}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">({job.type})</span>
                </div>
                <button onClick={() => onApply(job)} className="px-4 py-2 bg-rwanda-blue text-white font-semibold rounded-full text-sm hover:bg-opacity-90 transition">
                    Apply
                </button>
            </div>
        </div>
    );
};

export default JobCard;
