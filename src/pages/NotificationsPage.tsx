import React from 'react';

const NotificationsPage: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-600">Your notifications will appear here.</p>
      </div>
    </div>
  );
};

export default NotificationsPage;