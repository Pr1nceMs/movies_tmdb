/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesBySearch } from "../../services/tmdb";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import styles from "./Search.module.css";

const Search = ({ toggleFavoriteMovies, favorites }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      setLoading(true);
      setError(null);
      try {
        const results = await getMoviesBySearch(query);
        setMovies(results);
      } catch (err) {
        setError("Erreur lors de la recherche");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);
  const notFoundMoviesSearch = query && movies.length === 0;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.categoryText}>
            {query ? `Résultats pour "${query}"` : "Rechercher un film"}
          </div>
          <div className={styles.movies}>
            {movies && movies.length > 0
              ? movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    image={movie.poster_path}
                    title={movie.title}
                    movie={movie}
                    toggleFavoriteMovies={toggleFavoriteMovies}
                    isFavorite={favorites.some((item) => item.id === movie.id)}
                    voteAverage={movie.vote_average}
                  />
                ))
              : query && (
                  <p className={styles.noResults}>
                    Aucun résultat trouvé pour "{query}"
                  </p>
                )}
          </div>
        </>
      )}
    </>
  );
};

export default Search;
