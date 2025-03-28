
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl">PatchPal</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Making life a little more patchy, one sticky situation at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/bestsellers" className="text-gray-600 hover:text-primary transition-colors">Bestsellers</Link></li>
              <li><Link to="/new" className="text-gray-600 hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/bundles" className="text-gray-600 hover:text-primary transition-colors">Patch Bundles</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PatchPal. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-gray-500 hover:text-primary text-sm transition-colors">Accessibility</Link>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-400 flex items-center justify-center gap-1">
          Made with <Heart className="h-3 w-3 text-accent" /> by PatchPal Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
