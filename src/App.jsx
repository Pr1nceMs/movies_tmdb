import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppLayout from "./components/AppLayout/AppLayout";
import AppLayoutStyle from "./components/AppLayout/AppLayout.module.css";
import MovieCard from "./components/MovieCard/MovieCard";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  const movies = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <>
      <Sidebar />
      <AppLayout classnames={AppLayoutStyle.appLayout}>
        <Navbar />
        <Main>
          {movies.map((movie, index) => (
            <MovieCard key={index} />
          ))}
        </Main>
        <Footer />
      </AppLayout>
    </>
  );
}

export default App;
