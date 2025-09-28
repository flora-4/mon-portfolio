import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    title: "Stage en Développement Web",
    company: "InchClass",
    period: "Janv - Mai 2025",
    type: "Stage",
    description: "Concevoir et développer une ou plusieurs applications web complètes, évolutives et responsives, les sécuriser et les déployer",
    skills: ["React", "Node.js", "MongoDB", "Sécurité Web", "Déploiement"],
    icon: "🌐",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    title: "Stage en Génie Logiciel", 
    company: "Mentalist",
    period: "Juin - Août 2024",
    type: "Stage",
    description: "Manipuler des bases de données, gérer l'intégration avec des APIs et appliquer les bonnes pratiques de programmation",
    skills: ["SQL", "APIs REST", "Architecture", "Clean Code", "Tests"],
    icon: "⚙️",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.5)"
  }
];

export default function Experiences() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Header responsive avec effet holographique */}
      <div className="relative z-10 text-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 text-white leading-tight">
            MES<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient"> EXPERIEN</span>CES
            <div className="scan-effect"></div>
          </h2> 
          
          {/* Ligne de séparation responsive */}
          <div className="relative mx-auto w-32 sm:w-40 lg:w-48 h-1 mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez mon parcours professionnel et les projets qui ont façonné mes compétences
          </p>
        </div>
      </div>

      {/* Container principal responsive */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 400 + 600}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Effet de lueur responsive */}
              <div 
                className={`absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl`}
                style={{
                  background: `linear-gradient(135deg, ${exp.glowColor}, transparent)`
                }}
              />

              {/* Carte principale responsive */}
              <div 
                className={`relative bg-black/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 lg:hover:-translate-y-6 hover:rotate-1 ${
                  hoveredCard === index ? 'border-cyan-400/60 shadow-2xl' : 'border-gray-700/50'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)',
                  boxShadow: hoveredCard === index 
                    ? `0 15px 40px ${exp.glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.1)`
                    : '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Badge de type responsive */}
                <div 
                  className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg bg-gradient-to-r ${exp.color}`}
                  style={{
                    boxShadow: `0 0 15px ${exp.glowColor}`
                  }}
                >
                  {exp.type}
                </div>

                {/* Header responsive de la carte */}
                <div className="flex items-start mb-4 sm:mb-6">
                  <div 
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl lg:text-3xl mr-3 sm:mr-4 lg:mr-6 bg-gradient-to-br ${exp.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    style={{
                      boxShadow: `0 0 15px ${exp.glowColor}`
                    }}
                  >
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-cyan-300 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 font-mono">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Description responsive */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
                  {exp.description}
                </p>

                {/* Compétences responsive */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 hover:scale-105 sm:hover:scale-110 ${
                        hoveredCard === index 
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                          : 'bg-gray-700/30 text-gray-400 border-gray-600/30'
                      }`}
                      style={{
                        transitionDelay: `${skillIndex * 50}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Ligne de progression responsive */}
                <div className="w-full h-0.5 sm:h-1 bg-gray-700/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${exp.color} transition-all duration-1500 ease-out ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 400 + 1200}ms`,
                      boxShadow: `0 0 8px ${exp.glowColor}`
                    }}
                  />
                </div>

                {/* Effet de scan responsive */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* Section statistiques responsive */}
        <div className={`text-center mt-12 sm:mt-16 lg:mt-20 pb-8 sm:pb-12 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.5s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl px-6 sm:px-8 lg:px-12 py-6 sm:py-8 border border-gray-700/50 mx-4">
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-400 mb-1 sm:mb-2">
                <span className="animate-pulse">02</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Stages Réalisés</p>
            </div>
            
            <div className="w-12 h-px sm:w-px sm:h-8 lg:h-12 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-400 mb-1 sm:mb-2">
                <span className="animate-pulse">10+</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Technologies</p>
            </div>
            
            <div className="w-12 h-px sm:w-px sm:h-8 lg:h-12 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-pink-400 mb-1 sm:mb-2">
                <span className="animate-pulse">06</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Mois d'Expérience</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        .animate-scan {
          animation: scan 3s ease-in-out infinite;
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
      `}</style>
    </div>
  );
}