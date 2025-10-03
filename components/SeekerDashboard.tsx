import React, { useState } from 'react';
import type { Job } from '../types';
import JobCard from './JobCard';
import Widget from './shared/Widget';
import { MOCK_JOBS, MOCK_SEEKER_USER } from '../constants';
import JobApplicationModal from './JobApplicationModal';

const SeekerDashboard: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    const handleApply = (job: Job) => {
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    const handleSubmitApplication = () => {
        // Here, you might show a success message
        console.log('Application submitted!');
        setSelectedJob(null);
    };

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">Welcome, {MOCK_SEEKER_USER.name.split(' ')[0]}!</h2>
            
            <Widget title="Featured Jobs">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_JOBS.map(job => (
                        <JobCard key={job.id} job={job} onApply={handleApply} />
                    ))}
                </div>
            </Widget>

            {selectedJob && (
                <JobApplicationModal
                    job={selectedJob}
                    user={MOCK_SEEKER_USER}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitApplication}
                />
            )}
        </div>
    );
};

export default SeekerDashboard;
