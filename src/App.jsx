import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppLayout from "./components/AppLayout/AppLayout";
import AppLayoutStyle from "./components/AppLayout/AppLayout.module.css";
import MovieCard from "./components/MovieCard/MovieCard";
import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <Sidebar />
      <AppLayout classnames={AppLayoutStyle.appLayout}>
        <Navbar />
        <Main>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Main>
      </AppLayout>
    </>
  );
}

export default App;
