import React from "react";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { getMoviesByCategory } from "../../services/tmdb";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import ErrorState from "../../components/ErrorState/ErrorState";

const Home = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { movies, error, totalPages, refetch } = useFetchMovies(
    () => getMoviesByCategory("popular", page),
    [page],
  );

  const handleBack = () => {
    window.history.back();
  };

  if (error) {
    // return <p className={styles.error}>{error}</p>;
    return <ErrorState message={error} showHomeLink={true} onRetry={refetch} />;
  }
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <>
        <div className={styles.categoryText}>
          <button
            onClick={handleBack}
            className={`fas fa-arrow-left ${styles.hone}`}
          >
            Retour
          </button>
          <h4 className={styles.htwo}> Films populaires</h4>
        </div>
        <div className={styles.movies}>
          <MovieGrid
            movies={movies}
            // favorites={favorites}
            // toggleFavoriteMovies={toggleFavoriteMovies}
          />
        </div>
      </>
      {/* )} */}
      <Footer currentPage={page} totalPages={Math.min(totalPages, 500)} />
    </>
  );
};

export default Home;
