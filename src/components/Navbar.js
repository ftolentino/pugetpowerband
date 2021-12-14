import React, {useState, useEffect } from 'react'
import { Link } from 'gatsby';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { ImPower } from '@react-icons/all-files/im/ImPower';

import '../styles/global.css';

const Navbar = () => {
  const [ click, setClick ] = useState(false);
  const [button, setButton ] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 'sm') {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return window.removeEventListener('resize', showButton);
  }, []);

    return (
      <>
        <nav className="flex flex-row justify-end space-x-3 px-4 py-4 text-3xl text-yellow-900">
            <Link className="flex flex-row justify-start" to="/" onClick={closeMobileMenu}>
              <ImPower className="w-10 h-10 p-2 text-xl"/>
              PP
            </Link>
            <div className={ click ? 'sm:visible' : 'lg:hidden' } onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
              <div>
                <Link to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </div>
              <div>
                <Link to="/music" onClick={closeMobileMenu}>Music</Link>
              </div>
              <div>
                <Link to="/media" onClick={closeMobileMenu}>Media</Link>
              </div>
              <div>
                {button ? (
                  <Link to="/contact" onClick={closeMobileMenu}>
                    <button>Contact</button>
                  </Link>
                  ) : (
                    <Link to="/contact" onClick={closeMobileMenu}>
                      <button>Contact</button>
                    </Link>
                  )}
              </div>
        </nav>
      </>
    );
}

export default Navbar;