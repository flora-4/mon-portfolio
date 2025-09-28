import React, { useState, useEffect, useCallback } from 'react';

import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/js.png";
import htmlLogo from "../assets/html.png";
import pythonLogo from "../assets/python.png";
import laravelLogo from "../assets/laravel.png";
import flutterLogo from "../assets/flutter.png";
import wordpressLogo from "../assets/wordpress.png";
import tailwindLogo from "../assets/tailwind.png";

const SkillsPortfolio = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const positions = [
    { x: 0, y: -260 },
    { x: 226, y: -200 },
    { x: 300, y: 0 },
    { x: 226, y: 226 },
    { x: 0, y: 250 },
    { x: -226, y: 226 },
    { x: -300, y: 0 },
    { x: -226, y: -226 }
  ];

  // Positions mobiles plus proches de l'hexagone central
  const mobilePositions = [
    { x: 0, y: -180 },
    { x: 127, y: -127 },
    { x: 180, y: 0 },
    { x: 127, y: 127 },
    { x: 0, y: 180 },
    { x: -127, y: 127 },
    { x: -180, y: 0 },
    { x: -127, y: -127 }
  ];

  const skills = [
    { icon: reactLogo, name: "REACT\nFRONTEND" },
    { icon: jsLogo, name: "JAVASCRIPT\nES6+" },
    { icon: htmlLogo, name: "HTML5\nMARKUP" },
    { icon: pythonLogo, name: "PYTHON\nBACKEND" },
    { icon: laravelLogo, name: "LARAVEL\nPHP" },
    { icon: flutterLogo, name: "FLUTTER\nMOBILE" },
    { icon: wordpressLogo, name: "WORDPRESS\nCMS" },
    { icon: tailwindLogo, name: "TAILWIND\nCSS" }
  ];

  // Lancer l'animation après 1s
  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="min-h-screen flex justify-center items-center overflow-hidden relative"
      style={{ fontFamily: "'Orbitron', monospace", color: 'white' }}
    >
      {/* Container principal */}
      <div className="relative w-screen h-screen flex justify-center items-center">
        
        {/* Hexagone central */}
        <div
          className="absolute flex flex-col justify-center items-center cursor-pointer transition-all duration-300 z-10 central-hexagon"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            border: '2px solid #00ffff',
            width: '220px',
            height: '220px',
            animation: `rotate-initial 3s ease-in-out, glow-pulse 2s ease-in-out infinite alternate`
          }}
        >
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-3xl mb-4 central-icon"
            style={{
              background: 'linear-gradient(45deg, #ff0080, #00ffff)',
              boxShadow: '0 0 15px rgba(255, 0, 128, 0.5)',
              animation: 'profile-glow 3s ease-in-out infinite alternate'
            }}
          >
            ⚡
          </div>
          <div 
            className="text-cyan-400 text-sm text-center font-bold tracking-widest central-text"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
            }}
          >
            COMPÉTENCES<br />SYSTÈME
          </div>
        </div>

        {/* Lignes de connexion + nœuds */}
        {positions.map((pos, index) => {
          // Utiliser les positions mobiles sur petit écran
          const isMobile = window.innerWidth <= 768;
          const currentPos = isMobile ? mobilePositions[index] : pos;
          
          const distance = Math.sqrt(pos.x * pos.x + pos.y * pos.y) - 180;
          const mobileDistance = Math.sqrt(pos.x * pos.x + pos.y * pos.y) - 120;
          const angle = Math.atan2(pos.y, pos.x) * 180 / Math.PI;
          
          return (
            <React.Fragment key={index}>
              {/* Ligne */}
              <div
                className="absolute h-0.5 connection-line"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
                  transformOrigin: 'left center',
                  width: `${distance}px`,
                  left: `calc(50% + ${pos.x * 0.35}px)`,
                  top: `calc(50% + ${pos.y * 0.35}px)`,
                  transform: `rotate(${angle}deg)`,
                  opacity: animationStarted ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  '--mobile-width': `${mobileDistance}px`
                }}
              />

              {/* Nœud */}
              <div
                className="absolute flex flex-col justify-center items-center bg-black/40 backdrop-blur-xl rounded-xl skill-card"
                style={{
                  left: `calc(50% + ${currentPos.x}px - 70px)`,
                  top: `calc(50% + ${currentPos.y}px - 70px)`,
                  opacity: animationStarted ? 1 : 0,
                  transform: animationStarted ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.5s ease',
                  border: '1px solid #00ffff',
                  boxShadow: `0 0 15px rgba(0, 255, 255, 0.3)`,
                  width: '140px',
                  height: '140px'
                }}
              >
                {/* Logo image */}
                <img 
                  src={skills[index].icon} 
                  alt={skills[index].name} 
                  className="w-12 h-12 object-contain mb-2 skill-icon"
                />
                <div
                  className="text-xs font-bold text-center tracking-wider skill-text"
                  style={{
                    color: '#00ffff',
                    textShadow: '0 0 8px rgba(0, 255, 255, 0.6)',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {skills[index].name}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes rotate-initial {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes glow-pulse {
          0% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          100% { box-shadow: 0 0 40px rgba(0, 255, 255, 0.8); }
        }
        @keyframes profile-glow {
          0% { box-shadow: 0 0 15px rgba(255, 0, 128, 0.5); }
          100% { box-shadow: 0 0 25px rgba(255, 0, 128, 0.8), 0 0 35px rgba(0, 255, 255, 0.4); }
        }

        /* Ajustements pour mobile uniquement */
        @media (max-width: 768px) {
          /* Hexagone central plus petit sur mobile */
          .central-hexagon {
            width: 150px !important;
            height: 150px !important;
          }
          
          /* Icône centrale plus petite */
          .central-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 20px !important;
            margin-bottom: 8px !important;
          }
          
          /* Texte central plus petit */
          .central-text {
            font-size: 9px !important;
            line-height: 1.2 !important;
          }

          /* Cartes repositionnées plus près du centre sur mobile */
          .skill-card:nth-of-type(3) { /* Top */
            left: calc(50% + 0px - 42.5px) !important;
            top: calc(50% + -180px - 42.5px) !important;
          }
          .skill-card:nth-of-type(5) { /* Top-right */
            left: calc(50% + 127px - 42.5px) !important;
            top: calc(50% + -127px - 42.5px) !important;
          }
          .skill-card:nth-of-type(7) { /* Right */
            left: calc(50% + 180px - 42.5px) !important;
            top: calc(50% + 0px - 42.5px) !important;
          }
          .skill-card:nth-of-type(9) { /* Bottom-right */
            left: calc(50% + 127px - 42.5px) !important;
            top: calc(50% + 127px - 42.5px) !important;
          }
          .skill-card:nth-of-type(11) { /* Bottom */
            left: calc(50% + 0px - 42.5px) !important;
            top: calc(50% + 180px - 42.5px) !important;
          }
          .skill-card:nth-of-type(13) { /* Bottom-left */
            left: calc(50% + -127px - 42.5px) !important;
            top: calc(50% + 127px - 42.5px) !important;
          }
          .skill-card:nth-of-type(15) { /* Left */
            left: calc(50% + -180px - 42.5px) !important;
            top: calc(50% + 0px - 42.5px) !important;
          }
          .skill-card:nth-of-type(17) { /* Top-left */
            left: calc(50% + -127px - 42.5px) !important;
            top: calc(50% + -127px - 42.5px) !important;
          }
          .skill-card {
            width: 85px !important;
            height: 85px !important;
          }

          .skill-icon {
            width: 24px !important;
            height: 24px !important;
            margin-bottom: 4px !important;
          }

          .skill-text {
            font-size: 8px !important;
            line-height: 1.1 !important;
          }

          /* Supprimer complètement les lignes de connexion sur mobile */
          .connection-line {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsPortfolio;