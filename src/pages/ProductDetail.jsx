import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import { getProductById } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <p className="mb-6 text-muted-foreground">El producto que estás buscando no existe o ha sido eliminado.</p>
          <Button 
            onClick={() => navigate('/products')}
            variant="outline"
            className="inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a productos
          </Button>
        </div>
      </>
    );
  }
  
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate(-1)}
            variant="ghost"
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl bg-muted">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-auto object-cover animate-blur-in"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg bg-muted">
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
            <div className="flex flex-col">
              <div>
                <h1 className="text-3xl font-bold mb-4 animate-fade-in">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  {product.description}
                </p>
                <div className="text-2xl font-bold mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  ${product.price.toLocaleString('es-CL')}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="prose max-w-none animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <h3 className="text-lg font-semibold mb-2">Detalles del producto</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col space-y-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <Button 
                    onClick={() => addToCart(product)}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail; 