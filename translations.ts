export type Language = 'en' | 'fr' | 'rw';

export const LANGUAGES: { code: Language, name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'rw', name: 'Kinyarwanda' },
];

export const translations = {
    en: {
        landing: {
            tagline: "Connecting Rwanda's Talent with Opportunity.",
            cta: "Choose your role to get started:",
            seeker: {
                title: "I'm a Job Seeker",
                description: "Find jobs, build your CV, access training, and join savings groups.",
            },
            employer: {
                title: "I'm an Employer",
                description: "Post jobs, find skilled candidates, and support community savings.",
            },
            continueAs: "Continue as {role}",
            footer: {
                newsletter: {
                    title: "Stay Updated",
                    description: "Join our newsletter for the latest job alerts and platform news.",
                    placeholder: "Enter your email address",
                    button: "Subscribe",
                }
            }
        },
        auth: {
            back: "Back",
            welcome: "Welcome to KaziConnect",
            signInAs: "Sign in as a {role}",
            login: {
                email: "Email Address",
                password: "Password",
                signIn: "Sign In",
                noAccount: "Don't have an account?",
                register: "Register here",
            },
            register: {
                name: "Full Name",
                create: "Create Account",
                haveAccount: "Already have an account?",
                signIn: "Sign in",
            }
        },
        sidebar: {
            dashboard: "Dashboard",
            ikimina: "Ikimina",
            wallet: "Wallet",
            entrepreneurship: "Entrepreneurship",
            achievements: "Achievements",
            stories: "Success Stories",
            forum: "Community Forum",
            coach: "AI Coach",
            profile: "My Profile",
            logout: "Logout",
        },
        job: {
            featured: "Featured",
            apply: "Apply Now",
        },
        dashboard: {
            seeker: {
                welcome: "Welcome back, {name}!",
                subtitle: "Here's your personalized dashboard.",
                summary: {
                    matches: "Job Matches",
                    savings: "Ikimina Progress",
                    course: "Course Status",
                },
                aiJobs: "AI Recommended Jobs",
                recommendedJobs: "Featured Opportunities",
                freelance: "Freelance Gigs",
                joinIkimina: "Join a Savings Group",
            },
            employer: {
                welcome: "Welcome, {name}",
                postJob: "Post a New Job",
                postJobSubtitle: "+5 free listings this month",
                yourIkimina: "Your Ikimina Groups",
                yourJobs: "Your Job Postings",
            }
        },
        wallet: {
            title: "My Wallet",
            balance: "Current Balance",
            available: "Available Funds",
            deposit: "Deposit",
            withdraw: "Withdraw",
            quickActions: "Quick Actions",
            send: "Send Money",
            loan: "Request Loan",
            history: "Transaction History",
        },
        entrepreneurship: {
            title: "Entrepreneurship Hub",
            courses: "Featured Courses",
            mentors: "Connect with Mentors",
            connect: "Connect",
            incubation: "Incubation Programs",
            pitch: "Pitch Your Idea",
            pitchTitle: "Have a business idea?",
            pitchDesc: "Submit your pitch for a chance to get seed funding.",
            pitchButton: "Submit Pitch",
        },
        profile: {
            title: "My Profile",
            edit: "Edit Profile",
            save: "Save Changes",
            details: "Personal Details",
            cvBuilder: "CV Builder",
            fullName: "Full Name",
            phone: "Phone Number",
            address: "Address",
            summary: "Professional Summary",
        },
        forum: {
            title: "Community Forum",
            newTopic: "Start New Topic",
            topics: "Recent Topics",
            events: "Upcoming Events & Webinars",
            register: "Register",
        },
        achievements: {
            title: "My Achievements",
            myBadges: "My Badges",
            leaderboard: "Community Leaderboard",
        },
        stories: {
            title: "Success Stories",
            subtitle: "Be inspired by members of our community.",
            all: "All",
            jobSeeker: "Job Seekers",
            entrepreneur: "Entrepreneurs",
            saver: "Savers",
            readMore: "Read more",
        },
        coach: {
            title: "Your AI Career Coach",
            subtitle: "Get personalized advice to boost your career.",
            suggestion1: "Review my CV",
            suggestion2: "Give me interview tips",
            suggestion3: "Suggest a career path",
            placeholder: "Ask me anything...",
        },
        application: {
            title: "Apply for",
            at: "at",
            cv: "Your CV / Resume",
            change: "Change",
            coverLetter: "Cover Letter",
            generate: "✨ AI Generate",
            generating: "Generating...",
            coverLetterPlaceholder: "Write a brief cover letter or let AI help you!",
            cancel: "Cancel",
            submit: "Submit Application",
            submitting: "Submitting...",
        },
        cvBuilder: {
            title: "CV Builder",
            templates: "Templates",
            classic: "Classic",
            modern: "Modern",
            content: "CV Content",
            contact: "Contact Information",
            summary: "Professional Summary",
            preview: "Live Preview",
            download: "Download PDF"
        }
    },
    fr: {
        // Basic french translations
    },
    rw: {
        // Basic kinyarwanda translations
    }
};
