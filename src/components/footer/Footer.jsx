import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <ul className={styles.socialList}>
          <li className={styles.social}>
            <a href="https://www.linkedin.com/in/meredithgscott/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Icons/linkedin_icon.png" className={styles.socialImage} alt="LinkedIn Icon"/>
            </a>
          </li>
          <li className={styles.social}>
            <a href="https://github.com/meredithscott131" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Icons/github_icon.png"className={styles.socialImage} alt="GitHub Icon" />
            </a>
          </li>
          <li className={styles.social}>
            <a href="mailto:meredithscott131@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Icons/email_icon.png" target="_blank" className={styles.socialImage} alt="Email Icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};