import React from 'react';
import prattLogo from '../images/logo/P&W.png';
import artifexLogo from '../images/logo/AFEX.jpg';

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
          period=" July 2023 - Present"
          img={prattLogo}
          description="As a software engineer, a role I started in after finishing my software bootcamp, I have worked in developing and implementing tools for neural network model analysis and auditing. My time is spent in the design of flexible, scalable data analysis solutions that have significantly enhanced process efficiency. I've also created robust auditing tools for neural net models and their deployment environments, ensuring quality and reliability. Working within Agile frameworks, I've collaborated effectively with cross-functional teams to drive product development and meet project objectives. My contributions extend to the development and maintenance of APIs and data access tools, which have been instrumental in facilitating data-driven decision-making for process optimization. Proficient in Python, C++, SQL, and bash, I've automated various productivity and quality tools, directly contributing to overall process improvements and operational excellence."
        />
        <ExperienceItem
          title="Process Development Engineer"
          img = {artifexLogo}
          company="Artifex Solutions"
          period="June 2022 - June 2023"
          description="My time as a Process Development Engineer was a transformative experience for me. I learned what good design and process optimization was, and how it can impact the processes within a high-precision manufacturing company. My experience consisted of designing and implementing automated quality control processes for Class II medical devices, including orthopedic implants. I've developed my skills in creating custom fixturing for various tools, managing the entire process from design to manufacturing. A notable achievement was leading the development of a CMM quality process using a Zeiss Contura, which dramatically reduced QC turnaround time from 10 days to just 1 hour per batch. My experience also includes writing and executing risk-based Validation Plans, ensuring regulatory compliance, and applying GD&T standards for precise manufacturing drawings and fixture designs. Throughout my career, I've consistently drafted comprehensive validation and manufacturing documentation, contributing to the production of high-quality, compliant medical devices."
        />
      </div>
    </div>
  );
};

export default Experience;