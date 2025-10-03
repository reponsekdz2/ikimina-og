import React, { useState, useCallback } from 'react';
import type { User, CVData } from '../types';
import { useTranslations } from '../hooks';
import ClassicTemplate from './cv-templates/ClassicTemplate';
import ModernTemplate from './cv-templates/ModernTemplate';

interface CVBuilderModalProps {
    user: User;
    onClose: () => void;
}

type Template = 'classic' | 'modern';

const CVBuilderModal: React.FC<CVBuilderModalProps> = ({ user, onClose }) => {
    const { t } = useTranslations();
    const [cvData, setCvData] = useState<CVData>(user.cvData);
    const [selectedTemplate, setSelectedTemplate] = useState<Template>('classic');
    const [photoPreview, setPhotoPreview] = useState<string | null>(cvData.photoUrl);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCvData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPhotoPreview(result);
                setCvData(prev => ({...prev, photoUrl: result}));
            };
            reader.readAsDataURL(file);
        }
    };
    
    // Add functions for experience, education, skills later

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div
                className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-7xl h-[90vh] relative shadow-2xl flex"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 z-20"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                {/* Left Panel: Editor */}
                <div className="w-1/2 p-8 overflow-y-auto">
                    <h2 className="text-2xl font-bold font-display text-slate-800 dark:text-white">{t('cvBuilder.title')}</h2>
                    
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('cvBuilder.templates')}</label>
                        <div className="flex gap-4">
                            <button onClick={() => setSelectedTemplate('classic')} className={`px-4 py-2 rounded-lg border-2 ${selectedTemplate === 'classic' ? 'border-rwanda-blue' : 'border-gray-300 dark:border-gray-600'}`}>{t('cvBuilder.classic')}</button>
                            <button onClick={() => setSelectedTemplate('modern')} className={`px-4 py-2 rounded-lg border-2 ${selectedTemplate === 'modern' ? 'border-rwanda-blue' : 'border-gray-300 dark:border-gray-600'}`}>{t('cvBuilder.modern')}</button>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <h3 className="text-lg font-bold border-b pb-2">{t('cvBuilder.content')}</h3>
                         <div>
                            <label className="text-sm font-medium">Profile Photo</label>
                            <input type="file" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-rwanda-blue hover:file:bg-blue-100"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium">{t('cvBuilder.contact')}</label>
                            <input type="text" name="fullName" value={cvData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full mt-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
                             <input type="email" name="email" value={cvData.email} onChange={handleInputChange} placeholder="Email" className="w-full mt-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium">{t('cvBuilder.summary')}</label>
                            <textarea name="summary" value={cvData.summary} onChange={handleInputChange} rows={4} className="w-full mt-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
                        </div>
                        {/* Add forms for Experience, Education, Skills here */}
                    </div>
                </div>

                {/* Right Panel: Preview */}
                <div className="w-1/2 bg-gray-100 dark:bg-slate-800 p-8 overflow-y-auto">
                    <h3 className="text-lg font-bold text-center mb-4">{t('cvBuilder.preview')}</h3>
                    <div className="bg-white dark:bg-slate-900 shadow-lg p-8 aspect-[210/297] mx-auto">
                        {selectedTemplate === 'classic' && <ClassicTemplate data={cvData} />}
                        {selectedTemplate === 'modern' && <ModernTemplate data={cvData} />}
                    </div>
                </div>

                <div className="absolute bottom-8 right-1/2 translate-x-1/2 flex gap-4">
                     <button className="px-6 py-2 bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-bold rounded-full hover:shadow-lg transition-all duration-300">
                        {t('cvBuilder.download')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CVBuilderModal;