import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // If using React Router
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate(); // Hook for navigation (if using React Router)

  // Reference to interactive element
  const interactiveRef = useRef(null);
  // State to manage the image source
  const [imageSrc, setImageSrc] = useState("/assets/home/welcome_graphic.png");

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

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle video click
  const handleVideoClick = () => {
    // Use navigate if React Router is available
    navigate("/code");
    // Or use this for plain navigation
    // window.location.href = "/code";
  };

  return (
    <div>
      <div className={styles.foregroundContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Meredith Scott</h1>
          <h2 className={styles.subtitle}>
            Software developer and researcher interested in filmmaking, games, and emerging technology. Specializing in human-computer interaction and computer graphics.
          </h2>
          <p className={styles.skillTitle}>Skills</p>
          <div className={styles.skillsContainer}>
            <div className={styles.skillGroup}>
              <p className={styles.skillGroupTitle}>Programming</p>
              <p className={styles.skillGroupBody}>
                C#, C++, Python, OpenGL, JavaScript, Java, React, PyQt, SQL, Linux, Git, Visual Studio
              </p>
            </div>
            <div className={styles.skillGroup}>
              <p className={styles.skillGroupTitle}>Animation</p>
              <p className={styles.skillGroupBody}>
                Maya, Z-Brush, Substance Painter, Blender, After Effects, Premiere Pro, Photoshop
              </p>
            </div>
          </div>
        </div>
        <div>
        <video
          className={styles.videoPrev} autoPlay loop muted
          onClick={handleVideoClick}>
          <source
            src="/assets/code/Gestures/Demo.mp4"
            type="video/mp4"
          />
        </video>
        <p className={styles.previewTitle}>Augmented Reality Gesture Prototype Series</p>
        <p className={styles.preview}>Click to learn more!</p>
        </div>
      </div>
      <div className={styles.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
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