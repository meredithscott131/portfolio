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
      <div>
      <Carousel interval={null} controls={true}> 
        <Carousel.Item> 
        <img 
            className="d-block w-100"
            src="assets\animation\turnaround.gif"
            alt="Image Two"
          /> 
          <Carousel.Caption>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\Pose1.jpg"
            alt="Image Two"
          />  
        </Carousel.Item>
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\neil_rig.png"
            alt="Image Two"
          />  
        </Carousel.Item>
        <Carousel.Item> 
        <img 
            className="d-block w-100"
            src="assets\animation\SHOT8_Test.gif"
            alt="Image One"
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
            src="assets\animation\Still_4.png"
            alt="Image Two"
          />  
        </Carousel.Item>
        <Carousel.Item> 
          <img 
            className="d-block w-100"
            src="assets\animation\Still_2.png"
            alt="Image Two"
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
