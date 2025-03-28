
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Square } from "lucide-react";

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
              Pocket-Sized <span className="text-primary">Wellness</span> Patches!
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg mx-auto md:mx-0">
              Transform your daily wellness routine with our innovative skin-administered patches. Convenient, effective, and perfect for your busy lifestyle.
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
              {/* Custom Supernova Box graphic with star and square patches */}
              <div className="absolute inset-0 rounded-full bg-black/5 animate-spin-slow"></div>
              
              {/* Yellow box container */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-primary rounded-xl shadow-xl overflow-hidden flex items-center justify-center bounce">
                {/* Box interior with star in the middle */}
                <div className="relative w-full h-full p-6 flex items-center justify-center">
                  {/* Center star */}
                  <Star className="w-16 h-16 text-black absolute z-10 wiggle" />
                  
                  {/* Square patches inside the box */}
                  <Square className="w-10 h-10 absolute top-6 left-6 text-white/80 rotate-12" />
                  <Square className="w-8 h-8 absolute top-10 right-10 text-white/80 -rotate-6" />
                  <Square className="w-9 h-9 absolute bottom-8 left-12 text-white/80 rotate-45" />
                  <Square className="w-7 h-7 absolute bottom-10 right-8 text-white/80 -rotate-12" />
                  
                  {/* Box lid reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/5 bg-white/20 transform -skew-x-12"></div>
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
