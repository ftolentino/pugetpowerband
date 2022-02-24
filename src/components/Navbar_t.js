import React, {useState} from 'react';
import { Link } from 'gatsby';
import { ImPower } from '@react-icons/all-files/im/ImPower';
import { FaBars, FaTimes } from "react-icons/fa";

import '../styles/global.css';


// btn.addEventListener('click', () => {
//     menu.classList.toggle('hidden');
//   });
  
  const Navbar_t = () => {
  const [click, setClick] = useState(false);
 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>setClick(false);
  return (
    <div>
      <nav className='bg-red-300'>
        <div className="max-w-full mx-4">
          <div className="flex justify-between">
              {/* logo */}
              <div>
                <Link to='/' className='flex items-center py-2 px-2 text-yellow-100 hover:text-indigo-400 transition duration-300' onClick={closeMobileMenu}>
                  <ImPower className='h-10 w-10 mr-1'/>
                  <span className='font-bold text-6xl'> 
                    PP
                  </span>
                </Link>     
              </div>
            {/* primary nav */}
            <div className='hidden md:flex items-center space-x-3 font-semibold text-yellow-900 text-3xl'>
              <Link to="/music" className='flex items-center py-2 px-2 hover:text-yellow-100'>Music</Link>
              <Link to="/media" className='flex items-center py-2 px-2 hover:text-yellow-100'>Media</Link>
              <Link to="/about" className='flex items-center py-2 px-2 hover:text-yellow-100'>About</Link>
              <Link to="/contact" className='flex items-center py-2 px-2 hover:text-yellow-100'>Contact</Link>
            </div>
            {/* mobile button */}
            <div className='md:hidden flex items-center'>
              <button onClick={handleClick}>
                { click ? <FaTimes className='w-8 h-8 text-yellow-100'/> : <FaBars className='w-8 h-8 text-yellow-100'/> }
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div onClick={handleClick}>  
          <div className={click ? 'visible md:hidden' : 'hidden'}>
            <Link to="/music" className='block py-2 px-2 text-base text-yellow-900 hover:bg-red-400 hover:text-yellow-100' onClick={closeMobileMenu}>Music</Link>
            <Link to="/media" className='block py-2 px-2 text-base text-yellow-900 hover:bg-red-400 hover:text-yellow-100' onClick={closeMobileMenu}>Media</Link>
            <Link to="/about" className='block py-2 px-2 text-base text-yellow-900 hover:bg-red-400 hover:text-yellow-100' onClick={closeMobileMenu}>About</Link>
            <Link to="/contact" className='block py-2 px-2 text-base text-yellow-900 hover:bg-red-400 hover:text-yellow-100' onClick={closeMobileMenu}>Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar_t;