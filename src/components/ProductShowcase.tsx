
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Energy Boost",
    description: "Wake up your day with an instant boost of good vibes",
    price: 14.99,
    badge: "Bestseller",
    color: "bg-primary"
  },
  {
    id: 2,
    name: "Calm & Cool",
    description: "Find your zen when life gets a little too extra",
    price: 14.99,
    badge: "New",
    color: "bg-[#9B7EDD]"
  },
  {
    id: 3,
    name: "Sweet Dreams",
    description: "Drift off to dreamland faster than a sloth on vacation",
    price: 16.99,
    badge: null,
    color: "bg-secondary"
  },
  {
    id: 4,
    name: "Party Prep",
    description: "Your pre-game buddy for those big nights out",
    price: 15.99,
    badge: "Limited",
    color: "bg-accent"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2">
            <Star className="text-primary h-7 w-7" /> 
            <span>Shop Our Patches</span> 
            <Star className="text-primary h-7 w-7" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect patch for whatever life throws your way
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <div className={`absolute inset-0 ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 ${product.color} rounded-full flex items-center justify-center text-white font-bold float`}>
                    <Sparkles className="h-10 w-10" />
                  </div>
                </div>
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-white text-primary">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">${product.price}</span>
                  <Button size="sm" className="rounded-full">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full font-semibold">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
