import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <img src="/api/placeholder/200/200" alt="Your Name" className="rounded-full w-48 h-48 object-cover" />
        <div>
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <p className="text-xl mb-4">
            Short about me paragraph goes here. I'm a passionate developer with interests in...
          </p>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Contact Me</h2>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">Email</a>
              <span className="text-blue-600">Phone: (123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};