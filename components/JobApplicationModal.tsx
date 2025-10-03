import React, { useState } from 'react';
import type { Job } from '../types';
import { useTranslations } from '../hooks';
import { GoogleGenAI } from '@google/genai';

interface JobApplicationModalProps {
    job: Job;
    onClose: () => void;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ job, onClose }) => {
    const { t } = useTranslations();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [coverLetter, setCoverLetter] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
        }, 1500);
    };

    const generateCoverLetter = async () => {
        setIsGenerating(true);
        setError('');
        try {
            // FIX: Initialize GoogleGenAI with apiKey from environment variables
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Write a professional and enthusiastic cover letter for a "${job.title}" position at ${job.employer}. The applicant is a highly motivated individual looking to grow their career. Keep it concise and under 150 words.`;
            // FIX: Use ai.models.generateContent with model and contents
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            // FIX: Access text directly from response
            const text = response.text;
            setCoverLetter(text);
        } catch (e) {
            setError('Failed to generate cover letter. Please try again.');
            console.error(e);
        } finally {
            setIsGenerating(false);
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 w-full max-w-lg relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold font-display text-slate-800 dark:text-white">{t('application.title')} {job.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{t('application.at')} {job.employer}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('application.cv')}</label>
                        <div className="mt-1 flex items-center gap-4">
                            <span className="px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-lg text-sm">my_cv_final.pdf</span>
                            <button type="button" className="text-sm text-rwanda-blue hover:underline">{t('application.change')}</button>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between items-center mb-1">
                            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('application.coverLetter')}</label>
                            <button 
                                type="button"
                                onClick={generateCoverLetter}
                                disabled={isGenerating}
                                className="text-xs font-semibold text-rwanda-blue hover:underline disabled:opacity-50 disabled:cursor-wait"
                            >
                                {isGenerating ? t('application.generating') : t('application.generate')}
                            </button>
                        </div>
                        <textarea
                            id="coverLetter"
                            rows={6}
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none transition"
                            placeholder={t('application.coverLetterPlaceholder')}
                        />
                         {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} className="px-6 py-2 bg-gray-200 dark:bg-slate-700 font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                            {t('application.cancel')}
                        </button>
                         <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                        >
                            {isSubmitting ? t('application.submitting') : t('application.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationModal;
