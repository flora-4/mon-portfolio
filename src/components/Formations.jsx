import React, { useState, useEffect } from "react";
import epitechLogo from "../assets/epitech.png"; 
import dclicLogo from "../assets/dclic.png";     
import inchclassLogo from "../assets/inchclass.png"; 
import iutDoualaLogo from "../assets/iut.png"; 

const formations = [
  {
    title: "Master Of Science",
    school: "EPITECH",
    date: "2025 - 2028",
    desc: "Développement web, JAVA, Reseau, IA, Data...",
    image: epitechLogo,
    imageAlt: "Logo EPITECH"
  },
  {
    title: "Formation en développement mobile",
    school: "D-CLIC",
    date: "Juin - Sept 2025",
    desc: "Apprentissage en ligne du développement mobile",
    image: dclicLogo,
    imageAlt: "Logo D-CLIC"
  },
  {
    title: "Formation en développement web",
    school: "InchClass",
    date: "Janv - Mai 2025",
    desc: "Bases solides en développement web moderne",
    image: inchclassLogo,
    imageAlt: "Logo InchClass"
  },
  {
    title: "Diplôme Universitaire des Technologies",
    school: "IUT DOUALA",
    date: "Sept 2023 - Juin 2025",
    desc: "Bac +2 Génie informatique",
    image: iutDoualaLogo,
    imageAlt: "Logo IUT DOUALA"
  },
];

export default function Formations() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleImageLoad = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: false
    }));
  };

  return (
    <div className="min-h-screen relative">
      {/* Particles d'arrière-plan */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      {/* Header futuriste */}
      <div className="relative z-10 text-center pt-16 pb-8">
        <h2 className="about-title">
          MES <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse">FORMAT</span>IONS
          <div className="scan-effect"></div>
        </h2>
        <div className="relative mx-auto w-32 h-1">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* Container responsive */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-center min-h-[70vh] space-y-10 lg:space-y-0">
        <div className="relative w-full lg:w-96 h-[400px] lg:h-[600px] lg:mr-16 mb-10 lg:mb-0">
          <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent rounded-full blur-3xl"></div>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400">
            <defs>
              <linearGradient
                id="neonGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="30%" stopColor="#0080ff" />
                <stop offset="70%" stopColor="#0040ff" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ombre/lueur de l'arc */}
            <path
              d="M 80 350 A 100 100 0 0 1 80 50"
              fill="none"
              stroke="#00ffff"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.3"
              filter="url(#glow)"
              className={`transition-all duration-3000 ease-out ${
                isVisible ? "opacity-30" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 314,
                strokeDashoffset: isVisible ? 0 : 314,
                transition: "stroke-dashoffset 3s ease-out",
              }}
            />

            {/* Arc principal */}
            <path
              d="M 80 350 A 100 100 0 0 1 80 50"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#glow)"
              className={`transition-all duration-3000 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 314,
                strokeDashoffset: isVisible ? 0 : 314,
                transition: "stroke-dashoffset 3s ease-out 0.5s",
              }}
            />
          </svg>

          {/* Arc interne plus fin */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400">
            <path
              d="M 110 320 A 70 70 0 0 1 110 80"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
              className={`transition-all duration-2500 delay-1000 ease-out ${
                isVisible ? "opacity-80" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 220,
                strokeDashoffset: isVisible ? 0 : 220,
                transition: "stroke-dashoffset 2.5s ease-out 1s",
              }}
            />
          </svg>

          {/* Points de connexion */}
          {formations.map((_, index) => {
            const angle = (index / (formations.length - 1)) * Math.PI;
            const radius = 100;
            const centerX = 80;
            const centerY = 200;
            const x = centerX - radius * Math.cos(angle);
            const y = centerY - radius * Math.sin(angle);

            return (
              <div
                key={index}
                className={`absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                  boxShadow:
                    "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
                  transition: `all 0.7s ease-out ${1.5 + index * 0.2}s`,
                }}
              />
            );
          })}

          {/* Texte central */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1500 delay-2000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-2 tracking-wider">
              PARCOURS
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mb-3"></div>
            <p className="text-sm text-cyan-200 leading-relaxed max-w-28 opacity-80">
              Évolution académique et professionnelle
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col space-y-8 w-full lg:w-auto">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center relative space-y-4 lg:space-y-0"
            >
              <svg
                className="hidden lg:block absolute -left-16 w-20 h-2"
                viewBox="0 0 80 8"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <path
                  d="M 0 4 L 80 4"
                  stroke="#00d4ff"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  fill="none"
                  className="transition-all duration-1500 ease-out"
                  style={{
                    filter: "drop-shadow(0 0 3px #00d4ff)",
                    strokeDashoffset: isVisible ? 0 : 80,
                    transition: `stroke-dashoffset 1.5s ease-out ${
                      1.8 + index * 0.3
                    }s`,
                  }}
                />
              </svg>

              {/* Numéro futuriste */}
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg lg:mr-6 transition-all duration-1000 relative ${
                  isVisible
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-180"
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, #00ffff 0%, #0080ff 50%, #0040ff 100%)",
                  boxShadow:
                    "0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.3)",
                  transition: `all 1s ease-out ${2 + index * 0.3}s`,
                }}
              >
                {String(index + 1).padStart(2, "0")}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>

              {/* Carte */}
              <div
                className={`bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-full lg:max-w-md border border-cyan-500/30 transform transition-all duration-1200 hover:scale-105 hover:border-cyan-400/50 ${
                  isVisible
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-12 scale-95"
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 20, 40, 0.8) 0%, rgba(0, 40, 80, 0.6) 100%)",
                  boxShadow:
                    "0 8px 32px rgba(0, 200, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  transition: `all 1.2s ease-out ${2.2 + index * 0.3}s`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden relative group p-2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 128, 255, 0.3) 100%)",
                        border: "1px solid rgba(0, 255, 255, 0.3)",
                      }}
                    >
                      {/* Image de l'établissement */}
                      {!imageErrors[index] ? (
                        <img
                          src={formation.image}
                          alt={formation.imageAlt}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={() => handleImageError(index)}
                          onLoad={() => handleImageLoad(index)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-cyan-300 font-bold text-lg">
                          {formation.school.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      
                      {/* Overlay au hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-white mb-2">
                      {formation.title}
                    </h3>
                    <p className="text-cyan-300 font-semibold text-sm mb-1">
                      {formation.school}
                    </p>
                    <p className="text-cyan-200/70 text-sm mb-3">
                      {formation.date}
                    </p>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {formation.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}