import './Navbar.css'
import { scrollTo } from "../App"
import React, { useState, useEffect } from 'react';

let setActive;

function Navbar() {
  const [activeSec, setActiveSec] = useState('home');
  const [navbarVisible, setNavbarVisible] = useState(false);

  // Define the setActive function
  setActive = (section) => {
    setActiveSec(section);
  };

    useEffect(() => {
      const handleScroll = () => {
        const homeSection = document.getElementById('home');
        const aboutSection = document.getElementById('about-navbar-trigger');
        const skillsSection = document.getElementById('skills-navbar-trigger');
        // const projectsSection = document.getElementById('projects');
        // const contactSection = document.getElementById('contact');
        const scrollY = window.scrollY;
        console.log(scrollY);
        //   setActiveSec('contact');
        // } else if (scrollY >= projectsSection.offsetTop) {
        //   setActiveSec('projects');
        if (scrollY >= skillsSection.offsetTop) {
          setActiveSec('skills');
        } else if (scrollY >= aboutSection.offsetTop) {
          setActiveSec('about');
          setNavbarVisible(true);
        } else {
          setNavbarVisible(false);
          setActiveSec('home');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  return (
    <nav className={`navbar ${navbarVisible ? 'navbar-visible' : ''}`}>
      <div className="nav-left">
        <li className={`nav-item nav-item-hover ${activeSec === 'home' ? 'active' : ''}`} onClick={() => {scrollTo('home'); 
                                                                                                              setActive('home');}}>
          HOME
          </li>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className={`nav-item nav-item-hover ${activeSec === 'about' ? 'active' : ''}`} onClick={() => {scrollTo('about');
                                                                                                               setActiveSec('about');}}>
          ABOUT
          </li>
          <li className={`nav-item nav-item-hover ${activeSec === 'skills' ? 'active' : ''}`} onClick={() => {scrollTo('skills');
                                                                                                               setActiveSec('skills');}}>
          SKILLS
          </li>
          <li className="nav-item nav-item-hover" onClick={() => scrollTo('projects')}>PROJECTS</li>
          <li className="nav-item nav-item-hover" onClick={() => scrollTo('contact')}>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar, setActive} ;