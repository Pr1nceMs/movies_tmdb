/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Logo.module.css";
const Logo = ({ classNames, text, classList }) => {
  return (
    <div className={classNames}>
      <i className={classList}></i>
      <span>{text}</span>
    </div>
  );
};

export default Logo;
