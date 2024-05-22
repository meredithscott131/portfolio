import React from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";

import Carousel from 'react-bootstrap/Carousel';

export const Animation = () => {
  return <section className={styles.container}>
      <h2 className={styles.title}>
        3D Art and Animation
      </h2>
      <div className={styles.content}>
        <video className={styles.videoLeft}
        controls
        class="ratio ratio-16x9"
        src="assets\animation\MeredithScott_Final.mp4"/>
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
      <div>
      <Carousel interval={null} controls={true}> 
        <Carousel.Item> 
          <video className="d-block w-100" controls autoplay loop>
            <source src="assets\animation\flyThrough.mp4"
            type="video/mp4"
            />
          </video>
          <Carousel.Caption>
            <p className={styles.carouselCap}>Room Fly Through</p>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item>
        <video className="d-block w-100" controls autoplay loop>
            <source src="assets\animation\Neil_Turnaround.mp4"
            type="video/mp4"
            />
          </video>
          <Carousel.Caption>
            <p className={styles.carouselCap}>Character Turnaround</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\Pose1.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <p className={styles.carouselCap}>Character Model</p>
          </Carousel.Caption>   
        </Carousel.Item>
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\neil_rig.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <p className={styles.carouselCap}>Character Rig</p>
          </Carousel.Caption>   
        </Carousel.Item>
        <Carousel.Item> 
        <img 
            className="d-block w-100"
            src="assets\animation\SHOT8_Test.gif"
            alt="Image One"
          />
        <Carousel.Caption>
            <p className={styles.carouselCap}>Progress Playblast</p>
        </Carousel.Caption>
        </Carousel.Item>    
      </Carousel>
      </div>
      <div className={styles.content}>
      <video className={styles.videoLeft}
        controls
        class="ratio ratio-16x9"
        src="assets\animation\TalentShow_FINAL.mp4"/>
        <div class={styles.descOne}>
          <h3 className={styles.subtitle}>
            Talent Show
          </h3>
          <p className={styles.bodyText}>
              <span className={styles.maya}>Maya</span>
              <span>, </span>
              <span className={styles.animation}>Animation</span>
          </p>
          <p className={styles.bodyText}>A duck takes the stage! Does he have what it takes?</p>
        </div>
      </div>
  </section>
};
