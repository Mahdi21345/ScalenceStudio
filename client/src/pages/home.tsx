import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AIExplanationSection from "@/components/ai-explanation-section";
import BenefitsSection from "@/components/benefits-section";
import ImportanceSection from "@/components/importance-section";
import PortfolioSlider from "@/components/portfolio-slider";
import WhyUsSection from "@/components/why-us-section";
import ProcessSection from "@/components/process-section";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none geometric-bg">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-transparent rotate-45 blur-2xl"></div>
      </div>

      <Header />
      <HeroSection />
      <BenefitsSection />
      <ImportanceSection />
      <WhyUsSection />
      <ProcessSection />
      <AIExplanationSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
