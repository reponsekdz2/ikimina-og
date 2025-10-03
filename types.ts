export type Role = 'seeker' | 'employer';

export type AuthScreen = 'login' | 'register';

export type DashboardView = 'dashboard' | 'ikimina' | 'wallet' | 'entrepreneurship' | 'profile' | 'forum' | 'achievements' | 'stories' | 'coach';

export interface Job {
  id: number;
  title: string;
  employer: string;
  salary: string;
  type: string;
  isFeatured: boolean;
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
  creator: string;
  category: 'Business' | 'Youth' | 'Personal' | 'Agriculture';
  progress: number;
  target: number;
  members: IkiminaMember[];
}

export interface CVExperience {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
}

export interface CVEducation {
    id: number;
    school: string;
    degree: string;
    duration: string;
}

export interface CVData {
    photoUrl: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    summary: string;
    experience: CVExperience[];
    education: CVEducation[];
    skills: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  verificationStatus: 'Verified' | 'Unverified' | 'Pending';
  achievements: number[];
  cvData: CVData;
}

export interface FreelanceGig {
    id: number;
    title: string;
    client: string;
    skills: string[];
    budget: string;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    category: 'Business' | 'Finance' | 'Skills';
}

export interface IncubationProgram {
    id: number;
    title: string;
    provider: string;
    description: string;
    duration: string;
}

export interface Mentor {
    id: number;
    name: string;
    avatarUrl: string;
    title: string;
    company: string;
    expertise: string[];
}

export interface ForumPost {
    id: number;
    author: string;
    content: string;
}

export interface ForumTopic {
    id: number;
    title: string;
    author: string;
    timestamp: string;
    description: string;
    posts: ForumPost[];
}

export interface Webinar {
    id: number;
    title: string;
    host: string;
    date: string;
    time: string;
}

export interface Achievement {
    id: number;
    name: string;
    description: string;
    icon: string;
}

export interface LeaderboardUser {
    id: number;
    name: string;
    avatarUrl: string;
    points: number;
}

export interface SuccessStory {
    id: number;
    name: string;
    title: string;
    category: 'Job Seeker' | 'Entrepreneur' | 'Saver';
    imageUrl: string;
    story: string;
}
