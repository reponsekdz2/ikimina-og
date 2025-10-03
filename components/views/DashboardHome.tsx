import React from 'react';
import type { User, Job, Ikimina } from '../../types';
import JobCard from '../JobCard';
import IkiminaCard from '../IkiminaCard';
import Widget from '../shared/Widget';
import { JOBS_DATA, IKIMINA_DATA } from '../../constants';

interface DashboardHomeProps {
    user: User;
    onApplyClick: (job: Job) => void;
    onManageIkimina: (ikimina: Ikimina) => void;
}

const SeekerHome: React.FC<Pick<DashboardHomeProps, 'onApplyClick'>> = ({ onApplyClick }) => (
    <>
        <Widget title="Recommended Jobs">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {JOBS_DATA.map(job => (
                    <JobCard key={job.id} job={job} onApplyClick={onApplyClick} />
                ))}
            </div>
        </Widget>

        <Widget title="Join an Ikimina">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {IKIMINA_DATA.map(group => (
                    <IkiminaCard key={group.id} group={group} role="seeker" />
                ))}
            </div>
        </Widget>
    </>
);

const EmployerHome: React.FC<Pick<DashboardHomeProps, 'user' | 'onApplyClick' | 'onManageIkimina'>> = ({ user, onApplyClick, onManageIkimina }) => (
    <>
        <div className="flex justify-between items-center mb-8">
            {/* Fix: Replaced undefined 'name' variable with 'user.name' from props to fix the error. */}
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">Welcome, {user.name}!</h2>
            <button className="px-6 py-2 bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-semibold rounded-full hover:shadow-lg transition">Post a New Job</button>
        </div>
        
        <Widget title="Your Ikimina Groups">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {IKIMINA_DATA.slice(0, 3).map(group => (
                    <IkiminaCard key={group.id} group={group} role="employer" onManage={onManageIkimina} />
                ))}
            </div>
        </Widget>

        <Widget title="Your Job Postings">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {JOBS_DATA.slice(0, 3).map(job => (
                    <JobCard key={job.id} job={job} onApplyClick={onApplyClick} />
                ))}
            </div>
        </Widget>
    </>
);


const DashboardHome: React.FC<DashboardHomeProps> = ({ user, onApplyClick, onManageIkimina }) => {
    return (
        <div className="space-y-8">
            {user.role === 'seeker' && <SeekerHome onApplyClick={onApplyClick} />}
            {user.role === 'employer' && <EmployerHome user={user} onApplyClick={onApplyClick} onManageIkimina={onManageIkimina} />}
        </div>
    );
};

export default DashboardHome;