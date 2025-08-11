import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo - Left aligned */}
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <span className="text-2xl font-bold text-orange-400">JobDeep</span>
          </div>
          
          {/* Centered Navigation */}
          <nav className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/" className="px-2 py-1 hover:text-orange-300 font-medium transition-colors">Home</a>
              <a href="/about" className="px-2 py-1 hover:text-orange-300 font-medium transition-colors">About Us</a>
              <a href="/browse-jobs" className="px-2 py-1 hover:text-orange-300 font-medium transition-colors">Browse Jobs</a>
              <a href="/employers" className="px-2 py-1 hover:text-orange-300 font-medium transition-colors">For Employers</a>
              <a href="/careers" className="px-2 py-1 hover:text-orange-300 font-medium transition-colors">Career Resources</a>
              <a href="/contact" className="px-2 py-1 hover:text-orange-300 font-medium transition-colors">Contact Us</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;