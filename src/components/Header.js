import React, { useState, useEffect } from 'react';
// import header data 
import { headerData } from '../data';
// import components
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';
import { TiThMenuOutline } from 'react-icons/ti';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
 

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  const { isDark, toggleTheme } = useTheme();

  // header state
  const [isActive, setIsActive] = useState(false);

  // nav mobile state 
  const [navMobile, setNavMobile] = useState(false);

  // scroll event 
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        isActive
          ? 'h-[100px] lg:h-[110px] shadow-lg'
          : 'h-[120px] lg:h-[150px]'
      } fixed bg-white dark:bg-gray-900 left-0 right-0 z-10 max-w-[1920px]
       w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="/">
          <img className="w-[188px] h-[90px]" src={logo} alt="logo" />
        </a>

        {/* nav - initially hidden - show on desktop */}
        <div className="hidden xl:flex">
          <Nav />
        </div>

        {/* nav menu btn - showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%]
          bg-black text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl" />
        </div>

        {/* nav mobile - showing by default - hidden on desktop */}
        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
            isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'
          } fixed bg-white w-full h-full
           left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>

        {/* theme toggle & social icon - initially hidden - show on desktop */}
        <div className="hidden xl:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
          </button>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
