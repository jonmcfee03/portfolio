import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <div className="navbar">
          <Navbar />
      </div>
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
            <li className="home-link home-link-hover" onClick={() => scrollTo('about')}>ABOUT</li>
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
