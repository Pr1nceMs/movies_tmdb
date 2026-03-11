/* eslint-disable no-unused-vars */
import React from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesBySearch } from "../../services/tmdb";
import Loader from "../../components/Loader/Loader";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Footer from "../../components/Footer/Footer";
import styles from "./Search.module.css";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import ErrorState from "../../components/ErrorState/ErrorState";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page")) || 1;

  const { movies, error, totalPages, refetch } = useFetchMovies(
    () => getMoviesBySearch(query, page),
    [query, page],
  );

  const notFoundMoviesSearch = query && movies.length === 0;

  if (error)
    return <ErrorState message={error} showHomeLink={true} onRetry={refetch} />;

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
            <MovieGrid movies={movies} />
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
