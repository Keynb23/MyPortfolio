// import github from '../assets/logos/github.png'
// import linkedin from '../assets/logos/linkedin.png'
import "./CompStyles.css"; // Import the component-specific styles

import github from "../assets/logos/github.purple.png";
import linkedin from "../assets/logos/linkedin.blue.png";

// Footer component for contact information and social links
const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <h3 className="footer-heading">Let's Connect!</h3>
        <p className="footer-contact-item">573-397-8946</p>
        <p className="footer-contact-item">keynb50@gmail.com</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/key-n-brosdahl-5320b3353/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn Profile"
          >
            <img src={linkedin} alt="LinkedIn Logo" className="footer-icon" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub Profile"
          >
            <img src={github} alt="GitHub Logo" className="footer-icon" />
          </a>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Keyn Brosdahl. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
