
import React, { useState, useCallback, useMemo } from 'react';
import type { Job, FileWithPreview } from '../types';
import { UploadIcon, FileIcon } from '../constants';

interface JobApplicationModalProps {
  job: Job;
  onClose: () => void;
}

const FileUpload: React.FC<{ label: string; onFileChange: (files: FileList | null) => void }> = ({ label, onFileChange }) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        onFileChange(files);
        if(files && files.length > 0) {
            setFileName(files[0].name);
        } else {
            setFileName(null);
        }
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <UploadIcon />
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label htmlFor={label.replace(/\s+/g, '-')} className="relative cursor-pointer bg-white dark:bg-slate-900 rounded-md font-medium text-rwanda-blue hover:text-rwanda-blue/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rwanda-blue">
                            <span>Upload a file</span>
                            <input id={label.replace(/\s+/g, '-')} name={label.replace(/\s+/g, '-')} type="file" className="sr-only" onChange={handleFileChange} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">PDF, DOCX up to 10MB</p>
                     {fileName && (
                         <div className="flex items-center justify-center text-sm text-green-600 dark:text-green-400 pt-2">
                            <FileIcon />
                            <span className="ml-2 font-medium">{fileName}</span>
                        </div>
                     )}
                </div>
            </div>
        </div>
    );
};


const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cv: null,
        diploma: null,
        photo: null,
        coverLetter: ''
    });

    const progress = useMemo(() => {
        const totalFields = Object.keys(formData).length;
        const filledFields = Object.values(formData).filter(value => value !== '' && value !== null).length;
        return (filledFields / totalFields) * 100;
    }, [formData]);

    const handleFileChange = (field: keyof typeof formData) => (files: FileList | null) => {
        setFormData(prev => ({...prev, [field]: files ? files[0] : null}));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 w-full max-w-2xl relative shadow-2xl transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scaleIn 0.3s forwards' }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold font-display text-slate-800 dark:text-white">Apply for {job.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">at {job.employer}</p>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
            <div className="bg-gradient-to-r from-rwanda-blue to-rwanda-green h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
        
        <form className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
            <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
            
            <FileUpload label="Upload CV (PDF, DOCX)" onFileChange={handleFileChange('cv')} />
            <FileUpload label="Upload Diploma / Transcript" onFileChange={handleFileChange('diploma')} />
            <FileUpload label="Upload Profile Photo" onFileChange={handleFileChange('photo')} />
            
            <textarea placeholder="Cover Letter" name="coverLetter" rows={4} onChange={handleInputChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-rwanda-blue outline-none" />
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rwanda-blue to-rwanda-green text-white font-bold py-3 px-4 rounded-full hover:shadow-lg hover:shadow-rwanda-green/50 transition-all duration-300"
            >
              Submit Application
            </button>
        </form>
      </div>
      <style>{`
          @keyframes scaleIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
              animation: scaleIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          }
      `}</style>
    </div>
  );
};

export default JobApplicationModal;
