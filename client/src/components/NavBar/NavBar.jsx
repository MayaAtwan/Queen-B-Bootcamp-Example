import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item"><Link to="/Welcome">Welcome</Link></li>
        <li className="navbar-item"><Link to="/">Register</Link></li>
        <li className="navbar-item"><Link to="/delete">Delete Account</Link></li>
        <li className="navbar-item"><Link to="/MentorList">MentorsList</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
