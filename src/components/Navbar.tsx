
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center">
            <Star className="h-6 w-6 text-black" />
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
          <Link to="/super-nova-box" className="font-semibold hover:text-primary transition-colors">Supernova Box</Link>
          <Link to="/faq" className="font-semibold hover:text-primary transition-colors">FAQ</Link>
          <Button size="sm" className="gap-2 rounded-full bg-black text-white hover:bg-gray-800">
            <ShoppingBag size={16} />
            Cart ({totalItems})
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b md:hidden py-4 px-4 flex flex-col gap-4">
            <Link to="/products" className="font-semibold py-2 hover:text-primary transition-colors">Patches</Link>
            <Link to="/super-nova-box" className="font-semibold py-2 hover:text-primary transition-colors">Supernova Box</Link>
            <Link to="/faq" className="font-semibold py-2 hover:text-primary transition-colors">FAQ</Link>
            <Button size="sm" className="gap-2 rounded-full bg-black text-white hover:bg-gray-800">
              <ShoppingBag size={16} />
              Cart ({totalItems})
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
