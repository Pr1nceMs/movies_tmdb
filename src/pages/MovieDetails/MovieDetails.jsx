import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdb";
import styles from "./MovieDetails.module.css";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";
import Ratings from "../../components/MovieCard/Ratings/Ratings";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import ErrorState from "../../components/ErrorState/ErrorState";
// import { useFavorites } from "../../context/FavoritesContext";

const MovieDetails = () => {
  const { movieId } = useParams();
  // const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { movie, error, refetch, loading } = useFetchMovies(
    () => getMovieDetails(movieId),
    [movieId],
  );
  const overview = movie?.overview;
  if (error)
    return <ErrorState message={error} showHomeLink={true} onRetry={refetch} />;

  if (loading)
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
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
      />
      <div className={styles.containerBtn}>
        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left"></i>
            <span>RETOUR</span>
          </button>
        </div>
      </div>
      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.posterSection}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className={styles.infoSection}>
          <h1>{movie.title}</h1>
          <p className={styles.tagline}>{movie?.tagline}</p>

          <div className={styles.meta}>
            <span>{movie.release_date}</span>
            <span>
              <Ratings voteAverage={movie?.vote_average} />
            </span>
            <span>{movie.runtime} min</span>
          </div>

          {overview && <p className={styles.overview}>{movie?.overview}</p>}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
