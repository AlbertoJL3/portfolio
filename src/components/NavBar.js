import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Briefcase, User, Gamepad2, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Experience', path: '/experience', icon: User },
    { name: 'Hobbies', path: '/hobbies', icon: Gamepad2 },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold">Alberto J. Lopez</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <item.icon className="mr-2" size={18} />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                <item.icon className="mr-2" size={18} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;