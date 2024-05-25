import React from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";
import ReactPlayer from "react-player";

import Carousel from 'react-bootstrap/Carousel';

export const Animation = () => {
  return <section className={styles.container}>
      <h2 className={styles.title}>
        3D Art and Animation
      </h2>
      <div className={styles.content}>
        <div class="ratio ratio-16x9">
        <video className={styles.videoLeft}
        controls
        class="ratio ratio-16x9"
        src="assets\animation\MeredithScott_Final.mp4"/>
        </div>
        <div class={styles.descOne}>
          <h3 className={styles.projectTitle}>
            The Trespassers
          </h3>
          <p className={styles.subtitle}>Maya, Substance Painter, Rigging, Animation</p>
          <p className={styles.bodyText}>After a boy sneaks into the astronomy exhibit after hours, he realizes he might not be alone.</p>
          <p className={styles.bodyText}>Made for my Animation 1 course where I was independently responsible for conceptualizing, modeling, UV unwrapping, texturing, and lighting a set and character to produce an animated film. Used Advanced Skeleton to rig the character and animate them into the scene.</p>
        </div>
      </div>
      <div>
      <Carousel interval={null} controls={true}>
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
        <video className="d-block w-100" controls autoPlay muted loop>
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
            src="assets\animation\neil_rig.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <p className={styles.carouselCap}>Character Rig</p>
          </Carousel.Caption>   
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100" controls autoPlay muted loop>
            <source src="assets\animation\flyThrough.mp4"
            type="video/mp4"
            />
          </video>
          <Carousel.Caption>
            <p className={styles.carouselCap}>Room Fly Through</p>
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
      <div class="ratio ratio-16x9">
      <video className={styles.videoLeft}
        controls
        class="ratio ratio-16x9"
        src="assets\animation\TalentShow_FINAL.mp4"/>
        </div>
        <div class={styles.descOne}>
          <h3 className={styles.projectTitle}>
            Talent Show
          </h3>
          <p className={styles.subtitle}>Maya, Animation</p>
          <p className={styles.bodyText}>Made for my Animation Basics course final where I was tasked to create a character and animate them performing their unique talent on stage, focusing on animation principles and staging. Rendered with Arnold and edited with Adobe Premiere Pro.</p>
        </div>
      </div>
  </section>
};
