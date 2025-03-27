import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredProducts = [
  {
    id: '1',
    name: 'Diseño de Logo Profesional',
    description: 'Identidad visual única y memorable para tu marca',
    price: 149900,
    image: '/images/logo-design.jpg',
    category: 'branding'
  },
  {
    id: '2',
    name: 'Diseño Web Responsivo',
    description: 'Sitio web moderno y adaptable a todos los dispositivos',
    price: 299900,
    image: '/images/web-design.jpg',
    category: 'digital'
  },
  {
    id: '3',
    name: 'Kit de Marca Completo',
    description: 'Todo lo que necesitas para establecer tu identidad de marca',
    price: 399900,
    image: '/images/brand-kit.jpg',
    category: 'branding'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Productos Destacados</h2>
          <p>Descubre nuestras soluciones más populares</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group card hover-card overflow-hidden"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    ${product.price.toLocaleString('es-CL')}
                  </span>
                  <span className="text-sm text-primary font-medium inline-flex items-center">
                    Ver detalles
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="btn btn-outline inline-flex items-center"
          >
            Ver todos los productos
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 