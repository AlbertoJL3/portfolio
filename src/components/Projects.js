import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

// Import your images here
import cineBudLanding from '../projects/cinebud/landing_page.png';
import cineBudResults from '../projects/cinebud/results1.png';
import cineBudWatchlist from '../projects/cinebud/watchlist.png';
import talkIOImage from '../projects/talkio/talkio.png';
import talkIOImage2 from '../projects/talkio/talkio2.png';
import cmmAutomationImage from '../projects/cmm/inspection.jpg';
import cmmAutomationImage2 from '../projects/cmm/Fixture1.jpg';
import cmmAutomationImage3 from '../projects/cmm/fixture3.jpg';
import cmmAutomationImage4 from '../projects/cmm/fixture4.jpg';
import quadcopterImage from '../projects/drone/drone1.jpg';
import quadcopterTeam from '../projects/drone/drone2.jpg';
import explore from '../projects/cinebud/explore.png';

const ProjectListItem = ({ project, isSelected, onClick, isMobile }) => (
  <div 
    className={`p-4 cursor-pointer ${isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src={project.images[0].src} 
          alt={project.images[0].alt} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.shortDescription}</p>
        </div>
      </div>
      {isMobile && (isSelected ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
    </div>
  </div>
);

const ImageModal = ({ images, currentIndex, onClose, onPrevious, onNext }) => (
  <div 
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div className="max-w-4xl w-full p-4 relative" onClick={e => e.stopPropagation()}>
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-auto" />
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={24} />
      </button>
      {currentIndex > 0 && (
        <button 
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
        >
          <ChevronLeft size={36} />
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button 
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  </div>
);

const ProjectDetails = ({ project }) => {
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const handlePreviousImage = () => {
    setExpandedImageIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextImage = () => {
    setExpandedImageIndex(prevIndex => 
      prevIndex < project.images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="space-y-4 p-6 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Overview</h3>
        <p className="text-gray-600">{project.overview}</p>
      </section>
      {project.github && (
        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">GitHub</h3>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {project.github}
          </a>
        </section>
      )}
      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Features</h3>
        <ul className="list-disc list-inside text-gray-600">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </section>
      {project.images && project.images.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Images</h3>
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img 
                key={index} 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-32 object-cover rounded-lg cursor-pointer" 
                onClick={() => setExpandedImageIndex(index)}
              />
            ))}
          </div>
        </section>
      )}
      {expandedImageIndex !== null && (
        <ImageModal 
          images={project.images}
          currentIndex={expandedImageIndex}
          onClose={() => setExpandedImageIndex(null)}
          onPrevious={handlePreviousImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: "Cinebud",
      shortDescription: "A movie recommendation system using OpenAI API",
      overview: "Cinebud is a project inspired by my love for movies and my work in Pratt & Whitney. It leverages the OpenAI API to create a movie recommendation system for when you don't know what to watch.",
      github: "https://github.com/albertojl3/cinebud",
      features: [
        "Mood-based movie recommendations",
        "Integration with OpenAI API",
        "User-friendly interface",
        "Personalized watchlist"
      ],
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
      images: [
        { src: cineBudLanding, alt: "Cinebud Landing Page" },
        { src: cineBudResults, alt: "Cinebud Results Page" },
        { src: cineBudWatchlist, alt: "Cinebud Watchlist" }, 
        { src: explore, alt: "Cinebud Explore" }
      ]
    },
    {
      title: "TalkIO",
      shortDescription: "A real-time chat application",
      overview: "TalkIO is a full-stack real-time chat application built using modern web technologies.",
      github: "https://github.com/albertojl3/talkio",
      features: [
        "User authentication",
        "Real-time messaging",
        "Chat room creation",
        "Message history"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      images: [
        { src: talkIOImage, alt: "TalkIO Main Interface" },
        { src: talkIOImage2, alt: "TalkIO Chat Interface" }
      ]
    },
    {
      title: "CMM Automation",
      shortDescription: "Automated Coordinate Measuring Machine system",
      overview: "A hardware project to automate the process of measuring complex parts using a Coordinate Measuring Machine.",
      features: [
        "Automated measurement process",
        "High precision control",
        "Data logging and analysis",
        "Integration with existing CMM systems"
      ],
      technologies: ["PLC", "C++", "AutoCAD", "LabVIEW"],
      images: [
        { src: cmmAutomationImage, alt: "CMM Automation Setup" },
        { src: cmmAutomationImage2, alt: "CMM Fixture 1" },
        { src: cmmAutomationImage3, alt: "CMM Fixture 3" },
        { src: cmmAutomationImage4, alt: "CMM Fixture 4" }
      ]
    },
    {
      title: "Search & Rescue Quadcopter",
      shortDescription: "Autonomous quadcopter for search and rescue operations",
      overview: "An autonomous quadcopter equipped with computer vision capabilities for search and rescue operations in challenging terrains.",
      features: [
        "Autonomous flight",
        "Object recognition",
        "Thermal imaging",
        "Real-time data transmission"
      ],
      technologies: ["ROS", "Python", "OpenCV", "TensorFlow"],
      images: [
        { src: quadcopterImage, alt: "Quadcopter in Flight" },
        { src: quadcopterTeam, alt: "Quadcopter Team" }
      ]
    }
  ];

  return (
    <div className="container mx-auto mt-16 p-4 h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Projects</h1>
      <div className={`flex-1 overflow-hidden ${isMobile ? 'flex flex-col' : 'flex'}`}>
        <div className={`${isMobile ? 'w-full' : 'w-1/3 pr-4 border-r'} overflow-y-auto`}>
          {projects.map((project, index) => (
            <ProjectListItem 
              key={index}
              project={project}
              isSelected={selectedProject === project}
              onClick={() => setSelectedProject(selectedProject === project ? null : project)}
              isMobile={isMobile}
            />
          ))}
        </div>
        {(!isMobile || selectedProject) && (
          <div className={`${isMobile ? 'w-full mt-4' : 'w-2/3 pl-4'} overflow-y-auto`}>
            {selectedProject ? (
              <ProjectDetails project={selectedProject} />
            ) : !isMobile && (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a project to view details
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;