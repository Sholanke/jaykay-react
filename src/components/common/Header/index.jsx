import React, { useState, useEffect } from "react";
import { useScrollContext } from "../../../context/scrollContext ";
import JK from "../JKLogo/JK";
import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/projects",
    text: "Projects",
  },
];

export default function Index() {
  const [hamBurgerIsOpen, setHamBurgerIsOpen] = useState(false);
  const [headerIsShrinked, setHeaderIsShrinked] = useState();
  const [scrollValue] = useScrollContext();

  useEffect(() => {
    setHeaderIsShrinked(scrollValue > 100);
  }, [scrollValue, headerIsShrinked]);

  return (
    <div
      className={`wrapper header-container ${headerIsShrinked ? "shrink" : ""}`}
    >
      <div className="max_width header-wrapper">
        <span className="logo">
          <JK />
        </span>
        <div className="links_container">
          <div className="links" data-active={hamBurgerIsOpen}>
            {links.map(({ text, ...props }, index) => (
              <NavLink
                {...props}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {text}
              </NavLink>
            ))}
            <a href="#" style={{ transitionDelay: `${links.length * 0.1}s` }}>
              Contacts
            </a>
          </div>
          <button onClick={() => setHamBurgerIsOpen(!hamBurgerIsOpen)}>
            <HamBuger active={hamBurgerIsOpen} />
          </button>
        </div>
      </div>
    </div>
  );
}

function HamBuger({ active }) {
  return (
    <div className="ham_burger" data-active={active.toString()}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}
