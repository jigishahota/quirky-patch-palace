
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <p>
                At NOVASKIN, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you register on our website, express interest in obtaining information about us or our products, or otherwise contact us.
              </p>
              <p>
                The personal information we collect may include:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Payment information</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Send you marketing communications (if you've opted in)</li>
                <li>Improve our website and product offerings</li>
                <li>Protect against fraudulent transactions</li>
              </ul>
              
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies to improve your browsing experience, analyze website traffic, and understand where our visitors are coming from.
              </p>
              <p>
                You can choose to disable cookies through your browser settings, although this may affect your ability to access certain features of our website.
              </p>
              
              <h2>Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described below:
              </p>
              <ul>
                <li>Service providers who assist us in operating our website, conducting our business, or servicing you</li>
                <li>Authorities when required by law or to protect our rights</li>
                <li>In the event of a merger, acquisition, or asset sale</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.
              </p>
              
              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@novaskin.com<br />
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

export default Privacy;
