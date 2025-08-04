import { motion } from 'framer-motion';
import { Eye, Users, Zap, CheckCircle } from 'lucide-react';

export default function WhyUsSection() {
  const advantages = [
    {
      icon: Eye,
      title: "Maquette gratuite avant production",
      description: "Tu valides le design avant qu'on commence. Pas de surprise, tu vois exactement ce que tu auras avant de payer.",
      highlight: true
    },
    {
      icon: Zap,
      title: "Réponse rapide garantie",
      description: "Réponse sous 10h en jour ouvré pour que tu puisses commencer à vendre rapidement. Ta concurrence met des semaines, nous quelques heures.",
      highlight: false,
      color: "green"
    },
    {
      icon: Users,
      title: "Prix compétitifs",
      description: "499€ tout compris, le prix le moins cher du marché. Tu sais exactement combien ça coûte avant de commencer.",
      highlight: false,
      color: "orange"
    },
    {
      icon: CheckCircle,
      title: "Support technique inclus",
      description: "Support complet inclus avec formation en visioconférence. On t'accompagne pour la mise en ligne de ta landing page.",
      highlight: false,
      color: "emerald"
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi ProLanding ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Création et livraison de ta landing page prête à convertir en moins de 24h.
            <span className="font-semibold text-blue-600"> Landing pages qui convertissent vraiment au prix le moins cher.</span>
          </p>
        </motion.div>

        {/* Main differentiator */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Eye className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Notre processus de conception
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              On transforme ton offre complexe en message clair qui convertit. 
              Copywriting qui vend, design qui rassure, livraison ultra-rapide. Tu scales, on s'occupe du reste.
            </p>
          </div>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => {
            const getColors = (advantage: any) => {
              if (advantage.highlight) {
                return {
                  bg: 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200',
                  iconBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
                  iconText: 'text-white',
                  title: 'text-blue-900'
                };
              }
              
              switch (advantage.color) {
                case 'green':
                  return {
                    bg: 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200',
                    iconBg: 'bg-gradient-to-r from-green-600 to-emerald-600',
                    iconText: 'text-white',
                    title: 'text-green-900'
                  };
                case 'orange':
                  return {
                    bg: 'bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200',
                    iconBg: 'bg-gradient-to-r from-orange-600 to-amber-600',
                    iconText: 'text-white',
                    title: 'text-orange-900'
                  };
                case 'emerald':
                  return {
                    bg: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200',
                    iconBg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
                    iconText: 'text-white',
                    title: 'text-emerald-900'
                  };
                default:
                  return {
                    bg: 'bg-white border border-gray-200',
                    iconBg: 'bg-gray-100',
                    iconText: 'text-gray-600',
                    title: 'text-gray-900'
                  };
              }
            };
            
            const colors = getColors(advantage);
            
            return (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl ${colors.bg} hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}
                viewport={{ once: true }}
                data-testid={`advantage-${index}`}

              >
                <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-6`}>
                  <advantage.icon className={`w-8 h-8 ${colors.iconText}`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${colors.title}`}>
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Launch offer with urgency */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-bold uppercase tracking-wider">🚀 Offre de lancement</span>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">
                Maquette gratuite pour les 10 premiers clients !
              </h3>
              
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Sois parmi les premiers à découvrir notre service révolutionnaire. 
                Après ton appel de consultation, reçois une <strong>maquette personnalisée gratuite</strong> 
                de ton futur site internet. Vois le résultat avant de t'engager !
              </p>

              {/* Counter or urgency indicator */}
              <div className="bg-white/10 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-center space-x-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">10</div>
                    <div className="text-sm opacity-80">Places restantes</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div>
                    <div className="text-3xl font-bold">24h</div>
                    <div className="text-sm opacity-80">Livraison garantie</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div>
                    <div className="text-3xl font-bold">0€</div>
                    <div className="text-sm opacity-80">Maquette gratuite</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      const pricingCard = pricingSection.querySelector('.bg-gradient-to-br');
                      if (pricingCard) {
                        pricingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      } else {
                        pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                  className="bg-white text-red-600 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                  data-testid="buy-landing-page-cta"
                >
                  ACHETER MA LANDING PAGE
                </button>
              </div>
              <p className="text-sm opacity-80 mt-4">
                ⏰ Offre limitée - Plus que quelques places !
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}