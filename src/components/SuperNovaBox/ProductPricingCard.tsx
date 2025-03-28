
import { IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductPricingCardProps {
  price: number;
  name: string;
  description: string;
  onAddToCart: () => void;
}

const ProductPricingCard = ({ price, name, description, onAddToCart }: ProductPricingCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          <span className="font-bold text-2xl">{price}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        size="lg" 
        className="w-full rounded-full"
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductPricingCard;
