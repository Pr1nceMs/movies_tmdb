/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { getMoviesByCategory } from "../../services/tmdb";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
const Home = ({ toggleFavoriteMovies, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const [totalPages, setTotalPages] = useState(1);

  // const { type } = useParams();

  useEffect(() => {
    const loadMoviesByCategory = async () => {
      try {
        setLoading(true);
        const movies = await getMoviesByCategory("popular", page);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        setError("Erreur lors du chargement des films populaires");
      } finally {
        setLoading(false);
      }
    };
    loadMoviesByCategory();
  }, [page]);
  if (error) {
    return <p className={styles.error}>{error}</p>;
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.categoryText}>Films populaires</div>
          <div className={styles.movies}>
            <MovieGrid
              movies={movies}
              toggleFavoriteMovies={toggleFavoriteMovies}
              favorites={favorites}
            />
          </div>
        </>
      )}
      <Footer currentPage={page} totalPages={Math.min(totalPages, 500)} />
    </>
  );
};

export default Home;
