import React from 'react';
import JobCard from './cards/JobCard';
import { JobSectionProps } from '../utils/interfaces/interface';

const JobSection: React.FC<JobSectionProps> = ({ title, jobs, viewAllLink }) => {
    const handleApply = (jobId: string) => {
        console.log(`Applied to job with ID: ${jobId}`);
    };

    const handleBookmark = (jobId: string) => {
        console.log(`Bookmarked job with ID: ${jobId}`);
    };

    return (
        <>
            <div className="bg-[#E9ECEF] w-full h-[1px] my-4 md:block" />
            <div className="">
                <div className="flex  items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <a
                        href={viewAllLink}
                        className="text-blue-600 text-sm flex items-center gap-1 underline ml-3"
                    >
                        <span>See {title}</span>
                    </a>
                </div>
                <div className="grid grid-cols-5 gap-4 pb-4">
                    {jobs.map(job => (
                        <JobCard
                            key={job.id}
                            job={job}
                            onApply={handleApply}
                            onBookmark={handleBookmark}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default JobSection;