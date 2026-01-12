/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ children, classnames }) => {
  return <ul className={classnames}>{children}</ul>;
  //   return <ul className={`${styles.Menu} ${classNames}`}>{children}</ul>;
};

export default Menu;
