import { createContext, useContext, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preferred color scheme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }

    // Check for saved preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow-lg z-50"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <FaSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <FaMoon className="w-5 h-5 text-gray-700" />
        )}
      </motion.button>
    </ThemeContext.Provider>
  );
}
