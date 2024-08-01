import React, { useState, useRef, useEffect } from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";
import "animate.css/animate.compat.css";

export const Animation = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const expandedRef = useRef(null);
  const videoRefs = useRef([]);
  const scrollPosition = useRef(0);

  const handleItemClick = (index) => {
    if (index === expandedItem) {
      // Close expanded view
      setExpandedItem(null);
      // Pause and reset the video
      if (videoRefs.current[index]) {
        videoRefs.current[index].pause();
        videoRefs.current[index].currentTime = 0;
      }
    } else {
      // Open expanded view
      setExpandedItem(index);
    }
  };

  const handleClickOutside = (event) => {
    if (expandedRef.current && !expandedRef.current.contains(event.target)) {
      setExpandedItem(null);
      // Pause and reset the video
      if (videoRefs.current[expandedItem]) {
        videoRefs.current[expandedItem].pause();
        videoRefs.current[expandedItem].currentTime = 0;
      }
    }
  };

  const handleExpandedItemClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (expandedItem !== null) {
      // Preserve the current scroll position
      scrollPosition.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition.current);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedItem]);

  return (
    <section className={styles.container}>
      {expandedItem !== null && <div className={styles.overlay} />}
      <h2 className={styles.title}>
        3D Art and Animation Projects
      </h2>
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
          <p className={styles.bodyText}>Made for my Animation 1 course where I was independently responsible for conceptualizing, modeling, UV unwrapping, texturing, and lighting a set and character to produce an animated film. Used Advanced Skeleton to rig the character and Arnold to render.</p>
        </div>
      </div>

      <div className={styles.grid}>
        {[
          { src: 'Pose1.jpg', poster: null },
          { src: 'MeredithScott_Turnaround.mp4', poster: null },
          { src: 'neil_rig.png', poster: null },
          { src: 'flyThrough.mp4', poster: 'assets/animation/Anim1/Still_4.png' },
          { src: 'SHOT8_Test.mp4', poster: null }
        ].map((item, index) => (
          <div
            key={index}
            ref={expandedItem === index ? expandedRef : null}
            className={`${styles.item} ${expandedItem === index ? styles.expanded : ''}`}
            onClick={() => handleItemClick(index)}
            onClickCapture={expandedItem === index ? handleExpandedItemClick : undefined}
          >
            {item.src.endsWith('.mp4') ? (
              <video
                className="d-block w-100"
                src={`assets/animation/Anim1/${item.src}`}
                controls
                loop
                poster={item.poster}
                ref={(el) => videoRefs.current[index] = el}
                alt={`Item ${index + 1}`}
              />
            ) : (
              <img
                className="d-block w-100"
                src={`assets/animation/Anim1/${item.src}`}
                alt={`Item ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
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
          <p className={styles.subtitle}>Maya, Animation</p>
          <p className={styles.descText}>How high can a singer go before they reach their limit?</p>
          <p className={styles.bodyText}>Made for my Animation Basics course final where I was tasked to model and texture a character and animate them performing their unique talent on a provided stage, focusing on animation principles and staging. Rendered with Arnold.</p>
        </div>
      </div>
    </section>
  );
};