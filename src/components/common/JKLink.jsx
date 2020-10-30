import React from "react";
import { NavLink } from "react-router-dom";

export default function JKLink({ className, children, to, href, ...props }) {
  return href ? (
    <a {...props} href={href || "/"} className="special-link">
      <span className="tag"></span>
      {children}
    </a>
  ) : (
    <NavLink {...props} to={to || "/"} className="special-link">
      <span className="tag"></span>
      {children}
    </NavLink>
  );
}
