/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar/SearchBar";
import LoginButton from "./LoginButton/LoginButton";
import DarkMode from "../DarkMode/DarkMode";
import ThreeBars from "./ThreeBars/ThreeBars";

const Navbar = ({ onToggleSidebar, isCollapsed }) => {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // <div className={styles.mainContent}>
    <nav
      className={`${styles.navbar} ${
        isCollapsed ? styles.navbarCollapsed : ""
      }`}
    >
      <ThreeBars onToggleSidebar={onToggleSidebar} />
      <SearchBar />
      <div className={styles.navRight}>
        <DarkMode />
        <LoginButton />
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
