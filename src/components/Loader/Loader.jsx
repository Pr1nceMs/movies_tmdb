import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ count = 20 }) => {
  return (
    <div className={styles.cards}>
      {Array.from({ length: count }).map((_, index) => (
        <div className={styles.card} key={index}>
          <div className={`${styles.image} ${styles.skeleton}`}></div>
          <div className={styles.content}>
            <div className={`${styles.title} ${styles.skeleton}`}></div>
            <div className={`${styles.text} ${styles.skeleton}`}></div>
            <div
              className={`${styles.text} ${styles.short} ${styles.skeleton}`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
