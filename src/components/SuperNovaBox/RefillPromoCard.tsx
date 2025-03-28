
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RefillPromoCard = () => {
  return (
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
  );
};

export default RefillPromoCard;
