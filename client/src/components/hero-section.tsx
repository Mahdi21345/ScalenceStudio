import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleBookCall = () => {
    window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/33627596376?text=Bonjour, je souhaite en savoir plus sur vos services de création de sites internet', '_blank');
  };

  return (
    <section className="relative z-10 pt-20 pb-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
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
              Livraison garantie en 24h
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passer au niveau supérieur avec{" "}
            <span className="text-blue-600 font-bold">une Landing Page</span>
            <br />qui fait tripler votre CA
            <br />
            <span className="text-3xl md:text-4xl text-gray-700">livrée en 24h</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nous créons des sites internet sur-mesure qui génèrent des résultats concrets pour votre business. Notre expertise en conversion digitale transforme votre présence en ligne en véritable levier de croissance.
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
              Consultation gratuite 30min-1h
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
