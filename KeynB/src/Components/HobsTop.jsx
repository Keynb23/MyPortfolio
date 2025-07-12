import { useState, useRef, useEffect } from 'react'; // Import useEffect
import './CompStyles.css';

// HobsTop component now accepts 'onInteraction' and 'userGender' props
export default function HobsTop({ onInteraction, userGender }) {
    const [isClicked, setIsClicked] = useState(false);
    // Initialize button text based on whether gender is already known on mount
    const [buttonText, setButtonText] = useState("Click me already");
    const animationTimeoutRef = useRef(null);

    // Use useEffect to set the initial button text if userGender is available
    // This handles cases where HobsTop might render before survey is complete,
    // or if the survey is skipped/cached.
    useEffect(() => {
        if (userGender) {
            setButtonText("Click me already"); // Or "Ready to Groove?" etc.
        }
    }, [userGender]); // Only re-run if userGender changes

    const handleClick = () => {
        if (isClicked) return;

        setIsClicked(true); // Trigger animation state

        // Determine dynamic text based on the received userGender prop
        let dynamicText;
        if (userGender === 'male') {
            dynamicText = "Good boy";
        } else if (userGender === 'female') {
            dynamicText = "Good girl";
        } else {
            // Fallback if gender is not provided or unknown
            dynamicText = "Good job!";
        }
        setButtonText(dynamicText); // Update button text

        if (onInteraction) {
            onInteraction();
        }

        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
        }

        // Reset the animation state and original text after a delay
        animationTimeoutRef.current = setTimeout(() => {
            setIsClicked(false);
            // Optionally reset to original text or keep the "Good X" text
            // setButtonText("Click me already"); // Uncomment to reset text
        }, 1500); // Duration should match your CSS animation
    };

    return (
        <>
            <section id="hobbies-top" className="hobbies-top-section">
                <div className="hobbies-top-container">
                    <h2 className="hobbies-heading">Beyond the Code</h2>
                    <button
                        className={`interaction-button ${isClicked ? 'clicked-spin clicked-pulse' : ''}`}
                        onClick={handleClick}
                        disabled={isClicked}
                    >
                        {buttonText}
                    </button>
                </div>
            </section>
        </>
    );
}