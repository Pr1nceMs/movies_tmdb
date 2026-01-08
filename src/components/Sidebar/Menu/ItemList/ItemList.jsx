/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ItemList.module.css";

const ItemList = ({ classNames, classList, text }) => {
  return (
    <li className={classNames}>
      <i className={classList}></i>
      <span>{text}</span>
    </li>
  );
};

export default ItemList;
