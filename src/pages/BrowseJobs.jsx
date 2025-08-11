import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from '../components/Filters';

const BrowseJobsPage = () => {
    const navigate = useNavigate();

    // Filter options
            const [filters, setFilters] = useState({
            jobType: [],
            experience: [],
            industry: [],
            searchQuery: '',
            location: ''
        });
   
    // State for sorting
    const [sortBy, setSortBy] = useState('mostRecent');

    // Sample job data with actual dates for sorting
    const jobs = [
        {
            id: 1,
            title: 'Marketing Executive',
            company: 'BrightWay Pvt. Ltd.',
            location: 'Bangalore, India',
            salary: '₹25,000 – ₹40,000/month',
            type: 'Full-time',
            experience: 'Mid-Level',
            industry: 'Marketing',
            posted: '2 days ago',
            postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
            description: 'We are looking for a creative Marketing Executive to join our team.'
        },
        {
            id: 2,
            title: 'Frontend Developer',
            company: 'TechSolutions Inc.',
            location: 'Remote',
            salary: '₹50,000 – ₹80,000/month',
            type: 'Remote',
            experience: 'Senior',
            industry: 'IT',
            posted: '1 day ago',
            postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
            description: 'Looking for an experienced React developer.'
        },
        {
            id: 3,
            title: 'HR Intern',
            company: 'PeopleFirst Corp',
            location: 'Mumbai, India',
            salary: '₹15,000 – ₹20,000/month',
            type: 'Internship',
            experience: 'Fresher',
            industry: 'HR',
            posted: '1 week ago',
            postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
            description: 'Great opportunity for HR students.'
        },
        {
            id: 4,
            title: 'Financial Analyst',
            company: 'Capital Wealth',
            location: 'Delhi, India',
            salary: '₹60,000 – ₹90,000/month',
            type: 'Full-time',
            experience: 'Mid-Level',
            industry: 'Finance',
            posted: '3 days ago',
            postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            description: 'Seeking a financial analyst.'
        },
        {
            id: 5,
            title: 'Nursing Supervisor',
            company: 'HealthCare Plus',
            location: 'Hyderabad, India',
            salary: '₹35,000 – ₹50,000/month',
            type: 'Full-time',
            experience: 'Senior',
            industry: 'Healthcare',
            posted: 'Just now',
            postedDate: new Date(), // Current date
            description: 'Experienced nursing professional needed.'
        },
        {
            id: 6,
            title: 'Part-time Tutor',
            company: 'EduGrow Academy',
            location: 'Chennai, India',
            salary: '₹300 – ₹500/hour',
            type: 'Part-time',
            experience: 'Mid-Level',
            industry: 'Education',
            posted: '5 days ago',
            postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
            description: 'Looking for qualified tutors.'
        }
    ];

    // Toggle dropdown visibility
    

    // Navigate to job details
    const viewJobDetails = (jobId) => {
        navigate(`/jobs`);
    };

    // Filter jobs based on selected filters
    const filteredJobs = jobs.filter(job => {
        // Search query filter
        if (filters.searchQuery &&
            !job.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
            !job.company.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
            !job.description.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
            return false;
        }

        // Location filter
        if (filters.location &&
            !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
            return false;
        }

        // Job type filter
        if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
            return false;
        }

        // Experience filter
        if (filters.experience.length > 0 && !filters.experience.includes(job.experience)) {
            return false;
        }

        // Industry filter
        if (filters.industry.length > 0 && !filters.industry.includes(job.industry)) {
            return false;
        }

        return true;
    });

    // Sort jobs by date
    const sortedJobs = [...filteredJobs].sort((a, b) => {
        if (sortBy === 'mostRecent') {
            return b.postedDate - a.postedDate; // Newest first
        } else {
            return a.postedDate - b.postedDate; // Oldest first
        }
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Jobs</h1>
                    <p className="text-lg">Find your perfect job from thousands of opportunities</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <Filters/>
                    

                    {/* Job Listings */}
                    <div className="lg:w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">
                                {sortedJobs.length} {sortedJobs.length === 1 ? 'Job' : 'Jobs'} Found
                            </h2>
                            <div className="flex items-center">
                                <label htmlFor="sort" className="mr-2 text-sm text-gray-700">Sort by:</label>
                                <select
                                    id="sort"
                                    className="border border-gray-300 rounded-md shadow-sm py-1 pl-2 pr-8 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="mostRecent">Most Recent</option>
                                    <option value="oldest">Oldest First</option>
                                </select>
                            </div>
                        </div>

                        {sortedJobs.length > 0 ? (
                            <div className="space-y-6">
                                {sortedJobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="p-6">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                                <div className="mb-4 sm:mb-0">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                                                    <p className="text-blue-700 font-medium">{job.company}</p>
                                                    <div className="flex items-center mt-2 text-gray-600 text-sm">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <span>{job.location}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-orange-600 font-medium mb-2">{job.salary}</p>
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        {job.type}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <p className="text-gray-700 mb-4">{job.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                        {job.industry}
                                                    </span>
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                        {job.experience}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                                                <span className="text-sm text-gray-500">Posted {job.posted}</span>
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                                                    onClick={() => viewJobDetails(job.id)}
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-md p-8 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
                                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
                                <button
                                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    onClick={() => setFilters({
                                        jobType: [],
                                        experience: [],
                                        industry: [],
                                        searchQuery: '',
                                        location: ''
                                    })}
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseJobsPage;