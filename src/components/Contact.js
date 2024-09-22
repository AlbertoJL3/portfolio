import React from 'react';
import linkedinLogo from '../images/socials/linkedin.webp';
import instagramLogo from '../images/socials/insta.png';
import githubLogo from '../images/socials/github.png';
import emailLogo from '../images/socials/gmail.png';
import phoneLogo from '../images/socials/phone.webp';

const ContactItem = ({ logo, alt, label, href, value }) => (
  <li className="flex items-center space-x-4 mb-6">
    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
      <img src={logo} alt={alt} className="w-6 h-6 object-contain" />
    </div>
    <div className="flex-grow">
      <span className="font-semibold text-gray-700">{label}</span>
      <br />
      {href ? (
        <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
          {value}
        </a>
      ) : (
        <span className="text-gray-600">{value}</span>
      )}
    </div>
  </li>
);

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h1>
      <div className="space-y-4">
        <p className="text-gray-600 mb-6">Feel free to reach out to me through any of the following channels:</p>
        <ul className="list-none">
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