import React from 'react';

const DocumentsPage: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Documents</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-600">Manage your resumes and other documents here.</p>
      </div>
    </div>
  );
};

export default DocumentsPage;