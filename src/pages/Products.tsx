
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

const Products = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Todos los productos
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl animate-fade-in" style={{animationDelay: '0.1s'}}>
                Explora nuestra colección completa de productos y servicios de diseño digital
              </p>
            </div>
            
            <div className="product-grid">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
