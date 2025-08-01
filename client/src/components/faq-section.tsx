import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Pourquoi choisir ProLanding plutôt qu'un freelance ?",
    answer: "Contrairement à un freelance, nous garantissons les délais, la disponibilité et la qualité. Notre équipe spécialisée TPE comprend vos enjeux spécifiques et propose des solutions adaptées à votre budget."
  },
  {
    question: "Le délai de 24h est-il vraiment réaliste ?",
    answer: "Oui, grâce à notre processus optimisé et nos templates pré-conçus pour les TPE. Nous nous concentrons sur l'essentiel : un site professionnel qui convertit, sans fonctionnalités superflues."
  },
  {
    question: "Puis-je modifier mon site après livraison ?",
    answer: "Absolument ! Nous utilisons des CMS intuitifs et vous formons à leur utilisation. Vous pourrez modifier vos contenus, ajouter des actualités et gérer votre site en autonomie."
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer: "Nous proposons une révision gratuite pour ajuster le design selon vos retours. Notre objectif est votre satisfaction complète et le succès de votre projet."
  },
  {
    question: "Le référencement est-il inclus ?",
    answer: "Oui, nous optimisons votre site pour le référencement local et les mots-clés de votre secteur. Structure, métadonnées et contenu sont pensés pour être bien référencés."
  },
  {
    question: "Fournissez-vous l'hébergement ?",
    answer: "Nous pouvons vous conseiller sur l'hébergement et vous aider dans la mise en ligne. Nous travaillons avec des hébergeurs fiables et adaptés aux besoins des TPE."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Nous répondons à vos interrogations en toute transparence.
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
