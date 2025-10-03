import React from 'react';
import type { User, Job, Ikimina, ForumTopic, Webinar, Achievement, LeaderboardUser, SuccessStory } from './types';

export const BotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const UserIcon = ({className}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


export const MOCK_SEEKER_USER: User = {
    id: 1,
    name: 'Aline UWERA',
    email: 'aline.uwera@example.com',
    role: 'seeker',
    verificationStatus: 'Verified',
    achievements: ['first_job_application', 'profile_complete'],
    cvData: {
        photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
        fullName: 'Aline UWERA',
        email: 'aline.uwera@example.com',
        phoneNumber: '+250 788 123 456',
        address: 'Kigali, Rwanda',
        summary: 'Dedicated and detail-oriented professional with 3+ years of experience in customer service and administrative support. Seeking to leverage strong communication and organizational skills in a challenging new role.',
        experience: [
            { id: 1, title: 'Customer Service Representative', company: 'MTN Rwanda', duration: '2021 - Present', description: 'Handled customer inquiries and resolved issues efficiently.' },
        ],
        education: [
            { id: 1, school: 'University of Rwanda', degree: 'Bachelors in Business Administration', duration: '2017 - 2021' },
        ],
        skills: ['Microsoft Office', 'Customer Support', 'Communication', 'Problem Solving'],
    }
};

export const MOCK_EMPLOYER_USER: User = {
    id: 101,
    name: 'John KABERA',
    email: 'john.kabera@company.com',
    role: 'employer',
    verificationStatus: 'Verified',
    achievements: [],
    cvData: {
        photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        fullName: 'John KABERA',
        email: 'john.kabera@company.com',
        phoneNumber: '+250 788 987 654',
        address: 'Kigali, Rwanda',
        summary: 'Hiring manager at a tech company.',
        experience: [],
        education: [],
        skills: [],
    }
};

export const MOCK_JOBS: Job[] = [
    { id: 1, title: 'React Frontend Developer', employer: 'Kigali Devs Ltd.', salary: '1,500,000 RWF', type: 'Full-time', isFeatured: true },
    { id: 2, title: 'Accountant', employer: 'Bank of Kigali', salary: '1,200,000 RWF', type: 'Full-time', isFeatured: true },
    { id: 3, title: 'Project Manager', employer: 'Norrsken Kigali', salary: '2,000,000 RWF', type: 'Contract', isFeatured: false },
];

export const MOCK_IKIMINAS: Ikimina[] = [
    { id: 1, name: 'Kigali Tech Innovators', creator: 'Jane Doe', category: 'Business', progress: 750000, target: 1000000, members: [{id: 1, name: 'Aline U.', avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg', contributionStatus: 'Paid'}] },
    { id: 2, name: 'Youth Farmers Coop', creator: 'John Smith', category: 'Agriculture', progress: 300000, target: 500000, members: [] }
];
export const MOCK_TOPICS: ForumTopic[] = [
    { id: 1, title: 'Best practices for remote work?', author: 'Chris G.', timestamp: '2 hours ago', description: 'Our company is moving to a hybrid model, what are some tips to stay productive?', posts: [{id: 1, author: 'Aline U.', text: 'Great question!'}] }
];
export const MOCK_WEBINARS: Webinar[] = [
    { id: 1, title: 'CV Writing Masterclass', host: 'KaziConnect Experts', date: 'Oct 28, 2024', time: '2:00 PM' }
];
export const MOCK_ACHIEVEMENTS: Achievement[] = [
    { id: 'profile_complete', name: 'Profile Perfect', description: 'Completed your user profile 100%.', icon: '✅' },
    { id: 'first_job_application', name: 'First Step', description: 'Applied for your first job.', icon: '🚀' },
    { id: 'community_helper', name: 'Community Helper', description: 'Replied to a forum post.', icon: '🤝' },
    { id: 'ikimina_starter', name: 'Initiator', description: 'Created your first Ikimina.', icon: '💡' },
];
export const MOCK_LEADERBOARD: LeaderboardUser[] = [
    { id: 2, name: 'John Doe', avatarUrl: 'https://randomuser.me/api/portraits/men/33.jpg', points: 1250 },
    { id: 1, name: 'Aline UWERA', avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg', points: 1100 },
    { id: 3, name: 'Jane Smith', avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg', points: 980 },
];
export const MOCK_STORIES: SuccessStory[] = [
    { id: 1, author: 'Peter M.', role: 'seeker', imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop', story: 'Thanks to KaziConnect, I found my dream job as a software developer. The AI coach really helped me prepare for the interviews!', title: 'From Unemployed to Dream Job' }
];
