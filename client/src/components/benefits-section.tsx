import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Check, Users, Clock, TrendingDown, Smartphone, Euro } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    problem: "Complexité de ton offre, difficile d'expliquer ta valeur aux prospects",
    solution: "On explique clairement et simplement ton produit avec des mots que tout le monde comprend",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Peurs de tes clients, ils hésitent et remettent à plus tard leur achat",
    solution: "On rassure tes prospects avec des preuves sociales et éléments de confiance",
    icon: Users,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Concurrence intense, tu n'arrives pas à te différencier clairement",
    solution: "Une landing page qui te différencie et rend ton offre irrésistible",
    icon: Clock,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Tu perds du temps à expliquer à tout le monde ton produit/service",
    solution: "Ton service devient irrésistible grâce au copywriting qui vend",
    icon: TrendingDown,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Message pas clair, tes visiteurs ne comprennent pas ta valeur",
    solution: "On explique vraiment les bénéfices concrets de ton offre",
    icon: Smartphone,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Site généraliste qui dilue ton message et confond tes visiteurs",
    solution: "Page laser-focalisée sur une offre avec un seul objectif : vendre",
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
            Pourquoi ProLanding te fera vendre plus ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu as des freins à la vente et nous en sommes conscients. <span className="font-semibold text-blue-600">Nous avons trouvé une méthode efficace pour les enlever et te faire scaler.</span>
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
                    <h3 className={`text-lg font-semibold ${benefit.color}`}>Ton problème :</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{benefit.problem}</p>
                  <div className="border-t pt-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
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
