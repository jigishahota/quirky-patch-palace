
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, IndianRupee, Sparkles, Box, Zap, Moon, Coffee, Brain } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const patches = [
  {
    id: 1,
    name: "B12 Boost",
    description: "Keeps you energized all day long",
    icon: <Zap className="h-8 w-8 text-[#9B7EDD]" />
  },
  {
    id: 2,
    name: "Dream Catcher",
    description: "Fall asleep faster and sleep deeper",
    icon: <Moon className="h-8 w-8 text-secondary" />
  },
  {
    id: 3,
    name: "Caffeine Kick",
    description: "Clean energy without the jitters",
    icon: <Coffee className="h-8 w-8 text-accent" />
  },
  {
    id: 4,
    name: "Focus Formula",
    description: "Enhance mental clarity and concentration",
    icon: <Brain className="h-8 w-8 text-[#64B5F6]" />
  }
];

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-base px-4 py-1 border-primary text-primary">
                Featured Product
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">The Supernova</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our adorable yellow storage box keeps your patches organized and protected wherever you go.
                Get started with a box and refill with your favorite patches!
              </p>
            </div>

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
                <h2 className="text-3xl font-bold mb-6">Why You'll Love It</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Cute & Portable</h3>
                      <p className="text-gray-600">Take your patches anywhere with this compact yellow box</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Keeps Patches Fresh</h3>
                      <p className="text-gray-600">Protects your patches from dust and damage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Mirror Inside</h3>
                      <p className="text-gray-600">Makes it easy to apply patches precisely</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Refillable Design</h3>
                      <p className="text-gray-600">Buy any of our patch refills to customize your wellness routine</p>
                    </div>
                  </li>
                </ul>
                
                {/* Improved patch selection section with better proportions */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Choose Your 4 Patches</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Tabs defaultValue="patches" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="patches">Select Patches</TabsTrigger>
                        <TabsTrigger value="selected">Your Selection ({selectedPatches.length}/4)</TabsTrigger>
                      </TabsList>
                      <TabsContent value="patches">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {patches.map(patch => (
                            <div 
                              key={patch.id}
                              onClick={() => togglePatch(patch.id)}
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center gap-3
                                ${selectedPatches.includes(patch.id) 
                                  ? 'border-primary bg-primary/5' 
                                  : 'border-gray-200 hover:border-gray-300'}`}
                            >
                              <div className="flex-shrink-0">
                                {patch.icon}
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-bold">{patch.name}</h4>
                                <p className="text-sm text-gray-600">{patch.description}</p>
                              </div>
                              <div className="flex-shrink-0">
                                {selectedPatches.includes(patch.id) && (
                                  <div className="bg-primary text-white rounded-full p-1">
                                    <Check className="h-4 w-4" />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="selected">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedPatches.length > 0 ? (
                            selectedPatches.map(id => {
                              const patch = patches.find(p => p.id === id);
                              if (!patch) return null;
                              return (
                                <div key={patch.id} className="flex items-center gap-3 bg-white p-4 rounded-lg border shadow-sm">
                                  <div className="p-2 rounded-full" style={{ backgroundColor: 'rgba(155, 126, 221, 0.1)' }}>
                                    {patch.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-bold">{patch.name}</h4>
                                    <p className="text-sm text-gray-600">{patch.description}</p>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <p className="text-gray-500 text-center py-4 col-span-2">No patches selected. Please select at least 1 patch.</p>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Supernova</h3>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span className="font-bold text-2xl">999</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Comes with 4 patches of your choosing to get you started!</p>
                  <Button 
                    size="lg" 
                    className="w-full rounded-full"
                    onClick={() => addToCart({
                      id: 1,
                      name: "Supernova",
                      price: 999
                    })}
                  >
                    Add to Cart
                  </Button>
                </div>
                
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
