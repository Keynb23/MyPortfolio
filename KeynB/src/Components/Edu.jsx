import "./CompStyles.css";
// import certificate from '../assets/cert/SE-Certificate.pdf';
import FECore from "../assets/cert/FE-Core-badge.png";
import BDCore from "../assets/cert/BE-core.png";

const Edu = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-heading">Education</h2>
        <div className="education-card">
          <div className="school">
            <h3 className="education-card-title">Coding Temple</h3>
            <p className="education-card-degree">
              Software Engineering Certificate
            </p>
            <p className="education-card-dates">March 2025 June 2025</p>
          </div>

          <div className="edu-img">
            <img
              className="edu-imgs"
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/153842209"
              alt="SE"
            ></img>
            <img className="edu-imgs" src={BDCore} alt="be"></img>
            <img className="edu-imgs" src={FECore} alt="fe"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edu;
