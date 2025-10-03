import React from 'react';
import type { User } from '../../types';
import { FileIcon } from '../../constants';
import Widget from '../shared/Widget';

interface ProfileViewProps {
    user: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">My Profile</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                     <Widget title="Profile Details">
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-rwanda-green/50" />
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{user.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{user.bio}</p>
                            <button className="mt-6 text-sm px-4 py-2 border border-rwanda-blue text-rwanda-blue rounded-full hover:bg-rwanda-blue hover:text-white transition">Edit Profile</button>
                        </div>
                    </Widget>
                </div>
                <div className="lg:col-span-2 space-y-8">
                     <Widget title="Uploaded Documents">
                         {user.documents && user.documents.length > 0 ? (
                            <div className="space-y-3">
                                {user.documents.map((doc, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/70 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <FileIcon />
                                            <div>
                                                <p className="font-semibold">{doc.name}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{doc.type}</p>
                                            </div>
                                        </div>
                                        <button className="text-xs text-red-500 hover:underline">Remove</button>
                                    </div>
                                ))}
                            </div>
                         ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-4">No documents uploaded yet.</p>
                         )}
                    </Widget>
                     <Widget title="Achievements">
                         {user.badges && user.badges.length > 0 ? (
                            <div className="flex flex-wrap gap-3">
                                {user.badges.map((badge, index) => (
                                     <span key={index} className="px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900/50 dark:text-yellow-300">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                          ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-4">No achievements unlocked yet.</p>
                          )}
                    </Widget>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
