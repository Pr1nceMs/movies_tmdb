import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import MainStyle from "./components/Main/Main.module.css";
function App() {
  return (
    <>
      <Sidebar />
      <Main classNames={MainStyle.appLayout}>
        <Navbar />
      </Main>
    </>
  );
}

export default App;
