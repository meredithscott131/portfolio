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
  const anim1Content = [
    { src: 'Anim1/concept_art.png',
      poster: null,
      title: 'Concept Art' },
    { src: 'Anim1/room_fly_through.mp4',
      poster: '/portfolio/assets/animation/Anim1/room_fly_through_thumb.png',
      title: 'Room Flythrough' },
    { src: 'Anim1/neil_turnaround.mp4',
      poster: '/portfolio/assets/animation/Anim1/neil_turnaround_thumb.png',
      title: 'Character Turnaround' },
    { src: 'Anim1/neil_rig.png',
      poster: null,
      title: 'Character Rig' },
    { src: 'Anim1/progress_shot.mp4',
      poster: '/portfolio/assets/animation/Anim1/progress_shot_thumb.png',
      title: 'Progress Shot' }
  ];
  const basicsContent = [
    { src: 'Basics/concept_art.PNG',
      poster: null,
      title: 'Concept Art' },
    { src: 'Basics/turnaround.png',
      poster: null,
      title: 'Character Turnaround' },
    { src: 'Basics/animatic.mp4',
      poster: '/portfolio/assets/animation/Anim1/animatic_thumb.png',
      title: 'Animatic' },
    { src: 'Basics/blend_shapes_demo.mp4',
      poster: '/portfolio/assets/animation/Anim1/blend_shapes_demo_thumb.png',
      title: 'Blend Shapes Demo' }
  ];
  
  // Handles clicks on thumbnails to open the expanded view
  const handlethumbnailClick = (index, videoSources) => {
    if (expandedthumbnail !== null) {
      // Close expanded view
      setExpandedthumbnail(null);
      // Pause and reset the video
      const refIndex = expandedthumbnail;
      if (videoRefs.current[refIndex]) {
        videoRefs.current[refIndex].pause();
        videoRefs.current[refIndex].currentTime = 0;
        // Reload video to reset to the poster frame
        videoRefs.current[refIndex].load();
      }
    } else {
      // Open expanded view
      setExpandedthumbnail(index);
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>3D Art and Animation Projects</h2>

      {/* The Trespassers - Anim 1*/}
      <div className={styles.project}>
        <div className="ratio ratio-16x9">
          <video
            controls
            src="/portfolio/assets/animation/Anim1/anim1_final.mp4"
            poster='/portfolio/assets/animation/Anim1/anim1_final_thumb.png'
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.projectTitle}>
            The Trespassers
          </h3>
          <p className={styles.subtitle}>Maya, Substance Painter, Rigging, Animation</p>
          <p className={styles.logLine}>After a boy sneaks into the astronomy exhibit after hours, he realizes he might not be alone.</p>
          <ul>
            <li>Independently created a short film over the course of four months with the goal of conveying the relationship between a character and room.</li>
            <li>Modeled and lit all room objects in Maya and textured content in Substance Painter.</li>
            <li>Rigged character model using Advanced Skeleton.</li>
            <li>Composited scenes in Adobe After Effects.</li>
            <li>Rendered in Arnold.</li>
          </ul>
        </div>
      </div>
      <div className={styles.grid}>
        {anim1Content.map((thumbnail, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${expandedthumbnail === index ? styles.expandedPlaceholder : ''}`}
            onClick={() => handlethumbnailClick(index, anim1Content)}
          >
            {thumbnail.src.endsWith('.mp4') ? (
              <video
                className="d-block w-100"
                src={`/portfolio/assets/animation/${thumbnail.src}`}
                controls={false}
                loop
                poster={thumbnail.poster}
                ref={(el) => videoRefs.current[index] = el}
                alt={`thumbnail ${index + 1}`}
              />
            ) : (
              <img
                className="d-block w-100"
                src={`/portfolio/assets/animation/${thumbnail.src}`}
                alt={`thumbnail ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
      {expandedthumbnail !== null && expandedthumbnail < anim1Content.length && (
        <ExpandedView
          thumbnail={anim1Content[expandedthumbnail]}
          title={anim1Content[expandedthumbnail].title}
          onClose={() => setExpandedthumbnail(null)}
        />
      )}

      {/* Talent Show - Basics */}
      <div className={styles.project}>
        <div className="ratio ratio-16x9">
          <video
            controls
            src="/portfolio/assets/animation/Basics/basics_final.mp4"
            poster='/portfolio/assets/animation/Basics/basics_final_thumb.png'
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.projectTitle}>
            Talent Show
          </h3>
          <p className={styles.subtitle}>Maya, Animation, Adobe Suite</p>
          <p className={styles.logLine}>How high can a singer go before they reach their limit?</p>
          <ul>
            <li>Learned Maya to create a short animation showcasing knowledge on animation principles, staging, and simple storytelling.</li>
            <li>Modeled, textured, and designed an original character inspired by my own beloved <a target="_blank" className={styles.link} href="https://en.wikipedia.org/wiki/Rubber_duck_debugging">debug duck</a>.</li>
            <li>Utilized Maya’s blend shape feature to animate the character.</li>
            <li>Edited all content in Adobe Premiere Pro and After Effects.</li>
            <li>Rendered in Arnold.</li>
        </ul>
        </div>
      </div>
      <div className={styles.grid}>
        {basicsContent.map((thumbnail, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${expandedthumbnail === anim1Content.length + index ? styles.expandedPlaceholder : ''}`}
            onClick={() => handlethumbnailClick(anim1Content.length + index, basicsContent)}
          >
            {thumbnail.src.endsWith('.mp4') ? (
              <video
                className="d-block w-100"
                src={`/portfolio/assets/animation/${thumbnail.src}`}
                controls={false}
                loop
                poster={thumbnail.poster}
                ref={(el) => videoRefs.current[anim1Content.length + index] = el}
                alt={`thumbnail ${anim1Content.length + index + 1}`}
              />
            ) : (
              <img
                className="d-block w-100"
                src={`/portfolio/assets/animation/${thumbnail.src}`}
                alt={`thumbnail ${anim1Content.length + index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
      {expandedthumbnail !== null && expandedthumbnail >= anim1Content.length && expandedthumbnail < anim1Content.length + basicsContent.length && (
        <ExpandedView
          thumbnail={basicsContent[expandedthumbnail - anim1Content.length]}
          title={basicsContent[expandedthumbnail - anim1Content.length].title}
          onClose={() => setExpandedthumbnail(null)}
        />
      )}
    </section>
  );
};