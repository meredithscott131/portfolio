import React, { useEffect, useRef, useState } from "react";
import styles from "./Reel.module.css";

const videos = [
  {
    id: "gMPeBmi31iw",
    title: "Pipeline Tools and Software Development Reel",
  },
  {
    id: "gmsj5nB8TPc",
    title: "3D Generalist Reel",
  },
];

export const Reel = () => {
  return (
    <section className={styles.container}>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoBlock}>
            <h3 className={styles.videoTitle}>{video.title}</h3>

            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
