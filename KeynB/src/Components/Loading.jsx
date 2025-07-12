import { useState, useEffect } from 'react';
import './loadingStyles.css';

const Loading = ({ onSurveyComplete }) => {
    // --- State Variables ---
    const [step, setStep] = useState(1); // Start directly with the gender question
    const [userGender, setUserGender] = useState('');
    const [burgerChoice, setBurgerChoice] = useState('');
    const [whyChoice, setWhyChoice] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('var(--default-bg)'); // Default background
    const [finalMessageText, setFinalMessageText] = useState('');

    // --- Survey Handlers ---
    const handleGenderSelect = (gender) => {
        setUserGender(gender);
        setStep(2); // Move to burger question
    };

    const handleBurgerChoice = (choice) => {
        setBurgerChoice(choice);
        // Set background color immediately based on choice
        if (choice === 'royale') {
            setBackgroundColor('var(--green-bg)'); // Correct burger choice
        } else {
            setBackgroundColor('var(--red-bg)'); // Incorrect burger choice
        }
        setStep(3); // ALWAYS move to the "why" question (step 3) next
    };

    const handleWhyChoice = (choice) => {
        setWhyChoice(choice);
        // Only set background to green if BOTH burger choice was 'royale' AND 'metric-system' is chosen for why
        // OR if burger choice was wrong but 'metric-system' is correctly chosen for why.
        // The background color from the burger choice carries over, so we only change to green if 'metric-system' is picked.
        if (choice === 'metric-system') {
            setBackgroundColor('var(--green-bg)'); // Correct 'why' choice
            setFinalMessageText("Check out the big brain on Brett!");
        } else {
            // If 'fancy' is chosen, the background remains whatever it was from burgerChoice, or becomes red if burgerChoice was wrong.
            // If burger was 'royale' (green), and 'fancy' is picked, it becomes red.
            // If burger was 'quarter-pounder' (red), and 'fancy' is picked, it stays red.
            setBackgroundColor('var(--red-bg)');
            setFinalMessageText(""); // No special message for wrong answer
        }
        setStep(4); // Move to final message
    };

    // --- Survey Completion Effect ---
    useEffect(() => {
        if (step === 4) {
            // Once the final message is shown, trigger survey completion
            const timer = setTimeout(() => {
                onSurveyComplete({
                    gender: userGender,
                    burgerChoice: burgerChoice,
                    whyChoice: whyChoice,
                    backgroundTheme: backgroundColor === 'var(--green-bg)' ? 'green' : 'red', // Pass 'green' or 'red' string
                });
            }, 2500); // Short delay to allow user to see final message/background

            return () => clearTimeout(timer);
        }
    }, [step, userGender, burgerChoice, whyChoice, backgroundColor, onSurveyComplete]);


    // --- Render Logic ---
    const renderContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="survey-card fade-in">
                        <h2>Are you male or female?</h2>
                        <div className="options-container">
                            <button onClick={() => handleGenderSelect('male')}>Male</button>
                            <button onClick={() => handleGenderSelect('female')}>Female</button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="survey-card fade-in">
                        <h2>Do you know what they call a Quarter Pounder with Cheese in France?</h2>
                        <div className="options-container">
                            <button onClick={() => handleBurgerChoice('quarter-pounder')}>A Quarter Pounder with Cheese</button>
                            <button onClick={() => handleBurgerChoice('royale')}>A Royale with Cheese</button>
                        </div>
                    </div>
                );
            case 3: // This is the new/corrected flow for the "why" question
                return (
                    <div className="survey-card fade-in" key="why-question"> {/* Add a key for proper re-rendering */}
                        <h2>You know why they call it that?</h2>
                        <div className="options-container">
                            <button onClick={() => handleWhyChoice('fancy')}>They're fancy?</button>
                            <button onClick={() => handleWhyChoice('metric-system')}>Because of the metric system?</button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="survey-card final-message fade-in" key="final-message"> {/* Add a key */}
                        {finalMessageText && <p className="big-brain-text">{finalMessageText}</p>}
                        {/* Only show "Loading..." if no special text like "big brain" */}
                        {!finalMessageText && <p>Loading your experience...</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="loading-screen" style={{ backgroundColor: backgroundColor }}>
            <div className="center-content">
                {renderContent()}
            </div>
            <div className="loading-bar-container">
                <div className="loading-bar"></div>
            </div>
        </div>
    );
};

export default Loading;