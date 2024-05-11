import React from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";

import Carousel from 'react-bootstrap/Carousel';

export const Animation = () => {
  return <section className={styles.container}>
      <h2 className={styles.title}>
        Art and Animation
      </h2>
      <div className={styles.contentOne}>
      <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/_e9yMqmXWo0?si=xWUEr8Zti0Vwwn-s" title="Chipi chipi chapa chapa cat" allowFullScreen></iframe>
        </div>
        <div class={styles.descOne}>
          <h3 className={styles.subtitle}>
            The Trespassers
          </h3>
          <p className={styles.bodyText}>
              <span className={styles.maya}>Maya</span>
              <span>, </span>
              <span className={styles.sp}>Substance Painter</span>
              <span>, </span>
              <span className={styles.rigging}>Rigging</span>
              <span>, </span>
              <span className={styles.animation}>Animation</span>
          </p>
          <p className={styles.bodyText}>After a boy sneaks into the astronomy exhibit after hours, he realizes he might not be alone.</p>
        </div>
      </div>
  </section>
};
