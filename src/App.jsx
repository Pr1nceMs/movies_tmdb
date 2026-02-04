/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppLayout from "./components/AppLayout/AppLayout";
import AppLayoutStyle from "./components/AppLayout/AppLayout.module.css";
import MovieCard from "./components/MovieCard/MovieCard";
import Main from "./components/Main/Main";
import { getMovies, getMovieByGenre, getGenres } from "./services/tmdb";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
function App() {
  const movie = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);
  console.log(movies.length);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevCollapsed) => !prevCollapsed);
  };
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

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
    <div>
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <AppLayout
        classnames={AppLayoutStyle.appLayout}
        isCollapsed={isSidebarCollapsed}
      >
        <Navbar
          onToggleSidebar={toggleSidebar}
          isCollapsed={isSidebarCollapsed}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <Main isCollapsed={isSidebarCollapsed}>
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
        </Main>
        <Footer />
      </AppLayout>
    </div>
  );
}

export default App;
