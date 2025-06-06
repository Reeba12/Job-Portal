import React, { useState } from 'react';
import { Search } from 'lucide-react';

const JobSearch: React.FC = () => {
    const [filters, setFilters] = useState({
        jobTitle: '',
        location: '',
        jobType: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle search logic here
        console.log(filters);
    };

    return (
        <div className="bg-[#F5F6F7] w-full pt-4">
            <div className="w-full px-0">
                {/* Header */}
                <div className="">
                    <h2 className="text-lg md:text-xl font-bold text-[#222] leading-tight mb-0 pb-0">
                        Find your Dream Job, <span className="text-custom-blue font-bold">Albert!</span>
                    </h2>
                </div>
                <p className="text-custom-gray text-sm md:text-base mb-4">Explore the latest job openings and apply for the best opportunities available today!</p>
                {/* Search Bar */}
                <div className="bg-white rounded-xl shadow p-2 md:p-4 flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
                    <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title, Company, or Keywords"
                            className="flex-1 px-4 py-2 rounded-l-lg md:rounded-l-lg md:rounded-r-none border-0 focus:ring-0 bg-transparent text-custom-gray placeholder:text-[#B0B3BC] font-normal min-w-0"
                            value={filters.jobTitle}
                            onChange={handleChange}
                        />
                        <div className="w-px bg-[#E4E6EB] mx-2 hidden md:block" />
                        <select
                            name="location"
                            className="w-44 px-4 py-2 border-0 bg-transparent text-custom-gray font-normal focus:ring-0 min-w-0"
                            value={filters.location}
                            onChange={handleChange}
                        >
                            <option value="">Select Location</option>
                            <option value="new-york">New York</option>
                            <option value="san-francisco">San Francisco</option>
                            <option value="seattle">Seattle</option>
                            <option value="chicago">Chicago</option>
                        </select>
                        <div className="w-px bg-[#E4E6EB] mx-2 hidden md:block" />
                        <select
                            name="jobType"
                            className="w-36 px-4 py-2 border-0 bg-transparent text-custom-gray font-normal focus:ring-0 min-w-0"
                            value={filters.jobType}
                            onChange={handleChange}
                        >
                            <option value="">Job Type</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-custom-blue text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors ml-4 font-thin"
                        >
                            <Search size={18} />
                            <span>Search</span>
                        </button>
                    </form>
                </div>
                {/* Similar Chips */}
                <div className="flex items-center gap-2 mt-5 mb-6">
                    <span className="text-custom-gray text-sm font-normal">Similar:</span>
                    <button className="px-4 py-1 rounded-lg border border-[#737A91] text-custom-gray text-sm font-normal hover:bg-[#F5F6F7]">Frontend</button>
                    <button className="px-4 py-1 rounded-lg border border-[#737A91] text-custom-gray text-sm font-normal hover:bg-[#F5F6F7]">Backend</button>
                    <button className="px-4 py-1 rounded-lg border border-[#737A91] text-custom-gray text-sm font-normal hover:bg-[#F5F6F7]">Graphic Designer</button>
                </div>
            </div>
        </div>
    );
};

export default JobSearch;