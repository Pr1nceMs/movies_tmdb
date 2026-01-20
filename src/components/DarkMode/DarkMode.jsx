// import React, { useState } from "react";
import styles from "./DarkMode.module.css";
const DarkMode = ({ theme, toggleTheme }) => {
  return (
    <i
      onClick={toggleTheme}
      className={
        theme === "light"
          ? `fas fa-sun ${styles.darkMode}`
          : `fas fa-moon ${styles.darkMode} ${styles.darkModeActive}`
      }
    ></i>
  );
};

export default DarkMode;
