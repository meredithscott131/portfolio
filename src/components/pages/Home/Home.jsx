import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

export const Home = () => {
  // Reference to interactive element
  const interactiveRef = useRef(null);
  // State to manage the image source
  const [imageSrc, setImageSrc] = useState("/portfolio/assets/home/welcome_graphic.png");

  useEffect(() => {
    const interBubble = interactiveRef.current;

    // Current and target positions of the mouse
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // Moves the interactive element towards the mouse
    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    // Updates the target positions with mouse movement
    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Temporarily changes the image source
  const changeImageTemporarily = () => {
    const originalSrc = "/portfolio/assets/home/welcome_graphic.png";
    const newSrc = "/portfolio/assets/home/welcome_graphic_click.png";

    setImageSrc(newSrc);

    // Reverts the image source back to to original after 1 second
    setTimeout(() => {
      setImageSrc(originalSrc);
    }, 1000);
  };

  return (
    <div>
      <div className={styles.foregroundContent}>
        <h1 className={styles.title}>Meredith Scott</h1>
        <h2 className={styles.subtitle}>
          Software developer and artist passionate about computer graphics and human-computer interaction.
        </h2>
        <img
          className={styles.avatar}
          src={imageSrc}
          alt="Welcome Graphic"
          onClick={changeImageTemporarily}
        />
      </div>
      <div className={styles.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.interactive} ref={interactiveRef}></div>
        </div>
      </div>
    </div>
  );
};