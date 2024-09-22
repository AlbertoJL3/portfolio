import React, { useState, useEffect } from 'react';
import profileImage from '../images/IMG_5978.jpg';

const Home = () => {
  const [aboutMeContent, setAboutMeContent] = useState('');

  useEffect(() => {
    fetch('/about_me.txt')
      .then(response => response.text())
      .then(text => setAboutMeContent(text))
      .catch(error => console.error('Error loading About Me content:', error));
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
          <img
            src={profileImage}
            alt="Alberto J. Lopez"
            className="rounded-full w-48 h-48 object-cover border-4 border-gray-800"
          />
        </div>
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
          <p className="text-lg mb-6 text-gray-600">
            {aboutMeContent || 'Loading...'}
          </p>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Me</h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">LinkedIn</a>
              <a href="https://www.instagram.com/yourusername" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Instagram</a>
              <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">GitHub</a>
              <a href="mailto:363alberto@gmail.com" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Email</a>
              <span className="text-gray-600">Phone: (123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;