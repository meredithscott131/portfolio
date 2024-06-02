import React from "react";
import styles from "./Code.module.css";
import { getImageUrl } from "../../../utils";
import Carousel from 'react-bootstrap/Carousel';

export const Code = () => {
  return (<section className={styles.container}>
    <h2 className={styles.title}>
      Coding Projects
    </h2>
    <div className={styles.content}>
      <ul className={styles.codeItems}>
        <li className={styles.codeItem}>
          <div className={styles.codeImage}>
          <Carousel interval={null} controls={true}>
            <Carousel.Item>
              <video className="d-block w-100" controls autoPlay muted loop>
                  <source src="assets\code\production_plan_demo.mp4"
                  type="video/mp4"
                  />
              </video>
            </Carousel.Item>
          </Carousel>
          </div>
          <div className={styles.codeItemText}>
            <h3 className={styles.projectTitle}>Animation Production Plan Generator</h3>
            <p className={styles.subtitle}>React, Typescript</p>
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
            <h3 className={styles.projectTitle}>Quiz Database "Quizzy"</h3>
            <p className={styles.subtitle}>Python, MySQL, Docker, DataGrip, Appsmith</p>
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
            <h3 className={styles.projectTitle}>This Website!</h3>
            <p className={styles.subtitle}>React, Javascript</p>
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
