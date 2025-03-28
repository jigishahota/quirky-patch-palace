
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <p>
                These Terms of Service ("Terms") govern your access to and use of the NOVASKIN website and services. By accessing or using our website, you agree to be bound by these Terms.
              </p>
              
              <h2>Use of Our Website</h2>
              <p>
                You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul>
                <li>Use our website in any way that violates applicable laws or regulations</li>
                <li>Use our website to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to any part of our website</li>
                <li>Use our website to conduct any activity that would constitute a civil or criminal offense</li>
              </ul>
              
              <h2>Product Information</h2>
              <p>
                We strive to provide accurate descriptions of our products. However, we do not warrant that product descriptions or other content on our website are accurate, complete, reliable, current, or error-free.
              </p>
              <p>
                Our products are designed for general wellness purposes and are not intended to diagnose, treat, cure, or prevent any disease. Results may vary among individuals.
              </p>
              
              <h2>Purchases and Payment</h2>
              <p>
                By placing an order, you agree to provide current, complete, and accurate purchase and account information. We reserve the right to refuse or cancel your order if we suspect fraud or unauthorized activity.
              </p>
              <p>
                All payments are processed securely through our payment processors. We do not store your full credit card details on our servers.
              </p>
              
              <h2>Shipping and Delivery</h2>
              <p>
                Shipping times are estimates and are not guaranteed. We are not responsible for delays caused by customs, postal services, or other factors beyond our control.
              </p>
              
              <h2>Returns and Refunds</h2>
              <p>
                We offer a 30-day satisfaction guarantee on most products. If you're not satisfied with your purchase, please contact our customer service team for return instructions.
              </p>
              <p>
                Some items, due to their nature, may not be eligible for return. These exceptions will be noted in the product description.
              </p>
              
              <h2>Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of NOVASKIN or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, NOVASKIN shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising out of or in connection with your access to, use of, or inability to use our website.
              </p>
              
              <h2>Changes to These Terms</h2>
              <p>
                We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised Terms.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@novaskin.com<br />
                Address: 123 Wellness Way, Health City, HC 12345
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
