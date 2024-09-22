import React from 'react';

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <h3 className="text-lg text-gray-600">{company}</h3>
    <p className="text-sm text-gray-500 mb-2">{period}</p>
    <p>{description}</p>
  </div>
);

const Experience = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Professional Experience</h1>
      <div className="space-y-6">
        <ExperienceItem
          title="Software Engineer"
          company="Tech Company Inc."
          period="2020 - Present"
          description="Worked on various projects including..."
        />
        <ExperienceItem
          title="Junior Developer"
          company="Startup XYZ"
          period="2018 - 2020"
          description="Assisted in developing..."
        />
      </div>
    </div>
  );
};

export default Experience;