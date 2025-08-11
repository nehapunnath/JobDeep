import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const resources = [
    {
      id: 1,
      title: 'Resume Writing Tips',
      icon: '📝',
      items: [
        'Tailor your resume for each job application',
        'Use strong action verbs (e.g., "developed", "managed", "increased")',
        'Quantify achievements with numbers and metrics',
        'Keep it concise (1-2 pages maximum)',
        'Include relevant keywords from the job description',
        'Highlight technical skills and certifications',
        'Proofread multiple times for errors'
      ],
      tips: [
        'Use a clean, professional layout',
        'List experience in reverse chronological order',
        'Include a skills section with relevant technologies'
      ]
    },
    {
      id: 2,
      title: 'Common Interview Questions',
      icon: '💬',
      items: [
        "Tell me about yourself",
        "What are your greatest strengths?",
        "What is your greatest weakness?",
        "Why do you want to work here?",
        "Where do you see yourself in 5 years?",
        "Describe a challenging situation and how you handled it",
        "Why should we hire you?"
      ],
      tips: [
        'Prepare STAR (Situation, Task, Action, Result) stories',
        'Research the company beforehand',
        'Have questions ready to ask the interviewer'
      ]
    },
    {
      id: 3,
      title: 'How to Negotiate Salary',
      icon: '💰',
      items: [
        "Research industry standards for the position",
        "Know your minimum acceptable salary",
        "Consider the entire compensation package (benefits, bonuses, etc.)",
        "Let the employer make the first offer when possible",
        "Justify your request with evidence of your value",
        "Practice your negotiation conversation",
        "Be prepared to walk away if needed"
      ],
      tips: [
        'Wait until you have an offer before negotiating',
        'Be polite but firm in your requests',
        'Consider negotiating for other benefits if salary is fixed'
      ]
    },
    {
      id: 4,
      title: 'Career Growth Strategies',
      icon: '📈',
      items: [
        "Set clear short-term and long-term career goals",
        "Seek out mentors in your field",
        "Continuously update your skills through courses and certifications",
        "Build a strong professional network",
        "Take on stretch assignments at work",
        "Develop both technical and soft skills",
        "Track and document your achievements"
      ],
      tips: [
        'Create a personal development plan',
        'Attend industry conferences and events',
        'Consider lateral moves for broader experience'
      ]
    },
    {
      id: 5,
      title: 'Remote Work Best Practices',
      icon: '🏠',
      items: [
        "Set up a dedicated workspace",
        "Maintain a regular work schedule",
        "Use video for important meetings",
        "Over-communicate with your team",
        "Take regular breaks throughout the day",
        "Invest in reliable technology and internet",
        "Set clear boundaries between work and personal time"
      ],
      tips: [
        'Dress as if you were going to the office',
        'Use productivity tools like time trackers',
        'Schedule virtual coffee chats with colleagues'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Career Resources</h1>
              <p className="text-xl">Essential guides to advance your career</p>
            </div>
            <Link to="/">
              <button className="flex items-center text-white hover:text-blue-200">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{resource.icon}</span>
                  <h2 className="text-xl font-bold text-gray-800">{resource.title}</h2>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium text-gray-800 mb-2">Key Points:</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {resource.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Pro Tips:</h3>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    {resource.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        {/* <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Career Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Recommended Books</h3>
                <ul className="space-y-2">
                  <li className="text-blue-600 hover:text-blue-800">
                    <a href="#">"What Color Is Your Parachute?" by Richard N. Bolles</a>
                  </li>
                  <li className="text-blue-600 hover:text-blue-800">
                    <a href="#">"The 2-Hour Job Search" by Steve Dalton</a>
                  </li>
                  <li className="text-blue-600 hover:text-blue-800">
                    <a href="#">"Never Split the Difference" by Chris Voss</a>
                  </li>
                </ul>
              </div>
               */}
              {/* <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Useful Websites</h3>
                <ul className="space-y-2">
                  <li className="text-blue-600 hover:text-blue-800">
                    <a href="https://www.linkedin.com/learning" target="_blank" rel="noopener noreferrer">LinkedIn Learning</a>
                  </li>
                  <li className="text-blue-600 hover:text-blue-800">
                    <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera</a>
                  </li>
                  <li className="text-blue-600 hover:text-blue-800">
                    <a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer">Glassdoor</a>
                  </li>
                </ul>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Careers;