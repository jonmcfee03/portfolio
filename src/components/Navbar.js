import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-left">
          <li className="active">HOME</li>
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-item">ABOUT</li>
            <li className="nav-item">SKILLS</li>
            <li className="nav-item">PROJECTS</li>
            <li className="nav-item">CONTACT</li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar;