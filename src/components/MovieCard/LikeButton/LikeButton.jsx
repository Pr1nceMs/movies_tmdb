import React, { useState } from "react";
import styles from "./LikeButton.module.css";
const LikeButton = ({ toggleFavoriteMovies, isFavorite, movie }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClicked((prev) => !prev);
    toggleFavoriteMovies(movie);
  };
  return (
    <button
      className={`${styles.favorite} ${isClicked ? styles.clicked : ""}`}
      onClick={handleClick}
    >
      {isFavorite ? (
        <i
          className={`fa-solid fa-heart ${styles.fas}`}
          style={{ color: "#ff0000" }}
        />
      ) : (
        <i className={`fas fa-heart ${styles.fas}`} />
      )}
    </button>
  );
};

export default LikeButton;
