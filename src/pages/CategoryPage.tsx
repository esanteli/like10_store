
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { getCategoryById, getProductsByCategory, getProductsBySubcategory, getSubcategoryById } from '@/lib/products';

const CategoryPage = () => {
  const { categoryId, subcategoryId } = useParams<{ categoryId: string; subcategoryId: string }>();
  const navigate = useNavigate();
  
  const category = getCategoryById(categoryId || '');
  const subcategory = subcategoryId ? getSubcategoryById(categoryId || '', subcategoryId) : null;
  
  const products = subcategoryId 
    ? getProductsBySubcategory(subcategoryId) 
    : getProductsByCategory(categoryId || '');
  
  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
          <p className="mb-6">La categoría que estás buscando no existe o ha sido eliminada.</p>
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
          <div className="max-w-7xl mx-auto">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center mb-8 text-sm font-medium transition-colors hover:text-gray-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </button>
            
            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {subcategory ? subcategory.name : category.name}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl animate-fade-in" style={{animationDelay: '0.1s'}}>
                {subcategory ? subcategory.description : category.description}
              </p>
              
              {!subcategoryId && category.subcategories.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {category.subcategories.map((sub) => (
                    <a
                      key={sub.id}
                      href={`/category/${category.id}/${sub.id}`}
                      className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {products.length > 0 ? (
              <div className="product-grid">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500">No hay productos disponibles en esta categoría actualmente.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
