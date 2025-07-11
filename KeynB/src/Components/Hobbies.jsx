import { useState, useEffect, useRef, useCallback } from "react";
import "./CompStyles.css"; // Your component-specific styles
import { hobbyContent } from "./hobbiesContext"; // Your content file

const Hobbies = () => {
  // State to track the active slide index, initialized to -1 (not in view)
  const [currentContentIndex, setCurrentContentIndex] = useState(-1);
  const audioRef = useRef(null);
  const audioFadeTimeoutRef = useRef(null);
  const [audioVolume, setAudioVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // A ref to hold the main section element
  const sectionRef = useRef(null);

  // This will store a reference to the observer so we can disconnect it on cleanup
  const observerRef = useRef(null);

  // --- Audio Playback Logic (Largely Unchanged) ---
  const playAudioWithFade = useCallback(
    (audioSrc, startTime = 0, duration = null, fadeOutDuration = null) => {
      if (!audioRef.current || audioRef.current.src !== audioSrc) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        audioRef.current = new Audio(audioSrc);
        audioRef.current.loop = false;
      }
      if (audioFadeTimeoutRef.current)
        clearTimeout(audioFadeTimeoutRef.current);
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
      }
    },
    [audioVolume, isMuted]
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
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0.01, // Trigger when 50% of the element is visible
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
      // Logic to continue music
    } else {
      // Logic to stop music on other slides
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.loop = false;
      }
    }
  }, [currentContentIndex, playAudioWithFade]);

  // --- Volume and Mute Handlers (Unchanged) ---
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setAudioVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // This effect specifically handles volume and mute changes.
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : audioVolume;
    }
  }, [isMuted, audioVolume]);

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
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={audioVolume}
              onChange={handleVolumeChange}
              disabled={isMuted}
            />
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
