import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./ItemList.module.css";

const ItemList = ({ classnames, classList, text, id, isActive, onClick }) => {
  return (
    <li
      className={`${isActive ? styles.active : ""} ${classnames}`}
      onClick={() => onClick(id)}
    >
      <i className={classList}></i>
      <span className={styles.text}>{text}</span>
    </li>
  );
};

export default ItemList;
