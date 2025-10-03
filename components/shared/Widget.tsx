import React from 'react';

interface WidgetProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Widget: React.FC<WidgetProps> = ({ title, children, className }) => {
    return (
        <section className={className}>
            <h3 className="text-xl font-bold font-display text-slate-700 dark:text-slate-300 mb-4">{title}</h3>
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700">
                {children}
            </div>
        </section>
    );
};

export default Widget;
