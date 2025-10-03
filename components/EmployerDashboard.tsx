import React from 'react';
import Widget from './shared/Widget';
import { MOCK_SEEKER_USER } from '../constants'; // Using as a mock applicant

const ApplicantCard = ({ applicant }: { applicant: any }) => (
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/70 rounded-lg">
        <div className="flex items-center gap-4">
            <img src={applicant.cvData.photoUrl} alt={applicant.name} className="w-12 h-12 rounded-full" />
            <div>
                <p className="font-semibold text-slate-800 dark:text-white">{applicant.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{applicant.cvData.experience[0]?.title || 'No experience listed'}</p>
            </div>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-1 bg-rwanda-blue/10 text-rwanda-blue font-semibold rounded-full text-sm">View CV</button>
            <button className="px-4 py-1 bg-rwanda-green text-white font-semibold rounded-full text-sm">Message</button>
        </div>
    </div>
);


const EmployerDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
        <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">Employer Dashboard</h2>
            <button className="px-6 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition">Post a New Job</button>
        </div>

        <Widget title="Recent Applicants for 'React Frontend Developer'">
            <div className="space-y-4">
                <ApplicantCard applicant={MOCK_SEEKER_USER} />
                {/* Add more mock applicants if needed */}
            </div>
        </Widget>
         <Widget title="Your Job Postings">
            <p className="text-slate-500 dark:text-slate-400">You have 2 active job postings.</p>
        </Widget>
    </div>
  );
};

export default EmployerDashboard;
