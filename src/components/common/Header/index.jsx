import React, { useState, useEffect } from "react";
import { useScrollContext } from "../../../context/scrollContext ";
import JK from "../JKLogo/JK";
import { NavLink, Link } from "react-router-dom";
const links = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About",
  },
];

export default function Header({ useHamBurgerIsActive }) {
  const [hamBurgerIsOpen, setHamBurgerIsOpen] = useHamBurgerIsActive();
  const [headerIsShrinked, setHeaderIsShrinked] = useState();
  const [scrollValue] = useScrollContext();

  useEffect(() => {
    setHeaderIsShrinked(scrollValue > 100);
  }, [scrollValue, headerIsShrinked]);

  return (
    <div
      data-hamBurgerIsOpen={hamBurgerIsOpen}
      className={`wrapper header-container ${headerIsShrinked ? "shrink" : ""}`}
    >
      <div className="max_width header-wrapper">
        <span className="logo">
          <NavLink to="/">
            <JK />
          </NavLink>
        </span>
        <div className="links_container dsk_links">
          <div className="links" data-active={hamBurgerIsOpen}>
            {links.map(({ text, ...props }, index) => (
              <NavLink
                {...props}
                exact
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {text}
              </NavLink>
            ))}
            <Link
              to={{ pathname: "/", hash: "#projects" }}
              style={{ transitionDelay: `${links.length * 0.1}s` }}
            >
              Projects
            </Link>
            <Link
              to={{ pathname: "/", hash: "#contacts" }}
              style={{ transitionDelay: `${(links.length + 1) * 0.1}s` }}
            >
              Contact Me
            </Link>
            <NavLink
              to={{ pathname: "/shots" }}
              style={{ transitionDelay: `${(links.length + 2) * 0.1}s` }}
            >
              More Designs
            </NavLink>
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
