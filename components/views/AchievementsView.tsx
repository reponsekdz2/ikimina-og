import React from 'react';
import type { User, Achievement, LeaderboardUser } from '../../types';
import Widget from '../shared/Widget';
import { MOCK_ACHIEVEMENTS, MOCK_LEADERBOARD } from '../../constants';
import { useTranslations } from '../../hooks';

interface AchievementsViewProps {
    user: User;
}

const AchievementCard: React.FC<{ achievement: Achievement, isUnlocked: boolean }> = ({ achievement, isUnlocked }) => {
    return (
        <div className={`text-center p-6 rounded-2xl border-2 ${isUnlocked ? 'border-rwanda-green bg-green-50 dark:bg-green-900/20' : 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 grayscale'}`}>
            <div className={`text-5xl mx-auto w-20 h-20 flex items-center justify-center rounded-full ${isUnlocked ? 'bg-green-100 dark:bg-green-900/50' : 'bg-gray-200 dark:bg-slate-700'}`}>{achievement.icon}</div>
            <h4 className="font-bold mt-4 text-slate-800 dark:text-white">{achievement.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{achievement.description}</p>
        </div>
    )
};

const LeaderboardRow: React.FC<{ rank: number; user: LeaderboardUser; isCurrentUser: boolean }> = ({ rank, user, isCurrentUser }) => {
    return (
        <div className={`flex items-center p-3 rounded-lg ${isCurrentUser ? 'bg-rwanda-blue/10' : ''}`}>
            <span className="font-bold text-lg w-8">{rank}</span>
            <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full mx-4"/>
            <p className={`font-semibold ${isCurrentUser ? 'text-rwanda-blue' : 'text-slate-800 dark:text-white'}`}>{user.name}</p>
            <p className="ml-auto font-bold text-rwanda-green">{user.points.toLocaleString()} pts</p>
        </div>
    )
}

const AchievementsView: React.FC<AchievementsViewProps> = ({ user }) => {
    const { t } = useTranslations();

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('achievements.title')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Widget title={t('achievements.myBadges')}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {MOCK_ACHIEVEMENTS.map(ach => (
                                <AchievementCard 
                                    key={ach.id} 
                                    achievement={ach}
                                    isUnlocked={user.achievements.includes(ach.id)}
                                />
                            ))}
                        </div>
                    </Widget>
                </div>
                <div className="lg:col-span-1">
                    <Widget title={t('achievements.leaderboard')}>
                        <div className="space-y-2">
                           {MOCK_LEADERBOARD.map((lbUser, index) => (
                                <LeaderboardRow 
                                    key={lbUser.id}
                                    rank={index + 1}
                                    user={lbUser}
                                    isCurrentUser={lbUser.id === user.id}
                                />
                           ))}
                        </div>
                    </Widget>
                </div>
            </div>
        </div>
    );
};

export default AchievementsView;