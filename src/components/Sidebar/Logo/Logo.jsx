// /* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Logo.module.css";
const Logo = ({ classNames, isCollapsed, text, classList = "" }) => {
  return (
    <div className={classNames}>
      <i className={classList}></i>
      <span
        className={`${styles.spanTextLogo} ${
          isCollapsed ? styles.spanTextLogoCollapsed : ""
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Logo;
