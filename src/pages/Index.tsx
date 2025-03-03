import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Rocket, FileScan, Shield, Smartphone, Workflow, FileCheck, Brain, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, Play } from "lucide-react";
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

  // YouTube video URLs for each benefit
  const benefitVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ", // Busca Rápida e Inteligente
    "https://www.youtube.com/embed/jNQXAC9IVRw", // Digitalização com OCR
    "https://www.youtube.com/embed/myvZAUR45pI", // Controle de Versões
    "https://www.youtube.com/embed/fJ9rUzIMcZQ", // Acesso Mobile
    "https://www.youtube.com/embed/L_jWHffIx5E", // Workflows Automatizados
    "https://www.youtube.com/embed/9bZkp7q19f0", // Integração com Microsoft 365
    "https://www.youtube.com/embed/5qap5aO4i9A", // IA Avançada
  ];

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
                <p className="text-gray-600 mb-4">
                  IA que encontra documentos instantaneamente, mesmo sem saber o nome exato do arquivo.
                </p>
                <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-gray-200">
                  <iframe 
                    src={benefitVideos[0]}
                    title="Busca Rápida e Inteligente"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <FileScan size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digitalização com OCR</h3>
                <p className="text-gray-600 mb-4">
                  Transforme documentos físicos em arquivos digitais pesquisáveis automaticamente.
                </p>
                <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-gray-200">
                  <iframe 
                    src={benefitVideos[1]}
                    title="Digitalização com OCR"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <Shield size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Controle de Versões</h3>
                <p className="text-gray-600 mb-4">
                  Segurança total para evitar perda de dados e rastreabilidade completa das mudanças.
                </p>
                <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-gray-200">
                  <iframe 
                    src={benefitVideos[2]}
                    title="Controle de Versões"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <Smartphone size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Acesso Mobile</h3>
                <p className="text-gray-600 mb-4">
                  Trabalhe de qualquer lugar com acesso remoto seguro aos seus documentos.
                </p>
                <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-gray-200">
                  <iframe 
                    src={benefitVideos[3]}
                    title="Acesso Mobile"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <Workflow size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Workflows Automatizados</h3>
                <p className="text-gray-600 mb-4">
                  Aprovações e faturamento simplificados com fluxos de trabalho automáticos.
                </p>
                <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-gray-200">
                  <iframe 
                    src={benefitVideos[4]}
                    title="Workflows Automatizados"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-brand-blue/10 rounded-full p-3 inline-block mb-4">
                  <FileCheck size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integração com Microsoft 365</h3>
                <p className="text-gray-600 mb-4">
                  Conecte-se perfeitamente ao Teams, Outlook, SharePoint e outras ferramentas.
                </p>
                <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-gray-200">
                  <iframe 
                    src={benefitVideos[5]}
                    title="Integração com Microsoft 365"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Benefit 7 */}
              <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
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
                <div className="relative pt-[40%] w-full rounded-lg overflow-hidden border border-gray-200">
                  <iframe 
                    src={benefitVideos[6]}
                    title="IA Avançada: M-Files Aino"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
            </p
