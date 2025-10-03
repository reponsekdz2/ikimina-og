import React from 'react';
import type { User } from '../../types';
import { FileIcon } from '../../constants';
import Widget from '../shared/Widget';
import { useTranslations } from '../../hooks';

interface ProfileViewProps {
    user: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
    const { t } = useTranslations();

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('profile.title')}</h2>
                <button className="px-5 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition text-sm">{t('profile.exportCV')}</button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Profile & CV-like info */}
                <div className="lg:col-span-1 space-y-8">
                     <Widget title={t('profile.details')}>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-rwanda-green/50" />
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{user.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{user.bio}</p>
                            <button className="mt-6 text-sm px-4 py-2 border border-rwanda-blue text-rwanda-blue rounded-full hover:bg-rwanda-blue hover:text-white transition">{t('profile.edit')}</button>
                        </div>
                    </Widget>
                    <Widget title={t('profile.achievements')}>
                         {user.badges && user.badges.length > 0 ? (
                            <div className="flex flex-wrap gap-3 p-4 justify-center">
                                {user.badges.map((badge, index) => (
                                     <span key={index} className="px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900/50 dark:text-yellow-300">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                          ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-4">{t('profile.noAchievements')}</p>
                          )}
                    </Widget>
                </div>
                
                {/* Right Column: Documents and other actions */}
                <div className="lg:col-span-2 space-y-8">
                     <Widget title={t('profile.documents')}>
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
                                        <button className="text-xs text-red-500 hover:underline">{t('profile.remove')}</button>
                                    </div>
                                ))}
                            </div>
                         ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-4">{t('profile.noDocuments')}</p>
                         )}
                    </Widget>

                     <Widget title={t('profile.alerts')}>
                         <div className="p-2 space-y-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('profile.alertsDesc')}</p>
                            <input type="text" placeholder={t('profile.alertsKeywords')} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
                            <input type="text" placeholder={t('profile.alertsLocation')} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
                             <button className="w-full px-4 py-2 bg-rwanda-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition text-sm">{t('profile.saveAlerts')}</button>
                         </div>
                    </Widget>

                    <Widget title={t('profile.referrals')}>
                        <div className="p-4 text-center">
                             <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t('profile.referralsDesc')}</p>
                             <div className="flex">
                                 <input type="text" readOnly value={`https://kaziconnect.rw/ref/${user.id}2a8f`} className="w-full border border-gray-300 dark:border-gray-600 rounded-l-lg p-2 bg-gray-100 dark:bg-slate-800 text-sm" />
                                 <button className="px-4 py-2 bg-gray-200 dark:bg-slate-700 font-semibold rounded-r-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition text-sm">{t('profile.referralsLink')}</button>
                             </div>
                        </div>
                    </Widget>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;