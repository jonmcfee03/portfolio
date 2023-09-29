import './Navbar.css'
import { scrollTo } from "../App"
import React, { useState, useEffect } from 'react';

let setActive;

function Navbar() {
  const [activeSec, setActiveSec] = useState('home');

  // Define the setActive function
  setActive = (section) => {
    setActiveSec(section);
  };

    useEffect(() => {
      const handleScroll = () => {
        const homeSection = document.getElementById('home');
        const aboutSection = document.getElementById('about');
        // const skillsSection = document.getElementById('skills');
        // const projectsSection = document.getElementById('projects');
        // const contactSection = document.getElementById('contact');
        const scrollY = window.scrollY;
        console.log(scrollY);
        // if (scrollY >= contactSection.offsetTop) {
        //   setActiveSec('contact');
        // } else if (scrollY >= projectsSection.offsetTop) {
        //   setActiveSec('projects');
        // } else if (scrollY >= skillsSection.offsetTop) {
        //   setActiveSec('skills');
         if (scrollY >= aboutSection.offsetTop) {
          console.log('about');
          setActiveSec('about');
        } else {
          console.log('home');
          setActiveSec('home');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  return (
    <nav className="navbar">
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
          <li className="nav-item nav-item-hover" onClick={() => scrollTo('skills')}>SKILLS</li>
          <li className="nav-item nav-item-hover" onClick={() => scrollTo('projects')}>PROJECTS</li>
          <li className="nav-item nav-item-hover" onClick={() => scrollTo('contact')}>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar, setActive} ;