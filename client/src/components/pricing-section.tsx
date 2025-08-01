import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Calendar, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const handleBookCall = () => {
    window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/33627596376?text=Bonjour, je souhaite commander une landing page à 499€', '_blank');
  };

  const features = [
    "Landing page responsive sur-mesure",
    "Design professionnel et moderne",
    "Optimisation pour la conversion", 
    "Hébergement inclus",
    "SSL automatique inclus",
    "Domaine offert 1 an",
    "1 révision gratuite incluse",
    "Livraison garantie en 24h"
  ];

  const additionalServices = [
    "Modifications supplémentaires : 30€/modification",
    "Déployé automatiquement"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Une seule offre, tout inclus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pas de complications, pas de choix difficiles. Une landing page professionnelle qui convertit, à prix fixe.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Modern pricing card with gradient background */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-1 shadow-2xl">
              {/* Badge floating above */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-sm flex items-center shadow-xl">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  OFFRE UNIQUE
                </div>
              </div>

              {/* Inner white content */}
              <div className="bg-white rounded-3xl p-10 pt-16">
                {/* Price section with gradient text */}
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-7xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">499</span>
                    <span className="text-3xl text-gray-600 ml-3 font-bold">€</span>
                  </div>
                  <p className="text-xl text-gray-600 font-semibold">
                    Landing page complète • Livraison 24h
                  </p>
                </div>

                {/* Features in two columns */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-5">
                    {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                          <Check className="w-5 h-5 text-white font-bold" />
                        </div>
                        <span className="text-gray-800 font-semibold text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-5">
                    {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
                      <motion.div
                        key={index + Math.ceil(features.length / 2)}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index + Math.ceil(features.length / 2)) * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                          <Check className="w-5 h-5 text-white font-bold" />
                        </div>
                        <span className="text-gray-800 font-semibold text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional services with gradient box */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Services complémentaires</h4>
                  <div className="space-y-3">
                    {additionalServices.map((service, index) => (
                      <div key={index} className="flex items-center text-gray-700 font-medium">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons with modern styling */}
                <div className="space-y-4">
                  <Button
                    onClick={handleBookCall}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    data-testid="pricing-book-call"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    RÉSERVER UN APPEL GRATUIT
                  </Button>
                  
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="lg"
                    className="w-full border-3 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    data-testid="pricing-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Commander via WhatsApp
                  </Button>
                </div>

                {/* Guarantee section with icons */}
                <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200">
                  <div className="flex items-center justify-center space-x-8 text-green-800 font-bold">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Satisfait ou remboursé
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Pas de frais cachés
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Livraison garantie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom testimonial */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-gray-600 italic mb-4">
              "400€ pour une landing page professionnelle livrée en 24h, avec hébergement inclus. 
              C'est exactement ce qu'il fallait pour lancer mon business rapidement."
            </blockquote>
            <cite className="text-gray-900 font-semibold">
              — Client satisfait ProLanding
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}