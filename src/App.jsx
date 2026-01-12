import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppLayout from "./components/AppLayout/AppLayout";
import AppLayoutStyle from "./components/AppLayout/AppLayout.module.css";
import MovieCard from "./components/MovieCard/MovieCard";
function App() {
  return (
    <>
      <Sidebar />
      <AppLayout classnames={AppLayoutStyle.appLayout}>
        <Navbar />
        {/* <MovieCard /> */}
      </AppLayout>
    </>
  );
}

export default App;
