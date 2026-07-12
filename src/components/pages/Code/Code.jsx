import React from "react";
import { Link } from "react-router-dom";
import styles from "./Code.module.css";
import { CodeProjects as getProjects, getPreviewMedia } from "./CodeProjects.jsx";

export const Code = () => {

  // Importing code projects data
  const projects = getProjects();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {projects.map((project) => {
            const previewMedia = getPreviewMedia(project);

            return (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className={styles.previewCard}
              >
                <div className={styles.previewMediaWrapper}>
                  {previewMedia?.type === "image" ? (
                    <img
                      className={styles.previewMedia}
                      src={previewMedia.src}
                      alt={project.title}
                    />
                  ) : previewMedia?.type === "video" ? (
                    <video
                      className={styles.previewMedia}
                      src={previewMedia.src}
                      poster={previewMedia.poster}
                      muted
                      playsInline
                    />
                  ) : null}
                </div>

                <div className={styles.previewBody}>
                  <h3 className={styles.previewTitle}>{project.title}</h3>
                  {project.subtitle && (
                    <div className={styles.skillsList}>
                      {project.subtitle.split(",").map((skill) => (
                        <span key={skill.trim()} className={styles.skillTag}>
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.blurb && (
                    <p className={styles.previewBlurb}>{project.blurb}</p>
                  )}

                  <span className={styles.viewProjectLink}>
                    View Project
                    <span className={styles.viewProjectArrow}>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
