import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

function NavItem({ to, title }) {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(pathname === to) {
      setActive(true);
    }
  }, [pathname, to]);

  return (
    <li className={`nav-item ${active ? "active" : ""}`}>
      <NavLink
        exact
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default NavItem;
