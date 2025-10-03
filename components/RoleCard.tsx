
import React, { useRef, useState } from 'react';
import type { Role } from '../types';

interface RoleCardProps {
  role: Role;
  title: string;
  description: string;
  icon: React.ReactNode;
  onSelect: () => void;
  primaryColor: string;
  secondaryColor: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, title, description, icon, onSelect, primaryColor, secondaryColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    }
    setIsHovered(false);
  };
  
  const handleMouseEnter = () => {
      setIsHovered(true);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onSelect}
      className="w-80 h-96 rounded-3xl transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${primaryColor} to-${secondaryColor} rounded-3xl transition-shadow duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}></div>
      <div className="relative w-full h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center justify-between text-center cursor-pointer overflow-hidden border border-white/20 dark:border-slate-700/50">
          <div className={`text-${primaryColor} dark:text-white/80 transition-transform duration-500`} style={{ transform: isHovered ? 'translateZ(50px)' : 'translateZ(0px)' }}>
            {icon}
          </div>
          <div className="transition-transform duration-500" style={{ transform: isHovered ? 'translateZ(40px)' : 'translateZ(0px)' }}>
              <h2 className="text-3xl font-display font-bold text-slate-800 dark:text-white">{title}</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>
          </div>
          <button className={`bg-gradient-to-r from-${primaryColor} to-${secondaryColor} text-white font-bold py-3 px-8 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-${secondaryColor}/50`} style={{ transform: isHovered ? 'translateZ(60px)' : 'translateZ(0px)' }}>
            Join as {title}
          </button>
      </div>
    </div>
  );
};

export default RoleCard;
