import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion";

export const Home = () => {
  const threeContainerRef = useRef(null);
  const [shake, setShake] = useState(false);
  const raycaster = new THREE.Raycaster();
  const mouseVec = new THREE.Vector2();

  useEffect(() => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    threeContainerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(-4, 3, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Load GLB Model
    const loader = new GLTFLoader();
    let model, mixer, actions;

    loader.load("/assets/home/duck_anim1.gltf", (gltf) => {
      model = gltf.scene;
      model.scale.set(1.25, 1.25, 1.25);

      // Center pivot
      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center);

      model.position.y -= 0.07;
      applyToonMaterial(model)
      scene.add(model);

      // Setup animation mixer
      if (gltf.animations && gltf.animations.length) {
        mixer = new THREE.AnimationMixer(model);
        actions = gltf.animations.map((clip) => {
          const action = mixer.clipAction(clip);
          action.loop = THREE.LoopOnce;
          action.clampWhenFinished = true;
          return action;
        });
      }
    });

    camera.position.z = 2;

    // Mouse rotation
    let mouse = { x: 0, y: 0 };
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Click to play animation
    const onClick = (event) => {
      if (!model || !actions) return;

      mouseVec.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseVec.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouseVec, camera);
      const intersects = raycaster.intersectObject(model, true);

      if (intersects.length > 0) {
        actions.forEach((action) => {
          action.reset();
          action.play();
          action.loop = THREE.LoopOnce;
          action.clampWhenFinished = true;
          action.onFinished = () => action.stop();
        });

        const sound = new Audio("/assets/home/squeak_sound.mp3");
        sound.volume = 0.2
        setTimeout(() => {
            sound.play();
        }, 500);

        setShake(true);
        setTimeout(() => setShake(false), 1200);
      }
    };
    window.addEventListener("click", onClick);

    // Resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Animate loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        const maxY = Math.PI / 6;
        const maxX = Math.PI / 10;
        const targetY = THREE.MathUtils.clamp(mouse.x * maxY, -maxY, maxY);
        const targetX = THREE.MathUtils.clamp(-mouse.y * maxX, -maxX, maxX);
        model.rotation.y = targetY;
        model.rotation.x = targetX;
      }

      if (mixer) mixer.update(clock.getDelta());

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("click", onClick);
      if (threeContainerRef.current) {
        threeContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Helper function for toon gradient
  function applyToonMaterial(model) {
      model.traverse((child) => {
          if (child.isMesh) {
              // Preserve original texture
              const originalMap = child.material.map;
              child.material = new THREE.MeshToonMaterial({
                  map: originalMap,
              });
          }
      });
  }

  return (
    <div className={styles.homeRoot}>
      <div className={styles.textContainer}>
        <motion.p
          className={styles.name}
          animate={shake ? { y: [0, -25, 25, -25, 25, -12, 12, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Meredith Scott
        </motion.p>

        <motion.p
          className={styles.pitch}
          animate={shake ? { y: [0, -20, 20, -20, 20, -10, 10, -5, 5, -2, 2, 0] } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          Technical Director, Software Developer, Multimedia Artist, Researcher
        </motion.p>
      </div>

      <div className={styles.threeBlock}>
        <div ref={threeContainerRef} className={styles.threeContainer} />
        <img
          src="/assets/home/Click_Me.png"
          alt="Click Me"
          className={styles.clickMe}
        />
      </div>
    </div>
  );
};
