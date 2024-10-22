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
import solidworks from '../images/bsme/solidworks.png'
import minitab from '../images/bsme/Minitab_Logo.png'
import autocad from '../images/bsme/Autocad-Logo.png'
import matlab from '../images/bsme/Matlab_Logo.png'
import labview from '../images/bsme/labview.png'
import fusion360 from '../images/bsme/afusion.png'
import GDT from '../images/bsme/gdt.png'
import zeiss from '../images/bsme/Zeiss_logo.svg.png'
import resume from '../resume/AJL_BSME_Resume.pdf'
import { DownloadIcon } from 'lucide-react';

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
        description="M.S. in Mechanical Engineering, Northeastern University, January 2025"
      />
    </ul>
  </div>
);

const SkillItem = ({ name, icon }) => (
  <div className="flex flex-col items-center m-2">
    <img src={icon} alt={name} className="w-12 h-12 object-contain mb-2" />
    <span className="text-sm text-gray-700">{name}</span>
  </div>
);

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'Python', icon: python },
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: react },
    { name: 'CSS', icon: css },
    { name: 'HTML', icon: html },
    { name: 'SQL', icon: sql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'TailwindCSS', icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
  ];

  const engineeringTools = [
    { name: 'SolidWorks', icon: solidworks },
    { name: 'Minitab', icon: minitab },
    { name: 'AutoCAD', icon: autocad },
    { name: 'MATLAB', icon: matlab },
    { name: 'LabVIEW', icon: labview },
    { name: 'Fusion 360', icon: fusion360 },
    { name: 'GD&T', icon: GDT },
    { name: 'Calypso', icon: zeiss}
  ];

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Tools</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Programming & Web Development</h3>
        <div className="flex flex-wrap gap-4">
          {programmingSkills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Engineering & Manufacturing</h3>
        <div className="flex flex-wrap gap-4">
          {engineeringTools.map((tool) => (
            <SkillItem key={tool.name} name={tool.name} icon={tool.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ResumeDownloadSection = () => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Download My Resume</h2>
    <a
      href={resume}
      download
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
    >
      <DownloadIcon className="mr-2 h-5 w-5" />
      Download Resume
    </a>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto mt-16 p-4 flex-grow">
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
              I'm a mechanical engineer with a passion for integrating advanced technologies into flight systems. With a solid foundation in mechanical engineering and software development, in January of 2025, I will be pursuing a Master's degree for Mechanical Engineering at Northeastern University, focusing on the intersection of mechanical engineering, machine learning, and automation. I have experience with manufacturing processes, mechanical design, software development, and machine learning models. I've worked on the manufacturing floor interacting with interdisciplinary groups daily, and in Pratt & Whitney I've worked with engineers both remote and onsite. 
            </p>
            <p className="text-lg mb-6 text-gray-600">
              As I progress through my master's program, I'm actively seeking opportunities to apply my skills in real-world engineering environments be it through internships, Co-Ops or full-time positions. I'm eager to contribute to projects that involve the development of intelligent automation systems, the implementation of machine learning in design and manufacturing rocesses, or the creation of data-driven solutions for improving process efficiency.
            </p>
            <EducationSection />
            <SkillsSection />
            <ResumeDownloadSection />
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