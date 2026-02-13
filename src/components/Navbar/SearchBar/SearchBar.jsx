/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/search?q=${query}`, { replace: true });
    } else {
      navigate(`/search`);
    }
  };

  return (
    <div className={styles.searchBar}>
      <i className="fas fa-search" id={styles.fas}></i>
      <input
        type="search"
        placeholder="Rechercher..."
        name="search"
        id={styles.search}
        value={searchQuery}
        onChange={handleSearch}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;
