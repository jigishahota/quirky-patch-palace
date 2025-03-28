
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  badge: string | null;
  color: string;
  icon: React.ReactNode;
  special: boolean;
  details?: {
    fullDescription: string;
    benefits: string[];
    howToUse: string;
    ingredients?: string;
  };
};

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className={`${product.color} p-6 flex justify-center items-center h-48`}>
          <div className="flex items-center justify-center">
            {product.icon}
          </div>
          {product.badge && (
            <Badge variant="secondary" className="absolute top-4 right-4">
              {product.badge}
            </Badge>
          )}
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
            <DialogDescription className="text-base text-gray-600">
              {product.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            {product.details?.fullDescription && (
              <div>
                <p className="text-gray-700">{product.details.fullDescription}</p>
              </div>
            )}

            {product.details?.benefits && (
              <div>
                <h3 className="font-bold text-lg mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {product.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 rounded-full p-1">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.details?.howToUse && (
              <div>
                <h3 className="font-bold text-lg mb-2">How to Use</h3>
                <p className="text-gray-700">{product.details.howToUse}</p>
              </div>
            )}

            {product.details?.ingredients && (
              <div>
                <h3 className="font-bold text-lg mb-2">Ingredients</h3>
                <p className="text-gray-600 text-sm">{product.details.ingredients}</p>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center">
              <IndianRupee className="h-4 w-4 mr-1" />
              <span className="font-bold text-lg">{product.price}</span>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="rounded-full"
                onClick={onClose}
              >
                Close
              </Button>
              <Button 
                className="rounded-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
