
import React from 'react';
import type { Job } from '../types';

interface JobCardProps {
    job: Job;
    onApplyClick: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApplyClick }) => {
    return (
        <div className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-rwanda-blue dark:hover:border-rwanda-blue/50">
            <h4 className="text-lg font-bold text-slate-800 dark:text-white truncate">{job.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{job.employer}</p>
            <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-semibold text-rwanda-green">{job.salary}</span>
                <span className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900/50 dark:text-blue-300">{job.type}</span>
            </div>
            <button
                onClick={() => onApplyClick(job)}
                className="w-full mt-6 py-2 px-4 bg-rwanda-blue text-white font-semibold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            >
                Apply Now
            </button>
        </div>
    );
};

export default JobCard;
