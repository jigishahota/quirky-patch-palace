
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Products;
