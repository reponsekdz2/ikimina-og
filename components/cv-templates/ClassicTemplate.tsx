import React from 'react';
import type { CVData } from '../../types';

interface ClassicTemplateProps {
    data: CVData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
    return (
        <div className="p-8 font-serif text-sm bg-white text-gray-800 w-full h-full">
            <header className="text-center border-b pb-4 mb-6">
                <h1 className="text-3xl font-bold tracking-wider">{data.fullName}</h1>
                <p className="mt-2 text-xs">
                    {data.address} | {data.phoneNumber} | {data.email}
                </p>
            </header>

            <main>
                <section>
                    <h2 className="text-lg font-bold border-b mb-2">PROFESSIONAL SUMMARY</h2>
                    <p className="text-sm leading-relaxed">{data.summary}</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-lg font-bold border-b mb-2">EXPERIENCE</h2>
                    {data.experience.map(exp => (
                        <div key={exp.id} className="mb-4">
                            <h3 className="font-bold">{exp.title}</h3>
                            <div className="flex justify-between text-sm italic">
                                <span>{exp.company}</span>
                                <span>{exp.duration}</span>
                            </div>
                            <p className="text-sm mt-1">{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section className="mt-6">
                    <h2 className="text-lg font-bold border-b mb-2">EDUCATION</h2>
                    {data.education.map(edu => (
                        <div key={edu.id} className="mb-2">
                            <h3 className="font-bold">{edu.school}</h3>
                            <div className="flex justify-between text-sm italic">
                                <span>{edu.degree}</span>
                                <span>{edu.duration}</span>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mt-6">
                    <h2 className="text-lg font-bold border-b mb-2">SKILLS</h2>
                    <p className="text-sm">{data.skills.join(' | ')}</p>
                </section>
            </main>
        </div>
    );
};

export default ClassicTemplate;
