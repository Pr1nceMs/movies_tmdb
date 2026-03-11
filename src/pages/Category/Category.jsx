/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams, useSearchParams } from "react-router-dom";
import { getMoviesByCategory } from "../../services/tmdb";
import Footer from "../../components/Footer/Footer";
import styles from "./Category.module.css";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useFavorites } from "../../context/FavoritesContext";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import ErrorState from "../../components/ErrorState/ErrorState";

const titles = {
  popular: "Films populaires",
  upcoming: "Films à venir",
  top_rated: "Films les mieux notés",
  now_playing: "Films en cours de sortie",
  latest: "Films les plus récents",
};
const Category = () => {
  const { type } = useParams();

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { movies, error, totalPages, refetch } = useFetchMovies(
    () => getMoviesByCategory(type, page),
    [type, page],
  );

  if (error) {
    return <ErrorState message={error} showHomeLink={true} onRetry={refetch} />;
  }
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <>
        <div className={styles.categoryText}>
          {titles[type] || "Films " + type}
        </div>
        <div className={styles.movies}>
          <MovieGrid movies={movies} />
        </div>
      </>
      {/* )} */}
      <Footer currentPage={page} totalPages={Math.min(totalPages, 500)} />
    </>
  );
};

export default Category;
