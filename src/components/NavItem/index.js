import React from "react";
import "./style.css";

function NavItem({ to, title, active }) {
  return (
    <li className={`nav-item ${active ? "active" : ""}`}>
      <a href={to}>{title}</a>
    </li>
  );
}

export default NavItem;
