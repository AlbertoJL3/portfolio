import React from 'react';
import profileImage from '../images/hobbies/IMG_5978.jpg';
import cuaImage from '../images/edu/cua_logo.png';
import columbiaImage from '../images/edu/columbia.png';
import northeasternImage from '../images/edu/NEU.png';
import github from '../images/socials/github.png';
import linkedin from '../images/socials/linkedin.webp';
import instagram from '../images/socials/insta.png';
import python from '../images/programming/python.png';
import javascript from '../images/programming/javascript.png';
import react from '../images/programming/react.png';
import css from '../images/programming/css.png';
import html from '../images/programming/html.png';
import sql from '../images/programming/sql.png';
import mongodb from '../images/programming/mongo.png';

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

const ProgrammingLanguageItem = ({ name, icon }) => (
  <div className="flex flex-col items-center m-2">
    <img src={icon} alt={name} className="w-12 h-12 object-contain mb-2" />
    <span className="text-sm text-gray-700">{name}</span>
  </div>
);

const ProgrammingLanguagesSection = () => {
  const languages = [
    { name: 'Python', icon: python },
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: react },
    { name: 'CSS', icon: css },
    { name: 'HTML', icon: html },
    { name: 'SQL', icon: sql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'TailwindCSS', icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frameworks & Languages</h2>
      <div className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <ProgrammingLanguageItem key={lang.name} name={lang.name} icon={lang.icon} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
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
              I'm a mechanical engineer and curious software developer, passionate about making web applications, designing mechanical systems, and spaceflight technology. I graduated with a degree in Mechanical Engineering, and learned programming on my own while working my first job. It was at that time that I decided to attend a software bootcamp after work and code projects on weekends. After 18 months of creating projects and working as a software engineer, I've decided to move to Boston to pursue a career in software, and pursue a Master's degree in Computer Science. I'm currently looking for a Co-Op position that can help me grow as a software engineer and learn from experienced professionals.
            </p>
            <EducationSection />
            <ProgrammingLanguagesSection />
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center items-center space-x-6">
          <a href="https://www.linkedin.com/in/albertojl3" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/betolopezpr" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://github.com/albertojl3" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;