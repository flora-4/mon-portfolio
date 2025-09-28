import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import siteLTSA from "../assets/site-ltsa.png";
import restauUI from "../assets/restaurant-ui.png";
import marienegoce from "../assets/marienegoce.png";
import servicesSupply from "../assets/services-supply.png";
import parfumUI from "../assets/parfum-ui.png";
import artAncestral from "../assets/art-ancestral.png";
import livresUI from "../assets/livres-ui.png";
import biotech from "../assets/biotech.png";

// Liste des projets
const projects = [
  {
    id: 1,
    title: "Site web du LTSA",
    category: "Site Institutionnel",
    description:
      "Développement complet du site officiel du Laboratoire de Technologies et Systèmes Appliqués de l'Université de Douala",
    technologies: ["WordPress", "PHP", "MySQL", "CSS3", "JavaScript"],
    link: "https://ltsa-univ-dla.cm/",
    type: "Site Web",
    status: "En ligne",
    year: "2025",
    image: siteLTSA,
  },
  {
    id: 2,
    title: "Gestion Restaurant - Maquette",
    category: "UI/UX Design",
    description:
      "Conception complète d'une interface de gestion pour restaurants, glaciers et fast-food avec système de commandes et réservations",
    technologies: ["Figma", "UI/UX", "Prototypage", "Design System"],
    link: "https://www.figma.com/proto/...",
    type: "Prototype",
    status: "Terminé",
    year: "2025",
    image: restauUI,
  },
  {
    id: 3,
    title: "Marienegoce",
    category: "E-commerce",
    description:
      "Plateforme de vente en ligne de produits agro-alimentaires avec système de paiement et gestion des stocks",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Gateway"],
    link: "https://marienegoce.com/",
    type: "E-commerce",
    status: "En ligne",
    year: "2024",
    image: marienegoce,
  },
  {
    id: 4,
    title: "Services & Supply",
    category: "Site Commercial",
    description:
      "Site de vente de matériaux de construction et services avec catalogue produits et système de devis",
    technologies: ["WordPress", "Custom Theme", "PHP", "JavaScript", "MySQL"],
    link: "https://servicesandsupply.net/",
    type: "Site Web",
    status: "En ligne",
    year: "2024",
    image: servicesSupply,
  },
  {
    id: 5,
    title: "Maquette Site Parfums",
    category: "UI/UX Design",
    description:
      "Design moderne pour un site de vente de parfums de marques avec interface élégante et expérience utilisateur optimisée",
    technologies: ["Figma", "Adobe XD", "Design System", "Responsive Design"],
    link: "https://www.figma.com/design/...",
    type: "Maquette",
    status: "Terminé",
    year: "2024",
    image: parfumUI,
  },
  {
    id: 6,
    title: "Art Ancestral",
    category: "Site Culturel",
    description:
      "Site d'exposition et vente de statues ancestrales avec galerie interactive et système de commande",
    technologies: ["WordPress", "Custom Gallery", "PHP", "JavaScript", "CSS3"],
    link: "https://art.marienegoce.com/",
    type: "Site Web",
    status: "En ligne",
    year: "2024",
    image: artAncestral,
  },
  {
    id: 7,
    title: "Maquette Livres Électroniques",
    category: "UI/UX Design",
    description:
      "Interface moderne pour plateforme de vente de livres électroniques avec système de lecture intégré",
    technologies: ["Figma", "UI/UX", "Wireframing", "User Research"],
    link: "https://www.figma.com/design/...",
    type: "Maquette",
    status: "Terminé",
    year: "2024",
    image: livresUI,
  },
  {
    id: 8,
    title: "Laboratoire Biotech",
    category: "Site Scientifique",
    description:
      "Site professionnel pour laboratoire de biotechnologie avec présentation des services et équipements",
    technologies: ["WordPress", "Custom Theme", "PHP", "MySQL", "Responsive"],
    link: "https://lbiotech.marienegoce.com/",
    type: "Site Web",
    status: "En ligne",
    year: "2024",
    image: biotech,
  },
];

const categories = ["Tous", "Site Web", "E-commerce", "UI/UX Design", "Maquette", "Prototype"];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === "Tous") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(
          (project) =>
            project.type === selectedCategory ||
            project.category.includes(selectedCategory)
        )
      );
    }
  }, [selectedCategory]);

  const getStatusColor = (status) => {
    switch (status) {
      case "En ligne":
        return "from-green-500 to-emerald-500";
      case "Terminé":
        return "from-blue-500 to-cyan-500";
      case "En cours":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* === Header === */}
      <div className="relative z-10 text-center  pb-16">
        <h2 className="about-title">
          MES{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
            PROJETS
          </span>
          <div className="scan-effect"></div>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          Découvrez une sélection de mes réalisations, allant du développement web au design d'interfaces
        </p>
      </div>

      {/* === Filtres === */}
      <div className="flex justify-center mb-16 px-4">
        <div className="flex flex-wrap justify-center gap-3 bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-2xl scale-105"
                  : "text-gray-400 border-gray-600/50 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* === Grille des projets === */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative transition-all duration-1000"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50" />

              {/* Carte projet */}
              <div
                className={`relative bg-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border-2 transition-all duration-700 group-hover:-translate-y-3 ${
                  hoveredProject === project.id
                    ? "border-cyan-400/60 shadow-2xl"
                    : "border-gray-700/30"
                }`}
              >
                {/* Image projet */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badge Statut */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </div>

                  {/* Badge Année */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-black/50 backdrop-blur-sm border border-cyan-500/30">
                    {project.year}
                  </div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                      >
                        Voir le projet →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contenu carte */}
                <div className="p-6">
                  <span className="text-cyan-400 text-sm font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 mt-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-lg text-xs font-medium border ${
                          hoveredProject === project.id
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                            : "bg-gray-700/30 text-gray-400 border-gray-600/30"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-medium text-gray-500 bg-gray-700/20 border border-gray-600/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
