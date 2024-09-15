import React from 'react';

const HobbyCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

const Hobbies = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HobbyCard title="Photography" description="Capturing moments and landscapes" />
        <HobbyCard title="Hiking" description="Exploring nature trails and mountains" />
        <HobbyCard title="Cooking" description="Experimenting with new recipes and cuisines" />
      </div>
    </div>
  );
};