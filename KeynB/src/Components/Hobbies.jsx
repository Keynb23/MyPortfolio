import { useState, useEffect, useRef, useCallback } from "react";
import "./CompStyles.css"; // Your component-specific styles
import { hobbyContent } from "./hobbiesContext"; // Your content file

const Hobbies = () => {
  // State to track the active slide index, initialized to -1 (not in view)
  const [currentContentIndex, setCurrentContentIndex] = useState(-1);
  const audioRef = useRef(null);
  const audioFadeTimeoutRef = useRef(null);
  // Set initial volume to 0.5 (50%)
  const [audioVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // New state to track if a user interaction has occurred
  // that handles the initial user click/tap.
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  // A ref to hold the main section element
  const sectionRef = useRef(null);

  // This will store a reference to the observer so we can disconnect it on cleanup
  const observerRef = useRef(null);

  // --- Audio Playback Logic ---
  const playAudioWithFade = useCallback(
    (audioSrc, startTime = 0, duration = null, fadeOutDuration = null) => {
      // ONLY attempt to play audio if a user interaction has occurred
      if (!userHasInteracted) {
        console.log(
          "Audio playback blocked: No prior user interaction detected."
        );
        return;
      }

      if (!audioRef.current || audioRef.current.src !== audioSrc) {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.src = ""; // Clear source to prevent re-fetching
        }
        audioRef.current = new Audio(audioSrc);
        audioRef.current.loop = false;
      }

      if (audioFadeTimeoutRef.current)
        clearTimeout(audioFadeTimeoutRef.current);

      // Set volume based on mute state and the fixed audioVolume (0.5)
      audioRef.current.volume = isMuted ? 0 : audioVolume;
      audioRef.current.currentTime = startTime;

      audioRef.current
        .play()
        .catch((error) => console.error("Audio playback failed:", error));

      if (duration) {
        setTimeout(() => {
          if (audioRef.current) audioRef.current.pause();
        }, duration);
      }

      if (fadeOutDuration) {
        // Fade out logic remains the same
        // (You can implement it here if you need it, based on your original code)
      }
    },
    [audioVolume, isMuted, userHasInteracted] // Add userHasInteracted to dependencies
  );

  // --- New Intersection Observer for Scroll Triggering ---
  useEffect(() => {
    const scrollTriggers =
      sectionRef.current.querySelectorAll(".scroll-trigger");

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index, 10);
          setCurrentContentIndex(index);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.01, // Trigger when any part of the element is visible
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    scrollTriggers.forEach((trigger) => observer.observe(trigger));
    observerRef.current = observer; // Save observer instance for cleanup

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Cleanup audio and styles on component unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear source
      }
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array ensures this runs only once

  // --- Effect for Handling Audio Based on the Active Slide ---
  useEffect(() => {
    if (currentContentIndex === -1) {
      if (audioRef.current) audioRef.current.pause();
      return;
    }

    const qtStartIndex = hobbyContent.findIndex(
      (item) => item.type === "audio-visual-qt"
    );

    if (currentContentIndex === qtStartIndex) {
      const qtAudioContent = hobbyContent[qtStartIndex];
      playAudioWithFade(qtAudioContent.audio, qtAudioContent.audioStart || 0);
      if (audioRef.current) audioRef.current.loop = true;
    } else if (currentContentIndex > qtStartIndex) {
      // Logic to continue music if needed for subsequent slides
      if (audioRef.current && audioRef.current.src) {
        // Ensure the audio is still playing if it should continue
        // and try to restart if it somehow stopped and userHasInteracted
        if (audioRef.current.paused && userHasInteracted) {
          audioRef.current
            .play()
            .catch((error) =>
              console.error("Audio resume failed on scroll:", error)
            );
        }
      }
    } else {
      // Logic to stop music on other slides
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.loop = false;
      }
    }
    // Add userHasInteracted to dependencies here as well
  }, [currentContentIndex, playAudioWithFade, userHasInteracted]);

  // --- Mute Handler ---
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // This effect specifically handles mute changes.
  // Volume is now fixed at 0.5 unless muted.
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : audioVolume; // audioVolume is fixed at 0.5
    }
  }, [isMuted, audioVolume]); // audioVolume is still a dependency for clarity, though its value is constant

  // --- Simulate User Interaction (FOR TESTING ONLY) ---
  // In your actual app, you would receive `userHasInteracted` as a prop
  // from a parent component where the initial button click occurs.
  useEffect(() => {
    console.log(
      "Simulating user interaction after 2 seconds for demonstration."
    );
    const interactionTimeout = setTimeout(() => {
      setUserHasInteracted(true);
      console.log("User interaction simulated: userHasInteracted set to true.");
    }, 2000); // Simulate a delay before user interaction

    return () => clearTimeout(interactionTimeout);
  }, []);

  return (
    <section id="hobbies" ref={sectionRef} className="hobbies-section">
      {/* 1. The Sticky Container: This holds the visuals and stays fixed on screen */}
      <div className="sticky-container">
        <div className="slides-wrapper">
          {hobbyContent.map((content, index) => (
            <div
              key={index}
              className={`hobby-slide ${
                index === currentContentIndex ? "active" : ""
              }`}
              style={{
                backgroundImage: content.image
                  ? `url(${content.image})`
                  : "none",
              }}
            >
              {content.text && (
                <span
                  className="hobbies-text"
                  style={{ color: content.textColor }}
                >
                  {content.text}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Volume controls will be visible when the slider is active */}
        {currentContentIndex > -1 && (
          <div className="volume-control">
            <button onClick={toggleMute} className="mute-button">
              {isMuted ? "🔇" : "🔊"}
            </button>
            {/* Removed the volume input slider */}
          </div>
        )}
      </div>

      {/* 2. The Scroll Track: This contains invisible triggers that give the section its height */}
      <div className="scroll-track">
        {hobbyContent.map((_, index) => (
          <div key={index} data-index={index} className="scroll-trigger" />
        ))}
      </div>
    </section>
  );
};

export default Hobbies;