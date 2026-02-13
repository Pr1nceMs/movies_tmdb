import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdb";
import styles from "./MovieDetails.module.css";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
      <img
        className={styles.movieImg}
        src={`https://images.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt=""
      />
      {/* <div className={styles.content}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div> */}
    </div>
  );
};

export default MovieDetails;
