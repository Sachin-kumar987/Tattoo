import React from 'react';
// import nav data 
import { navData } from '../data';

const Nav = () => {
  // handle both object and array cases
  const items = navData.items || navData;

  return (
    <nav>
      <ul className="flex gap-[58px]">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="link hover:border-b-2 hover:border-black transition duration-300"
              href={item.href}
            >
              {item.name}
            </a>
            
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
