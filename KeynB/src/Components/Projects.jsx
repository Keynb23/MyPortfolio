import './CompStyles.css'; // Import the component-specific styles
import dj from '../assets/projects/DJapp/dj-app.png';
import betterstate1 from '../assets/projects/betterState/betterstate1.png'
import betterstate2 from '../assets/projects/betterState/betterstate2.png'
import betterstate3 from '../assets/projects/betterState/betterstate3.png'
import betterstate4 from '../assets/projects/betterState/betterstate4.png'
import betterstate5 from '../assets/projects/betterState/betterstate5.png'
import betterstate6 from '../assets/projects/betterState/betterstate6.png'
import betterstate7 from '../assets/projects/betterState/betterstate7.png'
import betterstate8 from '../assets/projects/betterState/betterstate8.png'
import betterstate9 from '../assets/projects/betterState/betterstate9.png'

// Projects component to display project details
const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="projects-heading">My Projects</h2>
                <p className="projects-intro-text">
                    Content for Daily Journal App and Better State Mo LLC will go here.
                    I'll add the project details, live links, and source code links soon!
                </p>
                {/* Project cards */}
                 <div className="project-cards-grid">
                    <div className="project-img">
                        <img src={dj} alt="dj"></img>
                    </div>
                    {/* Daily Journal App */}
                    <div className="project-card">
                        <h3 className="project-card-title">Daily Journal App</h3>
                        <p className="project-card-tech">HTML, CSS, JavaScript, Firebase, Vercel</p>
                        <ul className="project-card-desc">
                            <li>Solely designed and developed a personal web application to log daily programming progress, significantly enhancing self-accountability and tracking learning milestones.</li>
                            <li>Engineered and integrated Firebase for robust user authentication and persistent data storage, ensuring real-time updates and data integrity.</li>
                            <li>Crafted a clean, intuitive, and fully responsive user interface (UI) that adapts seamlessly across various devices for an optimal user experience.</li>
                        </ul>
                        <div className="project-links">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Live link</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Source Code</a>
                        </div>
                    </div>

                    {/* Better State Mo LLC */}
                    <div className="project-card">
                        <h3 className="project-card-title">Better State Mo LLC</h3>
                        <div className="project-img"> 
                            <img src={betterstate1} alt="bs"></img>
                            <img src={betterstate2} alt="bs"></img>
                            <img src={betterstate3} alt="bs"></img>
                            <img src={betterstate4} alt="bs"></img>
                            <img src={betterstate5} alt="bs"></img>
                            <img src={betterstate6} alt="bs"></img>
                            <img src={betterstate7} alt="bs"></img>
                            <img src={betterstate8} alt="bs"></img>
                            <img src={betterstate9} alt="bs"></img>
                        </div>
                        <p className="project-card-tech">JSX, CSS, Firebase, Vercel, JEST, Babel</p>
                        <ul className="project-card-description-list">
                            <li>Independently redesigned and developed the public-facing website for a pool cleaning business in Missouri, transforming a previously confusing site into a clean, modern, and accessible interface for all age groups.</li>
                            <li>Implemented a component-based architecture using JSX to ensure maintainability and scalability for future enhancements.</li>
                        </ul>
                        <div className="project-links">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Live Link</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
