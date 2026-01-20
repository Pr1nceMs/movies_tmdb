import React from "react";
// import { NavLink } from "react-router-dom";
import stylesItem from "./ItemList.module.css";

const ItemList = ({ classList, text, id, isActive, onClick, isCollapsed }) => {
  return (
    <li
      className={`${stylesItem.item} ${isActive ? stylesItem.active : ""}`}
      onClick={() => onClick(id)}
    >
      <i className={classList}></i>
      {!isCollapsed && <span>{text}</span>}
      {isCollapsed && <span className={stylesItem.tooltip}>{text}</span>}
    </li>
  );
};

export default ItemList;
