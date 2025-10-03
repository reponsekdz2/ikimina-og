import React from 'react';
import type { CVData } from '../../types';

interface ModernTemplateProps {
    data: CVData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
    return (
        <div className="flex font-sans text-sm bg-white w-full h-full text-gray-700">
            {/* Left Sidebar */}
            <aside className="w-1/3 bg-gray-100 p-6 text-gray-600">
                <div className="text-center">
                    <img src={data.photoUrl} alt={data.fullName} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md" />
                </div>
                <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Contact</h3>
                    <p className="mb-2 text-xs"><strong>Address:</strong><br/> {data.address}</p>
                    <p className="mb-2 text-xs"><strong>Phone:</strong><br/> {data.phoneNumber}</p>
                    <p className="mb-2 text-xs"><strong>Email:</strong><br/> {data.email}</p>
                </div>
                 <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Skills</h3>
                    <ul className="space-y-2">
                        {data.skills.map(skill => (
                            <li key={skill} className="text-xs bg-white px-2 py-1 rounded">{skill}</li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <main className="w-2/3 p-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-[#005da3]">{data.fullName.split(' ')[0]}</h1>
                    <h1 className="text-4xl font-extrabold text-[#79c143]">{data.fullName.split(' ').slice(1).join(' ')}</h1>
                </header>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider border-b-2 border-gray-200 pb-1 mb-4">Summary</h2>
                    <p className="leading-relaxed text-sm">{data.summary}</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider border-b-2 border-gray-200 pb-1 mb-4">Experience</h2>
                    {data.experience.map(exp => (
                        <div key={exp.id} className="mb-6">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-gray-900">{exp.title}</h3>
                                <span className="text-xs font-medium text-gray-500">{exp.duration}</span>
                            </div>
                            <h4 className="font-semibold text-sm text-[#005da3]">{exp.company}</h4>
                            <p className="text-sm mt-1">{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider border-b-2 border-gray-200 pb-1 mb-4">Education</h2>
                     {data.education.map(edu => (
                        <div key={edu.id} className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                                 <span className="text-xs font-medium text-gray-500">{edu.duration}</span>
                            </div>
                            <h4 className="font-semibold text-sm text-[#005da3]">{edu.school}</h4>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default ModernTemplate;
