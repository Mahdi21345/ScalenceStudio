import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "",
    subtitle: "",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fb62a2f1ec364434aa883b9a76b1352af%2F38fb7d6a961440c580a85d96063b3378?format=webp&width=800",
    darkBg: true
  }
];

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment nous transformons votre business avec des solutions sur-mesure
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0,
                x: index === currentIndex ? 0 : 100
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full">
                {/* Background Image */}
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${item.darkBg ? 'bg-black/60' : 'bg-white/20'}`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center max-w-4xl px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0,
                        y: index === currentIndex ? 0 : 30
                      }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <p className={`text-lg mb-4 ${item.darkBg ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>
                        {item.subtitle}
                      </p>
                      <h3 className={`text-3xl md:text-5xl font-bold mb-8 ${item.darkBg ? 'text-white' : 'text-gray-900'} leading-tight`}>
                        {item.title}
                      </h3>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              data-testid={`portfolio-dot-${index}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à transformer votre business ?
            </h3>
            <p className="text-blue-100 mb-6">
              Rejoignez les entreprises qui ont déjà fait le choix de l'excellence digitale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-100">
              <span className="font-semibold">✓ Solutions sur-mesure</span>
              <span className="font-semibold">✓ Résultats garantis</span>
              <span className="font-semibold">✓ Support 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
