
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Heart, Coffee, Moon, Zap, Brain, Leaf, Dumbbell, IndianRupee } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "Supernova Box",
    description: "Our cute yellow storage box to carry and organize your patches wherever you go!",
    price: 999,
    badge: "Bestseller",
    color: "bg-primary",
    icon: <Sparkles className="h-10 w-10" />,
    special: true
  },
  {
    id: 2,
    name: "Sleep Patch",
    description: "Fall asleep faster and wake up refreshed with our melatonin-infused refill patches",
    price: 999,
    badge: "Bestseller",
    color: "bg-blue-100",
    icon: <Moon className="h-10 w-10" />,
    special: false
  },
  {
    id: 3,
    name: "B12 Boost",
    description: "Recharge your body with essential B12 vitamins - perfect refills for your Supernova box",
    price: 1199,
    badge: null,
    color: "bg-purple-100",
    icon: <Zap className="h-10 w-10" />,
    special: false
  },
  {
    id: 4,
    name: "Caffeine Kick",
    description: "Skip the coffee, get the focus with our time-release caffeine refill patches",
    price: 1099,
    badge: "Popular",
    color: "bg-accent",
    icon: <Coffee className="h-10 w-10" />,
    special: false
  },
  {
    id: 5,
    name: "Focus Formula",
    description: "Stay concentrated with our nootropic refill patches - perfect for your Supernova box",
    price: 1399,
    badge: "New",
    color: "bg-[#64B5F6]",
    icon: <Brain className="h-10 w-10" />,
    special: false
  },
  {
    id: 6,
    name: "Pre-Workout Power",
    description: "Get pumped for your workout with our energy-boosting fitness refill patches",
    price: 1499,
    badge: "For Athletes",
    color: "bg-[#FF5252]",
    icon: <Dumbbell className="h-10 w-10" />,
    special: false
  },
  {
    id: 7,
    name: "Chill Pill",
    description: "De-stress and find your calm with our anxiety-reducing refill patches for your box",
    price: 1299,
    badge: null,
    color: "bg-[#81C784]",
    icon: <Leaf className="h-10 w-10" />,
    special: false
  }
];

const Products = () => {
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg text-gray-600">
              Get our cute Supernova box to store and organize your patches, then refill it with 
              our collection of innovative wellness patches designed to enhance your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className={`overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow ${product.special ? 'lg:col-span-3 md:col-span-2' : ''}`}>
                <CardContent className="p-0">
                  <div className={`${product.color} p-8 flex justify-center items-center ${product.special ? 'relative h-64' : ''}`}>
                    {product.special ? (
                      <>
                        <img 
                          src="/lovable-uploads/6fd8b100-c2ae-4c93-9d36-274245e8c805.png" 
                          alt="Supernova Box" 
                          className="h-56 object-contain"
                        />
                        <div className="absolute top-4 right-4">
                          {product.badge && (
                            <Badge variant="secondary" className="bg-black text-white">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        {product.icon}
                        {product.badge && (
                          <Badge variant="secondary" className="absolute top-4 right-4">
                            {product.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl">{product.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        <span className="font-bold text-lg">{product.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="rounded-full"
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price
                        })}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
