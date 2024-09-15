import React from 'react';

const ProjectCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Projects = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Projects</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Hardware Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard title="Hardware Project 1" description="Description of hardware project 1" />
            <ProjectCard title="Hardware Project 2" description="Description of hardware project 2" />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Software Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard title="Software Project 1" description="Description of software project 1" />
            <ProjectCard title="Software Project 2" description="Description of software project 2" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;