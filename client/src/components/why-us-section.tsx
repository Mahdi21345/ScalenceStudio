import { motion } from 'framer-motion';
import { Eye, Users, Zap, CheckCircle } from 'lucide-react';

export default function WhyUsSection() {
  const advantages = [
    {
      icon: Eye,
      title: "Maquette gratuite avant achat",
      description: "Contrairement à nos concurrents, vous verrez exactement à quoi ressemblera votre site avant de payer. Après notre appel, nous créons une maquette personnalisée gratuite de votre future landing page.",
      highlight: true
    },
    {
      icon: Zap,
      title: "Livraison en 24h garantie",
      description: "Une fois la maquette validée et le paiement effectué, votre site est livré en moins de 24h. Pas de semaines d'attente comme ailleurs."
    },
    {
      icon: Users,
      title: "Approche 100% transparente",
      description: "Pas de surprises, pas de frais cachés. Le prix affiché est le prix final. Vous savez exactement ce que vous obtenez avant même de commencer."
    },
    {
      icon: CheckCircle,
      title: "Satisfaction garantie",
      description: "Si le résultat final ne correspond pas à la maquette validée, nous remboursons intégralement. Votre satisfaction est notre priorité absolue."
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous révolutionnons la création de sites web avec une approche unique : 
            <span className="font-semibold text-blue-600"> voyez avant d'acheter</span>
          </p>
        </motion.div>

        {/* Main differentiator */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Eye className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Notre différence : la maquette gratuite
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Après notre appel de découverte, nous créons une maquette visuelle gratuite de votre future landing page. 
              Vous voyez exactement le rendu final avant de prendre votre décision d'achat. 
              <strong> Aucun concurrent ne propose cela.</strong>
            </p>
          </div>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl ${advantage.highlight 
                ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200' 
                : 'bg-white border border-gray-200'
              } hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`advantage-${index}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${advantage.highlight 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                : 'bg-gray-100'
              } flex items-center justify-center mb-6`}>
                <advantage.icon className={`w-8 h-8 ${advantage.highlight ? 'text-white' : 'text-gray-600'}`} />
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${advantage.highlight ? 'text-blue-900' : 'text-gray-900'}`}>
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
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
                Soyez parmi les premiers à découvrir notre service révolutionnaire. 
                Après votre appel de consultation, recevez une <strong>maquette personnalisée gratuite</strong> 
                de votre future landing page. Voyez le résultat avant de vous engager !
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://calendly.com/votre-lien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  data-testid="launch-offer-cta"
                >
                  RÉSERVER MON APPEL GRATUIT
                </a>
                <p className="text-sm opacity-80">
                  ⏰ Offre limitée - Plus que quelques places !
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}