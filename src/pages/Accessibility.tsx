
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Accessibility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>
            <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <p>
                NOVASKIN is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              
              <h2>Our Commitment</h2>
              <p>
                We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
              <p>
                The guidelines have three levels of accessibility (A, AA, and AAA). We've chosen Level AA as our target.
              </p>
              
              <h2>Measures We Take</h2>
              <p>
                Some of the measures we take to ensure accessibility include:
              </p>
              <ul>
                <li>Providing alternative text for images</li>
                <li>Using semantic HTML to better structure our content</li>
                <li>Ensuring sufficient contrast between text and background</li>
                <li>Making our website navigable by keyboard</li>
                <li>Providing clear feedback for form submissions</li>
                <li>Testing our website with screen readers</li>
              </ul>
              
              <h2>Known Limitations</h2>
              <p>
                Despite our best efforts, there may be some areas of our website that are not fully accessible. We are constantly working to improve these areas and welcome your feedback on any accessibility issues you encounter.
              </p>
              
              <h2>Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of the NOVASKIN website. If you encounter any barriers or have suggestions for improvement, please contact us:
              </p>
              <p>
                Email: accessibility@novaskin.com<br />
                Phone: 1-800-NOVA-SKIN<br />
                Address: 123 Wellness Way, Health City, HC 12345
              </p>
              
              <h2>Compatibility</h2>
              <p>
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul>
                <li>Screen readers (including JAWS, NVDA, and VoiceOver)</li>
                <li>Speech recognition software</li>
                <li>Screen magnifiers</li>
                <li>Alternative input devices</li>
              </ul>
              
              <h2>Continuous Improvement</h2>
              <p>
                We are committed to making continuous improvements to enhance the accessibility of our website. We regularly review our website for accessibility issues and work to address them promptly.
              </p>
              <p>
                Thank you for your interest in NOVASKIN. We hope that our website is accessible and usable for you, and we welcome your feedback to help us improve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accessibility;
