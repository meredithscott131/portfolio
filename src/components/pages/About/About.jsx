import React from "react";
import styles from "./About.module.css";
import "animate.css/animate.compat.css";

export const About = () => {
  return (
    <section className={styles.container}>
      {/* TEXT COLUMN */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hi, I'm Meredith!</h1>

        <p className={styles.description}>
          I’m a fourth-year computer science and animation student at Northeastern
          University, interested in exploring the intersections of technology and
          art. Since a young age, I’ve always had an equal curiosity for STEM and
          dedication to my creative hobbies like drawing, a combination that
          continues to shape my work today. With experience spanning animation pipeline
          technical direction, UI/UX research for extended reality, and software
          development, I’m interested in solving technical problems that enhance
          creative workflows and push the boundaries of visual storytelling.
          When I'm not coding, you'll find me discovering local cafes, expanding
          my graphic novel collection, and figuring out puzzle games.
        </p>

        <p className={styles.description}>
          I'm currently seeking full-time positions starting May 2026.
        </p>

        <h2 className={styles.contactTitle}>Contact</h2>

        <ul className={styles.socialsList}>
          <li className={styles.social}>
            <img
              src="/assets/Icons/linkedin_icon.png"
              className={styles.socialImage}
              alt="LinkedIn"
            />
            <a
              href="https://www.linkedin.com/in/meredithgscott/"
              className={styles.socialText}
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/meredithgscott/
            </a>
          </li>

          <li className={styles.social}>
            <img
              src="/assets/Icons/github_icon.png"
              className={styles.socialImage}
              alt="GitHub"
            />
            <a
              href="https://github.com/meredithscott131"
              className={styles.socialText}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/meredithscott131
            </a>
          </li>

          <li className={styles.social}>
            <img
              src="/assets/Icons/email_icon.png"
              className={styles.socialImage}
              alt="Email"
            />
            <a
              href="mailto:meredithscott131@gmail.com"
              className={styles.socialText}
            >
              meredithscott131@gmail.com
            </a>
          </li>

          {/* RESUME */}
          <li className={styles.resumeItem}>
            <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              <span className={styles.resumeText}>Resume</span>
            </a>
          </li>
        </ul>
      </div>

      {/* IMAGE COLUMN */}
      <div className={styles.profileImage}>
        <img src="/assets/about/portrait.png" alt="Profile" />
      </div>
    </section>
  );
};
