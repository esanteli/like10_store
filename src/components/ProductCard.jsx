import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  
  // Staggered animation delay based on index
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover-card animate-scale-in"
      style={{ animationDelay }}
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {product.subcategory === 'logo' && 'Logo Básico'}
            {product.subcategory === 'full-identity' && 'Identidad Completa'}
            {product.subcategory === 'branding-strategy' && 'Estrategia de Marca'}
            {product.subcategory === 'landing' && 'Landing Page'}
            {product.subcategory === 'ecommerce' && 'E-Commerce'}
            {product.subcategory === 'web-product' && 'Web a Medida'}
          </div>
          
          {product.popular && (
            <span className="inline-block rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium">
              Popular
            </span>
          )}
        </div>
        
        <h3 className="mb-2 text-lg font-semibold leading-tight">
          {product.name}
        </h3>
        
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="font-medium">${product.price.toLocaleString('es-CL')}</div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => addToCart(product)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-black hover:text-white"
              aria-label="Añadir al carrito"
            >
              <Plus className="h-4 w-4" />
            </button>
            
            <Link 
              to={`/product/${product.id}`} 
              className="inline-flex h-8 items-center justify-center rounded-full bg-black px-4 text-xs font-medium text-white transition-colors hover:bg-black/80"
            >
              Ver detalles
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 