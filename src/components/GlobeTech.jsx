import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import circuitsImg from "../assets/circuits.png";
import logoJs from "../assets/js.png";
import logoPython from "../assets/python.png";
import logoReact from "../assets/react.svg";
import logoTs from "../assets/html.png";
import logoCss from "../assets/css.png";
import logoTailwind from "../assets/tailwind.png";
import logoLaravel from "../assets/laravel.png";
import logoFigma from "../assets/figma.png";
import logoTrello from "../assets/trello.png";
import myPhoto from "../assets/moi.png";

export default function GlobeTech() {
  const mountRef = useRef(null);
  // const navigate = useNavigate();

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    // --- Fond dégradé ---
    const bgCanvas = document.createElement("canvas");
    bgCanvas.width = 1;
    bgCanvas.height = 256;
    const bgCtx = bgCanvas.getContext("2d");
    const g = bgCtx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, "#000000");
    g.addColorStop(0.4, "#0a1725");
    g.addColorStop(0.5, "#123b66");
    g.addColorStop(0.6, "#0a1725");
    g.addColorStop(1, "#000000");
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, 1, 256);
    scene.background = new THREE.CanvasTexture(bgCanvas);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    let radius = 5; 
    const setRendererSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

     //  Responsive globe avec plus de variations 
      if (width < 480) {
        radius = 2.5;
      } else if (width < 768) {
        radius = 3; 
      } else if (width < 1024) {
        radius = 4; 
      } else {
        radius = 5; 
      }

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      return { width, height };
    };

    const { width, height } = setRendererSize();
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.setSize(width, height);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.8, 0.35, 0.9);
    composer.addPass(bloomPass);

    scene.add(new THREE.AmbientLight(0x222933, 0.6));
    const keyLight = new THREE.PointLight(0x66e0ff, 0.5, 100);
    keyLight.position.set(-6, 3, 8);
    scene.add(keyLight);

    // --- Globe ---
    const sphereGeo = new THREE.SphereGeometry(radius, 128, 128);
    const wireGeo = new THREE.WireframeGeometry(sphereGeo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x39d2ff, transparent: true, opacity: 0.9 });
    const wireframe = new THREE.LineSegments(wireGeo, wireMat);
    
    // Position responsive du globe
    const globeXPosition = width < 768 ? -2 : -6;
    wireframe.position.x = globeXPosition;
    scene.add(wireframe);

    const circuitsTex = new THREE.TextureLoader().load(circuitsImg);
    const overlayMat = new THREE.MeshBasicMaterial({
      map: circuitsTex,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const overlaySphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.02, 128, 128),
      overlayMat
    );
    overlaySphere.position.x = globeXPosition;
    scene.add(overlaySphere);

    // --- Logos ---
    const logoPaths = [logoJs, logoPython, logoReact, logoTs, logoCss, logoTailwind, logoLaravel, logoFigma, logoTrello];
    const spriteGroup = new THREE.Group();
    spriteGroup.position.x = globeXPosition;
    scene.add(spriteGroup);
    const loader = new THREE.TextureLoader();
    logoPaths.forEach((p, idx) => {
      loader.load(p, (tex) => {
        const mat = new THREE.SpriteMaterial({ 
          map: tex, 
          transparent: true, 
          opacity: 0.7, 
          depthWrite: false, 
          blending: THREE.NormalBlending 
        });
        const sprite = new THREE.Sprite(mat);
        const angle = (idx / logoPaths.length) * Math.PI * 2;
        const r = radius * 1.2;
        const y = Math.sin(angle * 1.4) * 0.7;
        sprite.position.set(r * Math.cos(angle), y, r * Math.sin(angle));
        
        // Taille responsive des logos
        const logoScale = width < 768 ? 1.2 : 1.6;
        sprite.scale.set(logoScale, logoScale, logoScale);
        spriteGroup.add(sprite);
      });
    });

    // Particules
    function createDotTexture() {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const ctx = c.getContext("2d");
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.3, "rgba(180,255,255,0.7)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    }
    const particleCount = width < 768 ? 800 : 1500; 
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      const rr = 8 + Math.random() * 5;
      particlePos[i * 3 + 0] = rr * Math.sin(p) * Math.cos(t);
      particlePos[i * 3 + 1] = rr * Math.sin(p) * Math.sin(t);
      particlePos[i * 3 + 2] = rr * Math.cos(p);
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const partMat = new THREE.PointsMaterial({ size: 0.05, map: createDotTexture(), transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, color: 0x66e6ff });
    const points = new THREE.Points(partGeo, partMat);
    scene.add(points);

    // --- Étoiles ---
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = width < 768 ? 1500 : 3000; 
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starPositions.set([x, y, z], i * 3);
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, transparent: true, opacity: 0.8 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enableRotate = false;
    controls.enablePan = false;

    const handleResize = () => {
      setRendererSize();
      composer.setSize(container.clientWidth, container.clientHeight);
      bloomPass.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      wireframe.rotation.y = t * 0.12;
      overlaySphere.rotation.y = t * 0.1;
      spriteGroup.rotation.y = t * 0.06;
      points.rotation.y = t * 0.015;
      stars.rotation.y = t * 0.002;
      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      composer.dispose();
      renderer.dispose();
      scene.clear();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* Arc lumineux bleu - responsive */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "-10%",
        width: "100%",
        height: "90%",
        background: "radial-gradient(circle at right center, rgba(0,150,255,0.3), transparent 70%)",
        borderTopRightRadius: "100% 100%",
        borderBottomRightRadius: "100% 100%",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Section droite HTML - Responsive */}
      <div className="content-section">
        <div className="content-container">
          <img src={myPhoto} alt="Moi" className="profile-image" />
          <h1 className="main-title">
            DJOUELA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 ">TABEU</span> FLORA DOLORECE
            <div className="scan-effect"></div>
          </h1>
          <p className="description">
            Développeuse passionnée, spécialisée en front-end, back-end et web design.
          </p>
          <button className="spatial-btn" onClick={scrollToAboutMe}>
            En savoir plus
          </button>
        </div>
      </div>

      <style>{`
        /* Section de contenu responsive */
        .content-section {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1;
          color: white;
          padding: 1rem;
          box-sizing: border-box;
        }

        .content-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          max-width: 100%;
        }

        /* Image de profil responsive */
        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 30px rgba(0,150,255,0.6);
          opacity: 0;
          transform: rotateY(180deg) scale(0.5);
          animation: photoEntry 1s ease forwards;
        }

        /* Titre principal responsive */
        .main-title {
          font-size: clamp(1.2rem, 4vw, 2rem);
          font-weight: bold;
          line-height: 1.2;
          margin: 0;
          opacity: 0;
          transform: translateY(-30px);
          animation: nameEntry 0.8s ease forwards;
          animation-delay: 1.2s;
          max-width: 90%;
          word-break: break-word;
        }

        .gradient-text {
          background: linear-gradient(45deg, #00ffff, #0096ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: pulse 2s ease-in-out infinite alternate;
        }

        /* Description responsive */
        .description {
          text-align: center;
          max-width: 280px;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          line-height: 1.4;
          opacity: 0;
          transform: translateY(-20px);
          animation: descEntry 0.8s ease forwards;
          animation-delay: 2s;
          margin: 0;
        }

        /* Bouton spatial responsive */
        .spatial-btn {
          padding: clamp(0.5rem, 2vw, 0.7rem) clamp(1rem, 4vw, 1.7rem);
          border-radius: 10px;
          border: 1px solid rgba(0,150,255,0.5);
          background: rgba(0, 149, 255, 0.13);
          color: white;
          font-weight: bold;
          font-size: clamp(0.8rem, 2.5vw, 1rem);
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          animation: btnEntry 0.6s ease forwards;
          animation-delay: 2.8s;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .spatial-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(0,255,255,0.5), rgba(0,150,255,0.2), rgba(0,255,255,0.5));
          transition: all 0.5s ease;
        }

        .spatial-btn:hover::before {
          left: 100%;
        }

        .spatial-btn:hover {
          transform: scale(1.05);
        }

        /* Responsive breakpoints */
        @media (max-width: 1024px) {
          .content-section {
            width: 60%;
            padding: 0.8rem;
          }
          
          .profile-image {
            width: 160px;
            height: 160px;
          }
        }

        @media (max-width: 768px) {
          .content-section {
            width: 100%;
            right: 0;
            padding: 1rem 2rem;
            justify-content: flex-start;
            padding-top: 15vh;
          }
          
          .profile-image {
            width: 140px;
            height: 140px;
          }

          .description {
            max-width: 90%;
          }
        }

        @media (max-width: 480px) {
          .content-section {
            padding: 1rem 1.5rem;
            padding-top: 20vh;
          }
          
          .profile-image {
            width: 120px;
            height: 120px;
          }

          .content-container {
            gap: 0.8rem;
          }
        }

        @media (max-width: 360px) {
          .content-section {
            padding: 1rem;
            padding-top: 15vh;
          }
          
          .profile-image {
            width: 100px;
            height: 100px;
          }
        }

        /* Animations */
        @keyframes photoEntry {
          0% { opacity: 0; transform: rotateY(180deg) scale(0.5); }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }

        @keyframes nameEntry {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes descEntry {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes btnEntry {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
          0% { opacity: 1; }
          100% { opacity: 0.7; }
        }

        .scan-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent);
          transform: translateX(-100%);
          animation: scan 3s ease-in-out infinite;
        }

        @keyframes scan {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}