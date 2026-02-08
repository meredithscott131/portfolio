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
  <div className={styles.brand}>
    <NavLink to="/" className={styles.brandLink}>
      Meredith Scott
    </NavLink>
  </div>

  {/* CENTER — Desktop Menu */}
  <div className={styles.menu}>
    <ul className={styles.menuItems}>
      <li className={styles.menuItem}><NavLink to="/reel">Reel</NavLink></li>
      <li className={styles.menuItem}><NavLink to="/projects">Projects</NavLink></li>
      <li className={styles.menuItem}><NavLink to="/3d-work">3D Work</NavLink></li>
      <li className={styles.menuItem}><NavLink to="/about">About</NavLink></li>
    </ul>
  </div>

  {/* RIGHT — Social + Hamburger */}
  <div className={styles.rightControls}>
    <ul className={styles.socialList}>
      <li>
        <a href="https://www.linkedin.com/in/meredithgscott/" target="_blank">
          <img src="/assets/Icons/linkedin_icon.png" className={styles.socialImage} />
        </a>
      </li>
      <li>
        <a href="https://github.com/meredithscott131" target="_blank">
          <img src="/assets/Icons/github_icon.png" className={styles.socialImage} />
        </a>
      </li>
      <li>
        <a href="mailto:meredithscott131@gmail.com">
          <img src="/assets/Icons/email_icon.png" className={styles.socialImage} />
        </a>
      </li>
    </ul>

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
    <li><NavLink to="/reel">Reel</NavLink></li>
    <li><NavLink to="/projects">Projects</NavLink></li>
    <li><NavLink to="/3d-work">3D Work</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>

    {/* Socials move INTO menu on mobile */}
    <li className={styles.mobileSocials}>
      <ul className={styles.socialList}>
        <li>
          <a href="https://www.linkedin.com/in/meredithgscott/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Icons/linkedin_icon.png" className={styles.socialImage} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/meredithscott131" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Icons/github_icon.png" className={styles.socialImage} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="mailto:meredithscott131@gmail.com">
            <img src="/assets/Icons/email_icon.png" className={styles.socialImage} alt="Email" />
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
    </>
  );
};