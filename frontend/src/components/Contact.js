import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="space-y-4">
        <p>Feel free to reach out to me through any of the following channels:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>LinkedIn: <a href="#" className="text-blue-600 hover:text-blue-800">Your LinkedIn Profile</a></li>
          <li>Instagram: <a href="#" className="text-blue-600 hover:text-blue-800">Your Instagram Profile</a></li>
          <li>GitHub: <a href="#" className="text-blue-600 hover:text-blue-800">Your GitHub Profile</a></li>
          <li>Email: <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">your.email@example.com</a></li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;