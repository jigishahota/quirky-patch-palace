
import { Check } from "lucide-react";

const features = [
  {
    title: "Cute & Portable",
    description: "Take your patches anywhere with this compact yellow box"
  },
  {
    title: "Keeps Patches Fresh",
    description: "Protects your patches from dust and damage"
  },
  {
    title: "Mirror Inside",
    description: "Makes it easy to apply patches precisely"
  },
  {
    title: "Refillable Design",
    description: "Buy any of our patch refills to customize your wellness routine"
  }
];

const SuperNovaFeatures = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Why You'll Love It</h2>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1 bg-primary/20 rounded-full p-1">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperNovaFeatures;
