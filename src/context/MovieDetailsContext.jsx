/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext } from "react";
export const MovieDetailsContext = createContext(null);
const MovieDetailsContextProvider = ({ children }) => {
  const [hideMovieDetails, setHideMovieDetails] = useState(true);
  return (
    <>
      <MovieDetailsContext.Provider
        value={{ hideMovieDetails, setHideMovieDetails }}
      >
        {children}
      </MovieDetailsContext.Provider>
    </>
  );
};

export default MovieDetailsContextProvider;
