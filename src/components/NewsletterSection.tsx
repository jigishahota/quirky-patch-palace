
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Party, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "Get ready for patches, perks, and plenty of fun!",
        variant: "default",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-6 shadow-sm">
            <Party className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm">Join the Patch Party!</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Patchy Updates & Exclusive Offers
          </h2>
          
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter and be the first to know about new patch drops, special deals, and patch-tastic content!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="rounded-full gap-2">
              Sign Up <Star className="h-4 w-4" />
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            We promise not to spam! Only good vibes and patch updates.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full aspect-square opacity-50">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 text-primary"><Star className="h-full w-full" /></div>
        <div className="absolute top-3/4 left-1/3 w-6 h-6 text-secondary"><Sparkles className="h-full w-full" /></div>
      </div>
      
      <div className="absolute top-0 right-0 h-full aspect-square opacity-50">
        <div className="absolute top-1/3 right-1/4 w-10 h-10 text-accent"><Star className="h-full w-full" /></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 text-primary"><Sparkles className="h-full w-full" /></div>
      </div>
    </section>
  );
};

export default NewsletterSection;
