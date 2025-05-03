import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/Addons.js";

export const Home = () => {
  const threeContainerRef = useRef(null);

  useEffect(() => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    threeContainerRef.current.appendChild(renderer.domElement);
  
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Lowered from 1.5 to 0.6
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.8);
    directionalLight.position.set(-5, 4, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.radius = 5; // sharper edge
    scene.add(directionalLight);
  
    // Load Model
    const loader = new OBJLoader();
    const textureLoader = new THREE.TextureLoader();
    let model;
  
    loader.load("/assets/home/duck.obj", (obj) => {
      const texture = textureLoader.load("/assets/home/texture.png");
  
      obj.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshToonMaterial({
            map: texture,
            color: 0xfcffb0,
            emissiveMap: texture,
            emissiveIntensity: 0.5
          });
          child.receiveShadow = true;
          child.material.needsUpdate = true;
        }
      });
      
      model = obj;
      model.scale.set(0.015, 0.015, 0.015);

      // Center pivot
      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center); // Pivot centered

      // Raise object on screen
      model.position.y -= 0.07;

      scene.add(model);
      centerAndPositionModel();

    });

    const centerAndPositionModel = () => {
      if (!model) return;
      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center); // Center the pivot
      if (window.innerWidth > 1000) {
        model.position.y -= 0.07;   // Raise object
      } else {
        model.position.y -= 0.06;   // Raise object
      }
    };
    
  
    camera.position.z = 2;
  
    // Mouse rotation logic
    let mouse = { x: 0, y: 0 };
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      centerAndPositionModel(); // Reposition model on resize
    };
    
    window.addEventListener("resize", onWindowResize);
    
  
    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        const maxY = Math.PI / 6; // ~30 degrees
        const maxX = Math.PI / 10; // ~18 degrees
      
        const targetY = THREE.MathUtils.clamp(mouse.x * maxY, -maxY, maxY);
        const targetX = THREE.MathUtils.clamp(-mouse.y * maxX, -maxX, maxX);
      
        model.rotation.y = targetY;
        model.rotation.x = targetX;
      }      
      renderer.render(scene, camera);
    };
    animate();
  
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      if (threeContainerRef.current) {
        threeContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);  

  return (
    <div>
      <div ref={threeContainerRef} className={styles.threeContainer}></div>
      <div className={styles.foregroundContent}>
        <div className={styles.textContainer}>
          <p className={styles.name}>Meredith Scott</p>
          <p className={styles.pitch}>
            Software developer and researcher interested in animation, games, and emerging technology.
          </p>
        </div>
      </div>
    </div>
  );
};