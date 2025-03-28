
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-white py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About NovaSkin</h2>
            <p className="text-gray-600 mb-8 text-lg">
              NovaSkin was born from a simple idea: wellness should be 
              accessible, effective, and fit seamlessly into your daily routine.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our team of patch enthusiasts (yes that's a thing) have developed 
              innovative wellness patches that deliver nutrients, supplements, and 
              beneficial compounds through your skin - bypassing your digestive 
              system for better absorption and more consistent results.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              The Supernova, our signature storage box, helps you keep your 
              wellness journey organized and stylish, wherever you go.
            </p>
            <Link to="/about">
              <Button className="rounded-full gap-2">
                <Sparkles size={16} /> Learn more about us
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-primary/10 p-8 rounded-2xl">
              <img 
                src="/lovable-uploads/2d5ffb39-a182-49fe-805b-a9c7f6d443ac.png" 
                alt="About NovaSkin" 
                className="rounded-xl w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg w-48 hidden md:block">
              <p className="text-sm font-medium mb-1">Daily Wellness</p>
              <p className="text-xs text-gray-500">Our patches make self-care simple and effective.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
