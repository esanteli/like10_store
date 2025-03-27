export const categories = [
  {
    id: 'branding',
    name: 'Identidad Corporativa',
    description: 'Creación de identidad visual para empresas y proyectos',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=2574&auto=format&fit=crop',
    subcategories: [
      {
        id: 'logo',
        name: 'Logo Básico',
        description: 'Diseño de logotipo simple y efectivo'
      },
      {
        id: 'full-identity',
        name: 'Identidad Corporativa Completa',
        description: 'Diseño completo de identidad visual'
      },
      {
        id: 'branding-strategy',
        name: 'Estrategia de Identidad Corporativa',
        description: 'Estrategia completa de branding'
      }
    ]
  },
  {
    id: 'digital',
    name: 'Productos Digitales',
    description: 'Diseño y desarrollo de soluciones digitales',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop',
    subcategories: [
      {
        id: 'landing',
        name: 'Landing Page',
        description: 'Diseño de página de aterrizaje'
      },
      {
        id: 'ecommerce',
        name: 'E-Commerce Personalizado',
        description: 'Tienda online a medida'
      },
      {
        id: 'web-product',
        name: 'Producto Web a Medida',
        description: 'Soluciones web personalizadas'
      }
    ]
  }
];

export const products = [
  {
    id: 'logo-basic',
    name: 'Logo Básico',
    description: 'Un logotipo distintivo y memorable que representa la esencia de tu marca. Incluye 3 propuestas iniciales y 2 rondas de revisiones.',
    shortDescription: 'Logotipo distintivo y memorable',
    price: 299000,
    category: 'branding',
    subcategory: 'logo',
    features: [
      '3 propuestas iniciales de diseño',
      '2 rondas de revisiones',
      'Archivos en formatos AI, EPS, PNG, JPG',
      'Derechos de uso comercial',
      'Guía básica de uso del logo'
    ],
    images: [
      'https://images.unsplash.com/photo-1634942536990-44b9aba4c712?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1696326194534-13de5f0355f6?q=80&w=2574&auto=format&fit=crop'
    ],
    popular: true
  },
  {
    id: 'full-identity',
    name: 'Identidad Corporativa Completa',
    description: 'Sistema visual completo para tu marca, incluyendo logotipo, paleta de colores, tipografías, aplicaciones básicas y manual de marca.',
    shortDescription: 'Sistema visual completo para tu marca',
    price: 999000,
    category: 'branding',
    subcategory: 'full-identity',
    features: [
      'Diseño de logotipo y variantes',
      'Paleta de colores corporativos',
      'Selección de tipografías',
      'Papelería básica (tarjetas, membrete, etc.)',
      'Manual de identidad visual',
      'Aplicaciones digitales básicas',
      '3 rondas de revisiones'
    ],
    images: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599817759288-d962d8c6a067?q=80&w=2574&auto=format&fit=crop'
    ],
    popular: true
  },
  {
    id: 'branding-strategy',
    name: 'Estrategia de Identidad Corporativa',
    description: 'Desarrollo estratégico completo de la identidad de marca, incluyendo investigación, posicionamiento, mensajes clave y sistema visual integral.',
    shortDescription: 'Desarrollo estratégico completo de marca',
    price: 2499000,
    category: 'branding',
    subcategory: 'branding-strategy',
    features: [
      'Investigación de mercado y competencia',
      'Definición de arquitectura de marca',
      'Desarrollo de posicionamiento',
      'Creación de mensajes clave',
      'Sistema visual completo (logo, colores, tipografías)',
      'Manual de marca extenso',
      'Aplicaciones digitales y físicas',
      'Estrategia de implementación',
      'Soporte post-entrega (30 días)'
    ],
    images: [
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2674&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670&auto=format&fit=crop'
    ],
    popular: false
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Página web de una sola vista diseñada para convertir visitantes en clientes. Incluye diseño adaptable, optimización para SEO y formulario de contacto.',
    shortDescription: 'Página web optimizada para conversiones',
    price: 599000,
    category: 'digital',
    subcategory: 'landing',
    features: [
      'Diseño profesional y personalizado',
      'Responsive (adaptable a móviles y tablets)',
      'Optimización para velocidad y SEO',
      'Formulario de contacto o captación de leads',
      'Integración con Google Analytics',
      'Hasta 5 secciones',
      '2 rondas de revisiones',
      'Entrega en 7-10 días laborables'
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop'
    ],
    popular: true
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Personalizado',
    description: 'Tienda online completa y personalizada según las necesidades de tu negocio, con gestión de productos, carrito de compras y pasarela de pagos.',
    shortDescription: 'Tienda online completa y personalizada',
    price: 1899000,
    category: 'digital',
    subcategory: 'ecommerce',
    features: [
      'Diseño personalizado y profesional',
      'Catálogo de productos (hasta 100 iniciales)',
      'Carrito de compras y checkout',
      'Integración con pasarelas de pago',
      'Panel de administración',
      'Gestión de inventario básica',
      'Responsive (adaptable a todos los dispositivos)',
      'SEO básico incluido',
      'Capacitación para administración',
      '30 días de soporte post-lanzamiento'
    ],
    images: [
      'https://images.unsplash.com/photo-1629053800202-. . .',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop'
    ],
    popular: false
  },
  {
    id: 'web-product',
    name: 'Producto Web a Medida',
    description: 'Desarrollo web completamente personalizado según los requerimientos específicos de tu proyecto, con funcionalidades a medida y diseño exclusivo.',
    shortDescription: 'Desarrollo web totalmente personalizado',
    price: 2999000,
    category: 'digital',
    subcategory: 'web-product',
    features: [
      'Análisis de requerimientos detallado',
      'Diseño UX/UI personalizado',
      'Desarrollo frontend y backend a medida',
      'Integraciones con APIs y servicios externos',
      'Sistema de gestión de contenidos personalizado',
      'Optimización para rendimiento y SEO',
      'Pruebas exhaustivas de calidad',
      'Implementación y despliegue',
      'Capacitación de usuarios',
      '60 días de soporte post-lanzamiento'
    ],
    images: [
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2670&auto=format&fit=crop'
    ],
    popular: true
  }
];

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsBySubcategory = (subcategoryId) => {
  return products.filter(product => product.subcategory === subcategoryId);
};

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getPopularProducts = () => {
  return products.filter(product => product.popular);
};

export const getCategoryById = (id) => {
  return categories.find(category => category.id === id);
};

export const getSubcategoryById = (categoryId, subcategoryId) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
}; 