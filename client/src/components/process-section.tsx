import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Pencil, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Découverte et premiers pas",
    description: "Parle-nous de ton projet en visioconférence. On comprend tes besoins et on s'occupe du reste.",
    icon: MessageSquare,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    number: "02",
    title: "Copywriting qui convertit",
    description: "Notre équipe transforme ton offre complexe en message clair qui vend et rassure tes prospects.",
    icon: Pencil,
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    number: "03", 
    title: "Design et développement",
    description: "Nous créons ta landing page avec un design qui inspire confiance et pousse à l'action.",
    icon: Globe,
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    number: "04",
    title: "Livraison et optimisation",
    description: "Réponse sous 10h en jour ouvré. On programme un appel pour te présenter le projet et l'optimiser selon tes retours.",  
    icon: CheckCircle,
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

export default function ProcessSection() {
  const handleBookCall = () => {
    window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank');
  };

  return (
    <section id="processus" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre processus de conception
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Création et livraison de ta landing page <span className="font-semibold text-blue-600">prête à convertir en moins de 48h</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-6 mx-auto">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <step.icon className={`w-10 h-10 ${step.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Arrow - only show between steps, not after the last one */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8">
                  <div className="w-6 h-0.5 bg-gray-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-0 transform -translate-y-1"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleBookCall}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
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
