import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Check, Users, Clock, TrendingDown, Smartphone, Euro } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    problem: "Votre site actuel ne reflète pas le professionnalisme de votre entreprise",
    solution: "Nous créons un design moderne et professionnel qui inspire confiance",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Vous perdez des clients face à la concurrence",
    solution: "Nous développons un site qui vous différencie et met en valeur vos atouts",
    icon: Users,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Vous n'avez pas le temps de vous occuper de votre communication",
    solution: "Nous livrons une solution clé en main, rapidement",
    icon: Clock,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Votre site ne génère pas assez de contacts qualifiés",
    solution: "Nous optimisons pour la conversion et génération de leads",
    icon: TrendingDown,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Votre site n'est pas adapté aux mobiles",
    solution: "Nous garantissons un design responsive parfait sur tous les appareils",
    icon: Smartphone,
    color: "text-red-600",
    bgColor: "bg-red-500"
  },
  {
    problem: "Budget limité pour la communication digitale",
    solution: "Nous proposons des tarifs adaptés à votre business avec un ROI démontré",
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
            Pourquoi ProLanding transformera votre business ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous comprenons les défis uniques de votre business et avons développé une méthode efficace pour les surmonter.
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
