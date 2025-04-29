import React, { useState, useRef } from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";
import "animate.css/animate.compat.css";
import ExpandedView from "./ExpandedView.jsx";

// Main Animation component
export const Animation = () => {
  const [expandedthumbnail, setExpandedthumbnail] = useState(null);
  const videoRefs = useRef([]);
  const basics = {
    name: "Talent Show",
    hero: {
      src: "/assets/animation/Basics/basics_final.mp4",
      poster: "/assets/animation/Basics/basics_final_thumb.png"
    },
    description: {
      subtitle: "Maya, Animation, Adobe Suite",
      logLine: "How high can a singer go before they reach their limit?",
      bullets: [
        "Created a short animation in Maya, showcasing knowledge on animation principles, staging, and simple storytelling.",
        "Modeled, textured, and designed an original character inspired by my own beloved debug duck.",
        "Utilized Maya’s blend shape feature to animate the character.",
        "Edited all content in Adobe Premiere Pro and After Effects.",
        "Rendered in Arnold."
      ]
    },
    content: [
      { src: 'Basics/concept_art.PNG', poster: null, title: 'Concept Art' },
      { src: 'Basics/turnaround.png', poster: null, title: 'Turnaround' },
      { src: 'Basics/animatic.mp4', poster: '/assets/animation/Basics/animatic_thumb.png', title: 'Animatic' },
      { src: 'Basics/blend_shapes_demo.mp4', poster: '/assets/animation/Basics/blend_shapes_demo_thumb.png', title: 'Blend Shapes Demo' }
    ],
    contributors: null
  }; 
  const anim1 = {
    name: "The Trespassers",
    hero: {
      src: "/assets/animation/Anim1/anim1_final.mp4",
      poster: "/assets/animation/Anim1/anim1_final_thumb.png"
    },
    description: {
      subtitle: "Maya, Substance Painter, Rigging, Animation",
      logLine: "After a boy sneaks into the astronomy exhibit after hours, he realizes he might not be alone.",
      bullets: [
        "Independently created a short film over the course of four months with the goal of conveying the relationship between a character and room.",
        "Modeled and lit all room objects in Maya and textured content in Substance Painter.",
        "Rigged character model using Advanced Skeleton.",
        "Composited scenes in Adobe After Effects.",
        "Rendered in Arnold."
      ]
    },
    content: [
      { src: 'Anim1/concept_art.png', poster: null, title: 'Concept Art' },
      { src: 'Anim1/room_fly_through.mp4', poster: '/assets/animation/Anim1/room_fly_through_thumb.png', title: 'Room Flythrough' },
      { src: 'Anim1/neil_turnaround.mp4', poster: '/assets/animation/Anim1/neil_turnaround_thumb.png', title: 'Turnaround' },
      { src: 'Anim1/neil_rig.png', poster: null, title: 'Character Rig' },
      { src: 'Anim1/progress_shot.mp4', poster: '/assets/animation/Anim1/progress_shot_thumb.png', title: 'Progress Shot' }
    ],
    contributors: null
  };
  const char = {
    name: "Animal Hybrid Sculpt",
    hero: {
      src: "/assets/animation/Character/CharAnim.mp4",
      poster: "/assets/animation/Character/Still.png"
    },
    description: {
      subtitle: "ZBrush, Maya, Substance Painter, Mixamo",
      logLine: "What if a beaver lived in the artic, and was also part... penguin?",
      bullets: [
        "Designed and sculpted in ZBrush, converting the model to low poly for Maya import and texturing.",
        "Rigged and animated via Mixamo, refining the animation in Maya.",
        "Configured sculpt in ZBrush for 3D printing.",
        "Rendered in Arnold."
      ]
    },
    content: [
      { src: 'Character/concept_art.png', poster: null, title: 'Concept Art' },
      { src: 'Character/Turnaround.mp4', poster: null, title: 'Turnaround' },
      { src: 'Character/rig.mp4', poster: null, title: 'Mixamo Rig' },
      { src: 'Character/Print.png', poster: null, title: '3D Print' }
    ],
    contributors: null
  };
  const environment = {
    name: "Coastal Town",
    hero: {
      src: "/assets/animation/Environment/Demo.mp4",
      poster: "/assets/animation/Environment/screenshot2.png"
    },
    description: {
      subtitle: "Unity, Maya, ZBrush, Substance Painter",
      logLine: null,
      bullets: [
        "Collaborated with a team to create a stylized, playable environment in Unity.",
        "Modeled houses using modular building techniques in Maya.",
        "Textured buildings and props using texture atlases.",
        "Sculpted and textured leaves in ZBrush and Substance Painter, consructing the final plant in Maya using image planes.",
        "Additional assets by Boki, Edenity, and SpaceZeta from the Unity Asset Store."
      ]
    },
    content: [
      { src: 'Environment/modularBuilding.png', poster: null, title: 'Modular Breakdown' },
      { src: 'Environment/Lighthouse.mp4', poster: null, title: 'Lighthouse Modeling' },
      { src: 'Environment/Bush.mp4', poster: null, title: 'Plant Modeling' },
      { src: 'Environment/screenshot1.png', poster: null, title: 'Town Screenshot' },
      { src: 'Environment/screenshot4.png', poster: null, title: 'Lighthouse Screenshot' }
    ],
    contributors: 'Joshua Goldman, Erin Lewis, Thomas Yi'
  };

  const projects = [
    anim1, char, environment, basics
  ];
  
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
      <h2 className={styles.title}>3D Art and Animation Projects</h2>

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
              <h3 className={styles.projectTitle}>{project.name}</h3>
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