
import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  scrollToDemo: () => void;
}

const HeroSection = ({ scrollToDemo }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-gradient-to-b from-white to-brand-lightGray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block bg-brand-blue/10 text-brand-blue font-medium px-4 py-1 rounded-full mb-4">
              Gestão Documental Inteligente
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automatize sua Gestão Documental com 
              <span className="text-brand-blue"> IA e Workflows Inteligentes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Acelere seus processos, elimine burocracia e ganhe produtividade 
              com a solução líder em gestão documental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToDemo} className="btn-primary" size="lg">
                Agende uma Demonstração
              </Button>
              <Button variant="outline" className="btn-secondary group" size="lg">
                Saiba mais
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 to-transparent rounded-3xl blur-2xl"></div>
            <img src="https://placehold.co/720x480/f5f5f5/333333?text=Dashboard+M-Files" alt="M-Files Dashboard" className="relative rounded-xl shadow-2xl border border-white/50 w-full hover-scale" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float hidden md:block">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Inteligência Artificial</p>
                  <p className="text-sm text-gray-500">Pesquisa e organização automática</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
