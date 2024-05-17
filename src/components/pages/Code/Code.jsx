import React from "react";
import styles from "./Code.module.css";
import { getImageUrl } from "../../../utils";

export const Code = () => {
  return (<section className={styles.container}>
    <h2 className={styles.title}>
      Coding Projects
    </h2>
    <div className={styles.content}>
      <ul className={styles.codeItems}>
        <li className={styles.codeItem}>
          <img src="assets/tempCodePreview.png" alt="loading image" className={styles.codeImage}/>
          <div className={styles.codeItemText}>
            <h3 className={styles.subtitle}>Animation Production Plan Generator</h3>
            <p className={styles.bodyText}>
              <span className={styles.react}>React</span>
              <span>, </span>
              <span className={styles.typescript}>Typescript</span>
            </p>
            <p className={styles.bodyText}>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
            <a href="https://github.com/Abby-Dennin/Animation-Production-Plan-Generator" target="_blank" className={styles.githubLink}>Github</a>
          </div>
        </li>
        <li className={styles.codeItem}>
          <img src="assets/tempCodePreview.png" alt="loading image" className={styles.codeImage}/>
          <div className={styles.codeItemText}>
            <h3 className={styles.subtitle}>Battleship</h3>
            <p className={styles.bodyText}>
              <span className={styles.java}>Java</span>
            </p>
            <p className={styles.bodyText}>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
            <a href="https://github.com/meredithscott131/battleship" target="_blank" className={styles.githubLink}>Github</a>
          </div>
        </li>
        <li className={styles.codeItem}>
          <img src="assets/tempCodePreview.png" alt="loading image" className={styles.codeImage}/>
          <div className={styles.codeItemText}>
            <h3 className={styles.subtitle}>This Website!</h3>
            <p className={styles.bodyText}>
              <span className={styles.react}>React</span>
              <span>, </span>
              <span className={styles.javascript}>Javascript</span>
            </p>
            <p className={styles.bodyText}>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
            
            <a href="https://github.com/meredithscott131/Portfolio-Website" target="_blank" className={styles.githubLink}>Github</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};
