import React from 'react';
import JobSection from '../components/JobSection';
import { featuredJobs, recommendedJobs } from '../data/mockData';

const JobsPage: React.FC = () => {
  // Combine featured and recommended jobs for this page
  const allJobs = [...featuredJobs, ...recommendedJobs];
  
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allJobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm p-4 transition-shadow hover:shadow-md">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-md" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{job.title}</h3>
                  <div className="text-gray-500 text-sm mt-1">{job.company}</div>
                  <div className="text-gray-500 text-sm mt-1">{job.location}</div>
                  <div className="text-gray-500 text-xs mt-1">${job.salaryMin}k / yr | {job.applicants} applicants</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors w-full">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;