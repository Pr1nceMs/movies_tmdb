import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppLayout from "./components/AppLayout/AppLayout";
import AppLayoutStyle from "./components/AppLayout/AppLayout.module.css";
import Main from "./components/Main/Main";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

const Home = lazy(() => import("./pages/Home/Home"));
const Category = lazy(() => import("./pages/Category/Category"));
const Genres = lazy(() => import("./pages/Genres/Genres"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Search = lazy(() => import("./pages/Search/Search"));

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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:type" element={<Category />} />
              <Route path="/genre/:genreId" element={<Genres />} />
              <Route path="/movie/:movieId" element={<MovieDetails />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Main>
        {/* <Footer /> */}
      </AppLayout>
    </div>
  );
}

export default App;
