import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound}>
      <p> La page que vous recherchez n'existe pas</p>
      <button className={styles.btnHome} onClick={() => navigate("/")}>
        Retour a l'accueil
      </button>
    </div>
  );
};

export default NotFound;
