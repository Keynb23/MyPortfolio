import keyhole from "../assets/logos/key-hole.png";
// import github from '../assets/logos/github.png'
// import linkedin from '../assets/logos/linkedin.png'
import github from "../assets/logos/github.purple.png";
import linkedin from "../assets/logos/linkedin.blue.png";
import "./CompStyles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Portfolio Title/Logo */}
        <div className="navLogo">
          <img src={keyhole} alt="Key'hole" className="KeyHole"></img>
        </div>

        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/key-n-brosdahl-5320b3353/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-logo"
            aria-label="LinkedIn Profile"
          >
            <img src={linkedin} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-logo"
            aria-label="GitHub Profile"
          >
            <img src={github} alt="GitHub Logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#experience" className="navbar-link">
            Experience
          </a>
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#education" className="navbar-link">
            Education
          </a>
          <a href="#hobbies" className="navbar-link">
            Hobbies
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
