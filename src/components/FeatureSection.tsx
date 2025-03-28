
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, Coffee, Moon } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "B12 Energy Boost",
    description: "Vitamin B12 patches that give you natural, sustained energy throughout your day."
  },
  {
    icon: <Coffee className="h-6 w-6 text-primary" />,
    title: "Caffeine Kick",
    description: "A coffee alternative that delivers clean energy without the jitters or crashes."
  },
  {
    icon: <Moon className="h-6 w-6 text-[#9B7EDD]" />,
    title: "Dream Catcher",
    description: "Melatonin-infused patches to help you fall asleep faster and sleep deeper."
  },
  {
    icon: <Battery className="h-6 w-6 text-secondary" />,
    title: "Pocket-Sized",
    description: "Our Super Nova box lets you carry your patches wherever you go for on-the-go wellness."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-quirky-gradient-2">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 rounded-full border-primary/20 bg-primary/5 text-primary font-semibold">
            Why Nova Skin?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Feel-Good Patches That Actually Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our wellness patches are designed to give you the energy, focus, and rest you need - all in a super cute pocket-sized box.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
