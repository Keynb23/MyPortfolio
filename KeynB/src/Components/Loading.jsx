import { useState, useEffect } from "react";
import "./loadingStyles.css"; // Styles for survey cards and overall screen
import LoadBar from "./LoadBar"; // Import the LoadBar component

const Loading = ({ onSurveyComplete }) => {
  const [step, setStep] = useState(1);
  const [userGender, setUserGender] = useState("");
  const [burgerChoice, setBurgerChoice] = useState("");
  const [whyChoice, setWhyChoice] = useState("");
  // Manage current background color for the loading screen itself
  const [currentBgColor, setCurrentBgColor] = useState("var(--b-eerie)");
  // This will hold the *final* background color chosen by survey answers
  const [finalChosenBgTheme, setFinalChosenBgTheme] =
    useState("var(--b-eerie)");
  const [finalMessageText, setFinalMessageText] = useState("");

  // Effect to revert background color after 2 seconds
  useEffect(() => {
    let timeoutId;
    // Only trigger if the background isn't the default loading color
    if (currentBgColor !== "var(--b-eerie)") {
      timeoutId = setTimeout(() => {
        setCurrentBgColor("var(--b-eerie)"); // Revert to default loading background
      }, 2000); // 2 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [currentBgColor]);

  // Survey Handlers
  const handleGenderSelect = (gender) => {
    setUserGender(gender);
    setStep(2);
  };

  const handleBurgerChoice = (choice) => {
    setBurgerChoice(choice);
    if (choice === "royale") {
      setCurrentBgColor("var(--green)"); // Set loading screen background to green
      setFinalChosenBgTheme("green"); // Store final theme for App.jsx
    } else {
      setCurrentBgColor("var(--red)"); // Set loading screen background to red
      setFinalChosenBgTheme("red"); // Store final theme for App.jsx
    }
    setStep(3);
  };

  const handleWhyChoice = (choice) => {
    setWhyChoice(choice);
    if (choice === "metric-system") {
      setCurrentBgColor("var(--green)"); // Set loading screen background to green
      setFinalChosenBgTheme("green"); // Store final theme for App.jsx
      setFinalMessageText("Check out the big brain on Brett!");
    } else {
      setCurrentBgColor("var(--red)"); // Set loading screen background to red
      setFinalChosenBgTheme("red"); // Store final theme for App.jsx
      setFinalMessageText("");
    }
    setStep(4); // Move to final message/completion trigger
  };

  // Render Logic for survey steps
  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="survey-card fade-in">
            <div className="options-container">
              <button id="MF-btn" onClick={() => handleGenderSelect("male")}>
                Male
              </button>
              <button id="MF-btn" onClick={() => handleGenderSelect("female")}>
                Female
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="survey-card fade-in">
            <h2>
              Do you know what they call a Quarter Pounder with Cheese in
              France?
            </h2>
            <div className="options-container">
              <button
                id="MF-btn"
                onClick={() => handleBurgerChoice("quarter-pounder")}
              >
                A Quarter Pounder with Cheese
              </button>
              <button id="MF-btn" onClick={() => handleBurgerChoice("royale")}>
                A Royale with Cheese
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="survey-card fade-in" key="why-question">
            <h2>You know why they call it that?</h2>
            <div className="options-container">
              <button id="MF-btn" onClick={() => handleWhyChoice("fancy")}>
                They're fancy?
              </button>
              <button
                id="MF-btn"
                onClick={() => handleWhyChoice("metric-system")}
              >
                Because of the metric system?
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div
            className="survey-card final-message fade-in"
            key="final-message"
          >
            {finalMessageText && (
              <p className="big-brain-text">{finalMessageText}</p>
            )}
            {!finalMessageText && <p>Loading your experience...</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="loading-screen" style={{ backgroundColor: currentBgColor }}>
      <div className="center-content">{renderContent()}</div>
      {/* Pass onSurveyComplete and final survey data to LoadBar */}
      <LoadBar
        onSurveyComplete={onSurveyComplete}
        surveyData={{
          gender: userGender,
          burgerChoice: burgerChoice,
          whyChoice: whyChoice,
          backgroundTheme: finalChosenBgTheme, // Pass the final theme string ('green' or 'red')
        }}
        surveyCompletedStep={step === 4} // Indicate when the survey's final step is reached
      />
    </div>
  );
};

export default Loading;
