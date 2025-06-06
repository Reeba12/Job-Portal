import React from 'react';
import UserProfile from '../components/UserProfile';
import JobSearch from '../components/JobSearch';
import JobSection from '../components/JobSection';
import { dummyUser, featuredJobs, recommendedJobs } from '../data/mockData';

const Dashboard: React.FC = () => {
    return (
        <div className="layout-dashboard-container">
            <div className="left-dashboard-container">
                <UserProfile user={dummyUser} />
            </div>
            <div className="right-dashboard-container">
                <JobSearch />
                <JobSection
                    title="Featured Jobs"
                    jobs={featuredJobs}
                    viewAllLink="/jobs/featured"
                />
                <JobSection
                    title="Recommended Jobs"
                    jobs={recommendedJobs}
                    viewAllLink="/jobs/recommended"
                />
                <JobSection
                    title="Latest Jobs"
                    jobs={recommendedJobs}
                    viewAllLink="/jobs/latest"
                />
            </div>
        </div>
    );
};

export default Dashboard;