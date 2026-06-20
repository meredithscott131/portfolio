import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbarPlaceholder}></div>
      <nav className={styles.navbar}>
  {/* LEFT — Brand */}
  <div className={styles.brand}> Meredith Scott </div>

  {/* CENTER — Desktop Menu */}
  <div className={styles.menu}>
    <ul className={styles.menuItems}>
      <li className={styles.menuItem}><NavLink to="/">About</NavLink></li>
      <li className={styles.menuItem}><NavLink to="/projects">Projects</NavLink></li>
    </ul>
  </div>

  {/* RIGHT — Social + Hamburger */}
  <div className={styles.rightControls}>
    <img
      className={styles.menuBtn}
      src={menuOpen ? "/assets/Icons/menu_close_icon.png" : "/assets/Icons/menu_icon.png"}
      alt="Menu"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  </div>

  {/* MOBILE DROPDOWN */}
  <ul
    className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
    onClick={() => setMenuOpen(false)}
  >
    <li><NavLink to="/">About</NavLink></li>
    <li><NavLink to="/projects">Projects</NavLink></li>
  </ul>
</nav>
    </>
  );
};