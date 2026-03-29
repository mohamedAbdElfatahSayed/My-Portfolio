"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Loading() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current?.appendChild(renderer.domElement);

    camera.position.z = 40;

    const loader = new THREE.TextureLoader();

    // 🌍 Earth in depth
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(5, 64, 64),
      new THREE.MeshStandardMaterial({
        map: loader.load(
          "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mars_1k_color.jpg"
        ),
      })
    );

    earth.position.z = -80;
    scene.add(earth);

    // ⚡ Warp tunnel (particles)
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200; // x
      positions[i + 1] = (Math.random() - 0.5) * 200; // y
      positions[i + 2] = (Math.random() - 0.5) * 400; // z deep tunnel
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.15,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // 💡 lights
    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(10, 10, 10);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0x111111));

    let speed = 0;

    // 🎬 animation (warp effect)
    const animate = () => {
      requestAnimationFrame(animate);

      speed += 0.02;

      // move stars forward (warp illusion)
      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 2; i < pos.length; i += 3) {
        pos[i] += 2;

        if (pos[i] > 200) {
          pos[i] = -200;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // earth coming closer
      earth.position.z += 0.3;
      earth.rotation.y += 0.01;

      // camera shake (warp feeling)
      camera.position.x = Math.sin(speed) * 0.5;
      camera.position.y = Math.cos(speed) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      {/* 🌌 3D Warp Scene */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* 🌀 Portal Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)]" />

      {/* HUD */}
      <div className="absolute top-4 left-4 text-cyan-400 text-xs font-mono bg-black/40 p-3 rounded-lg border border-cyan-500/30">
        <p>WARP DRIVE: ACTIVE</p>
        <p>PORTAL STATUS: OPEN</p>
        <p>REALITY SHIFT: 87%</p>
      </div>

      {/* UI */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest">
          ENTERING PORTAL
        </h1>

        <p className="text-cyan-300 mt-3">
          Accelerating to light speed...
        </p>

        {/* loading bar */}
        <div className="w-72 h-1 bg-gray-800 mt-6 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse"></div>
        </div>

        <p className="text-cyan-400 mt-4 animate-pulse">
          syncing multiverse...
        </p>

      </div>
    </div>
  );
}