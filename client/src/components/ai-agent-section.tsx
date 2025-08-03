import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Clock, Sparkles, Calendar, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const aiFeatures = [
  {
    icon: Bot,
    title: "Agent IA Personnel",
    description: "Un assistant IA dédié uniquement à ton site qui comprend tes besoins et exécute tes modifications instantanément",
    color: "text-blue-600",
    bgColor: "bg-blue-500"
  },
  {
    icon: Zap,
    title: "Modifications Instantanées",
    description: "Plus d'attente ! Tu demandes une modification, l'IA l'exécute en quelques secondes. Textes, prix, couleurs, tout !",
    color: "text-purple-600", 
    bgColor: "bg-purple-500"
  },
  {
    icon: Clock,
    title: "Économise des Heures",
    description: "Fini les heures perdues à modifier ton site manuellement. L'IA fait le travail technique pendant que tu te concentres sur ton business",
    color: "text-green-600",
    bgColor: "bg-green-500"
  },
  {
    icon: Sparkles,
    title: "Intelligence Avancée",
    description: "L'IA comprend le français naturel, optimise automatiquement et suggère même des améliorations pour mieux convertir",
    color: "text-orange-600",
    bgColor: "bg-orange-500"
  }
];

export default function AIAgentSection() {
  const handleBookCall = () => {
    window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/33627596376?text=Salut, je veux en savoir plus sur l\'Agent IA', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <Bot className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-300 font-semibold">RÉVOLUTION IA</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Agent IA pour Modifications
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            <span className="font-semibold text-white">Fini les heures passées à modifier ton site manuellement !</span> 
            <br />
            Ton agent IA personnel comprend tes demandes et modifie ton site instantanément.
          </p>

          {/* Pricing highlight */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 max-w-2xl mx-auto border border-blue-400/30 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
              <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 font-semibold border border-green-400/30">
                ✅ Hébergement GRATUIT à vie
              </span>
              <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 font-semibold border border-green-400/30">
                ✅ Domaine 1€/an
              </span>
              <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 font-semibold border border-blue-400/30">
                🤖 Agent IA : 24€/mois
              </span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Example scenario */}
        <motion.div 
          className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Exemple concret : Tu dis, l'IA fait !
            </h3>
            <p className="text-gray-300 text-lg">
              Plus besoin d'être un expert technique. Tu parles à ton agent IA en français normal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-500/20 rounded-2xl p-6 border border-blue-400/30">
              <div className="text-blue-300 font-semibold mb-2 text-sm">👤 TOI :</div>
              <p className="text-white font-medium">"Change le prix de 499€ à 399€ et mets le bouton en rouge"</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="bg-green-500/20 rounded-2xl p-6 border border-green-400/30">
              <div className="text-green-300 font-semibold mb-2 text-sm">🤖 AGENT IA :</div>
              <p className="text-white font-medium">"Modification effectuée ! Prix changé à 399€, bouton rouge activé. Site mis à jour."</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Prêt à révolutionner la gestion de ton site ?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookCall}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              data-testid="ai-section-book-call"
            >
              <Calendar className="w-5 h-5 mr-3" />
              RÉSERVER UN APPEL
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
              data-testid="ai-section-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WHATSAPP
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}