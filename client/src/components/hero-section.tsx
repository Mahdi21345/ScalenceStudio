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
    <section className="relative z-10 pt-20 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faites passer{" "}
            <span className="text-blue-600 font-bold">votre business</span>
            {" "}au niveau supérieur
            <br />avec une landing page livrée en 24h
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nous créons des landing pages sur-mesure qui génèrent des résultats concrets pour votre business. Notre expertise en conversion digitale transforme votre présence en ligne en véritable levier de croissance.
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
