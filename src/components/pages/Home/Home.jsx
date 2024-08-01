import React from "react";
import Freddy from "./Freddy";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div id="three-container" className={styles.threeContainer}>
        <Freddy />
      </div>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Meredith Scott</h1>
      </div>
    </div>
  );
};