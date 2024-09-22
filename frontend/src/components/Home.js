import React, { useState, useEffect } from 'react';
import profileImage from '../images/hobbies/IMG_5978.jpg';
import cuaImage from '../images/edu/cua_logo.png';
import columbiaImage from '../images/edu/columbia.png';
import northeasternImage from '../images/edu/NEU.png';
import github from '../images/socials/github.png';
import linkedin from '../images/socials/linkedin.webp';
import instagram from '../images/socials/insta.png';

const EducationItem = ({ logo, alt, description }) => (
  <li className="flex items-center space-x-4 mb-4">
    <img src={logo} alt={alt} className="w-12 h-12 object-contain" />
    <span className="text-gray-600">{description}</span>
  </li>
);

const EducationSection = () => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
    <ul className="list-none">
      <EducationItem
        logo={cuaImage}
        alt="The Catholic University of America logo"
        description="B.S. in Mechanical Engineering, The Catholic University of America, 2018"
      />
      <EducationItem
        logo={columbiaImage}
        alt="Columbia University logo"
        description="Software Engineering Bootcamp, Columbia University, 2022"
      />
      <EducationItem
        logo={northeasternImage}
        alt="Northeastern University logo"
        description="M.S. in Computer Science, Northeastern University (In Progress)"
      />
    </ul>
  </div>
);

const ProgrammingLanguagesSection = () => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Programming Languages</h2>
    <div className="flex flex-wrap gap-2">
      {['Python', 'JavaScript', 'C', 'C++', 'SQL', 'HTML', 'CSS'].map(lang => (
        <span key={lang} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
          {lang}
        </span>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [aboutMeContent, setAboutMeContent] = useState('');

  useEffect(() => {
    fetch('/about_me.txt')
      .then(response => response.text())
      .then(text => setAboutMeContent(text))
      .catch(error => console.error('Error loading About Me content:', error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto mt-8 p-4 flex-grow">
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
            <EducationSection />
            <ProgrammingLanguagesSection />
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center items-center space-x-6">
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;