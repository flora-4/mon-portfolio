import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    // Sizes
    const width = window.innerWidth;
    const height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // --- Background dégradé ---
    const bgCanvas = document.createElement("canvas");
    bgCanvas.width = 1;
    bgCanvas.height = 256;
    const bgCtx = bgCanvas.getContext("2d");
    const g = bgCtx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, "#000000");
    g.addColorStop(0.3, "#07121a");
    g.addColorStop(0.6, "#062f47");
    g.addColorStop(1, "#000000");
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, 1, 256);
    scene.background = new THREE.CanvasTexture(bgCanvas);

    // Lights
    const ambient = new THREE.AmbientLight(0x6eeeff, 0.45);
    scene.add(ambient);

    const key = new THREE.PointLight(0x00aaff, 1.0, 120);
    key.position.set(10, 8, 10);
    scene.add(key);

    // Knot
    const geo = new THREE.TorusKnotGeometry(3.2, 0.9, 180, 32);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x00d4ff,
      metalness: 0.7,
      roughness: 0.25,
      emissive: 0x003344,
      emissiveIntensity: 0.6,
    });
    const knot = new THREE.Mesh(geo, mat);
    scene.add(knot);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      knot.rotation.x = t * 0.07;
      knot.rotation.y = t * 0.12;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
