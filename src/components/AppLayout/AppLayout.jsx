import React from "react";
import styles from "./AppLayout.module.css";

const appLayout = ({ children, classnames, isCollapsed }) => {
  return (
    <div className={`${classnames} ${isCollapsed ? styles.collapsed : ""}`}>
      {children}
    </div>
  );
};

export default appLayout;
