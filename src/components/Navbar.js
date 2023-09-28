import React from 'react';
import { scrollTo } from '../App.js'
import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-left">
          <li className="nav-item nav-item nav-item-hover-left" onClick={() => scrollTo('home')}>HOME</li>
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-item nav-item-hover-right" onClick={() => scrollTo('about')}>ABOUT</li>
            <li className="nav-item nav-item-hover-right" onClick={() => scrollTo('skills')}>SKILLS</li>
            <li className="nav-item nav-item-hover-right" onClick={() => scrollTo('projects')}>PROJECTS</li>
            <li className="nav-item nav-item-hover-right" onClick={() => scrollTo('contact')}>CONTACT</li>
          </ul>
        </div>
      </nav>
    );
  }


export default Navbar;