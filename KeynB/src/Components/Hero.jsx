import "./CompStyles.css"; // Import the component-specific styles
// import github from '../assets/logos/github.png'
// import linkedin from '../assets/logos/linkedin.png'
import github from "../assets/logos/github.purple.png";
import linkedin from "../assets/logos/linkedin.blue.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Key’n Brosdahl</h1>
        <div className="hero-contact-info">
          <p className="hero-contact-item">573-397-8946</p>
          <p className="hero-contact-item">keynb50@gmail.com</p>
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
        </div>
        <h2 className="hero-subtitle">A little about me</h2>
        <p className="hero-summary">
          Creative front-end developer with a passion for UI design, interactive
          web experiences, and clean, responsive layouts. Skilled in React,
          JavaScript, HTML, and CSS with a strong eye for detail, animation, and
          design implementation. My background in sales and construction
          enhances my ability to understand user needs, communicate clearly with
          teams, and execute with precision, all vital for building impactful
          user interfaces. I'm actively expanding my skills in web animation
          libraries and React-based design systems to craft highly engaging and
          scalable web applications.
        </p>
      </div>
    </section>
  );
};

export default Hero;
