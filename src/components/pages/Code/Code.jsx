import React from "react";
import styles from "./Code.module.css";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export const Code = () => {
  const krita = {
    title: "Image to Palette Krita Plugin",
    subtitle: "Python, PyQt, Krita API",
    github: "https://github.com/meredithscott131/ImageToPalette",
    media: [
      { type: "image", src: "/assets/code/Image-To-Palette/interface.png" },
      { type: "video", src: "/assets/code/Image-To-Palette/dragndrop_demo.mp4" },
      { type: "video", src: "/assets/code/Image-To-Palette/saving_demo.mp4" }
    ],
    bullets: [
      "Developed a Krita docker plugin for generating color palettes from images, enhancing digital artists' workflows.",
      "Implemented functionality to load, regenerate, save, and display color palettes, including drag-and-drop image support.",
      "Managed JSON file conversion to support color palette saving and recent palette history across Krita sessions.",
      "Utilized PyQt5 and Krita’s API for a dynamic and intuitive user interface."
    ],
    contributors: null
  };
  const productionPlan = {
    title: "Animation Production Plan Generator",
    subtitle: "TypeScript, JavaScript, React, Generative AI",
    github: "https://github.com/Abby-Dennin/Animation-Production-Plan-Generator",
    media: [
      { type: "image", src: "/assets/code/Production-Plan/top_view.png" },
      { type: "image", src: "/assets/code/Production-Plan/bottom_view.png" },
      { type: "video", src: "/assets/code/Production-Plan/full_demo.mp4" }
    ],
    bullets: [
      "Collaborated with a team to develop a web application that generates tailored production plans for animation students and creatives using the OpenAI API.",
      "Integrated features like CSV export, project history tracking, and custom spreadsheet styling.",
      "Interviewed capstone students to understand frustrations and improve the prototype."
    ],
    contributors: "Contributors: Abby Dennin, Natasha Mishra Daas, Sophia Allen"
  };
  const spirograph = {
    title: "Spirograph Animation",
    subtitle: "C++, OpenGL, MVC Pattern",
    github: "https://github.com/meredithscott131/Spirograph",
    media: [
      { type: "video", src: "/assets/code/Spirograph/Spirograph.mp4" }
    ],
    bullets: [
      "Developed an interactive spirograph animation with OpenGL that dynamically visualizes patterns using custom 2D mesh generation.",
      "Enabled real-time keyboard input to adjust circle radius and toggle curve visualization."
    ],
    contributors: null
  };
  const website = {
    title: "This Website!",
    subtitle: "JavaScript, React, CSS, HTML, Adobe Suite",
    github: "https://github.com/meredithscott131/Portfolio",
    media: [
      { type: "image", src: "/assets/code/Website/home_page.png" },
      { type: "image", src: "/assets/code/Website/code_page.png" },
      { type: "image", src: "/assets/code/Website/animation_page.png" },
      { type: "image", src: "/assets/code/Website/about_page.png" }
    ],
    bullets: [
      "Built a portfolio website showcasing programming and animation projects using JavaScript and Vite.",
      "Utilized React, Bootstrap, and MUI for dynamic animations and interactions.",
      "Deployed via GitHub Pages using GitHub Actions Workflows.",
      "Created and edited all media for the site using Adobe Suite."
    ],
    contributors: null
  };
  const quizzy = {
    title: "\"Quizzy\" Database",
    subtitle: "Python, MySQL, REST API, Docker, Appsmith",
    github: "https://github.com/nicolesorial/quizzy",
    media: [
      { type: "image", src: "/assets/code/Quizzy/diagram.png" },
      { type: "video", src: "/assets/code/Quizzy/full_demo.mp4" }
    ],
    bullets: [
      "Conceptualized and implemented a database for a quiz platform with a team.",
      "Supported user profiles with functionality to create, edit, and delete quizzes.",
      "Managed API implementation to optimize quiz statistics retrieval and user management.",
      "Adapted backend to a local Appsmith server with sample data."
    ],
    contributors: "Contributors: Nicole Sorial, Jenna Sigman"
  };
  const bulletJournal = {
    title: "Bullet Journal",
    subtitle: "Java, JavaFX, MVC Pattern",
    github: "https://github.com/meredithscott131/bullet-journal",
    media: [
      { type: "image", src: "/assets/code/Bullet-Journal/main_view.png" },
      { type: "image", src: "/assets/code/Bullet-Journal/start_screen.png" }
    ],
    bullets: [
      "Collaborated to create a bullet journal app supporting event/task management, ordering, file saving, and theme customization.",
      "Directed .bujo file saving using JSON conversion.",
      "Structured project with model-view-controller (MVC) pattern.",
      "Implemented JavaFX graphics using Scene Builder."
    ],
    contributors: "Contributors: Aspen Tabar, Zeynep Lal Celikbilek"
  };

  const projects = [krita, productionPlan, spirograph, website];
  
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Coding Projects</h2>
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
          <p className={styles.logLine}>Under the Northeastern <a target="_blank" className={styles.link} href="http://www.realitydesign.studio/">Reality Design Studio</a> research group, this project aims to investigate the potential of single-handed gesture controls to enhance mobility and immersion in augmented reality spaces.  As the student investigator, my responsibilities include:</p>
          <ul>
            <li>Developing high-fidelity augmented reality prototypes in Unity through extensive design research and rapid prototype ideation.</li>
            <li>Leveraging the Mixed Reality Toolkit (MRTK) Unity package to program and deploy prototypes to the Microsoft HoloLens 2.</li>
            <li>Conducting usability testing and user interviews, applying gesture elicitation frameworks to identify and resolve prototype issues.</li>
          </ul>
        </div>
      </div>
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
                  <p className={styles.contributors}>{project.contributors}</p>
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
    </section>
  );
};