import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Cabinet d'Avocat Moderne",
    category: "Juridique",
    description: "Landing page pour cabinet d'avocat spécialisé en droit des affaires avec formulaire de contact optimisé.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center",
    tags: ["Conversion optimisée", "Design professionnel", "Formulaire avancé"],
    conversion: "+340%"
  },
  {
    id: 2,
    title: "Consultant Digital",
    category: "Consulting",
    description: "Page de capture pour consultant en transformation digitale avec système de prise de RDV intégré.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
    tags: ["Calendly intégré", "Mobile-first", "Analytics"],
    conversion: "+280%"
  },
  {
    id: 3,
    title: "Artisan Plombier",
    category: "Artisanat",
    description: "Landing page d'urgence pour plombier avec géolocalisation et devis en ligne rapide.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&crop=center",
    tags: ["Géolocalisation", "Devis instantané", "WhatsApp"],
    conversion: "+420%"
  },
  {
    id: 4,
    title: "Coach Sportif",
    category: "Sport & Santé",
    description: "Page de vente pour coaching sportif personnalisé avec témoignages vidéo intégrés.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    tags: ["Vidéos témoignages", "Système de paiement", "Programme personnalisé"],
    conversion: "+195%"
  },
  {
    id: 5,
    title: "Restaurant Gastronomique",
    category: "Restauration",
    description: "Landing page pour restaurant avec réservation en ligne et menu interactif.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop&crop=center",
    tags: ["Réservation en ligne", "Menu interactif", "Galerie photos"],
    conversion: "+260%"
  }
];

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const visibleItems = [
    portfolioItems[currentIndex],
    portfolioItems[(currentIndex + 1) % portfolioItems.length],
    portfolioItems[(currentIndex + 2) % portfolioItems.length]
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé d'autres TPE à transformer leur présence en ligne en machine à prospects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            data-testid="portfolio-prev"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            data-testid="portfolio-next"
          >
            →
          </button>

          {/* Slider content */}
          <div className="overflow-hidden mx-12">
            <motion.div 
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${currentIndex}`}
                  className="flex-none w-full md:w-1/3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-900">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="default" className="bg-green-500 text-white">
                          {item.conversion}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                        data-testid={`portfolio-view-${item.id}`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Voir le projet
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                data-testid={`portfolio-dot-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Votre projet sera le prochain
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez les TPE qui ont déjà transformé leur business avec une landing page qui convertit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-green-600 font-semibold">✓ Résultats mesurables</span>
              <span className="text-green-600 font-semibold">✓ Design sur-mesure</span>
              <span className="text-green-600 font-semibold">✓ Support inclus</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}