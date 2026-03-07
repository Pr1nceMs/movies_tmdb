/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, useContext } from "react";
const FavoritesContext = createContext(null);
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavoriteMovies = (movie) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === movie.id)) {
        // si déjà favori -> on retire
        return prev.filter((item) => item.id !== movie.id);
      }
      // sinon → on ajoute
      return [...prev, movie];
    });
  };
  return (
    <>
      <FavoritesContext.Provider value={{ favorites, toggleFavoriteMovies }}>
        {children}
      </FavoritesContext.Provider>
    </>
  );
};

// export default FavoritesProvider;
export const useFavorites = () => {
  return useContext(FavoritesContext);
};
