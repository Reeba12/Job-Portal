import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="layout-container">
                <div className="flex items-center">
                    <Link to="/" className="mr-9">
                        <img src="/navbar-logo.svg" alt="JobSearch Logo" className="h-8" />
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <NavLink to="/jobs" label="Find Jobs" className="text-custom-blue font-semibold" />
                        <NavLink to="/companies" label="Top Companies" className="text-custom-gray" />
                        <NavLink to="/job-tracker" label="Job Tracker" className="text-custom-gray" />
                        <NavLink to="/calendar" label="My Calendar" className="text-custom-gray" />
                        <NavLink to="/documents" label="Documents" className="text-custom-gray" />
                        <NavLink to="/messages" label="Messages" className="text-custom-gray" />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-text-box"
                        />
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    <Link
                        to="/resume-builder"
                        className="bg-custom-blue fs-14 text-white px-3 py-2 rounded-lg hover:bg-custom-blue/80 transition-colors font-thin"
                    >
                        Resume Builder
                    </Link>
                    <Link to="/profile" className="ml-2">
                        <div className="w-10 h-10 rounded-full border-2 border-white">
                            <img
                                src="/avatar.png"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

interface NavLinkProps {
    to: string;
    label: string;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, className }) => {
    return (
        <Link
            to={to}
            className={`${className} hover:text-custom-blue transition-colors`}
        >
            {label}
        </Link>
    );
};

export default Navbar;