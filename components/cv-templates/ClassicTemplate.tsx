import React from 'react';
// FIX: Using relative path for type import
import type { CVData } from '../../types';

const ClassicTemplate: React.FC<{ data: CVData }> = ({ data }) => {
    return (
        <div className="text-sm text-gray-800 dark:text-gray-300 font-sans">
            <header className="text-center border-b-2 border-gray-400 pb-4">
                {data.photoUrl && <img src={data.photoUrl} alt={data.fullName} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />}
                <h1 className="text-3xl font-bold font-display">{data.fullName}</h1>
                <p className="text-sm">{data.email} | {data.phoneNumber} | {data.address}</p>
            </header>

            <section className="mt-4">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">SUMMARY</h2>
                <p>{data.summary}</p>
            </section>

            <section className="mt-4">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">EXPERIENCE</h2>
                {data.experience.map(exp => (
                    <div key={exp.id} className="mb-3">
                        <h3 className="font-bold">{exp.title}</h3>
                        <p className="italic">{exp.company} | {exp.duration}</p>
                        <p className="text-xs mt-1">{exp.description}</p>
                    </div>
                ))}
            </section>

             <section className="mt-4">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">EDUCATION</h2>
                {data.education.map(edu => (
                    <div key={edu.id} className="mb-2">
                        <h3 className="font-bold">{edu.degree}</h3>
                        <p className="italic">{edu.school} | {edu.duration}</p>
                    </div>
                ))}
            </section>

             <section className="mt-4">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">SKILLS</h2>
                <p>{data.skills.join(', ')}</p>
            </section>
        </div>
    );
};

export default ClassicTemplate;