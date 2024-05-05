import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";

export const About = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h2 className={styles.title}>Hi, I'm Meredith!</h2>
      <p className={styles.description}>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
      <ul className={styles.socialsList}>
        <li className={styles.social}>
          <p className={styles.socialText}>LinkedIn</p>
        </li>
        <li className={styles.social}>
          <p className={styles.socialText}>GitHub</p>
        </li>
        <li className={styles.social}>
          <a href="mailto:meredithscott131@gmail.com" className={styles.contact}>Contact Me</a>
        </li>
      </ul>
    </div>
    <img src="../assets/tempCodePreview.png" className={styles.pfp} alt="profile image"></img>
  </section>
};
