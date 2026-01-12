import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={styles.movieCard}>
      <img
        src="src/assets/big_sur_4k_wallpaper_by_thisahami_df7nzr1-pre.jpg"
        alt="Movie cover"
        className={styles.movieImg}
      />

      {/* <!-- Dégradé sombre --> */}
      <div className={styles.overlay}></div>

      {/* <!-- Effet glace coulissant --> */}
      <div className={styles.shine}></div>

      {/* <!-- Contenu --> */}
      <div className={styles.content}>
        <h3 className={styles.title}>
          Ma fameuse recette de boulet sauce-lapin
        </h3>

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
