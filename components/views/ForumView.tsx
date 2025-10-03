import React from 'react';
import type { User, ForumTopic, Webinar } from '../../types';
import Widget from '../shared/Widget';
import { MOCK_TOPICS, MOCK_WEBINARS } from '../../constants';
import { useTranslations } from '../../hooks';

interface ForumViewProps {
    user: User;
}

const TopicCard: React.FC<{ topic: ForumTopic }> = ({ topic }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-lg font-bold text-slate-800 dark:text-white">{topic.title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">By {topic.author} - {topic.timestamp}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">{topic.description}</p>
        <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-rwanda-blue">{topic.posts.length} replies</span>
            <button className="px-4 py-1 bg-rwanda-blue/10 text-rwanda-blue font-semibold rounded-full text-sm">View Topic</button>
        </div>
    </div>
);

const WebinarCard: React.FC<{ webinar: Webinar }> = ({ webinar }) => {
    const { t } = useTranslations();
    return (
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/70 rounded-lg">
        <div>
            <p className="font-semibold text-slate-800 dark:text-white">{webinar.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{webinar.host} | {webinar.date} at {webinar.time}</p>
        </div>
        <button className="px-4 py-1 bg-rwanda-green text-white font-semibold rounded-full text-sm">{t('forum.register')}</button>
    </div>
    )
};

const ForumView: React.FC<ForumViewProps> = ({ user }) => {
    const { t } = useTranslations();
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                 <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('forum.title')}</h2>
                <button className="px-6 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition">{t('forum.newTopic')}</button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                     <Widget title={t('forum.topics')}>
                        <div className="space-y-6">
                            {MOCK_TOPICS.map(topic => (
                                <TopicCard key={topic.id} topic={topic} />
                            ))}
                        </div>
                    </Widget>
                </div>
                <div className="lg:col-span-1">
                     <Widget title={t('forum.events')}>
                        <div className="space-y-4">
                            {MOCK_WEBINARS.map(webinar => (
                                <WebinarCard key={webinar.id} webinar={webinar} />
                            ))}
                        </div>
                    </Widget>
                </div>
            </div>
        </div>
    );
};

export default ForumView;