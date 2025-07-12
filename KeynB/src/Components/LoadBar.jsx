import { useEffect, useState, useRef } from 'react';
import './loadingStyles.css'; // Styles for the loading bar

const LoadBar = ({ onSurveyComplete, surveyData, surveyCompletedStep }) => {
    const [displayPercentage, setDisplayPercentage] = useState(0);
    const [loadingState, setLoadingState] = useState('Loading');
    const intervalRef = useRef(null);
    const bufferTimeoutRef = useRef(null);

    const TOTAL_LOADING_TIME_MS = 9000; // 15 seconds
    const BUFFER_DURATION_MS = 2000;    // 2 seconds for each buffer
    const BUFFER_POINTS = [28, 70, 99]; // Percentage points to buffer at

    // This effect handles the percentage increment and buffering
    useEffect(() => {
        let startTime = Date.now();
        let totalBufferedTime = 0;
        let nextBufferIndex = 0;

        const updateProgress = () => {
            const elapsedTime = Date.now() - startTime;
            const effectiveElapsedTime = elapsedTime - totalBufferedTime;

            let currentTargetPercentage = (effectiveElapsedTime / (TOTAL_LOADING_TIME_MS - (BUFFER_POINTS.length * BUFFER_DURATION_MS))) * 100;

            currentTargetPercentage = Math.min(currentTargetPercentage, 100);

            // Check for buffer points
            if (nextBufferIndex < BUFFER_POINTS.length && currentTargetPercentage >= BUFFER_POINTS[nextBufferIndex]) {
                clearInterval(intervalRef.current); // Pause increment
                bufferTimeoutRef.current = setTimeout(() => {
                    totalBufferedTime += BUFFER_DURATION_MS;
                    startTime = Date.now();
                    nextBufferIndex++;
                    intervalRef.current = setInterval(updateProgress, 50); // Resume updating every 50ms
                }, BUFFER_DURATION_MS);
                return;
            }

            setDisplayPercentage(Math.floor(currentTargetPercentage));

            if (currentTargetPercentage >= 100) {
                clearInterval(intervalRef.current);
                setDisplayPercentage(100);
                setLoadingState('Complete');
            }
        };

        intervalRef.current = setInterval(updateProgress, 50);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(bufferTimeoutRef.current);
        };
    }, []);

    // This effect handles triggering onSurveyComplete when the bar is fully loaded
    // AND the user has completed the survey steps.
    useEffect(() => {
        let finalCompletionTimeout;

        // Condition for dismissing the loading screen:
        // 1. The loading bar itself has reached 100% (time-based completion)
        // 2. The user has finished the survey questions (surveyCompletedStep is true)
        if (displayPercentage === 100 && surveyCompletedStep) {
            // Give a very small moment for the "Complete" text to display, then dismiss
            finalCompletionTimeout = setTimeout(() => {
                if (onSurveyComplete) {
                    onSurveyComplete(surveyData);
                }
            }, 500); // Small delay before unmounting the loading screen
        }

        return () => {
            clearTimeout(finalCompletionTimeout);
        };
    }, [displayPercentage, surveyCompletedStep, onSurveyComplete, surveyData]);


    return (
        <div id="loading-wrapper">
            <div id="loading-mouse"></div>
            <div className="loader"></div>
            <div className="loading-bar">
                <div className="progress-bar" style={{ width: `${displayPercentage}%` }}></div>
            </div>
            <div className="status">
                <div className="state">{loadingState}</div>
                <div className="percentage">{displayPercentage}%</div>
            </div>
        </div>
    );
};

export default LoadBar;