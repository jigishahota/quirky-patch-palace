
import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-quirky-gradient overflow-hidden relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white float">
                <Star size={24} />
              </div>
              
              <div className="absolute bottom-12 right-8 w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white float" style={{ animationDelay: "0.5s" }}>
                <Sparkles size={20} />
              </div>
              
              <div className="absolute bottom-8 left-1/3 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white float" style={{ animationDelay: "1s" }}>
                <Heart size={18} />
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center pulse">
                <div className="text-center px-4">
                  <h3 className="font-bold text-xl mb-1">est. 2025</h3>
                  <p className="text-sm text-gray-600">Making life patch-tastic</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Story Behind <br/><span className="text-primary">NOVASKIN</span>
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              We started with a simple mission: NOVASKIN - making all things skin administered. Our innovative patches deliver wellness through your skin.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Our team of patch enthusiasts works tirelessly to create transdermal patches that not only look adorable but actually deliver real benefits through skin absorption. Each patch is crafted with love, science, and a dash of sparkle.
            </p>
            <Button size="lg" className="rounded-full text-lg gap-2">
              Our Story <Star size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute bottom-0 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/3 -left-20 w-60 h-60 rounded-full bg-accent/20 blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
