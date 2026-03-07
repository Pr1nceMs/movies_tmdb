import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdb";
import styles from "./MovieDetails.module.css";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";
import Ratings from "../../components/MovieCard/Ratings/Ratings";
// import { useFavorites } from "../../context/FavoritesContext";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const [favorites, toggleFavoriteMovies] = useFavorites();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovieDetails(movieId);
      setMovie(response);
    };
    fetchMovie();
  }, [movieId]);
  // const style = {
  //   backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
  //   objectFit: "cover",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  if (!movie)
    return (
      <div className={styles.movieError}>
        <SpinnerLoader />
      </div>
    );
  return (
    <div className={styles.movieDetails}>
      {/* Background */}
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      />

      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.posterSection}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className={styles.infoSection}>
          <h1>{movie.title}</h1>
          <p className={styles.tagline}>{movie.tagline}</p>

          <div className={styles.meta}>
            <span>{movie.release_date}</span>
            <span>
              <Ratings voteAverage={movie.vote_average} />
            </span>
            <span>{movie.runtime} min</span>
          </div>

          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
