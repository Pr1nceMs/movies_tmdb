import React from "react";
import styles from "./ThreeBars.module.css";

const ThreeBars = ({ onToggleSidebar, isCollapsed }) => {
  return (
    <div className={styles.navLeft}>
      <button
        className={`${styles.sidebarToggle} ${
          isCollapsed ? styles.transformEffect : ""
        }`}
        onClick={onToggleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default ThreeBars;
