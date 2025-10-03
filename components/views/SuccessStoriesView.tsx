import React, { useState } from 'react';
import type { User, SuccessStory } from '../../types';
import Widget from '../shared/Widget';
import { MOCK_STORIES } from '../../constants';
import { useTranslations } from '../../hooks';

interface SuccessStoriesViewProps {
    user: User;
}

type StoryCategory = 'All' | 'Job Seeker' | 'Entrepreneur' | 'Saver';

const StoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => {
    const { t } = useTranslations();
    const categoryColors = {
        'Job Seeker': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        'Entrepreneur': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        'Saver': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    };
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src={story.imageUrl} alt={story.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                 <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[story.category]}`}>{story.category}</span>
                 <h3 className="text-xl font-bold font-display mt-3 text-slate-800 dark:text-white">{story.title}</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">by {story.name}</p>
                 <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">{story.story}</p>
                 <button className="mt-4 font-semibold text-rwanda-blue hover:underline">{t('stories.readMore')}</button>
            </div>
        </div>
    );
};


const SuccessStoriesView: React.FC<SuccessStoriesViewProps> = ({ user }) => {
    const { t } = useTranslations();
    const [filter, setFilter] = useState<StoryCategory>('All');
    
    const filters: {name: StoryCategory, key: string}[] = [
        {name: 'All', key: 'stories.all'},
        {name: 'Job Seeker', key: 'stories.jobSeeker'},
        {name: 'Entrepreneur', key: 'stories.entrepreneur'},
        {name: 'Saver', key: 'stories.saver'},
    ];
    
    const filteredStories = filter === 'All' ? MOCK_STORIES : MOCK_STORIES.filter(s => s.category === filter);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('stories.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{t('stories.subtitle')}</p>
            </div>

            <div className="flex gap-2 bg-gray-100 dark:bg-slate-800 p-1 rounded-full">
                {filters.map(f => (
                     <button 
                        key={f.name}
                        onClick={() => setFilter(f.name)}
                        className={`w-full px-4 py-2 rounded-full font-semibold transition-colors text-sm ${filter === f.name ? 'bg-white dark:bg-slate-700 shadow text-rwanda-blue' : 'text-gray-600 dark:text-gray-300'}`}
                    >
                        {t(f.key)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories.map(story => (
                    <StoryCard key={story.id} story={story} />
                ))}
            </div>

        </div>
    );
};

export default SuccessStoriesView;