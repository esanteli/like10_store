import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Info } from 'lucide-react';
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
  const { items, totalPrice, clearCart } = useCart();
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
    setPaymentComplete(true);
  };

  // Handle dialog close and redirect
  const handleDialogClose = () => {
    setPaymentComplete(false);
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="container max-w-6xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="mb-8 text-gray-600">No hay productos en tu carrito para realizar el pago.</p>
          <Button onClick={() => navigate('/products')}>Ver productos</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Finalizar compra</h1>
          <p className="text-muted-foreground">Por favor, completa los detalles para realizar el pago.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Customer and Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Customer Information */}
              <div className="card">
                <div className="card-header">
                  <h2 className="text-xl font-semibold">Información personal</h2>
                </div>
                <div className="card-content">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label htmlFor="name" className="form-label">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="email" className="form-label">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="address" className="form-label">
                        Dirección
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="form-label">
                        Ciudad
                      </label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="form-label">
                        Código postal
                      </label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="card">
                <div className="card-header">
                  <h2 className="text-xl font-semibold">Información de pago</h2>
                </div>
                <div className="card-content">
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded mb-4">
                    <Info className="h-5 w-5 text-blue-600" />
                    <p className="text-sm text-blue-700">
                      Esto es una simulación. No se procesará ningún pago real.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label htmlFor="cardNumber" className="form-label">
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
                        />
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="expiryDate" className="form-label">
                        Fecha de expiración
                      </label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/AA"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="form-label">
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
                      />
                    </div>
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
            <div className="card sticky top-24">
              <div className="card-header">
                <h2 className="text-xl font-semibold">Resumen del pedido</h2>
              </div>
              <div className="card-content">
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
                        <h3 className="text-sm font-medium">{item.product.name}</h3>
                        <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                        <p className="text-sm font-medium mt-1">
                          ${(item.product.price * item.quantity).toLocaleString('es-CL')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toLocaleString('es-CL')}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Envío</span>
                    <span>Gratis</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toLocaleString('es-CL')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={paymentComplete} onOpenChange={setPaymentComplete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¡Pago completado!</DialogTitle>
            <DialogDescription>
              Tu pedido ha sido procesado exitosamente.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-6">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Te hemos enviado un correo electrónico con los detalles de tu compra.
            </p>
            <Button onClick={handleDialogClose}>
              Volver al inicio
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Checkout; 