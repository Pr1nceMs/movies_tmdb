import React, { useState } from "react";
import styles from "./DarkMode.module.css";
const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <i
      onClick={toggleTheme}
      className={
        theme === "light"
          ? `fas fa-sun ${styles.darkMode}`
          : `fas fa-moon ${styles.darkMode} ${styles.darkModeTheme}`
      }
    ></i>
  );
};

export default DarkMode;
