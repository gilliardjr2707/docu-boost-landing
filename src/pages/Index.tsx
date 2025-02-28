import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Rocket, FileScan, Shield, Smartphone, Workflow, FileCheck, Brain, ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Company logos for social proof section
const companyLogos = [{
  name: "Empresa 1",
  logo: "https://placehold.co/200x80/ffffff/333333?text=LOGO 1"
}, {
  name: "Empresa 2",
  logo: "https://placehold.co/200x80/ffffff/333333?text=LOGO 2"
}, {
  name: "Empresa 3",
  logo: "https://placehold.co/200x80/ffffff/333333?text=LOGO 3"
}, {
  name: "Empresa 4",
  logo: "https://placehold.co/200x80/ffffff/333333?text=LOGO 4"
}, {
  name: "Empresa 5",
  logo: "https://placehold.co/200x80/ffffff/333333?text=LOGO 5"
}];

// Testimonials
const testimonials = [{
  name: "Maria Silva",
  company: "Empresa ABC",
  position: "Gerente Administrativa",
  quote: "O M-Files revolucionou nossa gestão documental. Economizamos 15 horas por semana em processos que antes eram completamente manuais.",
  avatar: "https://randomuser.me/api/portraits/women/45.jpg"
}, {
  name: "Carlos Oliveira",
  company: "Construtora XYZ",
  position: "Diretor de Operações",
  quote: "Implementamos o M-Files há 6 meses e já vimos um aumento de 40% na produtividade da equipe. A busca inteligente é impressionante!",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg"
}, {
  name: "Patrícia Mendes",
  company: "Grupo Jurídico",
  position: "Advogada Sênior",
  quote: "O controle de versões do M-Files trouxe segurança aos nossos processos jurídicos. Agora temos um histórico completo de cada documento.",
  avatar: "https://randomuser.me/api/portraits/women/68.jpg"
}];
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    segment: "",
    email: "",
    company: "",
    position: ""
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const {
    toast
  } = useToast();
  const demoFormRef = useRef<HTMLDivElement>(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonial carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle segment select change
  const handleSegmentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      segment: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Demonstração Agendada!",
      description: "Nossa equipe entrará em contato em breve para confirmar."
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      segment: "",
      email: "",
      company: "",
      position: ""
    });
  };

  // Scroll to demo section
  const scrollToDemo = () => {
    demoFormRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="relative min-h-screen">
      {/* Header */}
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

      <main>
        {/* Hero Section */}
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

        {/* Partners */}
        <section className="py-8 border-y border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">
              Empresas que confiam no M-Files
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {companyLogos.map((company, index) => <div key={index} className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img src={company.logo} alt={company.name} className="h-full object-contain" />
                </div>)}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">
              Por que escolher o <span className="text-brand-blue">M-Files</span>?
            </h2>
            <p className="section-subtitle">
              Descubra como nossa solução pode transformar a gestão documental da sua empresa, 
              automatizando tarefas e proporcionando insights valiosos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 stagger-fade-in">
              {/* Benefit 1 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <Rocket size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Busca Rápida e Inteligente</h3>
                <p className="text-gray-600">
                  IA que encontra documentos instantaneamente, mesmo sem saber o nome exato do arquivo.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <FileScan size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digitalização com OCR</h3>
                <p className="text-gray-600">
                  Transforme documentos físicos em arquivos digitais pesquisáveis automaticamente.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <Shield size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Controle de Versões</h3>
                <p className="text-gray-600">
                  Segurança total para evitar perda de dados e rastreabilidade completa das mudanças.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <Smartphone size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Acesso Mobile</h3>
                <p className="text-gray-600">
                  Trabalhe de qualquer lugar com acesso remoto seguro aos seus documentos.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <Workflow size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Workflows Automatizados</h3>
                <p className="text-gray-600">
                  Aprovações e faturamento simplificados com fluxos de trabalho automáticos.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <FileCheck size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integração com Microsoft 365</h3>
                <p className="text-gray-600">
                  Conecte-se perfeitamente ao Teams, Outlook, SharePoint e outras ferramentas.
                </p>
              </div>

              {/* Benefit 7 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-brand-blue/10 rounded-full p-4 md:p-6">
                    <Brain size={40} className="text-brand-blue" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-2">IA Avançada: M-Files Aino</h3>
                    <p className="text-gray-600 max-w-3xl">
                      Nossa tecnologia de inteligência artificial M-Files Aino revoluciona a forma como você 
                      organiza e pesquisa documentos. O sistema aprende com o uso e se torna cada vez mais 
                      preciso, automatizando classificações e extraindo insights valiosos do seu conteúdo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="section bg-gradient-to-b from-brand-lightGray to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">
              O que nossos clientes dizem
            </h2>
            <p className="section-subtitle">
              Veja como o M-Files tem ajudado empresas a transformar sua gestão documental
            </p>
            
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-radial from-brand-blue/5 to-transparent rounded-3xl blur-3xl"></div>
              
              {/* Testimonial Carousel */}
              <div className="relative bg-white shadow-lg p-8 md:p-12 mx-auto max-w-4xl border border-white/50 overflow-hidden rounded-md px-[60px] py-[137px]">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100 overflow-hidden">
                  <div className="h-full bg-brand-blue transition-all duration-300 ease-linear" style={{
                  width: `${(activeTestimonial + 1) * (100 / testimonials.length)}%`
                }}></div>
                </div>
                
                <div className="absolute right-12 top-12 opacity-5">
                  <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.976 60C12.094 60 8.052 58.4 4.85 55.2C1.647 52 0.046 47.84 0.046 42.72C0.046 37.12 1.426 31.52 4.186 25.92C6.946 20.24 10.686 14.96 15.406 10.08L25.406 17.28C21.406 21.52 18.19 25.6 15.756 29.52C13.323 33.44 12.106 36.96 12.106 40.08C12.106 41.04 12.256 41.92 12.556 42.72C12.936 43.44 13.706 44.08 14.866 44.64C18.55 37.76 23.49 34.32 29.686 34.32C33.686 34.32 36.966 35.44 39.526 37.68C42.086 39.84 43.366 43.12 43.366 47.52C43.366 51.76 41.876 55.12 38.896 57.6C35.916 59.2 31.966 60 27.046 60H16.976ZM53.647 60C48.766 60 44.723 58.4 41.523 55.2C38.323 52 36.723 47.84 36.723 42.72C36.723 37.12 38.102 31.52 40.863 25.92C43.623 20.24 47.363 14.96 52.082 10.08L62.082 17.28C58.082 21.52 54.866 25.6 52.432 29.52C49.999 33.44 48.782 36.96 48.782 40.08C48.782 41.04 48.932 41.92 49.232 42.72C49.613 43.44 50.382 44.08 51.543 44.64C55.223 37.76 60.166 34.32 66.363 34.32C70.363 34.32 73.643 35.44 76.203 37.68C78.762 39.84 80.042 43.12 80.042 47.52C80.042 51.76 78.553 55.12 75.572 57.6C72.593 59.2 68.643 60 63.723 60H53.647Z" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="relative">
                  {testimonials.map((testimonial, index) => <div key={index} className={`transition-opacity duration-500 absolute inset-0 flex flex-col md:flex-row gap-8 items-center ${index === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                      <div className="flex-shrink-0">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white" />
                      </div>
                      <div>
                        <p className="text-lg md:text-xl text-gray-600 mb-4 italic">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>)}
                </div>
                
                {/* Testimonial navigation */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => <button key={index} onClick={() => setActiveTestimonial(index)} className={`w-3 h-3 rounded-full transition-all ${index === activeTestimonial ? 'bg-brand-blue w-6' : 'bg-gray-300'}`} aria-label={`Ver depoimento ${index + 1}`} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA/Form Section */}
        <section id="contact" ref={demoFormRef} className="section bg-gradient-to-br from-brand-blue to-brand-lightBlue text-white rounded-xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforme sua gestão documental hoje mesmo
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Agende uma demonstração personalizada e descubra como o M-Files 
                  pode solucionar os desafios específicos da sua empresa.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="bg-white rounded-full p-2 mr-4">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    </div>
                    <p className="text-white/90">Implementação rápida e sem complicações</p>
                  </div>
                  <div className="flex items-center mb-6">
                    <div className="bg-white rounded-full p-2 mr-4">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    </div>
                    <p className="text-white/90">Suporte técnico especializado sempre disponível</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white rounded-full p-2 mr-4">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    </div>
                    <p className="text-white/90">Treinamento completo para sua equipe</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-up">
                <h3 className="text-gray-800 text-2xl font-semibold mb-6 text-center">
                  Agende uma Demonstração
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Nome</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" required className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Telefone</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(00) 00000-0000" required className="w-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" required className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="segment" className="text-gray-700">Segmento da Empresa</Label>
                      <Select onValueChange={handleSegmentChange} value={formData.segment}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione o segmento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="juridico">Jurídico</SelectItem>
                          <SelectItem value="saude">Saúde</SelectItem>
                          <SelectItem value="educacao">Educação</SelectItem>
                          <SelectItem value="financeiro">Financeiro</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700">Nome da Empresa</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Nome da sua empresa" required className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-gray-700">Cargo</Label>
                      <Input id="position" name="position" value={formData.position} onChange={handleInputChange} placeholder="Seu cargo" required className="w-full" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-lightBlue text-white py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                    Quero Ver o M-Files em Ação
                  </Button>
                </form>
                <p className="text-center text-gray-500 text-sm mt-5">
                  Seus dados estão seguros e não serão compartilhados com terceiros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-subtitle">
              Tire suas dúvidas sobre o M-Files e como ele pode ajudar sua empresa
            </p>

            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left text-lg font-medium">
                    Como o M-Files se integra ao meu sistema atual?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    O M-Files foi projetado para se integrar perfeitamente com sistemas existentes. Nossa 
                    plataforma oferece conectores para diversos sistemas como ERP, CRM, Microsoft 365, 
                    SharePoint, entre outros. A implementação é feita em etapas, garantindo zero interrupção 
                    nos processos de negócio da sua empresa.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left text-lg font-medium">
                    O M-Files é seguro para documentos confidenciais?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    Absolutamente. O M-Files oferece recursos avançados de segurança, incluindo criptografia 
                    de dados, controle granular de acesso, autenticação de múltiplos fatores e trilhas de 
                    auditoria detalhadas. Nosso sistema atende aos principais padrões de conformidade como 
                    GDPR, LGPD, ISO 27001 e outros.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left text-lg font-medium">
                    Preciso de treinamento para utilizar a ferramenta?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    A interface do M-Files é intuitiva e amigável, mas oferecemos um programa completo de 
                    treinamento para garantir que sua equipe aproveite todas as funcionalidades da plataforma. 
                    Os treinamentos são personalizados de acordo com as necessidades e o perfil de uso de 
                    cada departamento da sua empresa.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left text-lg font-medium">
                    Quanto tempo leva a implementação?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    O tempo de implementação varia de acordo com a complexidade do ambiente e as 
                    necessidades específicas da sua empresa. Projetos simples podem ser implementados 
                    em algumas semanas, enquanto implementações mais complexas podem levar alguns meses. 
                    Nosso time de especialistas trabalha para garantir uma implementação rápida e eficiente, 
                    seguindo uma metodologia comprovada.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left text-lg font-medium">
                    É possível acessar o M-Files offline?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    Sim, o M-Files oferece funcionalidade offline robusta. Os usuários podem sincronizar 
                    documentos e trabalhar sem conexão com a internet. Quando a conexão é restabelecida, 
                    as alterações são sincronizadas automaticamente com o repositório central, garantindo 
                    que todos tenham acesso à versão mais recente dos documentos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="https://placehold.co/160x40/333333/FFFFFF?text=IBSdocs" alt="IBSdocs Logo" className="h-10 mb-4" />
            <p className="text-gray-400 mt-4">
              Soluções inteligentes para gestão documental e processos empresariais.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nossos clientes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreira</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parceiros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Soluções</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">M-Files</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gestão de Contratos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Automação de Processos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digitalização com OCR</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">São Paulo, SP</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">contato@ibsdocs.com.br</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">(11) 1234-5678</span>
              </li>
            </ul>
            
            <Button onClick={scrollToDemo} className="mt-8 bg-white text-gray-900 hover:bg-gray-200">
              Agendar Demonstração
            </Button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2023 IBSdocs. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Termos de Serviço</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;