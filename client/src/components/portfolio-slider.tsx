import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Fluidifiez vos process grâce à une automatisation qui vous correspond",
    subtitle: "Optimisation des conversions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center",
    darkBg: true
  },
  {
    id: 2,
    title: "Des Agents IA qui travaillent à votre place",
    subtitle: "Intelligence artificielle",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&crop=center",
    darkBg: true
  },
  {
    id: 3,
    title: "Des Outils qui font Sensation dans votre Business",
    subtitle: "Solutions personnalisées",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    darkBg: false
  },
  {
    id: 4,
    title: "Une Landing Page qui fait passer votre Business au niveau supérieur",
    subtitle: "Design & Performance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&crop=center",
    darkBg: false
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