import React from "react";
import videoBg from '../../../../assets/animation/flyThrough.mp4'
import styles from "./Home.module.css";
import {useEffect} from "react";

export const Home = () => {
  
  return <section>
      <div class={styles.launchPage}>
        <video className={styles.bgVideo} src={videoBg} autoPlay loop muted/>
      </div>
      <div className={styles.content}>
        <h1 class={styles.title}>Meredith Scott</h1>
        <p class={styles.text}>Computer science and animation student, passionate about developing creative technology.</p>
      </div>
    </section>
};
