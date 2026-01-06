import React from "react";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <button className={styles.loginButton}>
      <span>Se connecter</span>
    </button>
  );
};

export default LoginButton;
