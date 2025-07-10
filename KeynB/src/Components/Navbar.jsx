import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import keyhole from "../assets/logos/key-hole.png";
import "./CompStyles.css";

const Navbar = () => {
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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Portfolio Title/Logo */}
        <div className="navLogo">
          <img src={keyhole} alt="Key'hole" className="KeyHole"></img>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#experience" className="navbar-link">
            Experience
          </a>
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#education" className="navbar-link">
            Education
          </a>
          <a href="#hobbies" className="navbar-link">
            Hobbies
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
