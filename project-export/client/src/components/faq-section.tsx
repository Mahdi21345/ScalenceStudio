import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quels sont les services de ProLanding ?",
    answer: "Nous créons des landing pages qui transforment vraiment tes visiteurs en clients. Maquette gratuite pour validation, copywriting optimisé, design professionnel, configuration hébergement et livraison en 24h."
  },
  {
    question: "En combien de temps mon projet est réalisé ?",
    answer: "Ta landing page est livrée en 24h maximum. C'est notre engagement pour que tu puisses commencer à vendre rapidement."
  },
  {
    question: "Offrez-vous un support après la livraison ?",
    answer: "Oui, nous incluons le support technique. Pour l'hébergement, tu paies directement Netlify (environ 5€/mois) et on t'aide à tout configurer en visio."
  },

  {
    question: "Comment fonctionne l'hébergement ?",
    answer: "L'hébergement n'est pas inclus. Tu paies Netlify directement (environ 5€/mois) et on configure tout pour toi. On te donne la méthode pour avoir un nom de domaine à 1€/an. Tout est expliqué en visio."
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
    answer: "Nous combinons copywriting qui vend + design qui rassure + livraison ultra-rapide au prix le moins cher. Notre méthode transforme ton offre en message clair qui convertit tes visiteurs en clients."
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
