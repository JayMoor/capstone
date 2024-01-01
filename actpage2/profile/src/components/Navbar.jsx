import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Harmonize</div>
      <ul className="navbar-links">
        <li>
        <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to= '/albumpage'>Album Page</Link>
        </li>
        <li>
          <Link to= '/addalbum'>Add Album</Link>
        </li>
        <li>Home</li>
        <li>Admin</li>
      </ul>
    </nav>
  );
};

export default Navbar;
