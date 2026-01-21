import React from "react";
import styles from "./Main.module.css";

const Main = ({ children, isCollapsed }) => {
  return (
    <main
      className={`${styles.main} ${isCollapsed ? styles.mainCollapsed : ""}`}
    >
      {children}
    </main>
  );
};

export default Main;
