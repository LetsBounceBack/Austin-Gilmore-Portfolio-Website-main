import React, { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom'; // Import these from react-router-dom
import Logo from '../assets/logo.svg';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
}

const Header = () => {
  const Links = [
    { name: 'Home', to: 'home', id: 1 },
    { name: 'About', to: 'about', id: 2 },
    { name: 'Work', to: 'work', id: 3 },
  ];

  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (to) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };


  return (
    <div className={`shadow-md anim_gradient sticky py-3 ${scrollDirection === "down" ? "-top-24" : "top-0"} transition-all duration-500 z-50 `} >

      <div className='md:px-40 px-8 md:flex justify-between items-center '>
        {/* LOGO */}
        <div>
          <a href='/'>
            <img src={Logo} alt="Logo" className='cursor-pointer' />
          </a>
        </div>

        {/* Menu Icons */}
        <div onClick={() => setIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
          {isOpen ?
            <IoClose size={30} />
            :
            <IoMenu size={30} />
          }
        </div>

        {/* nav links */}
        <ul className={`md:flex md:pl-0 md:items-center md:pb-0 pb-12 ${isOpen ? '' : 'hidden'}`}>
          {Links.map((link) => (
            <li className='font-semibold my-7 md:my-0 md:ml-8 cursor-pointer' key={link.id}>
              <div onClick={() => handleClick(link.to)} className='hover:text-secondary transform hover:translate-y-[-5px] transition-transform duration-200 ease-in-out'>
                {link.name}
              </div>
            </li>
          ))}
          <button
            onClick={() => window.open(`${process.env.PUBLIC_URL}/AustinGilmore_Resume.pdf`, '_blank')}
            className='btn bg-blue-600 py-1 px-3 md:static md:ml-8 rounded-lg'>
            Resume</button>
        </ul>
      </div>
    </div >
  );
};

export default Header;
