import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Check, Users, Clock, TrendingDown, Smartphone, Euro } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    problem: "Vos visiteurs arrivent sur votre site mais repartent sans rien acheter",
    solution: "Une landing page qui guide vos visiteurs vers l'achat avec un message clair",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Votre site web met trop de temps à convaincre, les gens partent avant d'acheter",
    solution: "Page qui va droit au but : votre offre, les bénéfices, le bouton d'achat",
    icon: Users,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Vous payez pour de la pub mais ça ne se transforme pas en ventes",
    solution: "Landing page optimisée pour transformer vos visiteurs en clients payants",
    icon: Clock,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Votre site parle de tout mais ne vend rien de précis",
    solution: "Une page focalisée sur une seule offre qui pousse à l'action",
    icon: TrendingDown,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Vous ne savez pas combien de visiteurs deviennent clients",
    solution: "Suivi des conversions inclus pour voir exactement ce qui marche",
    icon: Smartphone,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Votre site n'inspire pas confiance, les gens hésitent à acheter",
    solution: "Design professionnel qui rassure et donne envie d'acheter chez vous",
    icon: Euro,
    color: "text-red-600",
    bgColor: "bg-red-500"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi vous avez besoin d'une landing page ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre site web ne convertit pas ? Voici les problèmes les plus courants et nos solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold ${benefit.color}`}>Votre problème :</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{benefit.problem}</p>
                  <div className="border-t pt-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">{benefit.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
