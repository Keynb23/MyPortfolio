import './CompStyles.css'; 
// import certificate from '../assets/cert/SE-Certificate.pdf';
import FECore from '../assets/cert/FE-Core-badge.png';
import BDCore from '../assets/cert/BE-core.png';


const Edu = () => {
    return (
        <section id="education" className="education-section">
            <div className="education-container">
                <div className="edu-img">
                    <img src={BDCore} alt="be"></img>
                    {/* <img src={certificate} alt="se"></img> */}
                    <img src={FECore} alt="fe"></img>"
                </div>
                <h2 className="education-heading">Education</h2>
                <div className="education-card">
                    <h3 className="education-card-title">Coding Temple</h3>
                    <p className="education-card-degree">Software Engineering Certificate</p>
                    <p className="education-card-dates">Remote | March 2025 June 2025</p>
                </div>
            </div>
        </section>
    );
};

export default Edu;
