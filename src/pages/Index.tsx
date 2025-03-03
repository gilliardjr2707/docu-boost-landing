import { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { companyLogos, testimonials, benefitVideos } from "@/components/constants";

const Index = () => {
  const demoFormRef = useRef<HTMLDivElement>(null);
  const [userCount, setUserCount] = useState(15);

  // Generate random user count changes
  useEffect(() => {
    const interval = setInterval(() => {
      // Random number between -2 and +3
      const change = Math.floor(Math.random() * 6) - 2;
      setUserCount(prev => {
        // Keep count between 8 and 35
        const newCount = prev + change;
        return newCount < 8 ? 8 : newCount > 35 ? 35 : newCount;
      });
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Scroll to demo section
  const scrollToDemo = () => {
    demoFormRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen">
      <Header scrollToDemo={scrollToDemo} />
      
      {/* Live user advertisement */}
      <div className="fixed bottom-4 left-4 z-50 bg-brand-blue text-white py-2 px-4 rounded-full shadow-lg animate-pulse">
        <div className="flex items-center">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="text-sm font-medium">
            {userCount} pessoas estão assinando o M-Files agora
          </span>
        </div>
      </div>
      
      <main>
        <HeroSection scrollToDemo={scrollToDemo} />
        <PartnersSection companyLogos={companyLogos} />
        <BenefitsSection benefitVideos={benefitVideos} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactFormSection demoFormRef={demoFormRef} />
        <FAQSection />
      </main>
      
      <Footer scrollToDemo={scrollToDemo} />
    </div>
  );
};

export default Index;
