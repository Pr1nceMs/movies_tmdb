import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppLayout from "./components/AppLayout/AppLayout";
import AppLayoutStyle from "./components/AppLayout/AppLayout.module.css";
import MovieCard from "./components/MovieCard/MovieCard";
import Main from "./components/Main/Main";
import Category from "./pages/Category/Category";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Genres from "./pages/Genres/Genres";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import NotFound from "./pages/NotFound/NotFound";
function App() {
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
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        // getMoviesByCategory={getMoviesByCategory}
      />
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
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route
              path="/"
              element={
                <Home
                  favorites={favorites}
                  toggleFavoriteMovies={toggleFavoriteMovies}
                />
              }
            />
            <Route
              path="/genre/:genreId"
              element={
                <Genres
                  favorites={favorites}
                  toggleFavoriteMovies={toggleFavoriteMovies}
                />
              }
            />
            <Route
              path="/movie/:id"
              element={
                <MovieDetails
                  favorites={favorites}
                  toggleFavoriteMovies={toggleFavoriteMovies}
                />
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  toggleFavoriteMovies={toggleFavoriteMovies}
                />
              }
            />
            <Route
              path="/category/:type"
              element={
                <Category
                  toggleFavoriteMovies={toggleFavoriteMovies}
                  favorites={favorites}
                />
              }
            />
          </Routes>
        </Main>
        <Footer />
      </AppLayout>
    </div>
  );
}

export default App;
