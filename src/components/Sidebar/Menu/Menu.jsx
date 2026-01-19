import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ children, classnames, activeMenu }) => {
  return (
    <ul className={`${classnames} ${activeMenu ? styles.active : ""}`}>
      {children}
    </ul>
  );
  //   return <ul className={`${styles.Menu} ${classNames}`}>{children}</ul>;
};

export default Menu;
