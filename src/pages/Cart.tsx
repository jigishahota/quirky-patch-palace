
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Trash2, MinusCircle, PlusCircle, ArrowLeft, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">Looks like you haven't added any patches to your cart yet.</p>
              <Link to="/products">
                <Button className="rounded-full">Browse Products</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-8">
            <Link to="/products" className="flex items-center text-gray-600 hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Continue Shopping</span>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b last:border-0">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      <span>{item.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-400 hover:text-gray-600"
                      disabled={item.quantity <= 1}
                    >
                      <MinusCircle className="h-5 w-5" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <PlusCircle className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="ml-8 w-24 text-right font-semibold">
                    <IndianRupee className="h-3 w-3 inline mr-1" />
                    {item.price * item.quantity}
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <Button 
                variant="outline" 
                className="w-full rounded-full border-2 border-gray-200"
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
            </div>
            <div className="flex-1 bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <div className="font-semibold flex items-center">
                  <IndianRupee className="h-3 w-3 mr-1" />
                  {totalPrice}
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-600">Calculated at checkout</span>
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <div className="font-bold flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    {totalPrice}
                  </div>
                </div>
              </div>
              <Button className="w-full rounded-full">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
