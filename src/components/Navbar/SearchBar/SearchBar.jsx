import React from "react";
import styles from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <i className={styles.fas + " " + styles.fa_search}></i>
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
