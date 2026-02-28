import React from "react";
import styles from "./Footer.module.css";
import Pagination from "../ui/Pagination/Pagination";
const Footer = ({ currentPage, totalPages }) => {
  return (
    <footer className={styles.footer}>
      <>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </>
    </footer>
  );
};

export default Footer;
