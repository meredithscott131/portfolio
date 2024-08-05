import React from "react";
import Freddy from "./Freddy";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Meredith Scott</h1>
        </div>
        <h2 className={styles.blurb}>Computer science and animation student, passionate about developing creative technology.</h2>
      </div>
      <div id="three-container" className={styles.threeContainer}>
        <img src="assets/home/welcome.png" className={styles.welcome} alt="profile image"></img>
        <Freddy />
      </div>
    </div>
  );
};