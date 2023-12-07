import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Harmonize</div>
      <ul className="navbar-links">
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to= '/albumpage'>Album Page</Link>
        </li>
        <li>Home</li>
        <li>Album Review </li>
        <li>Admin</li>
        <li>Add Album</li>
      </ul>
    </nav>
  );
};

export default Navbar;