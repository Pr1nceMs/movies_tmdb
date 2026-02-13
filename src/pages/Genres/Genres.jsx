/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../../services/tmdb";
import MovieCard from "../../components/MovieCard/MovieCard";
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
const Genres = ({ toggleFavoriteMovies, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Erreur lors du chargement des films");

  const { genreId } = useParams();

  useEffect(() => {
    const loadMoviesByGenre = async () => {
      try {
        setLoading(true);
        const movies = await getMoviesByGenre(genreId);
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMoviesByGenre();
  }, [genreId]);
  // console.log(error);
  return (
    <>
      {loading ? (
        <Loader count={20} />
      ) : (
        <>
          <div className={styles.categoryText}>
            {genreNames[genreId] || "Films " + genreId}
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

export default Genres;
