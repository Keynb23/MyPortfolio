import { useState } from "react";
import "./CompStyles.css";
import dj from "../assets/projects/DJapp/dj-app.png";
import betterstate1 from "../assets/projects/betterState/betterstate1.png";
import betterstate2 from "../assets/projects/betterState/betterstate2.png";
import betterstate3 from "../assets/projects/betterState/betterstate3.png";
import betterstate5 from "../assets/projects/betterState/betterstate5.png";
import betterstate6 from "../assets/projects/betterState/betterstate6.png";
import betterstate7 from "../assets/projects/betterState/betterstate7.png";
import betterstate8 from "../assets/projects/betterState/betterstate8.png";
import betterstate9 from "../assets/projects/betterState/betterstate9.png";
import before1 from "../assets/projects/betterState/Before1.png";
import before2 from "../assets/projects/betterState/Before2.png";
import before3 from "../assets/projects/betterState/Before3.png";
import before4 from "../assets/projects/betterState/Before4.png";
import before5 from "../assets/projects/betterState/Before5.png";
import before6 from "../assets/projects/betterState/Before6.png";
import before7 from "../assets/projects/betterState/Before7.png";

const projectsData = [
  {
    title: "Daily Journal App",
    tech: "HTML, CSS, JavaScript, Firebase, Vercel",
    description: [
      "Solely designed and developed a personal web application to log daily programming progress, significantly enhancing self-accountability and tracking learning milestones.",
      "Engineered and integrated Firebase for robust user authentication and persistent data storage, ensuring real-time updates and data integrity.",
      "Crafted a clean, intuitive, and fully responsive user interface (UI) that adapts seamlessly across various devices for an optimal user experience.",
    ],
    liveLink: "#",
    sourceCode: "#",
    images: [dj],
  },
  {
    title: "Better State Mo LLC",
    tech: "JSX, CSS, Firebase, Vercel, JEST, Babel",
    description: [
      "Independently redesigned and developed the public-facing website for a pool cleaning business in Missouri, transforming a previously confusing site into a clean, modern, and accessible interface for all age groups.",
      "Implemented a component-based architecture using JSX to ensure maintainability and scalability for future enhancements.",
    ],
    liveLink: "#",
    sourceCode: "#",
    images: [
      before1,
      betterstate1,
      before2,
      betterstate3,
      before3,
      betterstate2,
      before6,
      betterstate5,
      before4,
      betterstate7,
      before7,
      betterstate9,
      before5,
      betterstate6,
      betterstate8,
    ],
  },
];

// ProjectCard component to display individual project details and image gallery
const ProjectCard = ({ project, openModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // Prevent scrolling while swiping
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      // Swipe right
      goToPreviousImage();
    } else if (deltaX < -50) {
      // Swipe left
      goToNextImage();
    }
  };

  return (
    <div className="project-card">
      <h3 className="project-card-title">{project.title}</h3>
      <div className="project-img">
        <img
          className="Project-imgs"
          src={project.images[currentImageIndex]}
          alt={project.title}
          onClick={() => openModal(project.images, currentImageIndex)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        {project.images.length > 1 && (
          <>
            <button
              className="image-nav-button prev"
              onClick={goToPreviousImage}
            >
              &#10094; {/* Left arrow */}
            </button>
            <button className="image-nav-button next" onClick={goToNextImage}>
              &#10095; {/* Right arrow */}
            </button>
          </>
        )}
      </div>
      <p className="project-card-tech">{project.tech}</p>
      <ul className="project-card-desc">
        {project.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="project-links">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Live link
        </a>
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

// Projects component to display project details
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const openModal = (images, initialIndex) => {
    setModalImages(images);
    setCurrentModalImageIndex(initialIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setCurrentModalImageIndex(0);
  };

  const nextModalImage = () => {
    setCurrentModalImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevModalImage = () => {
    setCurrentModalImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  };

  const handleModalTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleModalTouchMove = (e) => {
    e.preventDefault();
  };

  const handleModalTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      // Swipe right
      prevModalImage();
    } else if (deltaX < -50) {
      // Swipe left
      nextModalImage();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">My Projects</h2>
        <div className="project-cards-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} openModal={openModal} />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close-button" onClick={closeModal}>
              &times;
            </span>
            <img
              src={modalImages[currentModalImageIndex]}
              alt="Enlarged Project"
              className="modal-image"
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            />
            {modalImages.length > 1 && (
              <>
                <button
                  className="modal-nav-button prev"
                  onClick={prevModalImage}
                >
                  &#10094;
                </button>
                <button
                  className="modal-nav-button next"
                  onClick={nextModalImage}
                >
                  &#10095;
                </button>
              </>
            )}
            <div className="modal-image-counter">
              {currentModalImageIndex + 1} / {modalImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
