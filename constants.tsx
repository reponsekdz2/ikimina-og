import React from 'react';
import type { Job, Ikimina, User, Transaction, Course, IkiminaMember } from './types';

export const MOCK_IKIMINA_MEMBERS: IkiminaMember[] = [
    { id: 1, name: 'Alice Umulisa', avatarUrl: `https://i.pravatar.cc/150?u=1`, contributionStatus: 'Paid' },
    { id: 2, name: 'Ben Gakwaya', avatarUrl: `https://i.pravatar.cc/150?u=2`, contributionStatus: 'Paid' },
    { id: 3, name: 'Carine Uwase', avatarUrl: `https://i.pravatar.cc/150?u=3`, contributionStatus: 'Pending' },
    { id: 4, name: 'David Mugisha', avatarUrl: `https://i.pravatar.cc/150?u=4`, contributionStatus: 'Paid' },
];

export const JOBS_DATA: Job[] = [
  { id: 1, title: 'Frontend Developer', employer: 'Kigali Tech Hub', salary: '1.2M - 1.8M RWF', type: 'Full-time' },
  { id: 2, title: 'UX/UI Designer', employer: 'Creative Solutions Ltd.', salary: '900k - 1.3M RWF', type: 'Full-time' },
  { id: 3, title: 'Digital Marketer', employer: 'Go Rwanda', salary: '700k - 1M RWF', type: 'Contract' },
  { id: 4, title: 'Project Manager', employer: 'BuildCo Rwanda', salary: '1.5M - 2.2M RWF', type: 'Full-time' },
];

export const IKIMINA_DATA: Ikimina[] = [
  { id: 1, name: 'Youth Entrepreneurs', category: 'Youth', target: 5000000, progress: 65, members: MOCK_IKIMINA_MEMBERS.slice(0,3), creator: 'Rwemarika & Co.' },
  { id: 2, name: 'Agri-Business Growth', category: 'Agriculture', target: 10000000, progress: 40, members: MOCK_IKIMINA_MEMBERS, creator: 'Ingabo Syndicate' },
  { id: 3, name: 'Kigali Coders Fund', category: 'Business', target: 8000000, progress: 85, members: MOCK_IKIMINA_MEMBERS.slice(0,2), creator: 'Kigali Tech Hub' },
  { id: 4, name: 'Family Savings Circle', category: 'Personal', target: 2000000, progress: 95, members: MOCK_IKIMINA_MEMBERS.slice(1,4), creator: 'Mutesi & Family' },
];

export const MOCK_USER_SEEKER: User = {
    id: 1,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'seeker',
    avatarUrl: 'https://i.pravatar.cc/150?u=jane',
    bio: 'Aspiring frontend developer with a passion for creating beautiful and intuitive user experiences. Eager to contribute to a dynamic team in Rwanda\'s tech scene.',
    documents: [
        { name: 'CV_JaneDoe_2024.pdf', type: 'CV' },
        { name: 'University_Diploma.pdf', type: 'Diploma' },
        { name: 'React_Certificate.pdf', type: 'Certificate' }
    ],
    badges: ['Early Adopter', 'Top Learner', 'Active Saver']
};

export const MOCK_USER_EMPLOYER: User = {
    id: 2,
    name: 'Kigali Tech Hub',
    email: 'hr@kigalitech.rw',
    role: 'employer',
    avatarUrl: 'https://i.pravatar.cc/150?u=kigalitech',
    bio: 'Kigali Tech Hub is a leading innovation center in Rwanda, fostering local talent and building cutting-edge solutions for the African market. We are always looking for passionate individuals to join our team.',
    documents: [],
    badges: ['Top Employer', 'Community Builder']
};

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 't1', description: 'Monthly Contribution to Youth Entrepreneurs', amount: -25000, type: 'contribution', date: '2024-07-15' },
    { id: 't2', description: 'Deposit from Bank Account', amount: 100000, type: 'deposit', date: '2024-07-10' },
    { id: 't3', description: 'Loan Payment', amount: -50000, type: 'payment', date: '2024-07-05' },
    { id: 't4', description: 'Withdrawal', amount: -75000, type: 'withdrawal', date: '2024-07-01' },
];

export const MOCK_COURSES: Course[] = [
    { id: 1, title: 'How to Start a Simple Business', description: 'Learn the basics of creating a business plan and finding your first customers.', duration: '2 Hours', category: 'Business' },
    { id: 2, title: 'Getting a Loan from Your Ikimina', description: 'Discover how your savings group can fund your next big idea.', duration: '1 Hour', category: 'Finance' },
    { id: 3, title: 'Digital Marketing Fundamentals', description: 'Master the essentials of online marketing to grow your business.', duration: '4 Hours', category: 'Skills' },
    { id: 4, title: 'Financial Literacy for Entrepreneurs', description: 'Understand budgeting, cash flow, and financial planning for your startup.', duration: '3 Hours', category: 'Finance' },
];

// SVG Icons as React Components
export const SeekerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const EmployerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4m0 4h5m0 0v-4m0 4H3m3-4h3m-3 4h3m-6-4h.01M12 12h.01M15 12h.01M12 15h.01M15 15h.01" />
  </svg>
);

export const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);

export const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rwanda-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
    </svg>
);

export const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const DashboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);

export const IkiminaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0L14.25 6h3.75m-3.75 0h-3.75m0 0L6.75 18.75M6.75 18.75a9.094 9.094 0 013.741-.479 3 3 0 014.682-2.72M6.75 18.75V18.75m0 0h3.75m-3.75 0h3.75m-3.75 0L1.313 16.121a3 3 0 010-4.242z" />
    </svg>
);

export const WalletIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a9 9 0 00-18 0h18z" />
    </svg>
);

export const EntrepreneurshipIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a12.061 12.061 0 01-4.5 0m3.75 2.311a12.06 12.06 0 01-4.5 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
);
