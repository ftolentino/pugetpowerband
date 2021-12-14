import React from 'react';
import { Link } from 'gatsby';
import { ImPower } from '@react-icons/all-files/im/ImPower';

import '../styles/global.css';


const Navbar_t = () => {
  return (
    <div>
      <nav className='bg-red-300'>
        <div className="max-w-screen-sm xl:max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <Link to='/' className='flex items-center py-2 px-2 text-yellow-100 hover:text-indigo-400 transition duration-300'>
                  <ImPower className='h-10 w-10 mr-1'/>
                  <span className='font-bold text-6xl'> 
                    PP
                  </span>
                </Link>     
              </div>   
            </div>
            {/* primary nav */}
            <div className='flex items-center space-x-3 font-semibold text-yellow-900 text-3xl'>
              <Link to="/music" className='flex items-center py-2 px-2 hover:text-yellow-100'>Music</Link>
              <Link to="/media" className='flex items-center py-2 px-2 hover:text-yellow-100'>Media</Link>
              <Link to="/about" className='flex items-center py-2 px-2 hover:text-yellow-100'>About</Link>
              <Link to="/contact" className='flex items-center py-2 px-2 hover:text-yellow-100'>Contact</Link>
            </div>
          </div>
        </div>
            {/* mobile menu */}  
      </nav>
    </div>
  );
};

export default Navbar_t;