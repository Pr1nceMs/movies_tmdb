// import React, { useState } from "react";
import styles from "./DarkMode.module.css";
const DarkMode = ({ theme, toggleTheme }) => {
  return (
    <i
      onClick={toggleTheme}
      className={
        theme === "light"
          ? `fas fa-sun ${styles.darkMode} ${styles.fas}`
          : `fas fa-moon ${styles.darkMode} ${styles.darkModeActive} ${styles.rotate} ${styles.fas}`
      }
    ></i>
  );
};

export default DarkMode;
