
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormData {
  name: string;
  phone: string;
  segment: string;
  email: string;
  company: string;
  position: string;
}

const ContactFormSection = ({ demoFormRef }: { demoFormRef: React.RefObject<HTMLDivElement> }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    segment: "",
    email: "",
    company: "",
    position: ""
  });
  
  const { toast } = useToast();

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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

  return (
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
  );
};

export default ContactFormSection;
