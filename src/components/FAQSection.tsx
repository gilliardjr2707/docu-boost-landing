
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="section bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">
          Tire suas dúvidas sobre o M-Files e como ele pode ajudar sua empresa
        </p>
        
        <div className="mt-12">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
            <AccordionItem value="item-1" className="px-6 border-b">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Como o M-Files se integra ao meu sistema atual?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600">
                O M-Files foi projetado para se integrar facilmente com seu ecossistema de TI existente. 
                Nossa solução oferece conectores pré-construídos para sistemas populares como Microsoft 365, 
                Salesforce, SAP e outros. Para sistemas personalizados, nossa API completa permite conexões 
                sob medida com praticamente qualquer software. A migração de dados também é simplificada, 
                com ferramentas que preservam metadados e estruturas existentes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="px-6 border-b">
              <AccordionTrigger className="py-4 text-lg font-medium">
                O M-Files é seguro para documentos confidenciais?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600">
                Absolutamente. O M-Files inclui camadas robustas de segurança, incluindo criptografia de dados 
                em repouso e em trânsito, autenticação multifator, controles de acesso granulares e registro de 
                auditoria completo. Nosso sistema permite definir permissões precisas em nível de documento, 
                garantindo que informações sensíveis estejam acessíveis apenas a usuários autorizados. Atendemos 
                a requisitos de conformidade como GDPR, LGPD, ISO 27001 e outros padrões regulatórios internacionais.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="px-6 border-b">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Preciso de treinamento para utilizar a ferramenta?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600">
                O M-Files foi desenvolvido com foco na experiência do usuário, resultando em uma interface 
                intuitiva que requer mínimo treinamento. A maioria dos usuários se adapta rapidamente às 
                funcionalidades básicas. No entanto, oferecemos programas de treinamento abrangentes para 
                maximizar o valor da plataforma, incluindo sessões ao vivo, materiais de autoaprendizado, 
                webinars e comunidade de usuários. Nossa equipe de suporte está disponível para garantir 
                que sua organização aproveite ao máximo todos os recursos avançados.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Quanto tempo leva a implementação?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600">
                O tempo de implementação varia conforme o tamanho da organização e a complexidade do caso de uso, 
                mas nossa abordagem estruturada garante eficiência. Uma implementação típica pode ser concluída em 
                4-8 semanas, seguindo nosso processo comprovado: avaliação inicial (1 semana), configuração e 
                personalização (2-3 semanas), migração de dados (variável), teste e ajustes (1-2 semanas) e treinamento 
                (1 semana). Oferecemos também implementação em fases para organizações maiores, permitindo resultados 
                mais rápidos para departamentos prioritários.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
