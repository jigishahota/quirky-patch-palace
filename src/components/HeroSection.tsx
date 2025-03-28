
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative bg-quirky-gradient">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white mb-6">
              <Star size={16} className="text-primary" />
              <span className="text-sm font-semibold">Feel Your Best On-The-Go</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Pocket-Sized <span className="text-primary">Energy</span> Patches!
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg mx-auto md:mx-0">
              B12, caffeine, sleep aid, and pre-workout patches packed in a cute portable box to energize your day, anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full text-lg font-semibold px-8 bg-primary text-black hover:bg-primary/90">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg font-semibold px-8 gap-2 border-black hover:bg-black hover:text-white">
                Learn More <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-black/5 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-full bg-white shadow-xl overflow-hidden flex items-center justify-center bounce">
                <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
                <div className="w-5/6 h-5/6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full bg-primary flex items-center justify-center pulse">
                    <Star className="w-1/2 h-1/2 text-black wiggle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-12 h-12 rounded-full bg-primary wiggle"></div>
      <div className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-secondary bounce"></div>
      <div className="absolute bottom-40 right-20 w-10 h-10 rounded-full bg-accent float"></div>
    </section>
  );
};

export default HeroSection;
