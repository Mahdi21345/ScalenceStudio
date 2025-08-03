import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleBookCall = () => {
    window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/33627596376?text=Bonjour, je souhaite en savoir plus sur tes services de landing pages', '_blank');
  };

  return (
    <section className="relative z-10 pt-20 pb-32 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Premium Badge */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <Clock className="w-4 h-4 mr-2" />
              Réponse sous 10h en jour ouvré
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passe au niveau <span className="text-blue-600 font-bold">supérieur</span> avec une Landing Page
            <br />
            qui fait <span className="text-blue-600 font-bold">tripler ton taux de conversion</span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Réponse rapide garantie
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ton offre est géniale mais personne ne l'achète ? Vends plus avec une landing page qui explique clairement ta valeur et pousse à l'action. <span className="font-semibold text-blue-600">Au prix le moins cher du marché.</span>
          </motion.p>

          {/* Simple pricing info */}
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-12 max-w-4xl mx-auto border border-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution hébergement pro au moins cher</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white px-4 py-2 rounded-full text-blue-600 font-semibold border border-blue-200">
                  🌐 Hébergement : 4€/mois
                </span>
                <span className="bg-white px-4 py-2 rounded-full text-green-600 font-semibold border border-green-200">
                  ✅ Domaine 1€/an
                </span>
              </div>
            </div>
          </motion.div>

          {/* USP Highlights */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center text-green-600 font-medium">
              <Clock className="w-5 h-5 mr-2" />
              Réponse sous 10h en jour ouvré
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <Users className="w-5 h-5 mr-2" />
              Prix le plus compétitif du marché
            </div>
          </motion.div>

          {/* Double CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={handleBookCall}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              data-testid="button-book-call"
            >
              <Calendar className="w-5 h-5 mr-2" />
              RÉSERVER UN APPEL
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              data-testid="button-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contacter WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
