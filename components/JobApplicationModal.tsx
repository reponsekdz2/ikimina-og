import React, { useState } from 'react';
// Corrected import for GoogleGenAI and GenerateContentResponse
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { Job, User } from '../types';

interface JobApplicationModalProps {
    job: Job;
    user: User;
    onClose: () => void;
    onSubmit: () => void;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ job, user, onClose, onSubmit }) => {
    const [coverLetter, setCoverLetter] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateCoverLetter = async () => {
        setIsGenerating(true);
        setError(null);
        try {
            if (!process.env.API_KEY) {
                // As per guidelines, assume API_KEY is present. In a real app, provide user feedback.
                throw new Error("API_KEY environment variable not set");
            }
            // Correct initialization of GoogleGenAI
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Based on this user's CV summary: "${user.cvData.summary}" and experience: "${user.cvData.experience.map(e => `${e.title} at ${e.company}`).join(', ')}", write a concise and professional cover letter for the position of "${job.title}" at "${job.employer}". The user's name is ${user.fullName}. Keep it under 150 words.`;
            
            // Correct API call using ai.models.generateContent
            const response: GenerateContentResponse = await ai.models.generateContent({
                // Correct model name
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            
            // Correct way to access the generated text
            setCoverLetter(response.text);
        } catch (e) {
            console.error(e);
            setError('Failed to generate cover letter. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold font-display text-slate-800 dark:text-white mb-2">Apply for {job.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">at {job.employer}</p>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Letter</label>
                        <textarea
                            rows={8}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-700 shadow-sm focus:border-rwanda-blue focus:ring-rwanda-blue sm:text-sm"
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            placeholder="Write a brief cover letter or generate one with AI."
                        />
                    </div>
                     <button
                        onClick={handleGenerateCoverLetter}
                        disabled={isGenerating}
                        className="w-full flex justify-center items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-rwanda-blue bg-rwanda-blue/10 hover:bg-rwanda-blue/20 disabled:opacity-50 transition"
                    >
                        {isGenerating ? 'Generating...' : '✨ Generate with AI'}
                    </button>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </div>

                <div className="mt-8 flex justify-end gap-4">
                    <button onClick={onClose} className="px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-gray-200 dark:hover:bg-slate-600 transition">Cancel</button>
                    <button onClick={onSubmit} className="px-6 py-2 text-sm font-medium text-white bg-rwanda-green rounded-full hover:bg-opacity-90 transition">Submit Application</button>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationModal;
