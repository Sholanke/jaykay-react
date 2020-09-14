import React, { useEffect, useState } from "react";
import DotsBg from "./components/DotsBg";
import Routes from "./components/Routes/Routes";

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
    </div>
  );
}

export default App;
