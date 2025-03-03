
import { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { companyLogos, testimonials, benefitVideos } from "@/components/constants";

const Index = () => {
  const demoFormRef = useRef<HTMLDivElement>(null);

  // Scroll to demo section
  const scrollToDemo = () => {
    demoFormRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header scrollToDemo={scrollToDemo} />
      
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
