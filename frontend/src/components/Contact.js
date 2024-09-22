import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="space-y-4">
        <p>Feel free to reach out to me through any of the following channels:</p>
        <ul className="list-none space-y-2">
          <li>
            <span role="img" aria-label="LinkedIn" className="mr-2">🔗</span>
            LinkedIn: <a href="https://www.linkedin.com/in/albertojl3/" className="text-blue-600 hover:text-blue-800">AlbertoJL3</a>
          </li>
          <li>
            <span role="img" aria-label="Instagram" className="mr-2">📸</span>
            Instagram: <a href="https://www.instagram.com/betolopezpr/" className="text-blue-600 hover:text-blue-800">Betolopezpr</a>
          </li>
          <li>
            <span role="img" aria-label="GitHub" className="mr-2">🐙</span>
            GitHub: <a href="https://github.com/AlbertoJL3" className="text-blue-600 hover:text-blue-800">AlbertoJL3</a>
          </li>
          <li>
            <span role="img" aria-label="Email" className="mr-2">📧</span>
            Email: <a href="mailto:363alberto@gmail.com" className="text-blue-600 hover:text-blue-800">363Alberto@gmail.com</a>
          </li>
          <li>
            <span role="img" aria-label="Phone" className="mr-2">📱</span>
            Phone: (787)-244-6467
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;