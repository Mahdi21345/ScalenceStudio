import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quels sont les services de ProLanding ?",
    answer: "Nous créons des landing pages qui transforment vraiment tes visiteurs en clients. Maquette gratuite pour validation, copywriting optimisé, design professionnel, hébergement gratuit à vie et livraison en 24h."
  },
  {
    question: "L'hébergement est-il vraiment gratuit à vie ?",
    answer: "Oui ! L'hébergement est gratuit à vie après achat de ta landing page à 499€. Plus de frais d'hébergement mensuels. Seuls les services optionnels sont payants."
  },
  {
    question: "Comment modifier mon site après achat ?",
    answer: "On t'indiquera comment modifier facilement ton site avec un agent IA qu'on a trouvé (24€/mois optionnel). Sinon, tu peux faire les modifications classiques ou nous demander."
  },
  {
    question: "Quels sont les vrais coûts après achat ?",
    answer: "Transparent : Domaine 1€/an, hébergement gratuit à vie. Optionnel : Modifications avec IA (24€/mois) et service de publication (4€/mois). Tu peux utiliser ton site sans ces options."
  },
  {
    question: "En combien de temps mon projet est réalisé ?",
    answer: "Ta landing page est livrée en 24h maximum. C'est notre engagement pour que tu puisses commencer à vendre rapidement."
  },
  {
    question: "Comment fonctionne la maquette gratuite ?",
    answer: "Avant de commencer la production, nous créons une maquette gratuite de ta landing page que tu valides. Pas de surprise, tu vois exactement ce que tu auras."
  },
  {
    question: "Le SEO est-il inclus dans la production ?",
    answer: "Oui, nous optimisons ta landing page pour les moteurs de recherche avec les balises meta, titre et structure appropriées."
  },
  {
    question: "Pourquoi choisir ProLanding ?",
    answer: "Hébergement gratuit à vie + livraison 24h + possibilité de modifications faciles avec IA. Notre méthode transforme ton offre en message clair qui convertit tes visiteurs en clients."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquemment posées
          </h2>
          <p className="text-xl text-gray-600">
            Tu as des questions supplémentaires ? <span className="font-semibold text-blue-600">Nous avons des réponses.</span>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  data-testid={`faq-button-${index}`}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="px-6 pb-4 pt-0">
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
