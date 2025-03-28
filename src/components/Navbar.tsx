
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-bold text-xl">PatchPal</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/products" className="font-semibold hover:text-primary transition-colors">Products</Link>
          <Link to="/about" className="font-semibold hover:text-primary transition-colors">About</Link>
          <Link to="/faq" className="font-semibold hover:text-primary transition-colors">FAQ</Link>
          <Button size="sm" className="gap-2 rounded-full">
            <ShoppingBag size={16} />
            Cart (0)
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b md:hidden py-4 px-4 flex flex-col gap-4">
            <Link to="/products" className="font-semibold py-2 hover:text-primary transition-colors">Products</Link>
            <Link to="/about" className="font-semibold py-2 hover:text-primary transition-colors">About</Link>
            <Link to="/faq" className="font-semibold py-2 hover:text-primary transition-colors">FAQ</Link>
            <Button size="sm" className="gap-2 rounded-full">
              <ShoppingBag size={16} />
              Cart (0)
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
