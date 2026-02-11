import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { getMoviesByCategory } from "../../services/tmdb";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Category.module.css";

const titles = {
  popular: "Films populaires",
  upcoming: "Films à venir",
  top_rated: "Films les mieux notés",
  now_playing: "Films en cours de sortie",
  latest: "Films les plus récents",
};
const Category = ({ toggleFavoriteMovies, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Erreur lors du chargement des films");

  const { type } = useParams();

  useEffect(() => {
    const loadMoviesByCategory = async () => {
      try {
        setLoading(true);
        const movies = await getMoviesByCategory(type);
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMoviesByCategory();
  }, [type]);
  console.log(error);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.categoryText}>
            {titles[type] || "Films " + type}
          </div>
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

export default Category;
