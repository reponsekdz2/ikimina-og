import React, { useState, useEffect, useRef } from 'react';
import type { Role } from '../types';
import RoleCard from './RoleCard';
import { SeekerIcon, EmployerIcon, IkiminaIcon, WalletIcon, EntrepreneurshipIcon } from '../constants';
import { FaBriefcase, FaComments, FaPaperPlane, FaUserTie, FaUsers, FaSeedling, FaLayerGroup } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from '../hooks';


const AnimatedHeadline: React.FC = () => {
    const { t } = useTranslations();
    const words = [t('landing.animated.jobs'), t('landing.animated.savings'), t('landing.animated.growth'), t('landing.animated.future')];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span className="text-rwanda-green">{`${words[index].substring(0, subIndex)}`}</span>
    );
};

const FeatureHighlight: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="group text-center p-6 bg-white/30 dark:bg-slate-800/20 rounded-2xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/60 hover:shadow-xl hover:-translate-y-2">
        <div className="inline-block p-4 bg-gradient-to-br from-white to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{description}</p>
    </div>
);

const MOCK_STORIES = [
    {
        name: 'Aline U.',
        role: 'Software Developer @ Kigali Tech Hub',
        story: '"KaziConnect helped me find my dream job in tech! The platform was easy to use, and I could showcase my skills and documents to top employers in Rwanda."',
        avatar: `https://i.pravatar.cc/150?u=aline`,
        icon: <FaUserTie className="text-rwanda-blue" />,
    },
    {
        name: 'Rwemarika & Co.',
        role: 'Employer',
        story: '"We found the perfect candidate for our marketing role in just one week. KaziConnect has a pool of talented and verified professionals."',
        avatar: `https://i.pravatar.cc/150?u=rwemarika`,
        icon: <FaBriefcase className="text-rwanda-green" />,
    },
    {
        name: 'Agri-Business Growth',
        role: 'Ikimina Group',
        story: '"Our Ikimina group reached its savings goal ahead of schedule! The digital wallet and tracking tools made managing contributions simple and transparent."',
        avatar: `https://i.pravatar.cc/150?u=agri`,
        icon: <FaUsers className="text-rwanda-yellow" />,
    },
];

const SuccessStoryCard: React.FC<{ story: typeof MOCK_STORIES[0] }> = ({ story }) => (
    <div className="flex-shrink-0 w-80 bg-white/50 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
            <img src={story.avatar} alt={story.name} className="w-20 h-20 rounded-full object-cover ring-4 ring-white/50 dark:ring-slate-700/50" />
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md">
                {story.icon}
            </div>
        </div>
        <h3 className="font-bold font-display text-slate-800 dark:text-white">{story.name}</h3>
        <p className="text-sm text-rwanda-green font-semibold mb-3">{story.role}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm italic">"{story.story}"</p>
    </div>
);

const AICoachChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{from: 'user' | 'ai', text: string}[]>([
        { from: 'ai', text: "Hello! I'm your AI Career Coach. How can I help you today? You can ask about finding jobs, improving your CV, or joining an Ikimina." }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const newMessages = [...messages, { from: 'user' as 'user', text: inputValue }];
        setMessages(newMessages);
        setInputValue('');
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages([...newMessages, { from: 'ai', text: "That's a great question! While I'm still in training, KaziConnect offers many resources. For job seekers, I recommend completing your profile and uploading your documents to attract employers. For employers, posting a clear job description is key to finding the right talent." }]);
        }, 1500);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-br from-rwanda-blue to-rwanda-green text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 animate-glow"
                aria-label="Open AI Career Coach"
            >
                <FaComments className="w-8 h-8" />
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200 dark:border-slate-700">
                    <header className="p-4 bg-gray-50 dark:bg-slate-800 border-b dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold font-display text-slate-800 dark:text-white">AI Career Coach</h3>
                            <p className="text-xs text-green-500 flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Online</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">&times;</button>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <p className={`max-w-xs text-sm p-3 rounded-2xl ${msg.from === 'user' ? 'bg-rwanda-blue text-white rounded-br-none' : 'bg-gray-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none'}`}>
                                        {msg.text}
                                    </p>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-200 dark:bg-slate-700 rounded-2xl rounded-bl-none p-3">
                                        <div className="flex items-center space-x-1">
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <div className="p-4 border-t dark:border-slate-700 bg-white dark:bg-slate-900">
                        <div className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask a question..."
                                className="w-full bg-gray-100 dark:bg-slate-800 rounded-full p-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-rwanda-blue"
                            />
                            <button onClick={handleSend} className="absolute right-2 top-1/2 -translate-y-1/2 bg-rwanda-blue text-white w-8 h-8 rounded-full flex items-center justify-center">
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


const LandingPage: React.FC<{ onRoleSelect: (role: Role) => void }> = ({ onRoleSelect }) => {
  const { t, tc } = useTranslations();

  return (
    <main className="min-h-screen w-full flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 dark:from-slate-800 dark:via-slate-900 dark:to-black overflow-x-hidden relative">
      
      <header className="absolute top-0 right-0 p-4 sm:p-6 lg:p-8 z-20">
        <LanguageSwitcher />
      </header>
      
      <div className="text-center z-10 my-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-slate-800 dark:text-white mb-4">
          {t('landing.title')} <span className="text-rwanda-green">{t('landing.subtitle')}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          {tc('landing.tagline', { animatedText: <AnimatedHeadline /> })}
        </p>
      </div>
      
      <div className="my-16 z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex items-center gap-4 p-4 rounded-lg justify-center">
                <div className="p-4 bg-white/80 dark:bg-slate-800/50 rounded-full shadow-lg">
                    <FaUsers className="w-8 h-8 text-rwanda-blue" />
                </div>
                <div>
                    <p className="text-3xl font-bold font-display text-slate-800 dark:text-white">5,000+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{t('stats.users')}</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg justify-center">
                <div className="p-4 bg-white/80 dark:bg-slate-800/50 rounded-full shadow-lg">
                    <FaBriefcase className="w-8 h-8 text-rwanda-green" />
                </div>
                <div>
                    <p className="text-3xl font-bold font-display text-slate-800 dark:text-white">1,200+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{t('stats.jobs')}</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg justify-center">
                <div className="p-4 bg-white/80 dark:bg-slate-800/50 rounded-full shadow-lg">
                    <FaLayerGroup className="w-8 h-8 text-rwanda-yellow" />
                </div>
                <div>
                    <p className="text-3xl font-bold font-display text-slate-800 dark:text-white">150+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{t('stats.ikimina')}</p>
                </div>
            </div>
        </div>
    </div>


      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 z-10 mt-4">
        <RoleCard
          role="seeker"
          onSelect={() => onRoleSelect('seeker')}
        />
        <RoleCard
          role="employer"
          onSelect={() => onRoleSelect('employer')}
        />
      </div>

      <div className="mt-24 z-10 w-full max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 dark:text-white mb-12">{t('features.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureHighlight 
                icon={<FaBriefcase className="w-8 h-8 text-rwanda-blue" />} 
                title={t('feature.jobMatching.title')}
                description={t('feature.jobMatching.description')}
            />
            <FeatureHighlight 
                icon={<IkiminaIcon className="w-8 h-8 text-rwanda-green" />} 
                title={t('feature.savings.title')}
                description={t('feature.savings.description')}
            />
            <FeatureHighlight 
                icon={<WalletIcon className="w-8 h-8 text-rwanda-yellow" />} 
                title={t('feature.wallet.title')}
                description={t('feature.wallet.description')}
            />
            <FeatureHighlight 
                icon={<FaSeedling className="w-8 h-8 text-indigo-500" />} 
                title={t('feature.skills.title')}
                description={t('feature.skills.description')}
            />
        </div>
      </div>
      
       <div className="mt-24 z-10 w-full text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 dark:text-white mb-12">{t('community.title')}</h2>
            <div className="flex gap-8 pb-4 overflow-x-auto justify-start md:justify-center">
                {MOCK_STORIES.map((story, index) => <SuccessStoryCard key={index} story={story} />)}
            </div>
       </div>

      <AICoachChatbot />
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:opacity-20" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:opacity-20" style={{animationDelay: '4s'}}></div>
    </main>
  );
};

export default LandingPage;