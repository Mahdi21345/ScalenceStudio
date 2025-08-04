import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const importancePoints = [
  {
    icon: TrendingUp,
    title: "Copywriting + SEO optimisé par IA",
    description: "Textes qui convertissent + référencement naturel optimisé pour maximiser tes ventes et ta visibilité.",
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
    description: "On configure ton hébergement et ton nom de domaine. Tout sera expliqué en visio.",
    stat: "Deploy",
    color: "bg-red-50",
    iconColor: "text-red-600"
  }
];

export default function ImportanceSection() {
  return (
    <section id="importance" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services Inclus dans votre Landing Page 499€
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Design professionnel adapté à ton branding et <span className="font-semibold text-blue-600">fonctionnalités optimisées pour maximiser tes conversions</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {importancePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="motion-div"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 card bg-white">
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
              Tout inclus dans tes 499€
            </h3>
            <p className="text-gray-600 mb-6">
              Pas de frais cachés. Tout ce dont tu as besoin pour une landing page qui marche.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center text-green-600 font-semibold">
                ✓ Solution hébergement professionnel
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

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              Tu veux tout ça pour seulement 499€ ?
            </h3>
            <p className="mb-6 opacity-90">
              C'est le moment parfait pour passer à l'action et faire décoller ton business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Réserver un appel gratuit
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Voir l'offre complète
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}