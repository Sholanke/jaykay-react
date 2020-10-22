import React from "react";
import { NavLink } from "react-router-dom";

export default function JKLink({ className, children, href, ...props }) {
  return (
    <NavLink {...props} to={href || "/"} className="special-link">
      {children}
    </NavLink>
  );
}
