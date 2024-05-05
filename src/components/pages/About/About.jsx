import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";

export const About = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h2 className={styles.title}>Hi, I'm Meredith!</h2>
      <p className={styles.description}>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
      <h3>Contact</h3>
      <ul className={styles.socialsList}>
        <li className={styles.social}>
          <img src="../assets/linkedinIcon.png" className={styles.socialImage} alt="LinkedIn Icon"></img>
          <p className={styles.socialText}>www.linkedin.com/in/meredithgscott/</p>
        </li>
        <li className={styles.social}>
          <img src="../assets/githubIcon.png" className={styles.socialImage} alt="LinkedIn Icon"></img>
          <p className={styles.socialText}>github.com/meredithscott131</p>
        </li>
        <li className={styles.social}>
          <img src="../assets/emailIcon.png" className={styles.socialImage} alt="LinkedIn Icon"></img>
          <a href="mailto:meredithscott131@gmail.com" className={styles.contact}>meredithscott131@gmail.com</a>
        </li>
        <li className={styles.resume}>
          Resume
        </li>
      </ul>
    </div>
    <img src="../assets/tempCodePreview.png" className={styles.pfp} alt="profile image"></img>
  </section>
};
