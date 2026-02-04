import React from "react";
import styles from "./LikeButton.module.css";
const LikeButton = ({ toggleFavoriteMovies, isFavorite, movie }) => {
  return (
    <button
      className={styles.favorite}
      onClick={() => toggleFavoriteMovies(movie)}
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
