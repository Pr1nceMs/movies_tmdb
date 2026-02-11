import React from "react";
import styles from "./Main.module.css";
import { Outlet } from "react-router-dom";

const Main = ({ children, isCollapsed }) => {
  return (
    <main
      className={`${styles.main} ${isCollapsed ? styles.mainCollapsed : ""}`}
    >
      {children}
      <Outlet />
    </main>
  );
};

export default Main;
