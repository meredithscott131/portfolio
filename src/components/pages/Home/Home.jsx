import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

export const Home = () => {
  const interactiveRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("assets/home/welcome_graphic.png");

  useEffect(() => {
    const interBubble = interactiveRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

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

  const changeImageTemporarily = () => {
    const originalSrc = "assets/home/welcome_graphic.png";
    const newSrc = "assets/home/welcome_graphic_switch.png";

    setImageSrc(newSrc);

    setTimeout(() => {
      setImageSrc(originalSrc);
    }, 1000);
  };

  return (
    <div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Meredith Scott</h1>
        <h2 className={styles.subtitle}>Computer science and animation student, passionate about developing creative technology.</h2>
        <img
          className={styles.welcome}
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