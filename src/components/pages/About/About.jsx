import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import styles from "./About.module.css";

const experiences = [
  {
    id: "wdi",
    role: "Visual Effects Design Intern",
    company: "Walt Disney Imagineering",
    period: "Jun. 2026 – Present",
    description:
      "Building and debugging production tools for Adobe After Effects, Maya, Unreal, Nuke, and Houdini supporting VFX pipelines across Disney theme parks and attractions.",
  },
  {
    id: "uiux",
    role: "Technical Director Intern",
    company: "Paramount Animation",
    period: "Jun. 2025 – Aug. 2025",
    description:
      "Developed Python and Qt tools that streamlined artist workflows and automated file management on active film productions. Worked directly with TDs and artists in agile sprints to deploy, debug, and document pipeline tooling.",
  },
  {
    id: "pipeline",
    role: "Augmented Reality UX Research Co-op",
    company: "Reality Design Studio",
    period: "Jul. 2024 – Apr. 2025",
    description:
      "Prototyped augmented reality interfaces in Unity with the HoloLens 2 and MRTK, exploring 3D UI design and gesture recognition. Ran usability studies using gesture elicitation frameworks to surface and resolve UX issues.",
  },
];

const skills = [
  {
    id: "dev",
    label: "Programming",
    items: ["Python", "PyQt", "C++", "C#", "TypeScript", "HTML + CSS", "React", "Git", "CI/CD"],
  },
  {
    id: "design",
    label: "Design",
    items: ["Figma", "Design Research", "Interviewing", "Storyboarding", "Sketching", "Wireframing", "Rapid Prototyping"],
  },
  {
    id: "workflow",
    label: "Animation & VFX",
    items: ["Maya", "Houdini", "Unity", "ZBrush", "XGen", "Marvelous Designer", "Adobe Suite"],
  },
];

export const About = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <main className={styles.page}>
      {/* ── SECTION 1: Bio + Portrait ── */}
      <section className={styles.bioSection}>
        <div className={styles.bioText}>
          <p className={styles.title}>Hi! I’m Meredith, a pipeline tool developer and design technologist, passionate about enhancing creative workflows that push the boundaries of how we tell and experience stories.</p>
          <p className={styles.description}>
            Driven by an equal love for engineering and art, I build production software with a focus on user experience and artistic empathy. Currently, I'm doing that at <strong>Walt Disney Imagineering</strong>, developing tools for immersive experiences.
          </p>
          <p className={styles.description}>
            Outside of work, you can find me searching for the perfect matcha spot, expanding my graphic novel collection, or doodling in my sketchbook.
          </p>
        </div>

        <div className={styles.profileImage}>
          <img src="/assets/about/portrait.png" alt="Meredith Scott" />
        </div>
      </section>

      {/* ── SECTION 2: Experience Accordion ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.accordion}>
          {experiences.map((exp) => {
            const isOpen = openId === exp.id;
            return (
              <div
                key={exp.id}
                className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
              >
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggle(exp.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.accordionCompanyName}>{exp.company}</span>
                  <span className={styles.accordionChevron}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`${styles.accordionBody} ${isOpen ? styles.accordionBodyOpen : ""}`}
                >
                  <div className={styles.accordionExpandedMeta}>
                    <span className={styles.accordionRole}>{exp.role}</span>
                    <span className={styles.accordionPeriod}>{exp.period}</span>
                  </div>
                  <p className={styles.accordionDescription}>
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* ── Resume Link ── */}
        <a
          href="/assets/about/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
        >
          <span className={styles.resumeText}>Resume</span>
          <FiExternalLink className={styles.resumeIcon} />
        </a>
      </section>

      {/* ── SECTION 3: Skills (full-bleed) ── */}
      <section className={styles.skillsSection}>
        <h2 className={styles.skillsSectionTitle}>My happy place is at the intersection of disciplines</h2>
        <div className={styles.skillsGrid}>
          {skills.map((col) => (
            <div key={col.id} className={styles.skillCard}>
              <h3 className={styles.skillCardTitle}>{col.label}</h3>
              <ul className={styles.skillList}>
                {col.items.map((item) => (
                  <li key={item} className={styles.skillItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};