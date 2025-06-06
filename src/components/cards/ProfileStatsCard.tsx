import React from 'react';

interface ProfileStatsCardProps {
    title: string;
    value: number;
}

const ProfileStatsCard: React.FC<ProfileStatsCardProps> = ({ title, value }) => {
    return (
        <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <span className="text-[#000000]">{title}</span>
            <span className="text-blue-600 font-semibold">{value}</span>
        </div>
    );
};

export default ProfileStatsCard;
