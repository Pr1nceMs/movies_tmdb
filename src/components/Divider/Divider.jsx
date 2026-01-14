import React from "react";
import styles from "./Divider.module.css";

const Divider = ({ label }) => {
  return (
    <div className={styles.divider}>
      <span>{label}</span>
    </div>
  );
};

export default Divider;
