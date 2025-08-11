import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://tailwindui.com/img/beams-pricing.png')] bg-[length:800px] bg-top"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-orange-300">JobDeep</span></h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Transforming careers and businesses through meaningful connections
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At JobDeep, we believe the right job can transform lives and the right talent can transform businesses. Our platform is designed to simplify the hiring process, offering job seekers easy access to thousands of opportunities and helping employers connect with the perfect candidates.
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To bridge the gap between talent and opportunity through innovation, trust, and simplicity.
            </p>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to begin your journey?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Browse Jobs
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;