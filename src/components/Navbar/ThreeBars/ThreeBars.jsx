import React from "react";
import styles from "./ThreeBars.module.css";

const ThreeBars = ({ onToggleSidebar }) => {
  console.log(onToggleSidebar ? "non" : "oui");
  return (
    <div className={styles.navLeft}>
      <button className={styles.sidebarToggle} onClick={onToggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default ThreeBars;
