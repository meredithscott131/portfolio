import React from "react";
import styles from "./Code.module.css";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {CodeProjects as getProjects} from "./CodeProjects.jsx";

export const Code = () => {

  // Importing code projects data
  const projects = getProjects();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Coding Projects</h2>
        <div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Card key={index} className={`${styles.projectCard} border-0`}>
              <Carousel variant="dark" interval={null} controls={true}>
                {project.media.map((mediaItem, mediaIndex) => (
                  <Carousel.Item key={mediaIndex}>
                    {mediaItem.type === "image" ? (
                      <img
                        className="d-block w-100"
                        src={mediaItem.src}
                        alt={`Slide ${mediaIndex}`}
                      />
                    ) : (
                      <video className="d-block w-100" controls autoPlay muted loop>
                        <source src={mediaItem.src} type="video/mp4" />
                      </video>
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
                <ul className={styles.bodyul}>
                  {project.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className={styles.bodyli}>{bullet}</li>
                  ))}
                </ul>
                {project.contributors && (
                  <p className={styles.contributors}>Contributors: {project.contributors}</p>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  className={styles.githubLink}
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </Card.Body>
            </Card>
          ))}
        </div>
        </div>
              {/* AR */}
      <div className={styles.project}>
        <Carousel interval={null} controls={true} className={styles.carousel}>
            <Carousel.Item>
            <video className="d-block w-100" controls autoPlay loop muted>
                <source src="/assets/code/Gestures/OpenBook.mp4"
                type="video/mp4"
                />
              </video>
              <Carousel.Caption>
                <h3>Open Book Gesture</h3>
              </Carousel.Caption>  
            </Carousel.Item>
            <Carousel.Item>
            <video className="d-block w-100" controls autoPlay loop muted>
                <source src="/assets/code/Gestures/Slinky.mp4"
                type="video/mp4"
                />
              </video>
              <Carousel.Caption>
                <h3>Pull Gesture</h3>
              </Carousel.Caption>  
            </Carousel.Item>
            <Carousel.Item>
            <video className="d-block w-100" controls autoPlay loop muted>
                <source src="/assets/code/Gestures/FingerGun.mp4"
                type="video/mp4"
                />
              </video>
              <Carousel.Caption>
                <h3>Finger Gun Gesture</h3>
              </Carousel.Caption>  
            </Carousel.Item>
            <Carousel.Item>
            <video className="d-block w-100" controls autoPlay loop muted
              poster="/assets/code/Gestures/demo_thumb.png">
                <source src="/assets/code/Gestures/RotationDemo.mp4"
                type="video/mp4"
                />
              </video>
              <Carousel.Caption>
                <h3>Movement Demo</h3>
              </Carousel.Caption>  
            </Carousel.Item> 
          </Carousel>
        <div className={styles.textContainer}>
          <h3 className={styles.projectTitle}>
            AR Gesture Prototype Series [Ongoing]
          </h3>
          <p className={styles.subtitle}>C#, Unity, MRTK, Microsoft HoloLens 2</p>
          <p className={styles.logLine}>Under the Northeastern <a target="_blank" className={styles.link} href="https://realitydesign.sites.northeastern.edu/">Reality Design Studio</a> research group, this project aims to investigate the potential of single-handed gesture controls to enhance mobility and immersion in augmented reality spaces.  As the student investigator, my responsibilities include:</p>
          <ul>
            <li>Developing high-fidelity augmented reality prototypes in Unity through extensive design research and rapid prototype ideation.</li>
            <li>Leveraging the Mixed Reality Toolkit (MRTK) Unity package to program and deploy prototypes to the Microsoft HoloLens 2.</li>
            <li>Conducting usability testing and user interviews, applying gesture elicitation frameworks to identify and resolve prototype issues.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};