import './App.css';
import { Navbar, setActive } from './components/Navbar';
import EmailComponent from './components/Email';
import React, { useState } from 'react';
import DownloadResumeComponent from './components/DownloadResume';



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
            {/* <div className='download-resume'>
              <DownloadResumeComponent />
            </div> */}
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
          <div className="contact-title">Connect With Me</div>
          <div className="contact-content">
            <div className="contact-bubbles">
              <div className="contact-bubble">
                  <a href="https://www.linkedin.com/in/jmcfee" target="_blank" rel="noreferrer" className="bubble-link">
                    <div id="linkedin" className="contact-bubble">
                      <div className='content-logo'>
                        <img src={require("./images/linkedinlogo.png")} alt="LinkedIn Logo" 
                        className="logo" />
                      </div>
                      <div className='content-name'>LinkedIn</div>
                    </div>
                  </a>
                </div>
              <div className="contact-bubble">
                <a href="https://github.com/jonmcfee03" target="_blank" rel="noreferrer" className="bubble-link">
                  <div id="github" className="contact-bubble">
                    <div className='content-logo'>
                      <img src={require("./images/githublogo.png")} alt="Github Logo" 
                      className="logo" />
                    </div>
                    <div className='content-name'>GitHub</div>
                  </div>
                </a>
              </div>
              <div className="contact-bubble">
                <EmailComponent />
              </div>
            </div>
            <div className="contact-image">
              <img src={require("./images/michiganphoto.jpg")} alt="Photo of Jon in front of U of M sign"
              className="contact-selfie"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function App() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const skillsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />} />
//           <Route path="/about" element={<About homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />} />
//           <Route path="/skills" element={<Skills homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />} />
//           <Route path="/projects" element={<Projects homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />} />
//           <Route path="/contact" element={<Contact homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />} />
//           {/* <Route exact path={["/", "/#about", "/#skills", "/#projects", "/#contact"]}>
//             <Home homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
//             <About homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
//             <Skills homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
//             <Projects homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
//             <Contact homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// function Home({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
//   return (
//       <div ref={homeRef} id="home" className="page">
//         <Navbar />
//         <div className="home-about">
//           <div className="div-name">
//             <span className="name">
//               JONATHAN<br/>MCFEE
//             </span>
//           </div>
//           <span className="bio">
//           Computer Science,<br/>University of Michigan '25 <br/>
//           Aspiring Software Engineer
//           </span>
//         </div>
//         <div className="home-links">
//         <ul className="links-list">
//           <li className="home-link home-link-hover" >
//             <Link to ="/about" onClick={() => {scrollTo(aboutRef.current); }}>
//                                                                     {/*setActive('about');}}>*/}
//               ABOUT
//             </Link>
//           </li>
//           <li className="home-link home-link-hover" >
//             <Link to ="/skills" onClick={() => {scrollTo(skillsRef.current);}}>
//               SKILLS
//             </Link>
//           </li>
//           <li className="home-link home-link-hover" >
//             <Link to ="/projects" onClick={() => {scrollTo(projectsRef.current);}}>
//               PROJECTS
//             </Link>
//           </li>
//           <li className="home-link home-link-hover" >
//             <Link to ="/contact" onClick={() => {scrollTo(contactRef.current);}}>
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//         </div>
//         <div id="about-navbar-trigger"></div>
//       </div>
//   )
// }

// function About({ aboutRef, skillsRef, projectsRef, contactRef }) {
//   return (
//     <div ref={aboutRef} id="about" className="page">
//       <div className="headshot">
//         <img src={require("./images/headshot.jpg")} alt="My Headshot" 
//           className="headshot" />
//       </div>
//       <div className='about-me'>
//           <div className="about-me-title">About Me</div>
//           <div className="about-me-info">
//           I am a Junior majoring in Computer Science at the University 
//           of Michigan. I am passionate about software 
//           engineering, and I love diving into my studies. Beyond 
//           the classroom, I'm an active member of the Reach Consulting 
//           Group and the Delta Tau Delta Fraternity. I'm a social 
//           person, and I really enjoy making new friends and working 
//           as part of a team.
//           </div>
//       </div>
//       <div id="skills-navbar-trigger"></div>
//     </div>
//   )
// }

// function Skills({ aboutRef, skillsRef, projectsRef, contactRef }) {
//   return (
//     <div ref={skillsRef} id="skills" className="page">
//       <div className="skills-title">Skills</div>
//       <div className="skills-bubbles">
//         <div id="languages" className="bubble">
//           <div className='header'>Languages</div>
//           <div className='content'>C++, Python, JavaScript, Node.js, Express.js, 
//                                     HTML, CSS, MATLAB</div>
//         </div>
//         <div id="relevant-courses" className="bubble">
//           <div className='header'>Relevant Courses</div>
//           <div className='content'>Data Structures and Algorithms, Low-Level Systems, 
//                                     Foundations of Computer Science, Discrete Math, 
//                                     Linear Algebra, Calculus I-III</div>
//         </div>
//         <div id="interests" className="bubble">
//           <div className='header'>Interests</div>
//           <div className='content'>Software Engineering, Backend Engineering, 
//                                     Machine Learning, Finance/Trading</div>
//         </div>
//         <div id="development" className="bubble">
//           <div className='header'>Development</div>
//           <div className='content'>Linux, Windows, AWS, Git, DynamoDB, SQL, JSON</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Projects({ aboutRef, skillsRef, projectsRef, contactRef }) {
//   return (
//     <div ref={projectsRef} id="projects" className="page">
          
//     </div>
//   )
// }

// function Contact({ aboutRef, skillsRef, projectsRef, contactRef }) {
//   return (
//     <div ref={contactRef} id="contact" className="page">
//       <div className="contact-title">Connect With Me</div>
//       <div className="contact-content">
//         <div className="contact-bubbles">
//           <div className="contact-bubble">
//               <a href="https://www.linkedin.com/in/jmcfee" target="_blank" rel="noreferrer" className="bubble-link">
//                 <div id="linkedin" className="contact-bubble">
//                   <div className='content-logo'>
//                     <img src={require("./images/linkedinlogo.png")} alt="LinkedIn Logo" 
//                     className="logo" />
//                   </div>
//                   <div className='content-name'>LinkedIn</div>
//                 </div>
//               </a>
//             </div>
//           <div className="contact-bubble">
//             <a href="https://github.com/jonmcfee03" target="_blank" rel="noreferrer" className="bubble-link">
//               <div id="github" className="contact-bubble">
//                 <div className='content-logo'>
//                   <img src={require("./images/githublogo.png")} alt="Github Logo" 
//                   className="logo" />
//                 </div>
//                 <div className='content-name'>GitHub</div>
//               </div>
//             </a>
//           </div>
//           <div className="contact-bubble">
//             <a href="mailto:jmcfee@umich.edu" target="_blank" rel="noreferrer" className="bubble-link">
//               <div id="email" className="contact-bubble">
//                 <div className='content-logo'>
//                   <img src={require("./images/emaillogo.png")} alt="Email Logo" 
//                   className="logo" />
//                 </div>
//                 <div className='content-name'>Email</div>
//               </div>
//             </a>
//           </div>
//         </div>
//         <div className="contact-image">
//           <img src={require("./images/michiganphoto.jpg")} alt="Photo of Jon in front of U of M sign"
//           className="contact-selfie"/>
//         </div>
//       </div>
//     </div>
//   )
// }



// Inside your component
export const scrollTo = (targetPage) => {
  const aboutSection = document.getElementById(targetPage);
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default App;
