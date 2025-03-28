
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, IndianRupee, Sparkles, Box } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const SuperNovaBox = () => {
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-base px-4 py-1 border-primary text-primary">
                Featured Product
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">The Supernova</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our adorable yellow storage box keeps your patches organized and protected wherever you go.
                Get started with a box and refill with your favorite patches!
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-20">
              <div className="w-full md:w-1/2">
                <div className="bg-yellow-100 rounded-2xl p-8 flex items-center justify-center h-full">
                  <img 
                    src="/lovable-uploads/6fd8b100-c2ae-4c93-9d36-274245e8c805.png" 
                    alt="Supernova" 
                    className="max-w-full max-h-96 object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Why You'll Love It</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Cute & Portable</h3>
                      <p className="text-gray-600">Take your patches anywhere with this compact yellow box</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Keeps Patches Fresh</h3>
                      <p className="text-gray-600">Protects your patches from dust and damage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Mirror Inside</h3>
                      <p className="text-gray-600">Makes it easy to apply patches precisely</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Refillable Design</h3>
                      <p className="text-gray-600">Buy any of our patch refills to customize your wellness routine</p>
                    </div>
                  </li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Supernova</h3>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span className="font-bold text-2xl">999</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Comes with 4 sample star-shaped patches to get you started!</p>
                  <Button 
                    size="lg" 
                    className="w-full rounded-full"
                    onClick={() => addToCart({
                      id: 1,
                      name: "Supernova",
                      price: 999
                    })}
                  >
                    Add to Cart
                  </Button>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" /> Refill with Your Favorite Patches
                  </h3>
                  <p className="text-gray-700 mb-4">
                    After getting your Supernova, check out our collection of refill patches for energy, sleep, focus, and more!
                  </p>
                  <Link to="/products">
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full border-black hover:bg-black hover:text-white"
                    >
                      Browse Patch Refills
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuperNovaBox;
