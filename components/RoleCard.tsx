import React from 'react';
import type { Role } from '../types';
import { useTranslations } from '../hooks';

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

const SeekerIcon = () => <div className="text-5xl text-rwanda-blue">🎓</div>;
const EmployerIcon = () => <div className="text-5xl text-rwanda-green">💼</div>;

const RoleCard: React.FC<RoleCardProps> = ({ role, onClick }) => {
  const { t } = useTranslations();
  const borderColors = {
    seeker: 'hover:border-rwanda-blue',
    employer: 'hover:border-rwanda-green',
  };

  const content = {
      seeker: {
          icon: <SeekerIcon />,
          title: t('landing.seeker.title'),
          description: t('landing.seeker.description'),
      },
      employer: {
          icon: <EmployerIcon />,
          title: t('landing.employer.title'),
          description: t('landing.employer.description'),
      }
  }

  return (
    <button
      onClick={onClick}
      className={`group text-left w-full h-full bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent ${borderColors[role]} transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
            {content[role].icon}
            </div>
            <div>
            <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white">{content[role].title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{content[role].description}</p>
            </div>
        </div>
      </div>
       <div className="mt-6 text-right">
            <span className="inline-flex items-center text-sm font-semibold text-rwanda-blue dark:text-rwanda-yellow group-hover:underline">
                {t('landing.continueAs', { role })} &rarr;
            </span>
        </div>
    </button>
  );
};

export default RoleCard;