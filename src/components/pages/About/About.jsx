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
            I’m a third-year computer science and animation student at Northeastern University, passionate about exploring the intersections of technology and art. I’m currently working as an AJC Merit Research Scholar Co-op in the Lages Laboratory at Northeastern University, programming augmented reality prototypes to better understand how mixed reality can be integrated into everyday life and enhance entertainment experiences. My professional goal is to develop innovative solutions and tools that improve the technology that touches our lives. In my free time, I enjoy exploring the scenery of my hometown, New England and creating stories through my personal art.  
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
              <a href="assets\Resume.pdf" className={styles.resume} target="_blank">Resume</a>
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
