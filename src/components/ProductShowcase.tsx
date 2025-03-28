
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Super Nova",
    description: "Our flagship yellow patch! Brightens your skin's universe with cosmic energy",
    price: 19.99,
    badge: "Bestseller",
    color: "bg-primary",
    special: true
  },
  {
    id: 2,
    name: "Calm & Cool",
    description: "Find your zen when life gets a little too extra",
    price: 14.99,
    badge: "New",
    color: "bg-[#9B7EDD]",
    special: false
  },
  {
    id: 3,
    name: "Sweet Dreams",
    description: "Drift off to dreamland faster than a sloth on vacation",
    price: 16.99,
    badge: null,
    color: "bg-secondary",
    special: false
  },
  {
    id: 4,
    name: "Party Prep",
    description: "Your pre-game buddy for those big nights out",
    price: 15.99,
    badge: "Limited",
    color: "bg-accent",
    special: false
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-quirky-gradient-2">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2">
            <Star className="text-primary h-7 w-7 wiggle" /> 
            <span>Shop Our Skin Patches</span> 
            <Star className="text-primary h-7 w-7 wiggle" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect patch for whatever life throws at your skin
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
                    <div className="text-center">
                      <Star className="h-24 w-24 text-black mx-auto mb-4 bounce" />
                      <h2 className="text-4xl font-extrabold text-black wiggle">SUPER NOVA</h2>
                    </div>
                  ) : (
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold float`}>
                      <Sparkles className="h-10 w-10" />
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
                  <span className="font-bold">${product.price}</span>
                  <Button size="sm" className={`rounded-full ${product.special ? 'bg-black text-white hover:bg-gray-800' : ''}`}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full font-semibold border-2 border-black hover:bg-black hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
