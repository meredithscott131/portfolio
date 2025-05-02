import React from "react";
import styles from "./About.module.css";
import "animate.css/animate.compat.css"

export const About = () => {
  return <section className={styles.container}>
        <li className={styles.textContainer}>
            <h2 className={styles.title}>Hi, I'm Meredith!</h2>
          <p className={styles.description}>
            I’m a fourth-year computer science and animation student at Northeastern University, interested in exploring the intersections of technology and art. Since a young age, I’ve always had an equal curiosity for STEM and dedication to my creative hobbies like drawing and writing. This has led me to pursue a career in developing tools and technical solutions for entertainment and its surrounding industries. I love solving problems, being challenged, and most importantly, creating. When I'm not working, you'll find me exploring new hiking trails, expanding my graphic novel collection, and diving into puzzle games.
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