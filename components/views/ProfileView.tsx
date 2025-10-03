import React, { useState } from 'react';
import type { User } from '../../types';
import Widget from '../shared/Widget';
import CVBuilderModal from '../CVBuilderModal';
import { useTranslations } from '../../hooks';

interface ProfileViewProps {
    user: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
    const { t } = useTranslations();
    const [isEditing, setIsEditing] = useState(false);
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);
    
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('profile.title')}</h2>
                <div className="flex gap-4">
                    <button onClick={() => setIsCVModalOpen(true)} className="px-6 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition">{t('profile.cvBuilder')}</button>
                    <button onClick={() => setIsEditing(!isEditing)} className="px-6 py-2 bg-rwanda-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">
                        {isEditing ? t('profile.save') : t('profile.edit')}
                    </button>
                </div>
            </div>

            <Widget title={t('profile.details')}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 text-center">
                        <img src={user.cvData.photoUrl} alt={user.name} className="w-32 h-32 rounded-full mx-auto border-4 border-rwanda-blue" />
                        <h3 className="text-2xl font-bold mt-4">{user.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                        <span className={`mt-2 inline-block px-3 py-1 text-xs font-medium rounded-full ${user.verificationStatus === 'Verified' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'}`}>
                            {user.verificationStatus}
                        </span>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-500">{t('profile.fullName')}</label>
                            <input type="text" defaultValue={user.cvData.fullName} readOnly={!isEditing} className="w-full bg-transparent p-1 border-b-2 data-[editing=true]:border-rwanda-blue outline-none transition" data-editing={isEditing} />
                        </div>
                         <div>
                            <label className="text-sm font-semibold text-gray-500">{t('profile.phone')}</label>
                            <input type="text" defaultValue={user.cvData.phoneNumber} readOnly={!isEditing} className="w-full bg-transparent p-1 border-b-2 data-[editing=true]:border-rwanda-blue outline-none transition" data-editing={isEditing} />
                        </div>
                         <div>
                            <label className="text-sm font-semibold text-gray-500">{t('profile.address')}</label>
                            <input type="text" defaultValue={user.cvData.address} readOnly={!isEditing} className="w-full bg-transparent p-1 border-b-2 data-[editing=true]:border-rwanda-blue outline-none transition" data-editing={isEditing} />
                        </div>
                    </div>
                </div>
            </Widget>

             <Widget title={t('profile.summary')}>
                <textarea rows={4} defaultValue={user.cvData.summary} readOnly={!isEditing} className="w-full bg-transparent p-1 border-2 data-[editing=true]:border-rwanda-blue rounded-lg outline-none transition" data-editing={isEditing} />
            </Widget>
            
            {isCVModalOpen && <CVBuilderModal user={user} onClose={() => setIsCVModalOpen(false)} />}
        </div>
    );
};

export default ProfileView;
