import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">
              ProLanding
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('benefices')}
                className="text-gray-900 hover:text-purple-600 transition-colors duration-200 font-medium"
                data-testid="nav-benefices"
              >
                Bénéfices
              </button>
              <button 
                onClick={() => scrollToSection('processus')}
                className="text-gray-900 hover:text-purple-600 transition-colors duration-200 font-medium"
                data-testid="nav-processus"
              >
                Processus
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 hover:text-purple-600 transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                Nous Contacter
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('benefices')}
                className="text-gray-900 hover:text-purple-600 transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-benefices"
              >
                Bénéfices
              </button>
              <button 
                onClick={() => scrollToSection('processus')}
                className="text-gray-900 hover:text-purple-600 transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-processus"
              >
                Processus
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 hover:text-purple-600 transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-contact"
              >
                Nous Contacter
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
