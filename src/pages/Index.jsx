import React from 'react';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';

const Index = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Diseño que impulsa tu negocio
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
              En Like10Store creamos soluciones de diseño que no solo se ven bien, sino que también funcionan para tu empresa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-xl font-medium mb-2">Diseño profesional</h3>
                <p className="text-white/70">Soluciones de diseño creadas por profesionales con experiencia.</p>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h3 className="text-xl font-medium mb-2">Resultados medibles</h3>
                <p className="text-white/70">Propuestas orientadas a objetivos de negocio concretos.</p>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-medium mb-2">Atención personalizada</h3>
                <p className="text-white/70">Cada proyecto recibe atención individualizada y detallada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index; 