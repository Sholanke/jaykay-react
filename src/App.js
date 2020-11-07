import React, { useEffect, useState } from "react";
import DotsBg from "./components/DotsBg";
import Routes from "./components/Routes/Routes";
import "./css/home-page.css";
import "./css/about-page.css";
import "./css/404.css";
import "./css/shots.css";
import Loader from "./components/Loader";

function App() {
  const [pageHasLoaded, setPageHasLoaded] = useState(false);

  useEffect(() => {
    function showPage() {
      setPageHasLoaded(true);
    }
    window.addEventListener("load", showPage);
  }, []);

  return (
    <div className="App">
      <DotsBg />
      <div
        className="pages_container"
        style={{ display: pageHasLoaded ? "unset" : "none" }}
      >
        <Routes />
      </div>
      {!pageHasLoaded && <Loader />}
    </div>
  );
}

export default App;
