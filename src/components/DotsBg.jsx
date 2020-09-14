import React, { useState, useEffect } from "react";

export default function DotsBg() {
  const [lineCount, setLineCount] = useState(11);
  const [count, setCount] = useState(0);
  let numberofDots =
    document.querySelector("body").scrollHeight / window.innerHeight;
  numberofDots = 2 * Math.floor(numberofDots);

  useEffect(() => {
    function updateCount() {
      let t =
        ((document.body.scrollTop || document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;
      setCount(-t * 20);
    }
    window.addEventListener("scroll", updateCount);
  }, []);

  return (
    <div className="absolute_dots_container">
      {Array.from({ length: lineCount }).map((l, index) => (
        <LineDots
          numberofdots={numberofDots}
          useCount={() => [count, setCount]}
          id={index}
        />
      ))}
    </div>
  );
}

function LineDots({ numberofdots, useCount, id }) {
  // const winHeight = window.offsetHeight
  const [count, setCount] = useCount();
  return (
    <div className="line_container">
      {Array.from({ length: numberofdots }).map((nd) => (
        <span
          className="dot"
          style={{
            transform: `translate(-50%,${
              id === 3 || id === 5 || id === 8 ? count * 0.2 : count
            }px)`,
          }}
        >
          {/* {count} */}
        </span>
      ))}
    </div>
  );
}
