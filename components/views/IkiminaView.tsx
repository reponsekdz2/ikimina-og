import React from 'react';
import type { User, Ikimina } from '../../types';
import { IKIMINA_DATA } from '../../constants';
import IkiminaCard from '../IkiminaCard';
import Widget from '../shared/Widget';

interface IkiminaViewProps {
    user: User;
    onManageIkimina: (ikimina: Ikimina) => void;
}

const IkiminaView: React.FC<IkiminaViewProps> = ({ user, onManageIkimina }) => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                 <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">Ikimina Groups</h2>
                 {user.role === 'employer' && (
                    <button className="px-6 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition">Create New Ikimina</button>
                 )}
            </div>
            
            <Widget title={user.role === 'seeker' ? 'Available to Join' : 'Your Created Groups'}>
                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {IKIMINA_DATA.map(group => (
                        <IkiminaCard key={group.id} group={group} role={user.role} onManage={onManageIkimina} />
                    ))}
                </div>
            </Widget>

             {user.role === 'seeker' && (
                <Widget title="Groups You've Joined">
                     <p className="text-center text-gray-500 dark:text-gray-400 py-8">You haven't joined any groups yet.</p>
                </Widget>
             )}
        </div>
    );
};

export default IkiminaView;