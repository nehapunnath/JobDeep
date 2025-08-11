import React from 'react';
import { Link } from 'react-router-dom';

const JobDetails = () => {
  // Static job data for design purposes
  const job = {
    title: 'Frontend Developer',
    company: 'TechSolutions Inc.',
    location: 'Remote',
    salary: '₹50,000 – ₹80,000/month',
    type: 'Remote',
    experience: 'Senior',
    industry: 'IT',
    posted: '1 day ago',
    description: 'We are looking for an experienced Frontend Developer to join our growing team. The ideal candidate will be responsible for building user interfaces and implementing features with React.js.',
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and front-end libraries',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across devices',
      'Collaborate with product team and designers'
    ],
    requirements: [
      '3+ years of experience with React.js',
      'Strong proficiency in JavaScript, including DOM manipulation',
      'Experience with popular React workflows (such as Redux)',
      'Familiarity with RESTful APIs',
      'Knowledge of modern authorization mechanisms',
      'Familiarity with modern front-end build pipelines and tools'
    ],
    companyLogo: 'https://via.placeholder.com/64?text=TS',
    aboutCompany: 'TechSolutions is a leading software development company specializing in creating innovative web and mobile applications for clients worldwide.'
  };

  // Similar jobs data
  const similarJobs = [
    {
      id: 101,
      title: 'React Developer',
      company: 'Digital Creations',
      salary: '₹45,000 – ₹75,000/month',
      type: 'Remote'
    },
    {
      id: 102,
      title: 'UI Engineer',
      company: 'WebCraft Studios',
      salary: '₹55,000 – ₹85,000/month',
      type: 'Hybrid'
    },
    {
      id: 103,
      title: 'JavaScript Developer',
      company: 'CodeMasters',
      salary: '₹60,000 – ₹90,000/month',
      type: 'On-site'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
              <p className="text-xl">{job.company}</p>
            </div>
            <Link to="/browse-jobs">
              <button className="flex items-center text-white hover:text-blue-200">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Jobs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Details */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                {/* Basic Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {job.experience}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {job.industry}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <p className="text-orange-600 font-medium text-xl">{job.salary}</p>
                    <p className="text-sm text-gray-500 mt-1">Posted {job.posted}</p>
                  </div>
                </div>

                {/* Job Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Responsibilities</h2>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 text-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={job.companyLogo} 
                    alt={`${job.company} logo`} 
                    className="w-16 h-16 object-contain rounded-full"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/64?text=Logo';
                    }}
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-800">{job.company}</h2>
                    <p className="text-sm text-gray-500">{job.industry} Industry</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-medium text-gray-800 mb-2">About the Company</h3>
                  <p className="text-gray-700">{job.aboutCompany}</p>
                </div>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Similar Jobs</h2>
                <div className="space-y-4">
                  {similarJobs.map((similarJob) => (
                    <div key={similarJob.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition duration-300">
                      <h3 className="font-medium text-gray-900">{similarJob.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{similarJob.company}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-orange-600 text-sm font-medium">{similarJob.salary}</p>
                        <Link to={`/jobs/${similarJob.id}`}>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            View Details
                          </button>
                        </Link>
                      </div>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                        {similarJob.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;