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
}) => {
  return (
    <li
      className={`${stylesItem.item} ${isActive ? stylesItem.active : ""}`}
      onClick={() => {
        onClick(id);
        if (onClickDarkMode) onClickDarkMode();
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
