import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const form = useRef();

  // Configuration EmailJS
  const EMAILJS_CONFIG = {
    serviceID: 'service_7v6w49q',     
    templateID: 'template_wlykvnd',    
    publicKey: 'iHUyRc9xlxRN0VVKN'     
  };

  useEffect(() => {
    // Initialiser EmailJS avec ta clé publique
    emailjs.init(EMAILJS_CONFIG.publicKey);
    
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearStatusMessage = () => {
    setTimeout(() => {
      setSubmitStatus('');
      setStatusMessage('');
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setStatusMessage('');
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Veuillez remplir tous les champs obligatoires.');
      setIsSubmitting(false);
      clearStatusMessage();
      return;
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setStatusMessage('Veuillez entrer une adresse email valide.');
      setIsSubmitting(false);
      clearStatusMessage();
      return;
    }

    try {
      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'floratabeu@gmail.com', 
        reply_to: formData.email,
        timestamp: new Date().toLocaleString('fr-FR')
      };

      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams
      );

      console.log('Email envoyé avec succès:', result);
      setSubmitStatus('success');
      setStatusMessage(`Merci ${formData.name} ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.`);
      
      // Reset du formulaire après succès
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      
      // Messages d'erreur plus spécifiques
      if (error.status === 400) {
        setStatusMessage('Erreur de configuration. Veuillez me contacter directement par email.');
      } else if (error.status === 401) {
        setStatusMessage('Erreur d\'authentification. Veuillez réessayer ou me contacter directement.');
      } else if (error.status === 402) {
        setStatusMessage('Limite d\'envoi atteinte. Veuillez me contacter directement par email.');
      } else {
        setStatusMessage('Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer ou me contacter directement par email ou téléphone.');
      }
    } finally {
      setIsSubmitting(false);
      clearStatusMessage();
    }
  };

  const contactInfo = [
    {
      icon: "📱",
      label: "Téléphone",
      value: "07 74 65 55 63",
      link: "tel:0774655563"
    },
    {
      icon: "📧",
      label: "Email",
      value: "floratabeu@gmail.com",
      link: "mailto:floratabeu@gmail.com"
    },
    {
      icon: "📍",
      label: "Adresse",
      value: "14 Rue Raphael, 13008 Marseille",
      link: "https://maps.google.com/?q=14+Rue+Raphael+13008+Marseille"
    }
  ];

  // Composant pour les messages de statut
  const StatusMessage = () => {
    if (!submitStatus) return null;

    const isSuccess = submitStatus === 'success';
    const bgColor = isSuccess ? 'bg-green-500/20' : 'bg-red-500/20';
    const borderColor = isSuccess ? 'border-green-400/30' : 'border-red-400/30';
    const textColor = isSuccess ? 'text-green-200' : 'text-red-200';
    const icon = isSuccess ? '✅' : '❌';

    return (
      <div className={`mb-6 p-4 rounded-2xl ${bgColor} border ${borderColor} ${textColor} animate-fade-in`}>
        <div className="flex items-center justify-center text-center">
          <span className="text-xl mr-2">{icon}</span>
          <span className="font-medium">{statusMessage}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden" >
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-300 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-12 md:pt-20 pb-8 md:pb-12 px-4">
        <h2 className="about-title">
          CON<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">TACTEZ</span> MOI
          <div className="scan-effect"></div>
        </h2>
        <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
          Discutons de vos projets et transformons vos idées en réalité numérique
        </p>
        <div className="relative mx-auto w-32 md:w-40 h-1 mt-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Section informations de contact */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Restons en <span className="text-blue-400">Contact</span>
                </h2>
                <p className="text-blue-100/80 leading-relaxed text-base md:text-lg">
                  Je suis actuellement à la recherche d'un stage de 6 mois et ouverte aux opportunités 
                  passionnantes. N'hésitez pas à me contacter pour discuter de collaborations ou de projets.
                </p>
              </div>

              {/* Informations de contact */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                  >
                    <a
                      href={info.link}
                      target={info.label === "Adresse" ? "_blank" : "_self"}
                      rel={info.label === "Adresse" ? "noopener noreferrer" : ""}
                      className="flex items-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/10 group"
                    >
                      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/30 flex items-center justify-center text-2xl md:text-3xl mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-blue-300 text-sm md:text-base font-medium mb-1">
                          {info.label}
                        </p>
                        <p className="text-white font-semibold text-base md:text-lg">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

            {/* Réseaux sociaux */}

            <div
              className={`pt-8 transition-all duration-1500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/flora-dolorece-35a57531b" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/30 flex items-center justify-center text-white border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20"
                >
                  in
                </a>
            {/* GitHub */}
            {/* <a
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/30 flex items-center justify-center text-white border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20"
            >
              gh
            </a> */}

              </div>
            </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-3xl blur-xl"
                style={{ transform: 'scale(1.05)' }}
              ></div>
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-blue-500/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Envoyez un <span className="text-blue-400">Message</span>
                </h3>

                {/* Messages de statut améliorés */}
                <StatusMessage />

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nom */}
                    <div className="group">
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="group">
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Décrivez votre projet ou posez votre question..."
                    />
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full relative px-6 py-4 md:py-5 font-semibold text-white rounded-2xl overflow-hidden transition-all duration-500 group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-xl'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #0ea5e9 100%)',
                      boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          ⚡ Envoyer le message
                        </>
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                  </button>
                </form>

                {/* Info EmailJS */}
                <div className="mt-4 text-center">
                  <p className="text-blue-300/60 text-xs">
                    Sécurisé par EmailJS • Pas de stockage des données
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-center pt-16 pb-8 px-4">
        <p className="text-blue-200 text-sm md:text-base">
          © 2025 Flora Dolorece DJOUELA TABEU - Développeuse Web & Mobile
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(-10px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;