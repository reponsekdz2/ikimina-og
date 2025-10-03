import React from 'react';
import type { User, SuccessStory } from '../../types';
import Widget from '../shared/Widget';
import { MOCK_STORIES } from '../../constants';

interface SuccessStoriesViewProps {
    user: User;
}

const StoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
        <img src={story.imageUrl} alt={story.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white">{story.title}</h3>
            <p className="text-sm font-semibold text-rwanda-blue mt-1">{story.author} <span className="text-gray-500">({story.role})</span></p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{story.story}</p>
        </div>
    </div>
);

const SuccessStoriesView: React.FC<SuccessStoriesViewProps> = ({ user }) => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">Success Stories</h2>
            <p className="text-slate-600 dark:text-slate-400">Be inspired by members of the KaziConnect community.</p>
            
            <Widget title="Community Journeys">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MOCK_STORIES.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            </Widget>
        </div>
    );
};

export default SuccessStoriesView;
