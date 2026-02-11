import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import stylesItem from "./ItemList.module.css";

const ItemList = ({
  icon,
  text,
  id,
  isActive,
  onClick,
  isCollapsed,
  path,
  onClickDarkMode,
  getMovies,
}) => {
  return (
    <li
      className={`${stylesItem.item} ${isActive ? stylesItem.active : ""}`}
      onClick={() => {
        onClick(id);
        onClickDarkMode();
        getMovies(path);
      }}
    >
      <Link to={path} className={stylesItem.link}>
        <i className={icon}></i>
        {!isCollapsed && <span>{text}</span>}
        {isCollapsed && <span className={stylesItem.tooltip}>{text}</span>}
      </Link>
    </li>
  );
};

export default ItemList;
