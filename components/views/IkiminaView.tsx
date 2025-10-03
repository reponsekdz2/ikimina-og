import React from 'react';
import type { User } from '../../types';
import Widget from '../shared/Widget';
import IkiminaCard from '../IkiminaCard';
import { MOCK_IKIMINAS } from '../../constants';
import { useTranslations } from '../../hooks';

interface IkiminaViewProps {
    user: User;
}

const IkiminaView: React.FC<IkiminaViewProps> = ({ user }) => {
    const { t } = useTranslations();
    
    return (
        <div className="space-y-8">
             <div className="flex justify-between items-center">
                 <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{t('sidebar.ikimina')}</h2>
                <button className="px-6 py-2 bg-rwanda-green text-white font-semibold rounded-full hover:bg-opacity-90 transition">Create Ikimina</button>
            </div>

            <Widget title="My Ikimina Groups">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {MOCK_IKIMINAS.map(ikimina => (
                        <IkiminaCard key={ikimina.id} ikimina={ikimina} />
                    ))}
                </div>
            </Widget>
        </div>
    );
};

export default IkiminaView;
