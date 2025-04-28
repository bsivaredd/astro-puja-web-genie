import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false }) => {
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Astrology', path: '/services?category=astrology' },
    { text: 'Puja', path: '/services?category=puja' },
    { text: 'Gemstones', path: '/services?category=gemstones' },
    { text: 'About', path: '/about' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex space-x-6'}`}>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${
            isMobile
              ? 'block px-3 py-2 rounded hover:bg-purple-50'
              : 'text-gray-700 hover:text-purple-600 transition-colors'
          }`}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;