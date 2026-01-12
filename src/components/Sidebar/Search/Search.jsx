import React from "react";
import SearchStyles from "./Search.module.css";

const Search = ({ classnames }) => {
  return (
    <li className={classnames}>
      <i className="fas fa-search"></i>
      <input type="search" placeholder="Rechercher..." />
    </li>
  );
};

export default Search;
