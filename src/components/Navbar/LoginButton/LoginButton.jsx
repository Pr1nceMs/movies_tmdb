import React from "react";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <button className={styles.loginButton}>
      <span>{"Connexion".toUpperCase()}</span>
    </button>
  );
};

export default LoginButton;
