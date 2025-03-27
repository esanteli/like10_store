import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Info, Trash2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const Checkout = () => {
  const { items, totalPrice, clearCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle payment simulation
  const handlePayment = (e) => {
    e.preventDefault();
    // Show payment confirmation dialog
    setPaymentComplete(true);
  };

  // Handle dialog close and redirect
  const handleDialogClose = () => {
    setPaymentComplete(false);
    clearCart();
    navigate('/');
  };

  // Handle remove item from cart
  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container max-w-6xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="mb-8 text-gray-600">No hay productos en tu carrito para realizar el pago.</p>
            <Button onClick={() => navigate('/products')}>Ver productos</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Finalizar compra</h1>
          <p className="text-gray-600">Por favor, completa los detalles para realizar el pago.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Customer and Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Customer Information */}
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Información personal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Dirección
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      autoComplete="street-address"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">
                      Ciudad
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      autoComplete="address-level2"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                      Código postal
                    </label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      autoComplete="postal-code"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Información de pago</h2>
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded mb-4">
                  <Info className="h-5 w-5 text-blue-600" />
                  <p className="text-sm text-blue-700">
                    Esto es una simulación. No se procesará ningún pago real.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                      Número de tarjeta
                    </label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        autoComplete="cc-number"
                      />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium mb-1">
                      Fecha de expiración
                    </label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/AA"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      autoComplete="cc-exp"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                      CVV
                    </label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      autoComplete="cc-csc"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  size="lg"
                >
                  Pagar ${totalPrice.toLocaleString('es-CL')}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
              
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.product.id} className="py-3 flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium">{item.product.name}</h3>
                          <p className="text-xs text-gray-500">Cantidad: {item.quantity}</p>
                          <p className="text-sm font-medium mt-1">
                            ${(item.product.price * item.quantity).toLocaleString('es-CL')}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-1"
                          title="Eliminar producto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toLocaleString('es-CL')}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Envío</span>
                  <span>Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                  <span>Total</span>
                  <span>${totalPrice.toLocaleString('es-CL')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Confirmation Dialog */}
      <Dialog open={paymentComplete} onOpenChange={setPaymentComplete}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl">¡Pago realizado con éxito!</DialogTitle>
            <DialogDescription className="text-center">
              Gracias por tu compra. Tu pedido ha sido procesado correctamente.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="text-sm font-medium text-gray-600 mb-1">Resumen:</p>
            <p className="text-sm text-gray-800">Total pagado: ${totalPrice.toLocaleString('es-CL')}</p>
            <p className="text-sm text-gray-800">Método: Tarjeta terminada en {formData.cardNumber.slice(-4) || '****'}</p>
          </div>
          <div className="flex justify-center">
            <Button onClick={handleDialogClose}>
              Volver a la tienda
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Checkout; 