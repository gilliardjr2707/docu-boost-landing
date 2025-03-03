
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToDemo: () => void;
}

const Header = ({ scrollToDemo }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://placehold.co/160x40/ffffff/333333?text=IBSdocs" alt="IBSdocs Logo" className="h-8 mr-2" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#benefits" className="text-gray-700 hover:text-brand-blue transition-colors duration-200">Benefícios</a>
          <a href="#testimonials" className="text-gray-700 hover:text-brand-blue transition-colors duration-200">Depoimentos</a>
          <a href="#faq" className="text-gray-700 hover:text-brand-blue transition-colors duration-200">FAQ</a>
          <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors duration-200">Contato</a>
        </nav>
        <Button onClick={scrollToDemo} className="hidden md:block bg-brand-blue hover:bg-brand-lightBlue text-white transition-all duration-300">
          Agendar Demo
        </Button>
        <Button onClick={scrollToDemo} className="md:hidden bg-brand-blue hover:bg-brand-lightBlue text-white p-2">
          <ArrowRight size={18} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
