import React from 'react';
import type { User, Job, Ikimina, FreelanceGig, Course, IncubationProgram, Mentor, ForumTopic, Webinar, Achievement, LeaderboardUser, SuccessStory } from './types';

export const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
export const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
export const UserIcon = ({className}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5 text-gray-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;

export const DashboardIcon = () => <span>🏠</span>;
export const IkiminaIcon = () => <span>👨‍👩‍👧‍👦</span>;
export const WalletIcon = () => <span>💰</span>;
export const EntrepreneurshipIcon = () => <span>🚀</span>;
export const ProfileIcon = () => <span>👤</span>;
export const ForumIcon = () => <span>💬</span>;
export const LogoutIcon = () => <span>🚪</span>;
export const AchievementIcon = () => <span>🏆</span>;
export const StoriesIcon = () => <span>📚</span>;
export const CoachIcon = () => <span>🤖</span>;
export const BotIcon = () => <span>🤖</span>;

export const MOCK_USER: User = {
    id: 1,
    name: 'Aline U.',
    email: 'aline@example.com',
    role: 'seeker',
    verificationStatus: 'Verified',
    achievements: [1, 2, 4],
    cvData: {
        photoUrl: 'https://i.pravatar.cc/150?u=aline',
        fullName: 'Aline Uwase',
        email: 'aline@example.com',
        phoneNumber: '+250 788 123 456',
        address: 'Kigali, Rwanda',
        summary: 'A highly motivated and detail-oriented individual with a passion for technology and community development. Seeking to leverage my skills in a dynamic environment.',
        experience: [
            { id: 1, title: 'Intern', company: 'TechCorp Rwanda', duration: 'Jun 2023 - Aug 2023', description: 'Assisted in developing and testing new software features.' },
        ],
        education: [
            { id: 1, school: 'University of Rwanda', degree: 'B.Sc. Computer Science', duration: '2020 - 2024' },
        ],
        skills: ['JavaScript', 'React', 'Node.js', 'Project Management'],
    },
};

export const JOBS_DATA: Job[] = [
    { id: 1, title: 'Frontend Developer', employer: 'Kigali Devs', salary: '1.2M RWF', type: 'Full-time', isFeatured: true },
    { id: 2, title: 'Project Manager', employer: 'Go Ltd', salary: '2M RWF', type: 'Full-time', isFeatured: true },
    { id: 3, title: 'UI/UX Designer', employer: 'Creative Circle', salary: '800k RWF', type: 'Contract', isFeatured: false },
    { id: 4, title: 'Data Analyst', employer: 'Insight Analytics', salary: '1.5M RWF', type: 'Full-time', isFeatured: false },
];

export const IKIMINA_DATA: Ikimina[] = [
    {
        id: 1, name: 'Kigali Coders', creator: 'Tech Hub', category: 'Business', progress: 75, target: 5000000,
        members: [
            { id: 101, name: 'John D.', avatarUrl: 'https://i.pravatar.cc/150?u=101', contributionStatus: 'Paid' },
            { id: 102, name: 'Jane S.', avatarUrl: 'https://i.pravatar.cc/150?u=102', contributionStatus: 'Paid' },
            { id: 103, name: 'Peter K.', avatarUrl: 'https://i.pravatar.cc/150?u=103', contributionStatus: 'Pending' },
        ]
    },
    { id: 2, name: 'Youth Agripreneurs', creator: 'Future Farms', category: 'Agriculture', progress: 40, target: 2000000, members: [] },
    { id: 3, name: 'Women in Tech', creator: 'SheCanCode', category: 'Youth', progress: 90, target: 10000000, members: [] },
];

export const MOCK_GIGS: FreelanceGig[] = [
    { id: 1, title: 'Logo Design for Startup', client: 'Innovate Rwanda', skills: ['Graphic Design', 'Branding'], budget: '150,000 RWF' },
    { id: 2, title: 'Translate Document EN to Kinyarwanda', client: 'Local NGO', skills: ['Translation', 'Kinyarwanda'], budget: '50,000 RWF' },
];

export const MOCK_COURSES: Course[] = [
    { id: 1, title: 'Digital Marketing 101', description: 'Learn the basics of marketing online.', duration: '4 Weeks', category: 'Business' },
    { id: 2, title: 'Financial Literacy for Youth', description: 'Manage your money effectively.', duration: '2 Weeks', category: 'Finance' },
    { id: 3, title: 'Public Speaking Masterclass', description: 'Gain confidence in front of an audience.', duration: '3 Weeks', category: 'Skills' },
];

export const MOCK_PROGRAMS: IncubationProgram[] = [
    { id: 1, title: 'K-Lab Incubation', provider: 'K-Lab', description: 'For tech startups with innovative ideas.', duration: '6 Months' },
    { id: 2, title: 'Norrsken House Program', provider: 'Norrsken', description: 'Join a community of impact-driven entrepreneurs.', duration: 'Ongoing' },
];

export const MOCK_MENTORS: Mentor[] = [
    { id: 1, name: 'Clare Akamanzi', avatarUrl: 'https://i.pravatar.cc/150?u=clare', title: 'CEO', company: 'RDB', expertise: ['Business', 'Investment'] },
    { id: 2, name: 'Patrick Nsenga', avatarUrl: 'https://i.pravatar.cc/150?u=patrick', title: 'Founder', company: 'IGIRE', expertise: ['Tech', 'Startups'] },
    { id: 3, name: 'Diane Karusisi', avatarUrl: 'https://i.pravatar.cc/150?u=diane', title: 'CEO', company: 'BK', expertise: ['Finance', 'Banking'] },
    { id: 4, name: 'Aphrodice Mutangana', avatarUrl: 'https://i.pravatar.cc/150?u=aphro', title: 'GM', company: 'K-Lab', expertise: ['Innovation', 'Community'] },
];

export const MOCK_TOPICS: ForumTopic[] = [
    { id: 1, title: 'Best practices for CV writing?', author: 'Aline U.', timestamp: '2 days ago', description: 'I am applying for jobs and want to make my CV stand out. Any tips?', posts: [] },
    { id: 2, title: 'How to start a small business in Kigali?', author: 'John D.', timestamp: '5 days ago', description: 'I have a business idea but not sure about the legal steps. Can anyone help?', posts: [{id: 1, author: 'Admin', content: 'Great question! Check out the RDB website.'}] },
];

export const MOCK_WEBINARS: Webinar[] = [
    { id: 1, title: 'Investor Readiness for Startups', host: 'Kigali Angels', date: 'Nov 5, 2024', time: '2 PM' },
    { id: 2, title: 'Leveraging AI for Your Career', host: 'KaziConnect', date: 'Nov 12, 2024', time: '4 PM' },
];

export const MOCK_ACHIEVEMENTS: Achievement[] = [
    { id: 1, name: 'First Steps', description: 'Complete your profile.', icon: '👣' },
    { id: 2, name: 'Job Applicant', description: 'Apply for your first job.', icon: '📄' },
    { id: 3, name: 'Go-Getter', description: 'Apply for 5 jobs.', icon: '🎯' },
    { id: 4, name: 'Saver', description: 'Join an Ikimina.', icon: '🏦' },
    { id: 5, name: 'Learner', description: 'Complete a course.', icon: '🎓' },
    { id: 6, name: 'Community Member', description: 'Post in the forum.', icon: '💬' },
];

export const MOCK_LEADERBOARD: LeaderboardUser[] = [
    { id: 101, name: 'John D.', avatarUrl: 'https://i.pravatar.cc/150?u=101', points: 5000 },
    { id: 1, name: 'Aline U.', avatarUrl: 'https://i.pravatar.cc/150?u=aline', points: 4500 },
    { id: 102, name: 'Jane S.', avatarUrl: 'https://i.pravatar.cc/150?u=102', points: 4200 },
];

export const MOCK_STORIES: SuccessStory[] = [
    { id: 1, name: 'Yves M.', title: 'From Unemployed to Software Engineer', category: 'Job Seeker', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400', story: 'KaziConnect helped me polish my CV and connected me with my dream job. The AI coach was a game-changer for interview prep!' },
    { id: 2, name: 'Marie G.', title: 'Launched My Own Catering Business', category: 'Entrepreneur', imageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400', story: 'Through an Ikimina group, I raised the capital needed to start my business. The mentorship program was invaluable.' },
    { id: 3, name: 'Kevin N.', title: 'Saved for University Tuition', category: 'Saver', imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400', story: 'Joining a savings group taught me financial discipline. I successfully saved enough for my first year of university.' },
];
