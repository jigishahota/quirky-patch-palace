
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import ProductHeader from "@/components/SuperNovaBox/ProductHeader";
import SuperNovaFeatures from "@/components/SuperNovaBox/SuperNovaFeatures";
import PatchSelector from "@/components/SuperNovaBox/PatchSelector";
import ProductPricingCard from "@/components/SuperNovaBox/ProductPricingCard";
import RefillPromoCard from "@/components/SuperNovaBox/RefillPromoCard";
import { patches } from "@/components/SuperNovaBox/patches";

const SuperNovaBox = () => {
  const { addToCart } = useCart();
  const [selectedPatches, setSelectedPatches] = useState<number[]>([1, 2, 3, 4]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const togglePatch = (patchId: number) => {
    setSelectedPatches(prev => {
      if (prev.includes(patchId)) {
        if (prev.length <= 1) return prev; // Don't allow removing if only 1 patch selected
        return prev.filter(id => id !== patchId);
      } else {
        if (prev.length >= 4) return prev; // Don't allow more than 4 patches
        return [...prev, patchId];
      }
    });
  };

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "Supernova",
      price: 999
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ProductHeader 
              title="The Supernova"
              description="Our adorable yellow storage box keeps your patches organized and protected wherever you go. Get started with a box and refill with your favorite patches!"
            />

            <div className="flex flex-col md:flex-row gap-8 mb-20">
              <div className="w-full md:w-1/2">
                <div className="bg-yellow-100 rounded-2xl p-8 flex items-center justify-center h-full">
                  <img 
                    src="/lovable-uploads/1cceb897-3cf7-4446-8da8-c25b795d4935.png" 
                    alt="Supernova" 
                    className="max-w-full max-h-96 object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <SuperNovaFeatures />
                
                <PatchSelector 
                  patches={patches}
                  selectedPatches={selectedPatches}
                  onPatchToggle={togglePatch}
                />
                
                <ProductPricingCard 
                  name="Supernova"
                  price={999}
                  description="Comes with 4 patches of your choosing to get you started!"
                  onAddToCart={handleAddToCart}
                />
                
                <RefillPromoCard />
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
