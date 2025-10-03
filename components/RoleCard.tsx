import React from 'react';

interface RoleCardProps {
    role: string;
    description: string;
    onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, description, onClick }) => {
    return (
        <button onClick={onClick} className="p-6 border rounded-lg text-left hover:border-rwanda-blue transition">
            <h3 className="text-lg font-bold">{role}</h3>
            <p className="text-sm text-slate-500">{description}</p>
        </button>
    );
};

export default RoleCard;
