import React from "react";
import styles from "./MovieCard.css";

const MovieCard = () => {
  return (
    <div className={styles.movie_card}>
      <img
        src="./assets/big-sur-4k_1608574481.png"
        alt="Movie cover"
        className="movie-img"
      />

      {/* <!-- Dégradé sombre --> */}
      <div className="overlay"></div>

      {/* <!-- Effet glace coulissant --> */}
      <div className="shine"></div>

      {/* <!-- Contenu --> */}
      <div className="content">
        <h3 className="title">Ma fameuse recette de boulet sauce-lapin</h3>

        <div className="details">
          <div className="rating">★★★★☆</div>

          <button className="favorite">
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
