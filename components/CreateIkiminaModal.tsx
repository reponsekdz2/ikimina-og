import React from 'react';

const CreateIkiminaModal: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-xl font-bold">Create a New Ikimina</h2>
                {/* Modal content goes here */}
            </div>
        </div>
    );
};

export default CreateIkiminaModal;
