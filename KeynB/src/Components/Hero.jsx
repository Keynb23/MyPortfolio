import "./CompStyles.css"; // Import the component-specific styles
// import github from '../assets/logos/github.png'
// import linkedin from '../assets/logos/linkedin.png'
// import github from "../assets/logos/github.purple.png";
// import linkedin from "../assets/logos/linkedin.blue.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Key'n Brosdahl</h1>
        <h3 className="hero-subtitle">Front-End Developer</h3>
        <div className="hero-contact-info">
          <p id="hero-phone" className="hero-contact-item">573-397-8946</p>
          <p id="hero-email" className="hero-contact-item">keynb50@gmail.com</p>
          {/* <div className="hero-links">
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
          </div> */}
        </div>
        <div className="hero-text-wrapper">
          <h2 className="hero-subtitle">A little about me</h2>
          <p className="hero-summary">
            Creative front-end developer with a passion for UI design,
            interactive web experiences, and clean, responsive layouts. Skilled
            in React, JavaScript, HTML, and CSS with a strong eye for detail,
            animation, and design implementation.
          </p>

          <p className="hero-summary">
            My background in sales and construction enhances my ability to
            understand user needs, communicate clearly with teams, and execute
            with precision, all vital for building impactful user interfaces.
          </p>
          <p className="hero-summary">
            I'm currently teaching myself Unreal Engine 5.6, diving into
            real-time 3D environments and interactive design. With guidance from
            a mentor experienced in animation and world-building, I'm expanding
            my creative toolkit beyond the browser.
          </p>

          <p className="hero-summary-close">
            Whether it's crafting intuitive interfaces or exploring immersive 3D
            spaces, I'm always looking to push creative boundaries and bring
            ideas to life through thoughtful, user-centered design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
