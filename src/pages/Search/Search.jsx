/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesBySearch } from "../../services/tmdb";
import Loader from "../../components/Loader/Loader";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Footer from "../../components/Footer/Footer";
import { useFavorites } from "../../context/FavoritesContext";
import styles from "./Search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page")) || 1;

  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { favorites, toggleFavoriteMovies } = useFavorites();

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      setLoading(true);
      setError(null);
      try {
        const results = await getMoviesBySearch(query, page);
        setMovies(results.results);
        setTotalPages(results.total_pages);
      } catch (err) {
        setError("Erreur lors de la recherche");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);
  const notFoundMoviesSearch = query && movies.length === 0;
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <>
        <div className={styles.categoryText}>
          {query ? `Résultats pour "${query}"` : "Rechercher un film"}
        </div>
        <div className={styles.movies}>
          {movies && movies.length > 0 ? (
            <MovieGrid
              movies={movies}
              // toggleFavoriteMovies={toggleFavoriteMovies}
              // favorites={favorites}
            />
          ) : (
            query && (
              <p className={styles.noResults}>
                Aucun résultat trouvé pour "{query}"
              </p>
            )
          )}
        </div>
      </>
      {/* )} */}
      <Footer currentPage={page} totalPages={Math.min(totalPages, 500)} />
    </>
  );
};

export default Search;
