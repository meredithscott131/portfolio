import React from "react";
import styles from "./About.module.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

export const About = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <ul className={styles.contentItems}>
        <li className={styles.text}>
            <h2 className={styles.title}>Hi, I'm Meredith!</h2>
          <p className={styles.description}>
          I’m a third-year computer science and animation student at Northeastern University, passionate about exploring the intersections of technology and art. Whether it was [] or [], I’ve always loved to create since a young age. This love has transformed into curiosity for the science behind []. Now, my interests lie in developing innovative software that transforms how we create and experience art. Currently, I’m working as an AJC Merit Research Scholar Co-op at the Northeastern Reality Design Studio, where I program augmented reality prototypes. My work aims to uncover how mixed reality can integrate into everyday life and elevate entertainment experiences. In my free time, I enjoy exploring the scenery of my hometown New England, attending Broadway musicals with friends, and giving my needy cat too much attention.
          </p>
          <h3 className={styles.subtitle}>Contact</h3>
          <ul className={styles.socialsList}>
            <li className={styles.social}>
              <img src="assets\Icons\linkedinIcon.png" className={styles.socialImage} alt="LinkedIn"></img>
              <a href="https://www.linkedin.com/in/meredithgscott/" className={styles.socialText} target="_blank">www.linkedin.com/in/meredithgscott/</a>
            </li>
            <li className={styles.social}>
              <img src="assets\Icons\githubIcon.png" className={styles.socialImage} alt="gitHub"></img>
              <a href="https://github.com/meredithscott131" className={styles.socialText} target="_blank">github.com/meredithscott131</a>
            </li>
            <li className={styles.social}>
              <img src="assets\Icons\emailIcon.png" className={styles.socialImage} alt="Email"></img>
              <a href="mailto:meredithscott131@gmail.com" className={styles.socialText} target="_blank">meredithscott131@gmail.com</a>
            </li>
            <li className={styles.resume}>
              <a href="assets\about\Resume.pdf" className={styles.resume} target="_blank">Resume</a>
            </li>
          </ul>
        </li>
        <li className={styles.pfp}>
        <img src="assets\about\about_picture.png" alt="profile image"></img>
        </li>
      </ul>
    </div>
  </section>
};
