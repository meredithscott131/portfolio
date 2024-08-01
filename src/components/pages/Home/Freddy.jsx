import React, { useEffect } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Freddy = () => {
  useEffect(() => {
    const container = document.getElementById('three-container');
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.set(5, 3, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 10, -1);
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xffffff, 6000, 100, 1, .5);
    spotLight.position.set(4, 60, 5);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    //scene.add(spotLight);

    let model;
    const loader = new GLTFLoader().setPath('assets/home/oshawott/');
    loader.load('scene.gltf', (gltf) => {
      model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      model.position.set(5, 0, 0); // Adjust as needed
      scene.add(model);
    });

    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const onMouseMove = (event) => {
      if (model) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        const maxRotationY = Math.PI / 3;
        const maxRotationX = Math.PI / 6;
        model.rotation.y = clamp(mouseX * Math.PI, -maxRotationY, maxRotationY);
        model.rotation.x = clamp(-mouseY * Math.PI / 4, -maxRotationX, maxRotationX);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
};

export default Freddy;