import './App.css';
import { Navbar, setActive } from './components/Navbar';
import React from 'react';


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
            <span className="bio">
            Computer Science,<br/>University of Michigan '25 <br/>
            Aspiring Software Engineer
            </span>
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
          <div id="about-navbar-trigger"></div>
        </div>
        <div id="about" className="page">
          <div className="headshot">
            <img src={require("./images/headshot.jpg")} alt="My Headshot" 
            className="headshot" />
          </div>
          <div className='about-me'>
            <div className="about-me-title">About Me</div>
            <div className="about-me-info">
            I am a Junior majoring in Computer Science at the University 
            of Michigan. I am passionate about software 
            engineering, and I love diving into my studies. Beyond 
            the classroom, I'm an active member of the Reach Consulting 
            Group and the Delta Tau Delta Fraternity. I'm a social 
            person, and I really enjoy making new friends and working 
            as part of a team.
            </div>
          </div>
          <div id="skills-navbar-trigger"></div>
        </div>
        <div id="skills" className="page">
          <div className="skills-title">Skills</div>
          <div className="skills-bubbles">
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
        <div id="projects" className="page">
          
        </div>
        <div id="contact" className="page">
          
        </div>
      </div>
    </div>
  );
}

// Inside your component
export const scrollTo = (targetPage) => {
  const aboutSection = document.getElementById(targetPage);
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};


export default App;
