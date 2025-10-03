import React from 'react';

const CVBuilderModal: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-full max-w-4xl h-4/5">
                <h2 className="text-xl font-bold">CV Builder</h2>
                {/* CV Builder content goes here */}
            </div>
        </div>
    );
};

export default CVBuilderModal;
