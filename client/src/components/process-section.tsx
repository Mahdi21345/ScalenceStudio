import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
// Images for the process steps
const processSteps = [
  {
    number: "01",
    title: "Découverte",
    description: "Consultation gratuite pour comprendre vos besoins spécifiques et définir votre stratégie digitale.",
    image: "/attached_assets/IMG_6189 2_1754009931906.PNG"
  },
  {
    number: "02",
    title: "Design",
    description: "Création du design sur-mesure adapté à votre secteur et optimisé pour la conversion.",
    image: "/attached_assets/IMG_6188 3_1754009940487.PNG"
  },
  {
    number: "03",
    title: "Développement",
    description: "Intégration technique et rédaction des contenus optimisés pour votre audience.",
    image: "/attached_assets/IMG_6190_1754009924938.PNG"
  },
  {
    number: "04",
    title: "Livraison",
    description: "Mise en ligne de votre site et formation pour la gestion autonome de vos contenus.",
    image: "/attached_assets/IMG_6191 2_1754009909273.PNG"
  }
];

export default function ProcessSection() {
  const handleBookCall = () => {
    window.open('mailto:mahguez368@gmail.com?subject=Demande de consultation gratuite', '_blank');
  };

  return (
    <section id="processus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre processus de création
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Création et livraison de votre site internet professionnel en moins de 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center mb-4">
                    {step.description}
                  </p>
                  {/* Image */}
                  <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden">
                    {step.image ? (
                      <img 
                        src={step.image} 
                        alt={`${step.title} process step`}
                        className="w-full h-full object-cover"
                        data-testid={`process-image-${index}`}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Étape {step.number}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Connector line - only show between steps, not after the last one */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleBookCall}
            size="lg"
            className="gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white"
            data-testid="button-start-project"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Démarrer mon projet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
