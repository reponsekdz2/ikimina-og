import React, { useState, useEffect } from 'react';
import type { Role } from '../types';
import RoleCard from './RoleCard';
import { SeekerIcon, EmployerIcon, IkiminaIcon, WalletIcon, EntrepreneurshipIcon } from '../constants';
import { FaBriefcase } from 'react-icons/fa';


const AnimatedHeadline: React.FC = () => {
    const words = ["Jobs.", "Savings.", "Growth.", "Future."];
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
    <div className="flex flex-col items-center text-center p-4">
        <div className="p-4 bg-white/80 dark:bg-slate-800/50 rounded-full mb-4 shadow-lg">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{description}</p>
    </div>
);


const LandingPage: React.FC<{ onRoleSelect: (role: Role) => void }> = ({ onRoleSelect }) => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 dark:from-slate-800 dark:via-slate-900 dark:to-black overflow-hidden relative">
      <div className="text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-slate-800 dark:text-white mb-4">
          KaziConnect <span className="text-rwanda-green">Rwanda</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Your Gateway to <AnimatedHeadline /> Empower Your Career and Financial Well-being.
        </p>
      </div>
      
      <div className="my-12 z-10 w-full max-w-5xl">
          <div className="bg-white/50 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col md:flex-row justify-around items-center gap-4">
              <div className="text-center">
                  <p className="text-3xl font-bold font-display text-rwanda-blue">5,000+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Active Users</p>
              </div>
              <div className="text-center">
                  <p className="text-3xl font-bold font-display text-rwanda-green">1,200+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Jobs Posted</p>
              </div>
              <div className="text-center">
                  <p className="text-3xl font-bold font-display text-rwanda-yellow">150+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Ikimina Groups</p>
              </div>
          </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 z-10">
        <RoleCard
          role="seeker"
          title="Job Seeker"
          description="Find jobs, join Ikimina, and upload your education certificates to grow your career."
          icon={<SeekerIcon />}
          onSelect={() => onRoleSelect('seeker')}
          primaryColor="rwanda-blue"
          secondaryColor="rwanda-green"
        />
        <RoleCard
          role="employer"
          title="Employer"
          description="Post jobs, create Ikimina groups, and discover the best talent in Rwanda."
          icon={<EmployerIcon />}
          onSelect={() => onRoleSelect('employer')}
          primaryColor="rwanda-green"
          secondaryColor="rwanda-yellow"
        />
      </div>

      <div className="mt-20 z-10 w-full max-w-6xl">
        <div className="bg-white/50 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureHighlight 
                icon={<FaBriefcase className="w-8 h-8 text-rwanda-blue" />} 
                title="Job Matching" 
                description="Connect with top employers and find jobs that match your skills." 
            />
            <FeatureHighlight 
                icon={<IkiminaIcon className="w-8 h-8 text-rwanda-green" />} 
                title="Savings Groups" 
                description="Join or create digital Ikimina to save together and achieve financial goals." 
            />
            <FeatureHighlight 
                icon={<WalletIcon className="w-8 h-8 text-rwanda-yellow" />} 
                title="Digital Wallet" 
                description="Manage your finances, make contributions, and pay loans securely." 
            />
            <FeatureHighlight 
                icon={<EntrepreneurshipIcon className="w-8 h-8 text-indigo-500" />} 
                title="Skill Development" 
                description="Access courses and resources to start your own business and grow." 
            />
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 dark:opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 dark:opacity-20"></div>
    </main>
  );
};

export default LandingPage;
