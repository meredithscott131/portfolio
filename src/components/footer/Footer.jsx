import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.message}>Thanks for visiting! Let's stay in touch :)</h3>
      <ul className={styles.socialList}>
        <li className={styles.social}>
          <a href="https://www.linkedin.com/in/meredithgscott/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Icons/linkedin_icon.png" className={styles.socialImage} alt="LinkedIn Icon" />
          </a>
        </li>
        <li className={styles.social}>
          <a href="https://github.com/meredithscott131" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Icons/github_icon.png" className={styles.socialImage} alt="GitHub Icon" />
          </a>
        </li>
        <li className={styles.social}>
          <a href="mailto:meredithscott131@gmail.com" rel="noopener noreferrer">
            <img src="/assets/Icons/email_icon.png" className={styles.socialImage} alt="Email Icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};