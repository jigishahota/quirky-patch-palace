
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative bg-quirky-gradient">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-semibold">Your Daily Dose of Awesome</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Feel Good <span className="text-primary">Patches</span> for Life's Moments
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg mx-auto md:mx-0">
              Quirky, fun, and actually effective patches that stick with you through thick and thin. Made with love and science!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full text-lg font-semibold px-8">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg font-semibold px-8 gap-2">
                Learn More <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-accent/10 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-full bg-white shadow-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 rounded-full"></div>
                <div className="w-5/6 h-5/6 rounded-full bg-secondary/10 flex items-center justify-center float">
                  <div className="w-4/5 h-4/5 rounded-full bg-white shadow-md flex items-center justify-center pulse">
                    <img 
                      src="/placeholder.svg" 
                      alt="PatchPal Product" 
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="hidden md:block absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
