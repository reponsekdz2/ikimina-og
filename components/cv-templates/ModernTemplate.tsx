import React from 'react';
// FIX: Using relative path for type import
import type { CVData } from '../../types';

const ModernTemplate: React.FC<{ data: CVData }> = ({ data }) => {
    return (
        <div className="text-sm text-gray-800 dark:text-gray-300 font-sans flex h-full">
            {/* Left Sidebar */}
            <aside className="w-1/3 bg-slate-100 dark:bg-slate-800 p-4">
                 {data.photoUrl && <img src={data.photoUrl} alt={data.fullName} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />}
                 <div className="text-center">
                    <h1 className="text-2xl font-bold font-display">{data.fullName}</h1>
                 </div>

                 <section className="mt-6">
                    <h2 className="text-md font-bold uppercase border-b border-gray-400 pb-1 mb-2">Contact</h2>
                    <p>{data.email}</p>
                    <p>{data.phoneNumber}</p>
                    <p>{data.address}</p>
                 </section>

                 <section className="mt-6">
                    <h2 className="text-md font-bold uppercase border-b border-gray-400 pb-1 mb-2">Skills</h2>
                    <ul className="list-disc list-inside">
                        {data.skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                 </section>
            </aside>

            {/* Main Content */}
            <main className="w-2/3 p-4 pl-6">
                 <section>
                    <h2 className="text-lg font-bold uppercase text-rwanda-blue border-b-2 border-rwanda-blue pb-1 mb-2">Summary</h2>
                    <p>{data.summary}</p>
                </section>

                <section className="mt-4">
                    <h2 className="text-lg font-bold uppercase text-rwanda-blue border-b-2 border-rwanda-blue pb-1 mb-2">Experience</h2>
                    {data.experience.map(exp => (
                        <div key={exp.id} className="mb-3">
                            <h3 className="font-bold">{exp.title}</h3>
                            <p className="italic text-gray-600 dark:text-gray-400">{exp.company} | {exp.duration}</p>
                            <p className="text-xs mt-1">{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section className="mt-4">
                    <h2 className="text-lg font-bold uppercase text-rwanda-blue border-b-2 border-rwanda-blue pb-1 mb-2">Education</h2>
                     {data.education.map(edu => (
                        <div key={edu.id} className="mb-2">
                            <h3 className="font-bold">{edu.degree}</h3>
                            <p className="italic text-gray-600 dark:text-gray-400">{edu.school} | {edu.duration}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default ModernTemplate;