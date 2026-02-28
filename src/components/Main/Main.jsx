import React from "react";
import styles from "./Main.module.css";
import { Outlet, useLocation } from "react-router-dom";
const Main = ({ children, isCollapsed }) => {
  const location = useLocation();

  const isMovieDetails = location.pathname.startsWith("/movie/");

  return (
    <main
      className={`${styles.main} ${isCollapsed ? styles.mainCollapsed : ""}${isMovieDetails ? styles.hideMovieDetails : ""}`}
    >
      {children}
    </main>
  );
};

export default Main;
