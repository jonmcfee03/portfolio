import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="page">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="title-page">
        <div id="home" className="about">
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
            <li className="home-link">ABOUT</li>
            <li className="home-link">SKILLS</li>
            <li className="home-link">PROJECTS</li>
            <li className="home-link">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { App };
