import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ image, title }) => {
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500${image}`
    : "/placeholder.jpg"; // Ajoutez une image par défaut

  return (
    <div className={styles.movieCard}>
      <img src={imageUrl} alt="Movie cover" className={styles.movieImg} />

      {/* <!-- Dégradé sombre --> */}
      <div className={styles.overlay}></div>

      {/* <!-- Effet glace coulissant --> */}
      <div className={styles.shine}></div>

      {/* <!-- Contenu --> */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.details}>
          <div className={styles.rating}>★★★★☆</div>

          <button className={styles.favorite}>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
