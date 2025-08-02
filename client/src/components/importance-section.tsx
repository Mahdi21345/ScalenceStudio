import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const importancePoints = [
  {
    icon: TrendingUp,
    title: "Marges attractives pour votre agence",
    description: "Revendez nos landing pages avec une marge confortable et augmentez vos revenus récurrents.",
    stat: "Profit",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Target,
    title: "Service en marque blanche",
    description: "Vos clients ne voient que votre marque, vous gardez la relation commerciale complète.",
    stat: "Marque",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Livraison ultra-rapide",
    description: "Délai de 24h garanti pour impressionner vos clients et vous démarquer de la concurrence.",
    stat: "Rapidité",
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: BarChart3,
    title: "Support technique inclus",
    description: "Nous gérons toute la partie technique, vous vous concentrez sur la relation client.",
    stat: "Support",
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    icon: Users,
    title: "Satisfaction client garantie",
    description: "Landing pages optimisées qui génèrent des résultats, vos clients seront ravis.",
    stat: "Qualité",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    icon: ShieldCheck,
    title: "Tarifs préférentiels agence",
    description: "Tarification spéciale pour les agences avec des volumes préférentiels.",
    stat: "Prix",
    color: "bg-red-50",
    iconColor: "text-red-600"
  }
];

export default function ImportanceSection() {
  return (
    <section id="importance" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi les agences choisissent nos landing pages ?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Une landing page bien conçue n'est pas juste une page web, c'est un outil de conversion puissant qui génère des résultats mesurables pour vos clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {importancePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${point.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <point.icon className={`w-8 h-8 ${point.iconColor}`} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {point.stat}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action bottom */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre business ?
            </h3>
            <p className="text-gray-600 mb-6">
              Ne laissez plus vos prospects partir sans agir. Obtenez une landing page qui convertit vraiment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Consultation gratuite
              </span>
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Livraison en 24h
              </span>
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Résultats garantis
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}