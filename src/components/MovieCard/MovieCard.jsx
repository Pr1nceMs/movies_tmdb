import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import Ratings from "./Ratings/Ratings";
import LikeButton from "./LikeButton/LikeButton";
const MovieCard = ({
  image,
  title,
  toggleFavoriteMovies,
  isFavorite,
  movie,
  voteAverage,
}) => {
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500${image}`
    : "/placeholder.jpg"; // Ajoutez une image par défaut

  return (
    <Link to={`/movie/${movie.id}`}>
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
            <Ratings voteAverage={voteAverage} />
            <LikeButton
              toggleFavoriteMovies={toggleFavoriteMovies}
              isFavorite={isFavorite}
              movie={movie}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
