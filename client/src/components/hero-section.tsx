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
    <section className="relative z-10 pt-20 pb-32 overflow-hidden" style={{backgroundColor: 'white', background: 'white', backgroundImage: 'none'}}>
      {/* Simplified background for mobile stability */}
      <div className="hidden md:block absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Premium Badge */}
          <motion.div 
            className="mb-8 motion-div"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <Clock className="w-4 h-4 mr-2" />
              Livraison garantie en 24h
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight motion-div"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
          >
            Landing Page Professionnelle qui <span className="text-blue-600 font-bold">Convertit 3 Fois Plus</span> de Clients
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8 motion-div"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
          >
            Livrée en 24h
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-semibold text-blue-600">Convertit 3 fois plus de clients qu'auparavant.</span> Fini les visiteurs qui repartent sans acheter - transforme ton trafic en revenus concrets. <span className="font-semibold text-blue-600">Vends plus, automatiquement.</span>
          </motion.p>



          {/* USP Highlights */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center text-green-600 font-medium">
              <Clock className="w-5 h-5 mr-2" />
              Livraison garantie en 24h
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
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              data-testid="button-see-offer"
            >
              Voir l'offre
            </Button>
          </motion.div>

          {/* Solution hébergement info */}
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-12 max-w-4xl mx-auto border border-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution hébergement pro au moins cher</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white px-4 py-2 rounded-full text-blue-600 font-semibold border border-blue-200">
                  🌐 Hébergement : 4€/mois
                </span>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
