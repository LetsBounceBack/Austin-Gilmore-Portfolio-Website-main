import React from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { LuInfo } from "react-icons/lu";
import { PiBriefcase } from "react-icons/pi";
import { Link } from 'react-scroll';

const MinimalistNav = () => {
  return (
    <nav className='fixed right-2 lg:right-8 top-1/2 transform -translate-y-1/2 w-[60px] lg:w-[60px] h-auto z-50'>
      <div className='bg-black/20 hover:bg-black/50 backdrop-blur-2x1 rounded-full flex flex-col items-center text-2x1 text-white/50'>
        <Link
          to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          duration={500}
          className='cursor-pointer w-full h-[60px] flex items-center justify-center'
        >
          <HiOutlineHome />
        </Link>
        <Link
          to='about'
          activeClass='active'
          smooth={true}
          spy={true}
          duration={500}
          className='cursor-pointer w-full h-[60px] flex items-center justify-center'
        >
          <LuInfo />
        </Link>
        <Link
          to='work'
          activeClass='active'
          smooth={true}
          spy={true}
          duration={500}
          className='cursor-pointer w-full h-[60px] flex items-center justify-center'
        >
          <PiBriefcase />
        </Link>
      </div>
    </nav>
  );
};

export default MinimalistNav;
