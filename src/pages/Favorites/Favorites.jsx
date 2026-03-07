import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useFavorites } from "../../context/FavoritesContext";

import styles from "./Favorites.module.css";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
const Favorites = () => {
  const { favorites } = useFavorites();

  return favorites.length === 0 ? (
    <div className={styles.categoryText}>Aucun film favori pour le moment</div>
  ) : (
    <>
      <div className={`${styles.categoryText} ${styles.underlinedText}`}>
        Mes films favoris
      </div>
      <div className={styles.movies}>
        <MovieGrid movies={favorites} />
      </div>
    </>
  );
};

export default Favorites;
