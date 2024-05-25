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
          <video
          controls
          className={styles.codeImage}
          src="assets\code\production_plan_demo.mp4"/>
          <div className={styles.codeItemText}>
            <h3 className={styles.subtitle}>Animation Production Plan Generator</h3>
            <p className={styles.bodyText}>
              <span className={styles.react}>React</span>
              <span>, </span>
              <span className={styles.typescript}>Typescript</span>
            </p>
            <p className={styles.bodyText}>
              <ul className={styles.bodyul}>
                <li className={styles.bodyli}>
                  Collaborated with a team of peers to create a web application that automates production
                  plans with generative AI for animation students and creative hobbyists.
                </li>
                <li className={styles.bodyli}>
                  Directed the interface design, ensuring a seamless user experience and aesthetic appeal.
                </li>
                <li className={styles.bodyli}>
                  Interviewed target end users to understand current frustrations with tasks and find prototype errors.
                </li>
              </ul>
            </p>
            <a href="https://github.com/Abby-Dennin/Animation-Production-Plan-Generator"
            target="_blank" className={styles.githubLink}>Github</a>
          </div>
        </li>
        <li className={styles.codeItem}>
        <video
          controls
          className={styles.codeImage}
          src="assets\code\quizzy_demo.mp4"/>
          <div className={styles.codeItemText}>
            <h3 className={styles.subtitle}>Quiz Database "Quizzy"</h3>
            <p className={styles.bodyText}>
              <span className={styles.typescript}>Python</span>
              <span>, </span>
              <span className={styles.cpp}>MySQL</span>
              <span>, </span>
              <span className={styles.react}>Docker</span>
              <span>, </span>
              <span className={styles.cpp}>DataGrip</span>
              <span>, </span>
              <span className={styles.java}>Appsmith</span>
            </p>
            <p className={styles.bodyText}>
              <ul className={styles.bodyul}>
                <li className={styles.bodyli}>
                  Conceptualized and generated a database for a proof-of-concept quiz taking platform with a team of peers.
                </li>
                <li className={styles.bodyli}>
                  Managed the REST API implementation of query commands in Python to optimize the retrieval of quiz statistics and management of user profiles.
                </li>
                <li className={styles.bodyli}>
                  Adapted the database to a front-end application by implementing UI screens in Appsmith with sample data.
                </li>
              </ul>
            </p>
            <a href="https://github.com/meredithscott131/quiz-database"
            target="_blank" className={styles.githubLink}>Github</a>
          </div>
        </li>
        <li className={styles.codeItem}>
          <img src="assets\code\website_preview.png" alt="loading image" className={styles.codeImage}/>
          <div className={styles.codeItemText}>
            <h3 className={styles.subtitle}>This Website!</h3>
            <p className={styles.bodyText}>
              <span className={styles.react}>React</span>
              <span>, </span>
              <span className={styles.javascript}>Javascript</span>
            </p>
            <p className={styles.bodyText}>
              <ul className={styles.bodyul}>
                <li className={styles.bodyli}>
                  Learned React and other web-development tools and languages to build a portfolio website showcasing my programming and animation projects.
                </li>
                <li className={styles.bodyli}>
                  Designed the interface with Figma, considering  the overall user experience and interaction.
                </li>
                <li className={styles.bodyli}>
                  Applied experience with the Adobe Suite to design graphics and produce media for the site.
                </li>
              </ul>
            </p>
            <a href="https://github.com/meredithscott131/Portfolio-Website"
            target="_blank" className={styles.githubLink}>Github</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};
