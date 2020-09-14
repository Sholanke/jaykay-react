import React from "react";

export default function JKLink({ className, children, ...props }) {
  return (
    <a {...props} className="special-link">
      {children}
    </a>
  );
}
