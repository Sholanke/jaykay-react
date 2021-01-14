import React, { useEffect, useState } from "react";
import DotsBg from "./components/DotsBg";
import Routes from "./components/Routes/Routes";
import "./css/home-page.css";
import "./css/about-page.css";
import "./css/404.css";
import "./css/shots.css";

function App() {
  return (
    <div className="App">
      <DotsBg />
      <Routes />
    </div>
  );
}

export default App;
