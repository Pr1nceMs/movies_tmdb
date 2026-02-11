import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Favorites.module.css";
const Favorites = ({ favorites, toggleFavoriteMovies }) => {
  return favorites.length === 0 ? (
    <div className={styles.categoryText}>Aucun film favori</div>
  ) : (
    <>
      <div className={`${styles.categoryText} ${styles.underlinedText}`}>
        Mes films favoris
      </div>
      <div className={styles.movies}>
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            movie={movie}
            toggleFavoriteMovies={toggleFavoriteMovies}
            isFavorite={true}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
