"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";

export default function NotFound() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      70,
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

    camera.position.z = 35;

    const loader = new THREE.TextureLoader();

    // 🌍 Earth (Real texture)
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(5, 128, 128),
      new THREE.MeshStandardMaterial({
        map: loader.load(
          "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
        ),
      })
    );

    scene.add(earth);

    // 🪐 secondary planet
    const mars = new THREE.Mesh(
      new THREE.SphereGeometry(3, 64, 64),
      new THREE.MeshStandardMaterial({
        map: loader.load(
          "https://threejs.org/examples/textures/planets/mars_1k_color.jpg"
        ),
      })
    );

    mars.position.set(15, 5, -10);
    scene.add(mars);

    // 💡 lights
    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(10, 10, 10);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0x222222));

    // ✨ stars (realistic)
    const starGeo = new THREE.BufferGeometry();
    const starPos: number[] = [];

    for (let i = 0; i < 4000; i++) {
      starPos.push(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
      );
    }

    starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPos, 3)
    );

    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        size: 0.08,
        color: 0xffffff,
      })
    );

    scene.add(stars);

    // 🛰️ REAL SATELLITES (smooth sphere-like shape)
    const satellites: THREE.Mesh[] = [];

    const satGeometry = new THREE.IcosahedronGeometry(0.5, 1);

    const satMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      metalness: 0.6,
      roughness: 0.2,
    });

    for (let i = 0; i < 6; i++) {
      const sat = new THREE.Mesh(satGeometry, satMaterial);

      sat.userData = {
        radius: 8 + i * 2,
        angle: Math.random() * Math.PI * 2,
        speed: 0.005 + i * 0.001,
      };

      scene.add(sat);
      satellites.push(sat);
    }

    // 🎬 animation
    const animate = () => {
      requestAnimationFrame(animate);

      earth.rotation.y += 0.0015;
      mars.rotation.y += 0.001;

      satellites.forEach((sat) => {
        const d = sat.userData;

        d.angle += d.speed;

        sat.position.x = Math.cos(d.angle) * d.radius;
        sat.position.z = Math.sin(d.angle) * d.radius;
        sat.position.y = Math.sin(d.angle * 2) * 0.5;

        sat.rotation.x += 0.02;
        sat.rotation.y += 0.02;
      });

      camera.position.x = Math.sin(Date.now() * 0.0002) * 3;
      camera.position.y = Math.cos(Date.now() * 0.0002) * 1.5;

      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* 🌌 3D Canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* UI */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-white text-transparent bg-clip-text">
          404 SPACE LOST 🚀
        </h1>

        <p className="text-gray-300 mt-3 max-w-md">
          أنت داخل فضاء ثلاثي الأبعاد حقيقي… حاول الرجوع بأمان
        </p>

        <Link href="/">
          <button className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold hover:scale-105 transition">
            🏠 العودة للصفحة الرئيسية
          </button>
        </Link>

      </div>
    </div>
  );
}