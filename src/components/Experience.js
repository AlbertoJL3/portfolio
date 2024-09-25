import React from 'react';
import prattLogo from '../images/logo/P&W.png';

const ExperienceItem = ({ title, company, period, description, img }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {img && (
        <img src={img} alt={`${company} Logo`} className="w-12 h-12 mr-4 object-contain" />
      )}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="text-lg text-gray-600">{company}</h3>
        <p className="text-sm text-gray-500">{period}</p>
      </div>
    </div>
    <p>{description}</p>
  </div>
);

const Experience = () => {
  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-3xl font-bold mb-6">Professional Experience</h1>
      <div className="space-y-6">
        <ExperienceItem
          title="Software Engineer"
          company="Pratt & Whitney"
          period="2023 - Present"
          img={prattLogo}
          description="As a software engineer, a role I started in after finishing my software bootcamp, I have worked in developing and implementing tools for neural network model analysis and auditing. My time is spent in the design of flexible, scalable data analysis solutions that have significantly enhanced process efficiency. I've also created robust auditing tools for neural net models and their deployment environments, ensuring quality and reliability. Working within Agile frameworks, I've collaborated effectively with cross-functional teams to drive product development and meet project objectives. My contributions extend to the development and maintenance of APIs and data access tools, which have been instrumental in facilitating data-driven decision-making for process optimization. Proficient in Python, C++, SQL, and bash, I've automated various productivity and quality tools, directly contributing to overall process improvements and operational excellence."
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