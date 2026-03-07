import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useFavorites } from "../../context/FavoritesContext";
const MovieGrid = ({ movies = [] }) => {
  const { favorites, toggleFavoriteMovies } = useFavorites();

  return (
    <>
      {movies?.map((movie) => (
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
    </>
  );
};

export default MovieGrid;
