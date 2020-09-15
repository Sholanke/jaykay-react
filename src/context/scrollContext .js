import React, { createContext, useState, useEffect, useContext } from "react";

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    function updateScrollValue() {
      setScrollValue(document.documentElement.scrollTop);
    }
    window.addEventListener("scroll", updateScrollValue);
  }, []);
  return (
    <ScrollContext.Provider value={[scrollValue, setScrollValue]}>
      {children}
    </ScrollContext.Provider>
  );
}

function useScrollContext() {
  return useContext(ScrollContext);
}

export { ScrollProvider, ScrollContext, useScrollContext };
