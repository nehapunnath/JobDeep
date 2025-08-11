import React from 'react';

const HomePage = () => {
    // Sample jobs data
    const jobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechSolutions Inc.',
            location: 'Bangalore',
            salary: '₹50,000 - ₹80,000/month',
            type: 'Full-time',
            posted: '2 days ago',
            logo: '💻',
            skills: ['React', 'JavaScript', 'CSS']
        },
        {
            id: 2,
            title: 'Digital Marketing Manager',
            company: 'BrandUp',
            location: 'Remote',
            salary: '₹45,000 - ₹60,000/month',
            type: 'Full-time',
            posted: '1 week ago',
            logo: '📈',
            skills: ['SEO', 'Social Media', 'Google Ads']
        },
        {
            id: 3,
            title: 'HR Executive',
            company: 'PeopleFirst Corp',
            location: 'Mumbai',
            salary: '₹35,000 - ₹45,000/month',
            type: 'Full-time',
            posted: '3 days ago',
            logo: '👥',
            skills: ['Recruitment', 'Employee Relations', 'HR Policies']
        },
        {
            id: 4,
            title: 'Backend Engineer',
            company: 'DataSystems',
            location: 'Hyderabad',
            salary: '₹60,000 - ₹90,000/month',
            type: 'Full-time',
            posted: 'Just now',
            logo: '⚙️',
            skills: ['Node.js', 'Python', 'AWS']
        }
    ];

    // Featured categories
    const categories = [
    { name: 'Nursing', jobs: 892, trending: true },
    { name: 'Teaching', icon: '👩‍🏫', jobs: 756, trending: true },
    { name: 'Web Developer', icon: '👨‍💻', jobs: 1345, trending: true },
    { name: 'IT & Software', icon: '💻', jobs: 1243, trending: true },
    { name: 'Sales & Marketing', icon: '📈', jobs: 876, trending: false },
    // { name: 'Education & Training', icon: '🎓', jobs: 342, trending: true },
    { name: 'Healthcare', icon: '🏥', jobs: 765, trending: false },
    { name: 'Finance & Accounting', icon: '💰', jobs: 543, trending: true },
    // { name: 'Skilled Trades', icon: '🔧', jobs: 231, trending: false }
];

    // Quick links
    const quickLinks = [
        {
            title: 'Post a Job',
            description: 'For employers looking to hire top talent',
            icon: '📝',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-100',
            textColor: 'text-blue-800',
            hoverColor: 'hover:bg-blue-100'
        },
        {
            title: 'Browse Jobs',
            description: 'Find opportunities by category and location',
            icon: '🔍',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-100',
            textColor: 'text-orange-800',
            hoverColor: 'hover:bg-orange-100'
        },
        {
            title: 'Career Resources',
            description: 'Tips and advice to boost your career',
            icon: '📚',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-100',
            textColor: 'text-purple-800',
            hoverColor: 'hover:bg-purple-100'
        },
        {
            title: 'Salary Calculator',
            description: 'Compare salaries for different roles',
            icon: '💰',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-100',
            textColor: 'text-green-800',
            hoverColor: 'hover:bg-green-100'
        }
    ];

    // Testimonials
    const testimonials = [
        {
            id: 1,
            name: 'Priya Sharma',
            role: 'UX Designer at TechCorp',
            content: 'JobDeep helped me find my dream job in just two weeks! The platform is so easy to use and the job recommendations were spot on.',
            avatar: '👩'
        },
        {
            id: 2,
            name: 'Rahul Patel',
            role: 'Marketing Manager',
            content: 'As an employer, I found the perfect candidate through JobDeep. The quality of applicants was much higher than other platforms.',
            avatar: '👨'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://tailwindui.com/img/beams-pricing.png')] bg-[length:800px] bg-top"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Find Your Dream Job. <span className="text-orange-300">Build Your Future.</span>
                        </h1>
                        <p className="text-lg mb-8">
                            JobDeep connects talented professionals with top employers. Whether you're starting your career or aiming higher, we've got the opportunities for you.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto bg-white rounded-md shadow-md p-2 mb-8">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="text"
                                    placeholder="Job title"
                                    className="flex-grow p-2 border border-gray-200 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="flex-grow p-2 border border-gray-200 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
                                />
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded text-sm">
                                    Search
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

           
            {/* Job Listings */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Latest <span className="text-blue-600">Job Openings</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Browse through our most recent job postings from top employers
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {jobs.map(job => (
                            <div key={job.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl text-blue-600 text-2xl">
                                            {job.logo}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">{job.title}</h3>
                                            <p className="text-blue-700 font-medium mt-1">{job.company}</p>
                                            <div className="flex items-center mt-2 text-gray-500 text-sm">
                                                <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {job.skills.map((skill, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center gap-2">
                                        <span className="inline-flex items-center bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                                            {job.type}
                                        </span>
                                        <span className="text-orange-600 font-medium text-sm">{job.salary}</span>
                                    </div>

                                    <div className="mt-5 flex justify-between items-center">
                                        <span className="text-xs text-gray-400">{job.posted}</span>
                                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow hover:shadow-md">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group transition-colors">
                            View all job openings
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Popular <span className="text-blue-600">Job Categories</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore opportunities in high-demand fields
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {categories.map((category, index) => (
                            <div 
                                key={index} 
                                className={`${category.bgColor} rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 border ${category.borderColor} relative`}
                            >
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold ${category.textColor} mb-3`}>
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {category.jobs.toLocaleString()}+ open positions
                                    </p>
                                    {/* {category.trending && (
                                        <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-medium text-orange-600 shadow-sm">
                                            Trending
                                        </span>
                                    )} */}
                                    <div className="mt-4 pt-4 border-t border-white/30">
                                        <a 
                                            href="#" 
                                            className={`inline-flex items-center text-sm font-medium ${category.textColor} hover:underline`}
                                        >
                                            View jobs
                                            <svg 
                                                className="w-4 h-4 ml-1" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    d="M9 5l7 7-7 7" 
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="#" 
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                        >
                            Browse All Categories
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {quickLinks.map((link, index) => (
                            <div key={index} className={`${link.bgColor} ${link.borderColor} ${link.hoverColor} p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 shadow-sm`}>
                                <div className={`${link.textColor} w-12 h-12 rounded-lg flex items-center justify-center mb-5 text-2xl`}>
                                    {link.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{link.title}</h3>
                                <p className="text-gray-600 mb-4">{link.description}</p>
                                <a href="#" className={`${link.textColor} font-medium inline-flex items-center group`}>
                                    Get started
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


          

             <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">10,000+</div>
                            <div className="text-gray-600">Job Openings</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">5,000+</div>
                            <div className="text-gray-600">Companies</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">1M+</div>
                            <div className="text-gray-600">Candidates</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">500+</div>
                            <div className="text-gray-600">New Jobs Daily</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;