export type Language = 'en' | 'fr' | 'rw';

export const LANGUAGES: { code: Language, name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'rw', name: 'Kinyarwanda' },
];

export const translations = {
    en: {
        sidebar: {
            dashboard: 'Dashboard',
            ikimina: 'Ikimina',
            wallet: 'Wallet',
            entrepreneurship: 'Entrepreneurship',
            forum: 'Forum',
            profile: 'My Profile',
            achievements: 'Achievements',
            stories: 'Success Stories',
            coach: 'AI Coach',
        },
        forum: {
            title: 'Community Forum',
            newTopic: 'Start a New Topic',
            topics: 'Recent Topics',
            events: 'Upcoming Events & Webinars',
            register: 'Register',
        },
        achievements: {
            title: 'Achievements & Leaderboard',
            myBadges: 'My Badges',
            leaderboard: 'Community Leaderboard',
        },
        coach: {
            title: 'AI Career Coach',
            subtitle: 'Get personalized career advice, CV reviews, and interview preparation.',
            suggestion1: 'Review my CV for a developer role',
            suggestion2: 'Give me interview tips for a bank teller job',
            suggestion3: 'What career path fits my skills?',
            placeholder: 'Ask your AI coach anything...',
        }
    },
    fr: {
        sidebar: {
            dashboard: 'Tableau de bord',
            ikimina: 'Ikimina',
            wallet: 'Portefeuille',
            entrepreneurship: 'Entrepreneuriat',
            forum: 'Forum',
            profile: 'Mon Profil',
            achievements: 'Réalisations',
            stories: 'Histoires de réussite',
            coach: 'Coach IA',
        },
        forum: {
            title: 'Forum Communautaire',
            newTopic: 'Nouveau Sujet',
            topics: 'Sujets Récents',
            events: 'Événements à venir',
            register: "S'inscrire",
        },
        achievements: {
            title: 'Réalisations et Classement',
            myBadges: 'Mes Badges',
            leaderboard: 'Classement',
        },
        coach: {
            title: 'Coach de Carrière IA',
            subtitle: 'Obtenez des conseils de carrière personnalisés, des analyses de CV et une préparation aux entretiens.',
            suggestion1: 'Analyser mon CV pour un poste de développeur',
            suggestion2: "Conseils d'entretien pour un guichetier",
            suggestion3: 'Quel parcours professionnel pour mes compétences ?',
            placeholder: 'Demandez n\'importe quoi à votre coach IA...',
        }
    },
    rw: {
        sidebar: {
            dashboard: 'Kwandikisha',
            ikimina: 'Ikimina',
            wallet: 'Ikofi',
            entrepreneurship: 'Kwihangira imirimo',
            forum: 'Ihuriro',
            profile: 'Umwirondoro wanjye',
            achievements: 'Ibyagezweho',
            stories: 'Inkuru z\'impinduka',
            coach: 'Umujyanama wa AI',
        },
        forum: {
            title: 'Ihuriro Rusange',
            newTopic: 'Tangiza Ikiganiro',
            topics: 'Ibiriho',
            events: 'Ibiganiro biri imbere',
            register: 'Iyandikishe',
        },
        achievements: {
            title: 'Ibyagezweho & Urutonde',
            myBadges: 'Amashimwe Yanjye',
            leaderboard: 'Urutonde',
        },
        coach: {
            title: 'Umujyanama wa AI mu kazi',
            subtitle: 'Bona inama zihariye z\'akazi, isuzuma rya CV, n\'imyiteguro y\'ibazwa.',
            suggestion1: 'Nsuzumira CV yanjye ku mwanya w\'umuhanga muri porogaramu',
            suggestion2: 'Mpa amabanga y\'ikibazo cy\'akazi ko kuri banki',
            suggestion3: 'Ni akahe kazi kajyanye n\'ubumenyi bwanjye?',
            placeholder: 'Baza umujyanama wawe wa AI icyo ushaka...',
        }
    }
};
