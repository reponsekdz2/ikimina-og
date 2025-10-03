import React, { useState } from 'react';
import type { User } from '../../types';
import Widget from '../shared/Widget';
import CVBuilderModal from '../CVBuilderModal';

const ProfileView: React.FC<{ user: User }> = ({ user }) => {
    const [isCvBuilderOpen, setIsCvBuilderOpen] = useState(false);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">My Profile</h2>
                <button 
                    onClick={() => setIsCvBuilderOpen(true)}
                    className="px-6 py-2 bg-rwanda-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition"
                >
                    CV Builder
                </button>
            </div>
            
            <Widget title="Personal Information">
                <div className="flex items-center gap-6">
                    <img src={user.cvData.photoUrl} alt={user.name} className="w-24 h-24 rounded-full object-cover" />
                    <div>
                        <p><strong>Name:</strong> {user.cvData.fullName}</p>
                        <p><strong>Email:</strong> {user.cvData.email}</p>
                        <p><strong>Phone:</strong> {user.cvData.phoneNumber}</p>
                        <p><strong>Address:</strong> {user.cvData.address}</p>
                        <p><strong>Status:</strong> <span className="text-green-600 font-semibold">{user.verificationStatus}</span></p>
                    </div>
                </div>
            </Widget>

            <Widget title="Professional Summary">
                <p className="text-slate-600 dark:text-slate-300">{user.cvData.summary}</p>
            </Widget>

            <Widget title="Skills">
                 <div className="flex flex-wrap gap-2">
                    {user.cvData.skills.map(skill => (
                        <span key={skill} className="bg-gray-100 dark:bg-slate-700 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                    ))}
                </div>
            </Widget>
            
            {isCvBuilderOpen && <CVBuilderModal />}
        </div>
    );
};

export default ProfileView;
