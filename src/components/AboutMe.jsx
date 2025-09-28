import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AboutMe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    // initial sizes
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); 
    container.appendChild(renderer.domElement);

    // --- Lights ---
    const ambient = new THREE.AmbientLight(0x6eeeff, 0.45);
    scene.add(ambient);

    const key = new THREE.PointLight(0x00aaff, 1.0, 120);
    key.position.set(10, 8, 10);
    scene.add(key);

    // --- Objet 3D (knot) ---
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

    // --- Animation ---
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      knot.rotation.x = t * 0.07;
      knot.rotation.y = t * 0.12;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // --- Resize handling ---
    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement))
        container.removeChild(renderer.domElement);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        color: "white",
      }}
    >
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      <div className="about-card">
        <h1 className="about-title">
          À <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse">PROPOS</span> DE MOI
          <div className="scan-effect"></div>
        </h1>

        <div className="separator-line"></div>

        <h1 className="name">DJOUELA TABEU Flora Dolorece</h1>
        <h2 className="role">
          Étudiante | Web Designer | Développeuse Web & Mobile | Experte
          WordPress
        </h2>

        <div className="content">
          <p>
            Actuellement <strong>à la recherche d'un stage de 6 mois</strong>,
            je suis passionnée par le numérique. Curieuse et rigoureuse, je
            conçois des solutions digitales modernes et accessibles, avec une
            réelle sensibilité à l'expérience utilisateur.
          </p>

          <p>
            J'utilise des technologies comme{" "}
            <strong>HTML, CSS, JavaScript, PHP, Python</strong>, ainsi que des
            outils de conception comme <strong>Figma</strong> et de gestion de
            projet comme <strong>Trello</strong>.
          </p>

          <div className="languages-section">
            <h4 className="languages-title">Langues</h4>
            <div className="languages-grid">
              <div className="language-item">
                <span className="language-name">🇫🇷 Français</span>
                <span className="language-level native">
                  Langue Maternelle
                </span>
              </div>
              <div className="language-item">
                <span className="language-name">En Anglais</span>
                <span className="language-level intermediate">Niveau B2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
               .gradient-text {
          background: linear-gradient(to right, #06b6d4, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
