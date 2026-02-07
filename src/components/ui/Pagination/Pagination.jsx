import React from "react";
import styles from "./Pagination.module.css";
const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className={styles.button}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <span className={styles.pageNumber}>1</span>
      <span className={styles.pageNumber}>2</span>
      <span className={styles.pageNumber}>3</span>
      <span className={styles.pageNumber}>...</span>
      <span className={styles.pageNumber}>10</span>
      <button className={styles.button}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
