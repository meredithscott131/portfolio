import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "assets/Icons/menuClose.png"
              : "assets/Icons/menuIcon.png"
          }
          alt="Menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.menuItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/code">Code</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/animation">3D Animation</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/art">Art</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};