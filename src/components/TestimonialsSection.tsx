
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  company: string;
  position: string;
  quote: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Testimonial carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
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
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`transition-opacity duration-500 absolute inset-0 flex flex-col md:flex-row gap-8 items-center ${index === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
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
                </div>
              ))}
            </div>
            
            {/* Testimonial navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveTestimonial(index)} 
                  className={`w-3 h-3 rounded-full transition-all ${index === activeTestimonial ? 'bg-brand-blue w-6' : 'bg-gray-300'}`} 
                  aria-label={`Ver depoimento ${index + 1}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
