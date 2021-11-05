import React from 'react'
import { Link } from 'gatsby';
import '../styles/global.css';

const Navbar = () => {
    return (
      <nav className="flex flex-row justify-end space-x-2">
          <Link to="/about">
            About
          </Link>
          <Link to="/music">Music</Link>
          <Link to="/media">Media</Link>
          <Link to="/contact">Contact</Link>
      </nav>
    );
}

export default Navbar;