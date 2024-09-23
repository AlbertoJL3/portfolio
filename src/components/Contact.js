import React from 'react';
import linkedinLogo from '../images/socials/linkedin.webp';
import instagramLogo from '../images/socials/insta.png';
import githubLogo from '../images/socials/github.png';
import emailLogo from '../images/socials/gmail.png';
import phoneLogo from '../images/socials/phone.webp';

const ContactItem = ({ logo, alt, label, href, value }) => (
  <li className="flex items-center space-x-6 mb-6"> 
    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-200 rounded-full">
      <img src={logo} alt={alt} className="w-7 h-7 object-contain" /> 
    </div>
    <div className="flex-grow">
      <span className="font-semibold text-gray-700 text-lg">{label}</span>
      <br />
      {href ? (
        <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-lg"> 
          {value}
        </a>
      ) : (
        <span className="text-gray-600 text-lg">{value}</span>
      )}
    </div>
  </li>
);

const Contact = () => {
  return (
    <div className="container mx-auto mt-20 p-6 max-w-3xl"> {/* Increased top margin and max width */}
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h1> {/* Larger heading and more bottom margin */}
      <div className="space-y-6 bg-white shadow-lg rounded-lg p-8"> {/* Added a card-like container */}
        <p className="text-gray-600 text-xl mb-8">Feel free to reach out to me through any of the following channels:</p> {/* Increased font size and margin */}
        <ul className="list-none space-y-6"> {/* Added vertical spacing between items */}
          <ContactItem
            logo={linkedinLogo}
            alt="LinkedIn logo"
            label="LinkedIn"
            href="https://www.linkedin.com/in/albertojl3/"
            value="AlbertoJL3"
          />
          <ContactItem
            logo={instagramLogo}
            alt="Instagram logo"
            label="Instagram"
            href="https://www.instagram.com/betolopezpr/"
            value="Betolopezpr"
          />
          <ContactItem
            logo={githubLogo}
            alt="GitHub logo"
            label="GitHub"
            href="https://github.com/AlbertoJL3"
            value="AlbertoJL3"
          />
          <ContactItem
            logo={emailLogo}
            alt="Email icon"
            label="Email"
            href="mailto:363alberto@gmail.com"
            value="363Alberto@gmail.com"
          />
          <ContactItem
            logo={phoneLogo}
            alt="Phone icon"
            label="Phone"
            value="(787)-244-6467"
          />
        </ul>
      </div>
    </div>
  );
};

export default Contact;