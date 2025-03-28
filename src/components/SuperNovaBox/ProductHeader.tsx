
import { Badge } from "@/components/ui/badge";

interface ProductHeaderProps {
  title: string;
  description: string;
}

const ProductHeader = ({ title, description }: ProductHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-4 text-base px-4 py-1 border-primary text-primary">
        Featured Product
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default ProductHeader;
