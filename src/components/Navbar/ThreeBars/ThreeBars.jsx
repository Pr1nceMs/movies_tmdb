import React from "react";
import styles from "./ThreeBars.module.css";

const ThreeBars = () => {
  return (
    <div className={styles.navLeft}>
      <button className={styles.sidebarToggle}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default ThreeBars;
