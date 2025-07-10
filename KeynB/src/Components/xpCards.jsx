import { useState } from "react";
import "./CompStyles.css"; // Import the component-specific styles

// xpCards component to display experience entries
const XpCards = () => {
  // Array of experience data
  const experiences = [
    {
      title: "Software Engineer",
      company: "Coding Temple",
      location: "Remote",
      dates: "March 2025 – June 2025",
      description: [
        "Developed responsive UI components using React and JSX, enhancing user experience and interface interactivity across multiple screen sizes.",
        "Built and connected RESTful APIs using Flask and MySQL, enabling dynamic data handling and improving full-stack functionality.",
        "Applied version control using Git and GitHub across all projects to ensure code reliability, seamless collaboration, and clean deployment workflows.",
        "Followed detailed project requirements and documentation to transform design specifications into functional web applications.",
        "Participated in peer programming and code reviews, reinforcing technical communication and collaborative development in a remote environment.",
        "Managed time effectively to meet weekly project deadlines, demonstrating accountability, independence, and consistency under pressure.",
      ],
    },
    {
      title: "Sales Representative",
      company: "Drewing Automotive",
      location: "Columbia, MO",
      dates: "February 2021 – January 2024",
      description: [
        "Managed customer relationships, assessed needs, and presented tailored vehicle solutions.",
        "Increased customer satisfaction and retention through consistent follow-up and product knowledge.",
        "Contributed to monthly sales goals, averaging 9 units sold per month.",
        "Demonstrated strong communication skills, adaptability, and teamwork in a fast-paced, competitive environment.",
      ],
    },
    {
      title: "Laborer",
      company: "Helitech Foundation Repair & Waterproofing",
      location: "Kingdom City, MO",
      dates: "February 2024 – December 2024",
      description: [
        "Assessed structural damage and assisted with foundation repair operations, ensuring high accuracy and safety.",
        "Improved job site efficiency by streamlining inventory prep and tool handling.",
        "Worked effectively under pressure and maintained strong attention to detail in physically demanding environments.",
      ],
    },
  ];

  // State to manage the currently displayed experience index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous experience
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next experience
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the current experience to display
  const currentExperience = experiences[currentIndex];

  return (
    <div className="xpcard-wrapper">
      <section id="xp" className="xp-section">
        <div className="xp-container">
          <h2 className="xp-heading">Relevant Experience</h2>
          <div className="xp-content">
              <h3 className="xp-card-title">{currentExperience.title}</h3>
              <div className="xp-card">
              <p className="xp-card-company">
                {currentExperience.company} | {currentExperience.location}
              </p>
              <p className="xp-card-dates">{currentExperience.dates}</p>
              <ul className="xp-card-desc-list">
                {currentExperience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="xp-nav">
            <button onClick={goToPrevious} className="xp-nav-button">
              Previous
            </button>
            <button onClick={goToNext} className="xp-nav-button">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default XpCards;
