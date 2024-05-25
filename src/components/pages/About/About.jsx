import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <ul className={styles.contentItems}>
        <li className={styles.text}>
          <h2 className={styles.title}>Hi, I'm Meredith!</h2>
          <p className={styles.description}>
          I’m a third-year computer science and media arts student at Northeastern University, passionate about discovering technology and art’s intersections. I’m currently working as an AJC Merit Research Scholar Co-op in the Lages Laboratory at Northeastern University, exploring how mixed reality can fit into everyday use and create new ways to experience entertainment. In my education I’ve taken classes across computer science and animation curriculums, learning both animation and software development pipelines. 
          </p>
          <h3 className={styles.subtitle}>Contact</h3>
          <ul className={styles.socialsList}>
            <li className={styles.social}>
              <img src="../assets/linkedinIcon.png" className={styles.socialImage} alt="LinkedIn"></img>
              <a href="https://www.linkedin.com/in/meredithgscott/" className={styles.socialText} target="_blank">www.linkedin.com/in/meredithgscott/</a>
            </li>
            <li className={styles.social}>
              <img src="../assets/githubIcon.png" className={styles.socialImage} alt="gitHub"></img>
              <a href="https://github.com/meredithscott131" className={styles.socialText} target="_blank">github.com/meredithscott131</a>
            </li>
            <li className={styles.social}>
              <img src="../assets/emailIcon.png" className={styles.socialImage} alt="Email"></img>
              <a href="mailto:meredithscott131@gmail.com" className={styles.socialText} target="_blank">meredithscott131@gmail.com</a>
            </li>
            <li className={styles.resume}>
              <a href="assets\Resume.pdf" className={styles.resume} target="_blank">Resume</a>
            </li>
          </ul>
        </li>
        <li className={styles.pfp}>
        <img src="assets\about_picture.png" alt="profile image"></img>
        </li>
      </ul>
    </div>
  </section>
};
