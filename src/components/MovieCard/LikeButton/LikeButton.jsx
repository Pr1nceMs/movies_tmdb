import React, { useState } from "react";
import styles from "./LikeButton.module.css";
const LikeButton = ({ toggleFavoriteMovies, isFavorite, movie }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
    toggleFavoriteMovies(movie);
  };
  return (
    <button
      className={`${styles.favorite} ${isClicked ? styles.clicked : ""}`}
      onClick={handleClick}
    >
      {isFavorite ? (
        <i className="fa-solid fa-heart" style={{ color: "#ff0000" }} />
      ) : (
        <i className="fas fa-heart" />
      )}
    </button>
  );
};

export default LikeButton;
