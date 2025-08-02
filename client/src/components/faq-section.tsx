import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Comment fonctionne le service en marque blanche ?",
    answer: "Vos clients ne voient que votre marque. Nous restons totalement invisibles, vous gardez la relation commerciale complète et récoltez tous les bénéfices de réputation."
  },
  {
    question: "Quelles sont les marges pour les agences ?",
    answer: "Nos tarifs agence commencent à 299€ par landing page. Vous pouvez les revendre à vos clients au prix que vous souhaitez, avec des marges très attractives."
  },
  {
    question: "Le délai de 24h est-il garanti même pour les agences ?",
    answer: "Oui, nous garantissons une livraison en 24h maximum pour toutes les commandes, même en marque blanche. C'est notre engagement qualité."
  },
  {
    question: "Proposez-vous des tarifs dégressifs pour les volumes ?",
    answer: "Oui, plus vous commandez, plus les tarifs baissent. Contactez-nous pour connaître notre grille tarifaire selon les volumes."
  },
  {
    question: "Qui gère le support technique après livraison ?",
    answer: "Nous gérons tout le support technique et la maintenance. Vos clients peuvent nous contacter directement ou passer par vous, selon votre préférence."
  },
  {
    question: "Comment mes clients peuvent-ils modifier leurs landing pages ?",
    answer: "Les modifications se font par nos soins au tarif de 30€ par modification. Vos clients peuvent passer par vous ou nous contacter directement selon votre accord de partenariat."
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
            Questions fréquentes des agences
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur notre partenariat agence.
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
