import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import XpCards from "./Components/xpCards";
import Projects from "./Components/Projects";
import Edu from "./Components/Edu";
import Hobbies from "./Components/Hobbies";
import Footer from "./Components/Footer";
import HobsTop from "./Components/HobsTop";
import Loading from "./Components/Loading";
import MouseDotEffect from "./Components/MouseDotEffect"; // Import the new component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInteractedGlobally, setUserInteractedGlobally] = useState(false);
  const [surveyData, setSurveyData] = useState({});

  const handleInitialUserInteraction = () => {
    setUserInteractedGlobally(true);
    console.log("User interaction recorded in App.jsx!");
  };

  const handleSurveyCompletion = (data) => {
    setSurveyData(data);
    setIsLoading(false);
    console.log("Survey completed:", data);
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div className="app-container">
      {isLoading ? (
        <Loading onSurveyComplete={handleSurveyCompletion} />
      ) : (
        <>
          <Navbar />
          {/* Wrap the sections with the MouseDotEffect */}
          <MouseDotEffect>
            <main className="main-content" style={{ backgroundColor: `var(${surveyData.backgroundTheme}-bg)` }}>
              <Hero />
              <XpCards />
              <Projects />
              <Edu />
            </main>
          </MouseDotEffect>
          {/* HobsTop and subsequent sections are outside the effect area */}
          <HobsTop
            onInteraction={handleInitialUserInteraction}
            userGender={surveyData.gender}
          />
          <Hobbies userHasInteracted={userInteractedGlobally} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;