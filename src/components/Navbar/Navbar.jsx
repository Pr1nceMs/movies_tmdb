import React from "react";
import styles from "./navbar.module.css";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* <!-- Navbar --> */}
      <div className={styles.navLeft}>
        <button id={styles.sidebarToggle}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <SearchBar />

      <div className={styles.navRight}>
        <div className={styles.navItem}>
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
        <div className={styles.navItem}>
          <i className="fas fa-cog"></i>
        </div>
        <div className={styles.profile}>
          <img src="././public/react.svg" alt="Profile" />
          <i className="fa fa-user" aria-hidden="true"></i>

          <span id="john-name">Tendo</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
