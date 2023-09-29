import logo from './logo.svg';
import './App.css';
import { Navbar, setActive } from './components/Navbar';
import React, { useEffect, useState} from 'react';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <div id="home" className="page">
          <div className="home-about">
            <div className="div-name">
              <span className="name">
                JONATHAN<br/>MCFEE
              </span>
            </div>
            <div className="bio">
            There's the quietus makes, puzzlesh is heart-ache pative hue of the 
            undispriz'd long end swear that merit 
            office, to say weat dreams and to, 'tis
            he oppresolution. Thus count with the
            sling afterpriz'd coward to sleep:
            perchance of deat under dels bear thing
            </div>
          </div>
          <div className="home-links">
          <ul className="links-list">
            <li className="home-link home-link-hover" onClick={() => {scrollTo('about'); 
                                                                      setActive('about');}}>
                ABOUT</li>
            <li className="home-link home-link-hover" onClick={() => scrollTo('skills')}>SKILLS</li>
            <li className="home-link home-link-hover" onClick={() => scrollTo('projects')}>PROJECTS</li>
            <li className="home-link home-link-hover" onClick={() => scrollTo('contact')}>CONTACT</li>
          </ul>
          </div>
        </div>
        <div id="about" className="page">
          <div className="headshot">
            <img src={require("./images/headshot.jpg")} alt="My Headshot" 
            className="headshot" />
          </div>
          <div className='about-me'>
            <div className="about-me-title">About Me</div>
            <div className="about-me-info">
            There's the quietus makes, puzzlesh is heart-ache pative 
            hue of the undispriz'd long end swear that merit office, 
            to say weat dreams and to, 'tis he oppresolution. Thus count 
            with the sling afterpriz'd coward to sleep: perchance of 
            deat under dels bear thing
            </div>
          </div>
        </div>
        <div id="skills" className="page">
          <div id="languages" className="bubble">
            <div className='header'>Languages</div>
            <div className='content'>C++, Python, JavaScript, Node.js, Express.js, 
                                      HTML, CSS, MATLAB</div>
          </div>
          <div id="relevant-courses" className="bubble">
            <div className='header'>Relevant Courses</div>
            <div className='content'>Data Structures and Algorithms, Low-Level Systems, 
                                      Foundations of Computer Science, Discrete Math, 
                                      Linear Algebra, Calculus I-III</div>
          </div>
          <div id="interests" className="bubble">
            <div className='header'>Interests</div>
            <div className='content'>Software Engineering, Backend Engineering, 
                                      Machine Learning, Finance/Trading</div>
          </div>
          <div id="development" className="bubble">
            <div className='header'>Development</div>
            <div className='content'>Linux, Windows, AWS, Git, DynamoDB, SQL, JSON</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inside your component
const scrollTo = (targetPage) => {
  const aboutSection = document.getElementById(targetPage);
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};


export { App, scrollTo };
