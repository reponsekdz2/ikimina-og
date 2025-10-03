export type Role = 'seeker' | 'employer';
export type AuthScreen = 'login' | 'register';
export type DashboardView = 'dashboard' | 'ikimina' | 'wallet' | 'entrepreneurship' | 'profile' | 'forum';

export interface Job {
  id: number;
  title: string;
  employer: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  isFeatured?: boolean;
}

export interface IkiminaMember {
    id: number;
    name: string;
    avatarUrl: string;
    contributionStatus: 'Paid' | 'Pending';
}

export interface Ikimina {
  id: number;
  name: string;
  category: 'Business' | 'Youth' | 'Personal' | 'Agriculture';
  target: number;
  progress: number;
  members: IkiminaMember[];
  creator: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
  bio?: string;
  documents?: { name: string; type: 'CV' | 'Diploma' | 'Certificate' }[];
  badges?: string[];
  creditScore?: number;
}

export interface FileWithPreview extends File {
  preview: string;
}

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    type: 'deposit' | 'withdrawal' | 'payment' | 'contribution';
    date: string;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    category: 'Business' | 'Finance' | 'Skills';
}

export interface ForumPost {
    id: number;
    author: string;
    avatarUrl: string;
    content: string;
    timestamp: string;
}

export interface ForumTopic {
    id: number;
    title: string;
    description: string;
    posts: ForumPost[];
    author: string;
    timestamp: string;
}

export interface Webinar {
    id: number;
    title: string;
    host: string;
    date: string;
    time: string;
}

export interface IncubationProgram {
    id: number;
    title: string;
    provider: string;
    duration: string;
    description: string;
}

export interface FreelanceGig {
    id: number;
    title: string;
    client: string;
    budget: string;
    skills: string[];
}
