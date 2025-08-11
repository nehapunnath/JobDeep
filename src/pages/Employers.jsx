import React from 'react';
import { FiSearch, FiUsers, FiClock, FiBarChart2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Employers= () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hire the Right Talent with JobDeep</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Post your job openings and reach thousands of skilled candidates instantly. Our intelligent matching system ensures your posting reaches the most relevant job seekers.
          </p>
          <Link to={'/job-posting'}>
           <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105">
            Post a Job
          </button>
          </Link>
         
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose JobDeep?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FiSearch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Targeted Matching</h3>
              <p className="text-gray-600">
                Our AI matches your job postings with the most qualified candidates based on skills and experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Candidates</h3>
              <p className="text-gray-600">
                Access thousands of pre-screened professionals actively looking for new opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FiClock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Hiring</h3>
              <p className="text-gray-600">
                Reduce time-to-hire with our streamlined application and screening process.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FiBarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Track your job posting performance and candidate engagement metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/3 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Post Your Job</h3>
                <p className="text-gray-600">
                  Create a detailed job listing in minutes with our easy-to-use form.
                </p>
              </div>
              <div className="md:w-1/3 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Review Candidates</h3>
                <p className="text-gray-600">
                  Receive qualified applications and filter candidates based on your requirements.
                </p>
              </div>
              <div className="md:w-1/3 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Hire the Best</h3>
                <p className="text-gray-600">
                  Connect with top talent and make your hiring decision quickly.
                </p>
              </div>
            </div>

          
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Employers;