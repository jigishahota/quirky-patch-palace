
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, User, Award, Globe } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NOVASKIN</h1>
            <p className="text-xl text-gray-600">
              We're on a mission to revolutionize wellness through innovative, 
              transdermal patches that deliver benefits directly through your skin.
            </p>
          </div>

          {/* Our story section */}
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden h-full">
                <div className="bg-primary/10 h-full flex items-center justify-center p-12">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-bold text-lg">Founded</p>
                        <p className="text-3xl font-bold text-primary">2025</p>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                NOVASKIN began with a simple mission: making all things skin administered. In a world 
                of pills, powders, and potions, we saw an opportunity to deliver wellness directly through your skin.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, a biochemist with a background in transdermal delivery systems, teamed up with 
                a wellness enthusiast and a product designer to create something magical – patches that 
                deliver precise amounts of beneficial ingredients through your skin, bypassing the 
                digestive system for optimal absorption.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to offer a diverse range of patches for energy, sleep, focus, and more – 
                each designed with care, backed by science, and tested thoroughly to ensure they deliver 
                on their promises of effective transdermal delivery.
              </p>
            </div>
          </div>

          {/* Values section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gray-50 text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Every decision we make starts with you. We prioritize your experience, 
                  satisfaction, and wellness above all else.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality & Innovation</h3>
                <p className="text-gray-600">
                  We never compromise on quality and constantly push the boundaries of 
                  what's possible in transdermal wellness technology.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental footprint through 
                  eco-friendly packaging and responsible sourcing practices.
                </p>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-primary/10 rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the NOVASKIN Family</h2>
            <p className="text-lg text-gray-600 mb-6">
              Experience the difference our innovative transdermal patches can make in your daily life.
            </p>
            <Button 
              size="lg" 
              className="rounded-full"
              onClick={() => window.location.href = "/products"}
            >
              Shop Our Products
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
