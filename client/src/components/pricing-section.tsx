import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Calendar, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const handleBookCall = () => {
    window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/33627596376?text=Bonjour, je souhaite commander une landing page à 400€', '_blank');
  };

  const features = [
    "Landing page responsive sur-mesure",
    "Design professionnel et moderne",
    "Optimisation pour la conversion", 
    "Hébergement inclus",
    "SSL automatique inclus",
    "1 révision gratuite incluse",
    "Livraison garantie en 24h"
  ];

  const additionalServices = [
    "Modifications supplémentaires : 30€/modification",
    "Domaine personnalisé : En option",
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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-2xl border-0 relative bg-gradient-to-br from-blue-50 to-purple-50">
              {/* Popular badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-sm flex items-center shadow-lg">
                  <Star className="w-5 h-5 mr-2" />
                  OFFRE UNIQUE
                </div>
              </div>

              <CardContent className="p-12 pt-16">
                {/* Price */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-8xl font-black text-gray-900">400</span>
                    <span className="text-3xl text-gray-600 ml-3 font-semibold">€</span>
                  </div>
                  <p className="text-xl text-gray-600 font-medium">
                    Landing page complète • Tout inclus
                  </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="space-y-5">
                    {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-7 h-7 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <Check className="w-5 h-5 text-green-600 font-bold" />
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
                        transition={{ duration: 0.5, delay: (index + Math.ceil(features.length / 2)) * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-7 h-7 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <Check className="w-5 h-5 text-green-600 font-bold" />
                        </div>
                        <span className="text-gray-800 font-semibold text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional services */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Services inclus & complémentaires</h4>
                  <div className="space-y-2">
                    {additionalServices.map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Button
                    onClick={handleBookCall}
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    data-testid="pricing-book-call"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    RÉSERVER UN APPEL GRATUIT
                  </Button>
                  
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-4 rounded-lg transition-all duration-200"
                    data-testid="pricing-whatsapp"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Commander via WhatsApp
                  </Button>
                </div>

                {/* Guarantee */}
                <div className="text-center mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    ✓ Garantie satisfait ou remboursé • ✓ Pas de frais cachés • ✓ Support inclus
                  </p>
                </div>
              </CardContent>
            </Card>
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