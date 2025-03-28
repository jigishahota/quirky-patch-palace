
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, IndianRupee, Sparkles, Box } from "lucide-react";

const SuperNovaBox = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-base px-4 py-1 border-primary text-primary">
                Premium Subscription
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">The Supernova</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our signature monthly subscription delivers a curated selection of our best patches
                right to your doorstep. Customize your box and save up to 25% compared to buying patches individually.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-20">
              <div className="w-full md:w-1/2">
                <div className="bg-yellow-100 rounded-2xl p-8 flex items-center justify-center h-full">
                  <div className="relative">
                    <div className="w-60 h-60 bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <Box className="h-20 w-20 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">30 Premium Patches</h3>
                      <p className="text-gray-600">Choose any combination of our premium patches to create your perfect box</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Free Shipping</h3>
                      <p className="text-gray-600">Enjoy free shipping on all subscription boxes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Early Access</h3>
                      <p className="text-gray-600">Be the first to try new patch formulations before they're released</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Exclusive Bonus Items</h3>
                      <p className="text-gray-600">Receive surprise wellness gifts with your monthly delivery</p>
                    </div>
                  </li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Monthly Subscription</h3>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span className="font-bold text-2xl">3,499</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Cancel or modify anytime. No commitment required.</p>
                  <Button size="lg" className="w-full rounded-full">Subscribe Now</Button>
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
