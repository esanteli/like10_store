import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Layout = ({ children }) => {
  const { items } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-xl font-bold">
                Like10Store
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
                  Productos
                </Link>
                <Link to="/products?category=branding" className="text-sm font-medium hover:text-primary transition-colors">
                  Branding
                </Link>
                <Link to="/products?category=digital" className="text-sm font-medium hover:text-primary transition-colors">
                  Digital
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/checkout" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Sobre nosotros</h3>
              <p className="text-sm text-muted-foreground">
                Like10Store es tu destino para soluciones de diseño profesionales que impulsan tu presencia visual y digital.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=branding" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=digital" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Digital
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  Email: contacto@like10store.com
                </li>
                <li className="text-sm text-muted-foreground">
                  Teléfono: +56 9 1234 5678
                </li>
                <li className="text-sm text-muted-foreground">
                  Santiago, Chile
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Like10Store. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 