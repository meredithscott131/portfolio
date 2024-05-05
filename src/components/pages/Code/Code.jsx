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
            <h3>Animation Production Plan Generator</h3>
            <p>
              <span className={styles.react}>React</span>
              <span>, </span>
              <span className={styles.javascript}>Javascript</span>
            </p>
            <p>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
            <a href="https://github.com/Abby-Dennin/Animation-Production-Plan-Generator" className={styles.githubLink}>Github</a>
          </div>
        </li>
        <li className={styles.codeItem}>
          <img src="assets/tempCodePreview.png" alt="loading image" className={styles.codeImage}/>
          <div className={styles.codeItemText}>
            <h3>Battleship</h3>
            <p>
              <span className={styles.java}>Java</span>
            </p>
            <p>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
            <a href="https://github.com/meredithscott131/battleship" className={styles.githubLink}>Github</a>
          </div>
        </li>
        <li className={styles.codeItem}>
          <img src="assets/tempCodePreview.png" alt="loading image" className={styles.codeImage}/>
          <div className={styles.codeItemText}>
            <h3>This Website!</h3>
            <p>
              <span className={styles.react}>React</span>
              <span>, </span>
              <span className={styles.javascript}>Javascript</span>
            </p>
            <p>Cras sit amet tortor eu arcu gravida porta. Fusce et elementum nulla, vel congue ante. Etiam pulvinar enim a feugiat maximus. Donec molestie augue est, quis lacinia tellus rutrum et. Proin luctus convallis tellus non euismod. Aliquam faucibus tempus ligula, eu facilisis risus venenatis sed.</p>
            <a href="https://github.com/meredithscott131/Portfolio-Website" className={styles.githubLink}>Github</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};
