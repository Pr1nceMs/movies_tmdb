/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams, useSearchParams } from "react-router-dom";
import { getMoviesByGenre } from "../../services/tmdb";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Footer from "../../components/Footer/Footer";
import { useFavorites } from "../../context/FavoritesContext";

import styles from "./Genres.module.css";

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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Erreur lors du chargement des films");
  // const { favorites, toggleFavoriteMovies } = useFavorites();

  const { genreId } = useParams();

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMoviesByGenre = async () => {
      try {
        setLoading(true);
        const movies = await getMoviesByGenre(genreId, page);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMoviesByGenre();
  }, [genreId, page]);
  // console.log(error);
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
          <MovieGrid
            movies={movies}
            // toggleFavoriteMovies={toggleFavoriteMovies}
            // favorites={favorites}
          />
        </div>
      </>
      {/* )} */}
      <Footer currentPage={page} totalPages={Math.min(totalPages, 500)} />
    </>
  );
};

export default Genres;
