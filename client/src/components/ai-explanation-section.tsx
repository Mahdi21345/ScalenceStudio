import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function AIExplanationSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Fini les heures perdues",
      description: "Plus besoin de passer des heures à modifier ton site. Une simple ligne de texte suffit.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Zap,
      title: "Modifications instantanées",
      description: "Tu écris ce que tu veux changer, l'IA l'exécute en quelques secondes.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Bot,
      title: "Agent IA intelligent",
      description: "Comprend le français naturel et sait exactement quoi modifier sur ton site.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: DollarSign,
      title: "App tierce - 24€/mois",
      description: "Service optionnel qui révolutionne la façon de gérer ton site web.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Agent IA : Modifie ton site en une ligne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <span className="font-semibold text-orange-600">App tierce non incluse</span> - On te recommande la meilleure solution pour modifier facilement ton site. <span className="font-semibold text-blue-600">Tout sera expliqué en visio</span>.
          </p>
          
          {/* Example showcase */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 max-w-4xl mx-auto text-white mb-12">
            <h3 className="text-xl font-bold mb-6">Exemple concret :</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-blue-300 font-semibold mb-2 text-sm">👤 TOI :</div>
                <p className="text-white font-medium">"Change le prix de 499€ à 399€ et mets le bouton principal en rouge"</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-green-300 font-semibold mb-2 text-sm">🤖 AGENT IA :</div>
                <p className="text-white font-medium">"Modification effectuée ! Prix changé à 399€, bouton principal rouge activé."</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-2xl mx-auto border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Une solution recommandée, pas incluse
            </h3>
            <p className="text-gray-700 text-sm">
              Cette app tierce coûte 24€/mois et n'est pas incluse dans notre offre. <span className="font-semibold text-blue-600">On t'expliquera tout en détail lors de la visio</span> pour que tu puisses décider.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}