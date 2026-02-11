import React from "react";
// import styles from "./Favorites.module.css";
const Favorites = ({ favorites }) => {
  const styles = {
    display: "flex",
    color: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    transition: "all 0.5s ease-in-out",
    border: "2px solid red",
  };
  return (
    <div style={styles}>
      {favorites.length === 0 ? "Aucun film favori" : favorites.length}
    </div>
  );
};

export default Favorites;
