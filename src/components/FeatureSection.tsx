
import { Badge } from "@/components/ui/badge";
import { Heart, Battery, Coffee, Moon } from "lucide-react";

const features = [
  {
    icon: <Heart className="h-6 w-6 text-accent" />,
    title: "Feel the Love",
    description: "Our patches are infused with all the good stuff your body craves. Like a hug, but science-y!"
  },
  {
    icon: <Battery className="h-6 w-6 text-secondary" />,
    title: "Instant Recharge",
    description: "Need a boost? Our patches deliver a gentle pick-me-up when you need it most."
  },
  {
    icon: <Coffee className="h-6 w-6 text-primary" />,
    title: "Morning Magic",
    description: "Wake up on the right side of the bed every day with our energizing patches."
  },
  {
    icon: <Moon className="h-6 w-6 text-[#9B7EDD]" />,
    title: "Dream Team",
    description: "Our sleep patches help you drift off to dreamland faster than counting sheep."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-quirky-gradient-2">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 rounded-full border-primary/20 bg-primary/5 text-primary font-semibold">
            Why PatchPal?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Than Just a Sticky Situation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our patches are designed to make you feel amazing while looking cute. Because who says wellness can't be fun?
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
