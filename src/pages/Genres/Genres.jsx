/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams, useSearchParams } from "react-router-dom";
import { getMoviesByGenre } from "../../services/tmdb";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Footer from "../../components/Footer/Footer";
import { useFavorites } from "../../context/FavoritesContext";

import styles from "./Genres.module.css";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import ErrorState from "../../components/ErrorState/ErrorState";

const genreNames = {
  28: "Action",
  12: "Aventure",
  16: "Animation",
  35: "Comédie",
  80: "Crime",
  99: "Documentaire",
  18: "Drame",
  10751: "Famille",
  14: "Fantaisie",
  36: "Histoire",
  27: "Horreur",
  10402: "Musique",
  9648: "Mystère",
  10749: "Romance",
  878: "Science-fiction",
  10770: "Téléfilm",
  53: "Thriller",
  10752: "Guerre",
  37: "Western",
};
const Genres = () => {
  const { genreId } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { movies, error, totalPages, refetch } = useFetchMovies(
    () => getMoviesByGenre(genreId, page),
    [genreId, page],
  );

  if (error)
    return <ErrorState message={error} showHomeLink={true} onRetry={refetch} />;

  return (
    <>
      {/* {loading ? (
        <Loader count={20} />
      ) : ( */}
      <>
        <div className={styles.categoryText}>
          {genreNames[genreId] || "Films " + genreId}
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

export default Genres;
