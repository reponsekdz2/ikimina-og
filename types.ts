export type Role = 'seeker' | 'employer';
export type AuthScreen = 'login' | 'register';

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
  portfolioVideoUrl?: string;
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
  verificationStatus: 'Verified' | 'Unverified';
  achievements: string[]; // array of achievement IDs
  cvData: CVData;
}

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

export interface FreelanceGig {
    id: number;
    title: string;
    client: string;
    skills: string[];
    budget: string;
}

export interface ForumPost {
    id: number;
    author: string;
    text: string;
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
    id: string;
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
    author: string;
    role: Role;
    imageUrl: string;
    story: string;
    title: string;
}