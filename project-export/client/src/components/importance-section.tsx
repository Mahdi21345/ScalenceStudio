import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const importancePoints = [
  {
    icon: TrendingUp,
    title: "Copywriting optimisé par IA",
    description: "Textes qui convertissent créés automatiquement pour maximiser tes ventes.",
    stat: "IA",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Target,
    title: "UX/UI optimisé",
    description: "Interface utilisateur parfaite qui guide tes visiteurs vers l'achat.",
    stat: "Design",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: BarChart3,
    title: "Design basé sur ton branding",
    description: "Si tu as un branding existant (couleurs, polices, style), on l'intègre parfaitement dans le design de ta landing page.",
    stat: "Branding",
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    icon: Zap,
    title: "Formulaires de contact",
    description: "Formulaires simples et efficaces pour collecter tes prospects.",
    stat: "Contact",
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },

  {
    icon: Users,
    title: "Responsive mobile",
    description: "Landing page parfaite sur tous les appareils (mobile, tablette, ordinateur).",
    stat: "Mobile",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    icon: ShieldCheck,
    title: "Déploiement et configuration",
    description: "On configure ton hébergement Netlify et ton nom de domaine. Tout sera expliqué en visio.",
    stat: "Deploy",
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
            Ce que tu auras dans ta landing page
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Design professionnel adapté à ton branding et <span className="font-semibold text-blue-600">fonctionnalités optimisées pour maximiser tes conversions</span>
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
              Tout inclus dans vos 499€
            </h3>
            <p className="text-gray-600 mb-6">
              Pas de frais cachés. Tout ce dont vous avez besoin pour une landing page qui marche.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Hébergement inclus à vie
              </span>
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Nom de domaine professionnel
              </span>
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Formulaires de contact
              </span>
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Optimisation mobile
              </span>
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Sécurité SSL
              </span>
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Support technique
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}