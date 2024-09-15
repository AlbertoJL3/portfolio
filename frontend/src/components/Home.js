import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <img src="/api/placeholder/200/200" alt="Your Name" className="rounded-full w-48 h-48 object-cover border-4 border-gray-800" />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Your Name</h1>
          <p className="text-xl mb-4 text-gray-600">
            Short about me paragraph goes here. I'm a passionate developer with interests in...
          </p>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">GitHub</a>
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Email</a>
              <span className="text-gray-600">Phone: (123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;