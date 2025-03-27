import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Diseño Digital<br />
              <span className="text-primary">Profesional</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Transformamos tu visión en realidad con soluciones de diseño que destacan tu marca en el mundo digital.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Button size="lg" className="gap-2">
                Ver catálogo
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Contactar
              </Button>
            </div>
          </div>

          {/* Imágenes */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <img 
                    src="/images/hero/design-1.jpg" 
                    alt="Diseño digital profesional" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <img 
                    src="/images/hero/design-2.jpg" 
                    alt="Branding corporativo" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <img 
                    src="/images/hero/design-3.jpg" 
                    alt="Diseño web" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/hero/design-4.jpg" 
                    alt="Marketing digital" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Decoración */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-0 left-1/4 transform -translate-x-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 