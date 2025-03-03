
interface CompanyLogo {
  name: string;
  logo: string;
}

interface PartnersSectionProps {
  companyLogos: CompanyLogo[];
}

const PartnersSection = ({ companyLogos }: PartnersSectionProps) => {
  return (
    <section className="py-8 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">
          Empresas que confiam no M-Files
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companyLogos.map((company, index) => (
            <div key={index} className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img src={company.logo} alt={company.name} className="h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
