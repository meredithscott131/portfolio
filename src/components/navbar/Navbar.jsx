import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbarPlaceholder}></div>
      <nav className={styles.navbar}>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? "/assets/Icons/menu_close_icon.png"
                : "/assets/Icons/menu_icon.png"
            }
            alt="Menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <li className={styles.menuItem}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to="/reel">Reel</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to="/code">Code</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to="/art">3D Art</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to="/about-contact">About / Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};