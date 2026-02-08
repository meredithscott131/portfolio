import React, { useState, useRef } from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";
import "animate.css/animate.compat.css";
import ExpandedView from "./ExpandedView.jsx";
import { AnimationProjects as getProjects } from "./AnimationProjects.jsx";

// Main Animation component
export const Animation = () => {
  const [expandedthumbnail, setExpandedthumbnail] = useState(null);
  const videoRefs = useRef([]);

  // Importing animation projects data
  const projects = getProjects();
  
  const allThumbnails = projects.flatMap(project => project.content);
  
  // Handles clicks on thumbnails to open the expanded view
  const handlethumbnailClick = (index) => {
    if (expandedthumbnail !== null) {
      setExpandedthumbnail(null);
      const refIndex = expandedthumbnail;
      if (videoRefs.current[refIndex]) {
        videoRefs.current[refIndex].pause();
        videoRefs.current[refIndex].currentTime = 0;
        videoRefs.current[refIndex].load();
      }
    } else {
      setExpandedthumbnail(index);
    }
  };  
  
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>3D Work</h1>

      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className={styles.projectSection}>
          {/* Final Project */}
          <div className={styles.project}>
            <div className="ratio ratio-16x9">
              <video
                controls
                loop
                src={project.hero.src}
                poster={project.hero.poster}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              {project.description.subtitle && (
                <p className={styles.subtitle}>{project.description.subtitle}</p>
              )}
              <p className={styles.logLine}>{project.description.logLine}</p>
              <ul>
                {project.description.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              {project.contributors && (
                <p className={styles.contributors}>Contributors: {project.contributors}</p>
              )}
            </div>
          </div>

          {/* Project Thumbnails */}
          <div className={styles.grid}>
            {project.content.map((thumbnail, index) => {
              const globalIndex = projects.slice(0, projectIndex)
                                          .reduce((sum, p) => sum + p.content.length, 0) + index;
              return (
                <div
                  key={globalIndex}
                  className={`${styles.thumbnail} ${expandedthumbnail === globalIndex ? styles.expandedPlaceholder : ''}`}
                  onClick={() => handlethumbnailClick(globalIndex)}
                >
                  <div className={styles.thumbnailMedia}>
                    {thumbnail.src.endsWith('.mp4') ? (
                      <video
                        className="d-block w-100"
                        src={`/assets/animation/${thumbnail.src}`}
                        controls={false}
                        loop
                        poster={thumbnail.poster}
                        ref={(el) => videoRefs.current[globalIndex] = el}
                        alt={`thumbnail ${globalIndex + 1}`}
                      />
                    ) : (
                      <img
                        className="d-block w-100"
                        src={`/assets/animation/${thumbnail.src}`}
                        alt={`thumbnail ${globalIndex + 1}`}
                      />
                    )}
                    <div className={styles.thumbnailTitle}>
                      {thumbnail.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Thumbnail Expanded View */}
      {expandedthumbnail !== null && (
        <ExpandedView
          thumbnail={allThumbnails[expandedthumbnail]}
          title={allThumbnails[expandedthumbnail].title}
          onClose={() => setExpandedthumbnail(null)}
        />
      )}
    </section>
  );
}