import React, { useState } from "react";
import styles from "./Navbar.module.css";

import "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img src="assets/Logo_White.png" width={150} height={50} alt="Logo" />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/code">Code</NavLink>
          </li>
          <li>
            <NavLink to="/animation">Animation</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
