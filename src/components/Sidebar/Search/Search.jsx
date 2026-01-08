import React from "react";
import SearchStyles from "./Search.module.css";

const Search = ({ classNames }) => {
  return (
    <li className={classNames}>
      <i className="fas fa-search"></i>
      <input type="search" placeholder="Rechercher..." />
    </li>
  );
};

export default Search;
