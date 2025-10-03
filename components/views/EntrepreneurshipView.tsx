import React from 'react';
import type { User, Course, IncubationProgram } from '../../types';
import { MOCK_COURSES, MOCK_PROGRAMS } from '../../constants';
import Widget from '../shared/Widget';
import { useTranslations } from '../../hooks';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
     const categoryColors = {
        Business: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        Finance: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        Skills: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    };
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
                 <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[course.category]}`}>{course.category}</span>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mt-3">{course.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex-grow">{course.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">{course.duration}</span>
                <button className="px-5 py-2 bg-rwanda-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition text-sm">Start Learning</button>
            </div>
        </div>
    );
}

const ProgramCard: React.FC<{program: IncubationProgram}> = ({ program }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
        <h4 className="font-bold text-slate-800 dark:text-white">{program.title}</h4>
        <p className="text-sm font-semibold text-rwanda-blue">{program.provider}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{program.description}</p>
        <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">{program.duration}</span>
            <button className="px-5 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition text-sm">Apply</button>
        </div>
    </div>
);


interface EntrepreneurshipViewProps {
    user: User;
}

const EntrepreneurshipView: React.FC<EntrepreneurshipViewProps> = ({ user }) => {
    const { t } = useTranslations();
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('entrepreneurship.title')}</h2>
            
            <Widget title={t('entrepreneurship.courses')}>
                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {MOCK_COURSES.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                 </div>
            </Widget>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Widget title={t('entrepreneurship.incubation')}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_PROGRAMS.map(program => (
                                <ProgramCard key={program.id} program={program} />
                            ))}
                        </div>
                    </Widget>
                </div>
                {user.role === 'seeker' && (
                    <div className="lg:col-span-1">
                        <Widget title={t('entrepreneurship.pitch')}>
                            <div className="text-center p-8 flex flex-col justify-center items-center h-full">
                                <h4 className="text-xl font-bold">{t('entrepreneurship.pitchTitle')}</h4>
                                <p className="text-gray-500 dark:text-gray-400 mt-2 mb-4">{t('entrepreneurship.pitchDesc')}</p>
                                <button className="px-6 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition">{t('entrepreneurship.pitchButton')}</button>
                            </div>
                        </Widget>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EntrepreneurshipView;