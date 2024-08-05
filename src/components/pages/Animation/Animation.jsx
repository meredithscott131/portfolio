import React, { useState, useRef, useEffect } from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";
import "animate.css/animate.compat.css";

const ExpandedView = ({ item, onClose }) => {
  const expandedRef = useRef(null);

  const handleClickOutside = (event) => {
    if (expandedRef.current && !expandedRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.expanded} ref={expandedRef} onClick={onClose}>
        {item.src.endsWith('.mp4') ? (
          <video
            className="d-block w-100"
            src={`assets/animation/${item.src}`}
            controls
            loop
            poster={item.poster}
            autoPlay
          />
        ) : (
          <img
            className="d-block w-100"
            src={`assets/animation/${item.src}`}
            alt="Expanded item"
          />
        )}
      </div>
    </div>
  );
};

export const Animation = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const videoRefs = useRef([]);
  const videoSources1 = [
    { src: 'anim1/concept_art.png', poster: null },
    { src: 'anim1/flyThrough.mp4', poster: 'assets/animation/Anim1/Still_4.png' },
    { src: 'anim1/MeredithScott_Turnaround.mp4', poster: null },
    { src: 'anim1/neil_rig.png', poster: null },
    { src: 'anim1/SHOT8_Test.mp4', poster: null }
  ];
  const videoSources2 = [
    { src: 'basics/Sketches.png', poster: null },
    { src: 'basics/Turnaround.png', poster: null },
    { src: 'basics/Animatic.mp4', poster: null },
    { src: 'basics/demo.mp4', poster: null }
  ];

  const handleItemClick = (index, videoSources) => {
    if (expandedItem !== null) {
      // Close expanded view
      setExpandedItem(null);
      // Pause and reset the video
      const refIndex = expandedItem;
      if (videoRefs.current[refIndex]) {
        videoRefs.current[refIndex].pause();
        videoRefs.current[refIndex].currentTime = 0;
        // Reload video to reset to the poster frame
        videoRefs.current[refIndex].load();
      }
    } else {
      // Open expanded view
      setExpandedItem(index);
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>3D Art and Animation Projects</h2>

      {/* The Trespassers */}
      <div className={styles.content}>
        <div className="ratio ratio-16x9">
          <video className={styles.videoLeft}
            controls
            src="assets/animation/Anim1/MeredithScott_Final.mp4"
          />
        </div>
        <div className={styles.descOne}>
          <h3 className={styles.projectTitle}>
            The Trespassers
          </h3>
          <p className={styles.subtitle}>Maya, Substance Painter, Rigging, Animation</p>
          <p className={styles.descText}>After a boy sneaks into the astronomy exhibit after hours, he realizes he might not be alone.</p>
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
        {videoSources1.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${expandedItem === index ? styles.expandedPlaceholder : ''}`}
            onClick={() => handleItemClick(index, videoSources1)}
          >
            {item.src.endsWith('.mp4') ? (
              <video
                className="d-block w-100"
                src={`assets/animation/${item.src}`}
                controls={false}
                loop
                poster={item.poster}
                ref={(el) => videoRefs.current[index] = el}
                alt={`Item ${index + 1}`}
              />
            ) : (
              <img
                className="d-block w-100"
                src={`assets/animation/${item.src}`}
                alt={`Item ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
      {expandedItem !== null && expandedItem < videoSources1.length && (
        <ExpandedView
          item={videoSources1[expandedItem]}
          onClose={() => setExpandedItem(null)}
        />
      )}

      {/* Talent Show */}
      <div className={styles.content}>
        <div className="ratio ratio-16x9">
          <video className={styles.videoLeft}
            controls
            src="assets/animation/Basics/TalentShow_FINAL.mp4"
          />
        </div>
        <div className={styles.descOne}>
          <h3 className={styles.projectTitle}>
            Talent Show
          </h3>
          <p className={styles.subtitle}>Maya, Animation, Adobe Suite</p>
          <p className={styles.descText}>How high can a singer go before they reach their limit?</p>
          <ul>
            <li>Learned Maya to create a short animation showcasing knowledge on animation principles, staging, and simple storytelling.</li>
            <li>Modeled, textured, and designed an original character inspired by my own beloved debugging duck.</li>
            <li>Utilized Maya’s blend shape feature to animate the character.</li>
            <li>Edited all content in Adobe Premiere Pro and After Effects.</li>
            <li>Rendered in Arnold.</li>
          </ul>
        </div>
      </div>
      <div className={styles.grid}>
        {videoSources2.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${expandedItem === videoSources1.length + index ? styles.expandedPlaceholder : ''}`}
            onClick={() => handleItemClick(videoSources1.length + index, videoSources2)}
          >
            {item.src.endsWith('.mp4') ? (
              <video
                className="d-block w-100"
                src={`assets/animation/${item.src}`}
                controls={false}
                loop
                poster={item.poster}
                ref={(el) => videoRefs.current[videoSources1.length + index] = el}
                alt={`Item ${videoSources1.length + index + 1}`}
              />
            ) : (
              <img
                className="d-block w-100"
                src={`assets/animation/${item.src}`}
                alt={`Item ${videoSources1.length + index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
      {expandedItem !== null && expandedItem >= videoSources1.length && expandedItem < videoSources1.length + videoSources2.length && (
        <ExpandedView
          item={videoSources2[expandedItem - videoSources1.length]}
          onClose={() => setExpandedItem(null)}
        />
      )}
    </section>
  );
};