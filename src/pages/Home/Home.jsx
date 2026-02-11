/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { getMoviesByCategory } from "../../services/tmdb";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Home.module.css";
const Home = ({ toggleFavoriteMovies, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const { type } = useParams();

  useEffect(() => {
    const loadMoviesByCategory = async () => {
      try {
        setLoading(true);
        const movies = await getMoviesByCategory("popular");
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMoviesByCategory();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.categoryText}>Films populaires</div>
          <div className={styles.movies}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                image={movie.poster_path}
                title={movie.title}
                movie={movie}
                toggleFavoriteMovies={toggleFavoriteMovies}
                isFavorite={favorites.some((item) => item.id === movie.id)}
                voteAverage={movie.vote_average}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
