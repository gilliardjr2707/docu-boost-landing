
import { Rocket, FileScan, Shield, Smartphone, Workflow, FileCheck, Brain } from "lucide-react";

interface BenefitsSectionProps {
  benefitVideos: string[];
}

const BenefitsSection = ({ benefitVideos }: BenefitsSectionProps) => {
  return (
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
  );
};

export default BenefitsSection;
