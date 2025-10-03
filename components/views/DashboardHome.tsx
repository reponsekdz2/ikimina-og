import React from 'react';
import type { User, Job, Ikimina, FreelanceGig } from '../../types';
import JobCard from '../JobCard';
import IkiminaCard from '../IkiminaCard';
import Widget from '../shared/Widget';
import { JOBS_DATA, IKIMINA_DATA, MOCK_GIGS } from '../../constants';
import { useTranslations } from '../../hooks';

interface DashboardHomeProps {
    user: User;
    onApplyClick: (job: Job) => void;
    onManageIkimina: (ikimina: Ikimina) => void;
}

const SummaryCard = ({ title, value, icon }: { title: string, value: string, icon: string }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex items-center gap-4">
        <div className="text-3xl bg-gray-100 dark:bg-slate-700 p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold font-display text-slate-800 dark:text-white">{value}</p>
        </div>
    </div>
);


const GigCard: React.FC<{ gig: FreelanceGig }> = ({ gig }) => (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
        <h5 className="font-bold text-slate-800 dark:text-white">{gig.title}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">{gig.client}</p>
        <div className="flex flex-wrap gap-1 mt-2">
            {gig.skills.map(skill => (
                <span key={skill} className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-slate-700 rounded-full">{skill}</span>
            ))}
        </div>
        <div className="mt-3 flex justify-between items-center">
            <span className="text-md font-bold text-rwanda-green">{gig.budget}</span>
            <button className="px-3 py-1 text-sm bg-rwanda-blue text-white font-semibold rounded-full">View</button>
        </div>
    </div>
);

const SeekerHome: React.FC<Pick<DashboardHomeProps, 'onApplyClick' | 'user'>> = ({ onApplyClick, user }) => {
    const { t } = useTranslations();
    return (
    <>
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('dashboard.seeker.welcome', { name: user.name.split(' ')[0] })}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t('dashboard.seeker.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <SummaryCard title={t('dashboard.seeker.summary.matches')} value="4" icon="🎯" />
            <SummaryCard title={t('dashboard.seeker.summary.savings')} value="75%" icon="💰" />
            <SummaryCard title={t('dashboard.seeker.summary.course')} value="In Progress" icon="🎓" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <Widget title={t('dashboard.seeker.aiJobs')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {JOBS_DATA.filter(j => j.isFeatured).map(job => (
                            <JobCard key={job.id} job={job} onApplyClick={onApplyClick} />
                        ))}
                    </div>
                </Widget>
                 <Widget title={t('dashboard.seeker.recommendedJobs')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {JOBS_DATA.filter(j => !j.isFeatured).map(job => (
                            <JobCard key={job.id} job={job} onApplyClick={onApplyClick} />
                        ))}
                    </div>
                </Widget>
            </div>
            <div className="lg:col-span-1 space-y-8">
                <Widget title={t('dashboard.seeker.freelance')}>
                    <div className="space-y-4">
                        {MOCK_GIGS.map(gig => <GigCard key={gig.id} gig={gig} />)}
                    </div>
                </Widget>
                 <Widget title={t('dashboard.seeker.joinIkimina')}>
                    <IkiminaCard group={IKIMINA_DATA[0]} role="seeker" />
                </Widget>
            </div>
        </div>
    </>
    );
};

const EmployerHome: React.FC<Pick<DashboardHomeProps, 'user' | 'onApplyClick' | 'onManageIkimina'>> = ({ user, onApplyClick, onManageIkimina }) => {
    const { t } = useTranslations();
    return (
    <>
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('dashboard.employer.welcome', {name: user.name})}</h2>
            <div>
                <button className="px-6 py-2 bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-semibold rounded-full hover:shadow-lg transition">{t('dashboard.employer.postJob')}</button>
                <p className="text-xs text-center mt-1 text-gray-500 dark:text-gray-400">{t('dashboard.employer.postJobSubtitle')}</p>
            </div>
        </div>
        
        <Widget title={t('dashboard.employer.yourIkimina')}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {IKIMINA_DATA.slice(0, 3).map(group => (
                    <IkiminaCard key={group.id} group={group} role="employer" onManage={onManageIkimina} />
                ))}
            </div>
        </Widget>

        <Widget title={t('dashboard.employer.yourJobs')}>
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {JOBS_DATA.slice(0, 3).map(job => (
                    <JobCard key={job.id} job={job} onApplyClick={onApplyClick} />
                ))}
            </div>
        </Widget>
    </>
);
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ user, onApplyClick, onManageIkimina }) => {
    return (
        <div className="space-y-8">
            {user.role === 'seeker' && <SeekerHome onApplyClick={onApplyClick} user={user} />}
            {user.role === 'employer' && <EmployerHome user={user} onApplyClick={onApplyClick} onManageIkimina={onManageIkimina} />}
        </div>
    );
};

export default DashboardHome;