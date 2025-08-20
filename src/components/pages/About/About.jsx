import React from "react";
import styles from "./About.module.css";
import "animate.css/animate.compat.css"

export const About = () => {
  return <section className={styles.container}>
        <li className={styles.textContainer}>
            <h2 className={styles.title}>Hi, I'm Meredith!</h2>
          <p className={styles.description}>
            I’m a fourth-year computer science and animation student at Northeastern University, interested in exploring the intersections of technology and art. Since a young age, I’ve always had an equal curiosity for STEM and dedication to my creative hobbies like drawing, a combination that continues to shape my work today. With experience spanning pipeline technical direction, UI/UX research for extended reality, and software development, I’m interested in solving technical problems that enhance creative workflows and push the boundaries of visual storytelling. I thrive on solving challenges, exploring new ideas, and building meaningful experiences. When I'm not coding, you'll find me discovering local cafes, expanding my graphic novel collection, and figuring out puzzle games.
          </p>
          <p className={styles.description}>
            I'm currently seeking full-time positions starting May 2026.
          </p>
          <h3 className={styles.contactTitle}>Contact</h3>
          <ul className={styles.socialsList}>
            <li className={styles.social}>
              <img src="/assets/Icons/linkedin_icon.png" className={styles.socialImage} alt="LinkedIn"></img>
              <a href="https://www.linkedin.com/in/meredithgscott/" className={styles.socialText} target="_blank">www.linkedin.com/in/meredithgscott/</a>
            </li>
            <li className={styles.social}>
              <img src="/assets/Icons/github_icon.png" className={styles.socialImage} alt="gitHub"></img>
              <a href="https://github.com/meredithscott131" className={styles.socialText} target="_blank">github.com/meredithscott131</a>
            </li>
            <li className={styles.social}>
              <img src="/assets/Icons/email_icon.png" className={styles.socialImage} alt="Email"></img>
              <a href="mailto:meredithscott131@gmail.com" className={styles.socialText} target="_blank">meredithscott131@gmail.com</a>
            </li>
            <li className={styles.resume}>
              <a href="/assets/about/Resume.pdf" className={styles.resume} target="_blank">Resume</a>
            </li>
          </ul>
        </li>
        <li className={styles.profileImage}>
          <img src="/assets/about/portrait.png" alt="profile image"></img>
        </li>
  </section>
};