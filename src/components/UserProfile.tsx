import React from 'react';
import { ChevronDown } from 'lucide-react';
import { UserProfileProps } from '../utils/interfaces/interface';
import ProfileStatsCard from './cards/ProfileStatsCard';

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div className="space-y-4 left-dashboard-container">
            {/* Profile Card */}
            <div className="bg-white rounded-xl overflow-hidden">
                {/* Cover Image */}
                <div className="h-32 relative">
                    <img
                        src="/f7b7cb33145f7000c3fac5cc4d409f31a3de3686.jpg"
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                    {/* Profile Image */}
                    <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
                        <img
                            src="/392fc8a22c6eed8d401c7a77703ee92f86e797b1.png"
                            alt={user.name}
                            className="w-24 h-24 rounded-full border-4 border-white"
                        />
                    </div>
                </div>

                {/* Profile Info */}
                <div className="pt-14 px-6 pb-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-sm text-gray-600 mt-1 max-w-[200px] mx-auto">
                        {user.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        {user.location}
                    </p>
                </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl p-4">
                <div className="space-y-2 text-[14px]">
                    <ProfileStatsCard title="Profile Visitors" value={user.profileViews} />
                    <ProfileStatsCard title="Resume Viewers" value={user.resumeViews} />
                    <ProfileStatsCard title="My Jobs" value={user.applications} />
                </div>
            </div>

            {/* Calendar Card */}
            <div className="bg-white rounded-xl p-2">
                <button className="w-full flex items-center justify-between text-gray-700 group pb-0 mb-0">
                    <span className="font-bold">My calendar</span>
                    <ChevronDown size={20} className="text-[#000000] self-center" />
                </button>
                <p className="text-sm text-gray-500 mt-0 pt-0">Upcoming Interviews</p>
            </div>
        </div>
    );
};

export default UserProfile;