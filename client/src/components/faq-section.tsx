import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quels sont les services de ProLanding ?",
    answer: "Nous créons des landing pages qui transforment vraiment vos visiteurs en clients. Maquette gratuite pour validation, copywriting optimisé, design professionnel, hébergement inclus et livraison en 24h."
  },
  {
    question: "En combien de temps mon projet est réalisé ?",
    answer: "Votre landing page est livrée en 24h maximum. C'est notre engagement pour que vous puissiez commencer à vendre rapidement."
  },
  {
    question: "Offrez-vous un support après la livraison ?",
    answer: "Oui, nous incluons le support technique et l'hébergement sécurisé à vie. Vous n'avez plus à vous soucier des aspects techniques."
  },
  {
    question: "Puis-je voir vos dernières réalisations ?",
    answer: "Bien sûr ! Contactez-nous et nous vous montrerons des exemples concrets de landing pages qui convertissent pour nos clients."
  },
  {
    question: "Comment puis-je héberger ma landing page ?",
    answer: "L'hébergement sécurisé est inclus dans le prix. Votre landing page sera accessible 24h/24 avec un nom de domaine professionnel."
  },
  {
    question: "Comment fonctionne la maquette gratuite ?",
    answer: "Avant de commencer la production, nous créons une maquette gratuite de votre landing page que vous validez. Pas de surprise, vous voyez exactement ce que vous aurez."
  },
  {
    question: "Le SEO est-il inclus dans la production ?",
    answer: "Oui, nous optimisons votre landing page pour les moteurs de recherche avec les balises meta, titre et structure appropriées."
  },
  {
    question: "Pourquoi choisir ProLanding ?",
    answer: "Nous combinons copywriting qui vend + design qui rassure + livraison ultra-rapide au prix le moins cher. Notre méthode transforme votre offre en message clair qui convertit vos visiteurs en clients."
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
            Vous avez des questions supplémentaires ? Nous avons des réponses.
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
