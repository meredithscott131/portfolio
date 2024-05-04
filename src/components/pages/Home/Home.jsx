import React from "react";
import videoBg from '../../../assets/flyThrough.mp4'
import styles from "./Home.module.css";

export const Home = () => {
  return <div>
      <div class={styles.launchPage}>
        <video src={videoBg} autoPlay loop muted/>
      </div>
      <div className={styles.content}>
        <h1>Meredith Scott</h1>
        <p>Computer science and animation student, passionate about developing creative technology.</p>
      </div>
    </div>
};
