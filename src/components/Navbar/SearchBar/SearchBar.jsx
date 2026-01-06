import React from "react";
import styles from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <i className="fas fa-search" id={styles.fas}></i>
      <input
        type="text"
        placeholder="Rechercher..."
        name="search"
        id={styles.search}
      />
    </div>
  );
};

export default SearchBar;
