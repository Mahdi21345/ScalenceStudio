import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "INEA AI - Intelligence Artificielle",
    subtitle: "Solution IA avancée",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fb62a2f1ec364434aa883b9a76b1352af%2F38fb7d6a961440c580a85d96063b3378?format=webp&width=800",
    isEmpty: false
  },
  {
    id: 2,
    title: "Votre Projet Suivant",
    subtitle: "Prêt à créer quelque chose d'exceptionnel ?",
    image: "",
    isEmpty: true
  }
];

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px'
        }}></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations et imaginez votre projet
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl border border-blue-100">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : (index > currentIndex ? 100 : -100)
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {item.isEmpty ? (
                  // Empty slide design
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: index === currentIndex ? 1 : 0,
                          scale: index === currentIndex ? 1 : 0.8
                        }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center border-4 border-dashed border-blue-300">
                          <span className="text-6xl text-blue-500">+</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold mb-8">
                          {item.subtitle}
                        </p>
                        <button 
                          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          Commencer Maintenant
                        </button>
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  // Image slide
                  <div className="relative w-full h-full">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain bg-gradient-to-br from-gray-900 to-black"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ 
                          opacity: index === currentIndex ? 1 : 0,
                          y: index === currentIndex ? 0 : 30
                        }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <p className="text-blue-400 font-semibold mb-2">
                          {item.subtitle}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {item.title}
                        </h3>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-blue-400'
              }`}
              data-testid={`portfolio-dot-${index}`}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt pour votre <span className="text-blue-600">Landing Page</span> ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez nos clients satisfaits avec une landing page qui convertit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold border border-blue-200">
                ✓ Livraison 48h
              </span>
              <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full font-semibold border border-green-200">
                ✓ Prix compétitif
              </span>
              <span className="bg-purple-50 text-purple-600 px-4 py-2 rounded-full font-semibold border border-purple-200">
                ✓ Design professionnel
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
