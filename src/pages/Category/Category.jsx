/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams, useSearchParams } from "react-router-dom";
import { getMoviesByCategory } from "../../services/tmdb";
import Footer from "../../components/Footer/Footer";
import styles from "./Category.module.css";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

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

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMoviesByCategory = async () => {
      try {
        setLoading(true);
        const movies = await getMoviesByCategory(type, page);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMoviesByCategory();
  }, [type, page]);
  // console.log(error);
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

export default Category;
