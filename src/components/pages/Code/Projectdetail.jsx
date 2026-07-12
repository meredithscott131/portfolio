import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CodeProjects as getProjects } from "./CodeProjects.jsx";
import { ProjectSection } from "./Projectsection.jsx";
import styles from "./Code.module.css";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const projects = getProjects();
  const project = projects.find((p) => p.slug === slug);

  // Fall back to the projects list if the slug doesn't match anything
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className={styles.container}>
      <Link to="/projects" className={styles.backLink}>
        <GoArrowLeft />
        <span>Back to Projects</span>
      </Link>

      <div className={styles.detailWrapper}>
        <header className={styles.detailHeader}>
          <h1 className={styles.detailTitle}>{project.title}</h1>

          <div className={styles.skillsList}>
            {project.subtitle.split(",").map((skill, i) => (
              <span key={i} className={styles.skillTag}>
                {skill.trim()}
              </span>
            ))}
          </div>

          {project.contributors && (
            <p className={styles.contributors}>
              Contributors: {project.contributors}
            </p>
          )}

          {project.github && (
            <div className={styles.githubLink}>
              <img
                src="/assets/Icons/github_circle_icon.png"
                alt="GitHub"
                className={styles.githubIcon}
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkText}
              >
                View on GitHub
              </a>
            </div>
          )}
        </header>

        <div className={styles.detailBody}>
          {project.sections.map((section, i) => (
            <ProjectSection key={i} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
};