import React, { useState } from 'react'

function Filters() {
     const jobTypes = ['Full-time', 'Part-time', 'Internship', 'Remote'];
        const experienceLevels = ['Fresher', 'Mid-Level', 'Senior'];
        const industries = ['IT', 'Healthcare', 'Education', 'Finance', 'Marketing', 'Manufacturing', 'Retail'];
    
        // State for filters
        const [filters, setFilters] = useState({
            jobType: [],
            experience: [],
            industry: [],
            searchQuery: '',
            location: ''
        });
    
        // State for dropdown visibility
        const [dropdownVisibility, setDropdownVisibility] = useState({
            jobType: false,
            experience: false,
            industry: false
        });

        const toggleDropdown = (dropdown) => {
        setDropdownVisibility(prev => ({
            ...prev,
            [dropdown]: !prev[dropdown]
        }));
    };

    // Handle filter changes
    const handleFilterChange = (filterType, value) => {
        setFilters(prev => {
            const currentFilters = [...prev[filterType]];
            const index = currentFilters.indexOf(value);

            if (index === -1) {
                currentFilters.push(value);
            } else {
                currentFilters.splice(index, 1);
            }

            return {
                ...prev,
                [filterType]: currentFilters
            };
        });
    };
    
  return (
    <>
    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                            <h2 className="text-xl font-bold mb-6 text-gray-800">Filter Jobs</h2>

                            {/* Search Filter */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                                <input
                                    type="text"
                                    placeholder="Job title, company, keywords"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    value={filters.searchQuery}
                                    onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                                />
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                <input
                                    type="text"
                                    placeholder="City, state, or remote"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    value={filters.location}
                                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                                />
                            </div>

                            {/* Job Type Filter Dropdown */}
                            <div className="mb-6 relative">
                                <button
                                    type="button"
                                    className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => toggleDropdown('jobType')}
                                >
                                    <span>Job Type ({filters.jobType.length})</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {dropdownVisibility.jobType && (
                                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {jobTypes.map((type) => (
                                            <div key={type} className="flex items-center px-4 py-2 hover:bg-gray-100">
                                                <input
                                                    id={`job-type-${type}`}
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                    checked={filters.jobType.includes(type)}
                                                    onChange={() => handleFilterChange('jobType', type)}
                                                />
                                                <label htmlFor={`job-type-${type}`} className="ml-2 text-sm text-gray-700">
                                                    {type}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Experience Level Filter Dropdown */}
                            <div className="mb-6 relative">
                                <button
                                    type="button"
                                    className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => toggleDropdown('experience')}
                                >
                                    <span>Experience ({filters.experience.length})</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {dropdownVisibility.experience && (
                                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {experienceLevels.map((level) => (
                                            <div key={level} className="flex items-center px-4 py-2 hover:bg-gray-100">
                                                <input
                                                    id={`exp-${level}`}
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                    checked={filters.experience.includes(level)}
                                                    onChange={() => handleFilterChange('experience', level)}
                                                />
                                                <label htmlFor={`exp-${level}`} className="ml-2 text-sm text-gray-700">
                                                    {level}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Industry Filter Dropdown */}
                            <div className="mb-6 relative">
                                <button
                                    type="button"
                                    className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => toggleDropdown('industry')}
                                >
                                    <span>Industry ({filters.industry.length})</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {dropdownVisibility.industry && (
                                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {industries.map((industry) => (
                                            <div key={industry} className="flex items-center px-4 py-2 hover:bg-gray-100">
                                                <input
                                                    id={`industry-${industry}`}
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                    checked={filters.industry.includes(industry)}
                                                    onChange={() => handleFilterChange('industry', industry)}
                                                />
                                                <label htmlFor={`industry-${industry}`} className="ml-2 text-sm text-gray-700">
                                                    {industry}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Reset Filters */}
                            <button
                                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => setFilters({
                                    jobType: [],
                                    experience: [],
                                    industry: [],
                                    searchQuery: '',
                                    location: ''
                                })}
                            >
                                Reset All Filters
                            </button>
                        </div>
                    </div>
                    </>
  )
}

export default Filters