
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Heart, Coffee, Moon, Zap, IndianRupee, Brain, Leaf, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "Supernova",
    description: "Our pocket-sized yellow box to store and carry your patches wherever life takes you!",
    price: 999,
    badge: "Bestseller",
    color: "bg-primary",
    special: true,
    path: "/super-nova-box"
  },
  {
    id: 2,
    name: "B12 Boost",
    description: "A vitamin-infused refill patch that keeps you energized all day long",
    price: 1199,
    badge: "New",
    color: "bg-[#9B7EDD]",
    icon: <Zap className="h-10 w-10" />,
    special: false,
    path: "/products"
  },
  {
    id: 3,
    name: "Dream Catcher",
    description: "Fall asleep faster and sleep deeper with our melatonin-infused refill patches",
    price: 1299,
    badge: null,
    color: "bg-secondary",
    icon: <Moon className="h-10 w-10" />,
    special: false,
    path: "/products"
  },
  {
    id: 4,
    name: "Caffeine Kick",
    description: "Your coffee alternative refill patch - clean energy without the jitters or crashes",
    price: 1199,
    badge: "Popular",
    color: "bg-accent",
    icon: <Coffee className="h-10 w-10" />,
    special: false,
    path: "/products"
  },
  {
    id: 5,
    name: "Focus Formula",
    description: "Stay concentrated and enhance mental clarity with our nootropic refill patches",
    price: 1399,
    badge: "New",
    color: "bg-[#64B5F6]",
    icon: <Brain className="h-10 w-10" />,
    special: false,
    path: "/products"
  },
  {
    id: 6,
    name: "Pre-Workout Power",
    description: "Get pumped for your workout with our energy-boosting fitness refill patches",
    price: 1499,
    badge: "For Athletes",
    color: "bg-[#FF5252]",
    icon: <Dumbbell className="h-10 w-10" />,
    special: false,
    path: "/products"
  },
  {
    id: 7,
    name: "Chill Pill",
    description: "De-stress and find your calm with our anxiety-reducing refill patches",
    price: 1299,
    badge: null,
    color: "bg-[#81C784]",
    icon: <Leaf className="h-10 w-10" />,
    special: false,
    path: "/products"
  }
];

const ProductShowcase = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 md:py-24 bg-quirky-gradient-2">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2">
            <Star className="text-primary h-7 w-7 wiggle" /> 
            <span>Shop Our Wellness Products</span> 
            <Star className="text-primary h-7 w-7 wiggle" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get our cute Supernova and refill it with our wellness patches for energy, sleep, focus, and more
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`overflow-hidden group hover:shadow-lg transition-all duration-300 border-4 ${product.special ? 'border-primary col-span-1 sm:col-span-2 lg:col-span-2 row-span-2' : 'border-transparent'}`}
            >
              <div className={`${product.special ? 'aspect-square sm:aspect-auto sm:h-80' : 'aspect-square'} relative overflow-hidden`}>
                <div className={`absolute inset-0 ${product.color} ${product.special ? 'opacity-100' : 'opacity-70'} group-hover:opacity-90 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {product.special ? (
                    <div className="text-center relative">
                      <img 
                        src="/lovable-uploads/2d5ffb39-a182-49fe-805b-a9c7f6d443ac.png" 
                        alt="Supernova" 
                        className="h-48 mx-auto mb-6 object-contain"
                      />
                      <h2 className="text-4xl font-extrabold text-black wiggle">SUPERNOVA</h2>
                      <p className="text-black font-bold">Pocket-Sized Patch Carrier</p>
                    </div>
                  ) : (
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold float`}>
                      {product.icon}
                    </div>
                  )}
                </div>
                {product.badge && (
                  <Badge className={`absolute top-4 right-4 ${product.special ? 'bg-black text-white' : 'bg-white text-primary'}`}>
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {product.price}
                  </span>
                  <Button 
                    size="sm" 
                    className={`rounded-full ${product.special ? 'bg-black text-white hover:bg-gray-800' : ''}`}
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price
                    })}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="outline" size="lg" className="rounded-full font-semibold border-2 border-black hover:bg-black hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
