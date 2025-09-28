import React from 'react';
// import socials data
import { socialData } from '../data';

const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-x-[30px]">
      {socialData.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-accent transition-colors"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
