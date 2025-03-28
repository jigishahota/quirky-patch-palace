
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-12 w-10 bg-primary rounded-sm flex items-center justify-center">
            <div className="text-black font-extrabold text-xl rotate-90 tracking-tighter flex items-center">
              NOVA
              <Star className="h-3 w-3 ml-0.5" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">NOVASKIN</span>
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
          <Link to="/products" className="font-semibold hover:text-primary transition-colors">Patches</Link>
          <Link to="/about" className="font-semibold hover:text-primary transition-colors">Super Nova Box</Link>
          <Link to="/faq" className="font-semibold hover:text-primary transition-colors">FAQ</Link>
          <Button size="sm" className="gap-2 rounded-full bg-black text-white hover:bg-gray-800">
            <ShoppingBag size={16} />
            Cart (0)
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b md:hidden py-4 px-4 flex flex-col gap-4">
            <Link to="/products" className="font-semibold py-2 hover:text-primary transition-colors">Patches</Link>
            <Link to="/about" className="font-semibold py-2 hover:text-primary transition-colors">Super Nova Box</Link>
            <Link to="/faq" className="font-semibold py-2 hover:text-primary transition-colors">FAQ</Link>
            <Button size="sm" className="gap-2 rounded-full bg-black text-white hover:bg-gray-800">
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
