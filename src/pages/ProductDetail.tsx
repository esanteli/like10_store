
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import Layout from '@/components/Layout';
import { getProductById } from '@/lib/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <p className="mb-6">El producto que estás buscando no existe o ha sido eliminado.</p>
          <button 
            onClick={() => navigate('/products')}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-black text-white rounded-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a productos
          </button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center mb-8 text-sm font-medium transition-colors hover:text-gray-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </button>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-auto object-cover animate-blur-in"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={image}
                        alt={`${product.name} ${index + 2}`}
                        className="w-full h-full object-cover aspect-square animate-blur-in"
                        style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-black/5 rounded-full">
                  {product.category === 'branding' ? 'Identidad Corporativa' : 'Productos Digitales'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <p className="text-2xl font-medium mb-6">${product.price.toLocaleString('es-CL')}</p>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Características</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button
                onClick={() => addToCart(product)}
                className="w-full md:w-auto flex items-center justify-center space-x-2 bg-black text-white py-3 px-8 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Añadir al carrito</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
