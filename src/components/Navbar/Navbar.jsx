import React from "react";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar/SearchBar";
import LoginButton from "./LoginButton/LoginButton";
import DarkMode from "../DarkMode/DarkMode";
import ThreeBars from "./ThreeBars/ThreeBars";

const Navbar = () => {
  return (
    <div className={styles.mainContent}>
      <nav className={styles.navbar}>
        <ThreeBars />
        <SearchBar />
        <div className={styles.navRight}>
          <DarkMode />
          <LoginButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
