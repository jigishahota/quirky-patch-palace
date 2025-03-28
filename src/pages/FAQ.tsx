
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do NOVASKIN patches work?",
    answer: "Our patches work through transdermal delivery, which means the active ingredients are absorbed through your skin and into your bloodstream. This provides a steady, consistent release of the active ingredients over several hours, unlike pills or drinks that have sharp peaks and drops in effectiveness."
  },
  {
    question: "Are the patches safe to use?",
    answer: "Yes, our patches are thoroughly tested and made from high-quality, hypoallergenic materials. The ingredients we use are carefully selected and tested for safety and efficacy. However, if you have sensitive skin or specific allergies, we recommend checking the ingredients list or consulting with a healthcare professional."
  },
  {
    question: "How long should I wear each patch?",
    answer: "Most of our patches are designed to be worn for 8-12 hours, depending on the specific product. Each product package includes detailed instructions for optimal use. Generally, we recommend applying patches to clean, dry skin and removing them after the recommended time period."
  },
  {
    question: "Can I wear multiple patches at once?",
    answer: "Yes, our patches can be worn simultaneously, but we recommend not wearing more than two different types at once. Also, be mindful of the total amount of active ingredients you're absorbing and follow the recommended usage instructions for each patch."
  },
  {
    question: "Where should I apply the patches?",
    answer: "Our patches can be applied to most areas with thin skin where blood vessels are close to the surface, such as the inside of your wrist, upper arm, or behind the ear. Detailed application instructions are included with each product."
  },
  {
    question: "Are the patches waterproof?",
    answer: "Our patches are water-resistant but not completely waterproof. They can withstand light exposure to water, such as washing hands or a quick shower, but prolonged exposure to water may reduce their effectiveness."
  },
  {
    question: "How quickly will I feel the effects?",
    answer: "The onset of effects varies by product and individual. Some users report feeling effects within 30 minutes, while others may take longer. Consistent use over time typically yields the best results."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping times and fees vary depending on location. You can calculate shipping costs at checkout before finalizing your purchase."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase for any reason, please contact our customer service team, and we'll help you with a replacement or refund."
  },
  {
    question: "Is the Super Nova Box subscription flexible?",
    answer: "Absolutely! You can customize your box contents each month, skip a delivery, or cancel your subscription at any time. Changes to your next box must be made at least 5 days before your scheduled billing date."
  }
];

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-600">
                Find answers to the most common questions about our products and services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
              <p className="text-gray-600 mb-4">Our customer support team is here to help.</p>
              <a 
                href="mailto:support@novaskin.com" 
                className="text-primary hover:text-primary/80 font-medium"
              >
                support@novaskin.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
