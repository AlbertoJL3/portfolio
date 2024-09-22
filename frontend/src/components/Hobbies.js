import React from 'react';
import sailing from '../images/hobbies/sailing.jpg';
import golf from '../images/hobbies/golf.jpg';
import wingFoil from '../images/hobbies/IMG_4589.jpg';
import keyboards from '../images/hobbies/Keyboards.jpg';
import running from '../images/hobbies/IMG_5795.JPG';
import cinema from '../images/hobbies/ford.PNG';

const HobbyCard = ({ title, description, mediaType, mediaSrc }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    {mediaType === 'image' ? (
      <img src={mediaSrc} alt={title} className="w-full h-48 object-cover" />
    ) : mediaType === 'video' ? (
      <video className="w-full h-48 object-cover" controls>
        <source src={mediaSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : null}
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Hobbies = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HobbyCard 
          title="Sailing" 
          description="Traveling on the high seas, nothing like letting out my inner-pirate every once in a while with my family. Longest trip in distance traveled in a straight line is Florida to Puerto Rico."
          mediaType="image"
          mediaSrc={sailing}
        />
        <HobbyCard 
          title="Foiling" 
          description="I'm what they call on the beach a water-man. I love everything from surfing, to kite-boarding, to wing-foiling, and have put in practice to all of them. Wing-foiling is my favorite, it combines all the watersports into a single activity."
          mediaType="image"
          mediaSrc={wingFoil}
        />
        <HobbyCard 
          title="Golf" 
          description="I'm also an avid golfer. Puerto Rico is a fantastic golf destination, and I've been playing for about a year or so and gotten my handicap to about +16. It's not much but it's honest work. I've golfed world-wide including in Iceland!"
          mediaType="image"
          mediaSrc={golf}
        />
         <HobbyCard 
          title="Running" 
          description="I recently finished the Iceland Marathon alongside my brother in August 2024. We finished in 3 hours and 55 minutes. It was my first marathon, and coming from a non-athletic background, it was a huge accomplishment."
          mediaType="image"
          mediaSrc={running}
        />
        <HobbyCard 
          title="Mechanical Keyboards" 
          description="I love designing keyboards, and keyboard PCBs. It started as a small project to learn more about how modern electronics work, and are made. I've now designed 3 keyboards, and try to make one every few months. This one is by far my favorite."
          mediaType="image"
          mediaSrc={keyboards}
        />
          <HobbyCard 
          title="Cinema" 
          description="My favorite rainy-day activity is to go watch a movie! It's my favorite way to unwind, and now that I moved to Boston, the Alamo Drafthouse has become my favorite place to watch new or old films."
          mediaType="image"
          mediaSrc={cinema}
        />
      </div>
    </div>
  );
};

export default Hobbies;