import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import XpCards from "./Components/xpCards";
import Projects from "./Components/Projects";
import Edu from "./Components/Edu";
import Footer from "./Components/Footer";
import MouseDotEffect from "./Components/MouseDotEffect"; // Import the new component
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import IBHanz from './assets/movies/IB-Hanz.jpg';
import MiaSmoke from './assets/movies/MiaSmoke.jpg';

function App() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme based on system preference or stored value
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
      // Fallback to system preference if no theme is stored
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light"; // Default to light if not in a browser environment
  });

  // Effect to apply the theme to the document's html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Re-run when theme changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-container">
      <>
        <Navbar />
        <MouseDotEffect>
          <main className="main-content">
            <div className="app-bg">
                <img src={MiaSmoke} alt="mia"></img>
                
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-button"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MoonIcon className="theme-toggle-icon" />
              ) : (
                <SunIcon className="theme-toggle-icon" />
              )}
            </button>
            <Hero />
            <XpCards />
            <Projects />
            <Edu />
            <img src={IBHanz} alt="ibh"></img>
            </div>
          </main>
        </MouseDotEffect>
        
        <Footer />
      </>
    </div>
  );
}

export default App;
