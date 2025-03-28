
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun T.",
    comment: "Yaar, these patches are simply amazing! I use the energy one before my morning yoga and I feel active the whole day. Totally worth every rupee!",
    rating: 5,
    avatar: "A"
  },
  {
    name: "Jaya P.",
    comment: "I was a bit skeptical initially, but the sleep patch knocked me out faster than my grandmother's kadha. Absolutely brilliant product, no?",
    rating: 5,
    avatar: "J"
  },
  {
    name: "Sanjay R.",
    comment: "The calm patch has been my secret weapon during office presentations. My colleagues think I'm naturally cool as a cucumber now!",
    rating: 4,
    avatar: "S"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="currentColor" className="h-6 w-6 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            People Love Their Patches
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patch-obsessed customers are saying
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden bg-gray-50 border-none hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 relative">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-200" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} fill="currentColor" className="h-4 w-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
