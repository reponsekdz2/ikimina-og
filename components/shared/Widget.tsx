import React, { ReactNode } from 'react';

interface WidgetProps {
    title: string;
    children: ReactNode;
    className?: string;
}

const Widget: React.FC<WidgetProps> = ({ title, children, className }) => {
    return (
        <div className={`bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700 ${className}`}>
            <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-4">{title}</h3>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Widget;
