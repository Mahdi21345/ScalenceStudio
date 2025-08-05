import { motion } from "framer-motion";

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
            Portfolio
          </h2>
        </motion.div>

        {/* Image Container */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={portfolioItems[0].image}
              alt="INEA AI Portfolio"
              className="w-full h-full object-contain bg-black"
            />
          </motion.div>
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
