import React from "react";
import styles from "./Code.module.css";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {CodeProjects as getProjects} from "./CodeProjects.jsx";
import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

export const Code = () => {

  const [tab, setTab] = useState("All");

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };

  // Importing code projects data
  const projects = getProjects();

  const filteredProjects =
    tab === "All"
      ? projects
      : projects.filter(project => project.category === tab);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Coding Projects</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--color-peri)",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "var(--color-peri)",
            },
          }}
        >
          <Tab label="All" value="All" />
          <Tab label="Software Development" value="Software Development" />
          <Tab label="Pipeline Tools" value="Pipeline Tools" />
          <Tab label="Graphics Programming" value="Graphics Programming" />
        </Tabs>
      </Box>
        <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <Card key={`${tab}-${project.title}`} className={`${styles.projectCard} border-0`}>
              <Carousel variant="dark" interval={null} controls>
                {project.media.map((mediaItem, mediaIndex) => (
                  <Carousel.Item key={mediaIndex}>
                    {mediaItem.type === "image" ? (
                      <img
                        className="d-block w-100"
                        src={mediaItem.src}
                        alt={`Slide ${mediaIndex}`}
                      />
                    ) : (
                      <video
                        className="d-block w-100"
                        controls
                        autoPlay
                        muted
                        loop
                        poster={mediaItem.poster}
                      >
                        <source src={mediaItem.src} type="video/mp4" />
                      </video>
                    )}

                    {mediaItem.caption && (
                      <Carousel.Caption>
                        <h3>{mediaItem.caption}</h3>
                      </Carousel.Caption>
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <h2>{project.title}</h2>
                <p className={styles.subtitle}>{project.subtitle}</p>

                {(() => {
                  const logLine = project.logLine ?? project.description?.logLine;
                  return logLine ? (
                    <p className={styles.logLine}>{logLine}</p>
                  ) : null;
                })()}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <img
                      src="/assets/Icons/github_circle_icon.png"
                      alt="GitHub"
                      className={styles.githubIcon}
                    />
                    <span className={styles.linkText}>View Project</span>
                  </a>
                )}

                <ul className={styles.bodyul}>
                  {(project.bullets ?? project.description?.bullets)?.map(
                    (bullet, bulletIndex) => (
                      <li key={bulletIndex} className={styles.bodyli}>
                        {bullet}
                      </li>
                    )
                  )}
                </ul>

                {project.contributors && (
                  <p className={styles.contributors}>
                    Contributors: {project.contributors}
                  </p>
                )}
              </Card.Body>

            </Card>
          ))}
        </div>
        </div>
    </section>
  );
};
