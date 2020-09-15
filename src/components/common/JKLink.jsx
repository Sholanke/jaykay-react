import React from "react";
import { NavLink } from "react-router-dom";

export default function JKLink({ className, children, to, ...props }) {
  return (
    <NavLink {...props} to={to || "/"} className="special-link">
      {children}
    </NavLink>
  );
}
