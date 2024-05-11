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
      <div className={styles.content}>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/fOIAYm4iPOQ?si=q0oV733GdA-etP1F" title="Chipi chipi chapa chapa cat" allowFullScreen></iframe>
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
      <div className={styles.slideshowOne}>
      <Carousel interval={null} controls={true}> 
        <Carousel.Item> 
          <video 
            controls
            autoPlay
            loop
            className="d-block w-100"
            src="assets\animation\flyThrough.mp4"
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <h3>Fly Through</h3>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item> 
          <video 
            className="d-block w-100"
            controls
            autoPlay
            loop
            src="assets\animation\MeredithScott_Turnaround.mp4"
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <h3>Character Turnaround</h3>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\Still1.png"
            alt="Image Two"
          />  
        </Carousel.Item>
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\Still2.png"
            alt="Image Two"
          />  
        </Carousel.Item> 
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\Still3.png"
            alt="Image Two"
          />  
        </Carousel.Item>
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\Pose1.jpg"
            alt="Image Two"
          />  
        </Carousel.Item>
        <Carousel.Item> 
          <video 
            className="d-block w-100"
            controls
            autoPlay
            loop
            src="assets\animation\SHOT8_Test.mp4"
            alt="Image One"
          />
        </Carousel.Item>   
      </Carousel>
      </div>
      <div className={styles.content}>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/ztXT_-JpKUk?si=lTokBch_5W3v_i_i" title="Talent Show" allowFullScreen></iframe>
        </div>
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
