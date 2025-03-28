
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Heart, Coffee, Moon, Zap, Brain, Leaf, Dumbbell, IndianRupee } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductDetailModal, { Product } from "@/components/ProductDetailModal";

const products: Product[] = [
  {
    id: 1,
    name: "Supernova",
    description: "Our cute yellow storage box to carry and organize your patches wherever you go!",
    price: 999,
    badge: "Bestseller",
    color: "bg-primary",
    icon: <Sparkles className="h-10 w-10" />,
    special: true,
    details: {
      fullDescription: "Supernova is our innovative, pocket-sized yellow box designed to store and organize your wellness patches. Its compact design makes it perfect for travel, ensuring your patches stay protected and fresh wherever life takes you.",
      benefits: [
        "Compact and portable design fits in your pocket or bag",
        "Keeps patches organized and protected",
        "Built-in mirror for perfect application",
        "Compartments to store multiple patch types",
        "Durable construction ensures long-lasting use"
      ],
      howToUse: "Simply open the Supernova box, select your patch, and use the built-in mirror to apply it to the recommended area. Close securely to keep your remaining patches fresh and protected."
    }
  },
  {
    id: 2,
    name: "Sleep Patch",
    description: "Fall asleep faster and wake up refreshed with our melatonin-infused refill patches",
    price: 999,
    badge: "Bestseller",
    color: "bg-blue-100",
    icon: <Moon className="h-10 w-10" />,
    special: false,
    details: {
      fullDescription: "Our Sleep Patches are designed to help you fall asleep faster and enjoy deeper, more restful sleep. Infused with melatonin and natural sleep-promoting ingredients, these patches help regulate your sleep cycle naturally.",
      benefits: [
        "Fall asleep faster without prescription medications",
        "Wake up refreshed without grogginess",
        "Improve sleep quality and duration",
        "Regulate your sleep cycle",
        "Natural ingredients with no harmful side effects"
      ],
      howToUse: "Apply one patch to clean, dry skin on your inner wrist or behind your ear 30-60 minutes before bedtime. Remove in the morning. For best results, use in a dark environment with minimal screen time before bed.",
      ingredients: "Melatonin, Valerian Root Extract, Magnesium, GABA, L-Theanine"
    }
  },
  {
    id: 3,
    name: "B12 Boost",
    description: "Recharge your body with essential B12 vitamins - perfect refills for your Supernova box",
    price: 1199,
    badge: null,
    color: "bg-purple-100",
    icon: <Zap className="h-10 w-10" />,
    special: false,
    details: {
      fullDescription: "B12 Boost patches deliver vital vitamin B12 directly through your skin, bypassing digestive absorption issues. Perfect for maintaining energy levels, cognitive function, and supporting overall health.",
      benefits: [
        "Sustained energy without crashes",
        "Supports red blood cell formation and prevents anemia",
        "Enhances brain function and memory",
        "Improves mood and reduces stress",
        "Supports immune system function"
      ],
      howToUse: "Apply one patch daily to clean, dry skin on your inner arm or shoulder. Each patch provides 24 hours of vitamin B12 delivery. Replace daily for best results.",
      ingredients: "Methylcobalamin (Vitamin B12), Biotin, Folate, Vitamin B6, Hyaluronic acid"
    }
  },
  {
    id: 4,
    name: "Caffeine Kick",
    description: "Skip the coffee, get the focus with our time-release caffeine refill patches",
    price: 1099,
    badge: "Popular",
    color: "bg-accent",
    icon: <Coffee className="h-10 w-10" />,
    special: false,
    details: {
      fullDescription: "Caffeine Kick patches provide steady, time-released caffeine absorption for sustained focus and energy without the jitters or crashes associated with coffee or energy drinks.",
      benefits: [
        "Clean, sustained energy for 6-8 hours",
        "No jitters, anxiety, or energy crashes",
        "Improved focus and mental clarity",
        "No coffee breath or teeth staining",
        "Perfect for travel, work, or studying"
      ],
      howToUse: "Apply one patch to your inner arm or shoulder in the morning or when you need a boost. Effects begin within 15-20 minutes and last 6-8 hours. Do not use more than two patches in 24 hours.",
      ingredients: "Caffeine, L-Theanine, Green Tea Extract, B-Vitamins, Guarana Extract"
    }
  },
  {
    id: 5,
    name: "Focus Formula",
    description: "Stay concentrated with our nootropic refill patches - perfect for your Supernova box",
    price: 1399,
    badge: "New",
    color: "bg-[#64B5F6]",
    icon: <Brain className="h-10 w-10" />,
    special: false,
    details: {
      fullDescription: "Focus Formula patches combine powerful nootropics that enhance brain function, improve concentration, and support mental clarity. Perfect for students, professionals, or anyone who needs to stay sharp and focused.",
      benefits: [
        "Enhanced mental clarity and focus",
        "Improved memory and recall",
        "Reduced brain fog and mental fatigue",
        "Increased productivity and workflow",
        "Support for cognitive function"
      ],
      howToUse: "Apply one patch to clean, dry skin on your inner wrist or behind your ear. Each patch provides 8 hours of mental clarity support. For best results, use on days when you need enhanced focus.",
      ingredients: "Bacopa Monnieri, Lion's Mane Extract, Ginkgo Biloba, Rhodiola Rosea, Alpha-GPC"
    }
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
    details: {
      fullDescription: "Pre-Workout Power patches deliver a powerful blend of performance-enhancing compounds through your skin, bypassing the digestive system for quicker action and no stomach discomfort. Perfect for athletes and fitness enthusiasts.",
      benefits: [
        "Increased energy and endurance during workouts",
        "Enhanced muscle pump and performance",
        "Improved strength and power output",
        "Better focus during training sessions",
        "No stomach discomfort or mid-workout crashes"
      ],
      howToUse: "Apply one patch to clean, dry skin on your inner arm or shoulder 20-30 minutes before your workout. Remove after your workout session is complete. Do not use more than one patch in a 24-hour period.",
      ingredients: "Caffeine, L-Citrulline, Beta-Alanine, Taurine, B Vitamins, Dynamine"
    }
  },
  {
    id: 7,
    name: "Chill Pill",
    description: "De-stress and find your calm with our anxiety-reducing refill patches for your box",
    price: 1299,
    badge: null,
    color: "bg-[#81C784]",
    icon: <Leaf className="h-10 w-10" />,
    special: false,
    details: {
      fullDescription: "Chill Pill patches deliver a blend of natural stress-reducing compounds that promote relaxation and calm without drowsiness. Perfect for managing daily stress, anxiety, or tension.",
      benefits: [
        "Reduces stress and anxiety naturally",
        "Promotes calm without drowsiness",
        "Helps manage stress response",
        "Improves mood and mental wellbeing",
        "Supports better focus during stressful situations"
      ],
      howToUse: "Apply one patch to clean, dry skin on your inner wrist or behind your ear. Effects begin within 30 minutes and last up to 8 hours. Safe to use daily or as needed during stressful situations.",
      ingredients: "L-Theanine, GABA, Ashwagandha Extract, Lemon Balm, Lavender Oil, Magnesium"
    }
  }
];

const Products = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg text-gray-600">
              Get our cute Supernova to store and organize your patches, then refill it with 
              our collection of innovative wellness patches designed to enhance your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className={`overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow cursor-pointer ${product.special ? 'lg:col-span-3 md:col-span-2' : ''}`}
                onClick={() => openProductDetails(product)}
              >
                <CardContent className="p-0">
                  <div className={`${product.color} p-8 flex justify-center items-center ${product.special ? 'relative h-64' : ''}`}>
                    {product.special ? (
                      <>
                        <img 
                          src="/lovable-uploads/6fd8b100-c2ae-4c93-9d36-274245e8c805.png" 
                          alt="Supernova" 
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
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price
                          });
                        }}
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
      
      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeProductDetails} 
      />
      
      <Footer />
    </div>
  );
};

export default Products;
