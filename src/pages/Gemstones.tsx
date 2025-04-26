
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function Gemstones() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1569397288884-4d43d6738fbd"
            alt="Crystal gemstones"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">Sacred Gemstones</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Discover the power of astrological gemstones to enhance your planetary energies.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gemstones */}
          {[
            {
              name: "Blue Sapphire",
              planet: "Saturn",
              benefits: "Career growth, discipline, responsibility",
              price: "₹24,999",
              image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375"
            },
            {
              name: "Red Coral",
              planet: "Mars",
              benefits: "Courage, vitality, physical strength",
              price: "₹12,499",
              image: "https://images.unsplash.com/photo-1627896157064-8e780f2b3be5"
            },
            {
              name: "Yellow Sapphire",
              planet: "Jupiter",
              benefits: "Wisdom, wealth, good fortune",
              price: "₹18,999",
              image: "https://images.unsplash.com/photo-1612889084024-3039232qu4e8"
            },
            {
              name: "Emerald",
              planet: "Mercury",
              benefits: "Communication, intelligence, business success",
              price: "₹21,999",
              image: "https://images.unsplash.com/photo-1551751299-41a99c27d7dd"
            },
            {
              name: "Pearl",
              planet: "Moon",
              benefits: "Peace of mind, emotional balance",
              price: "₹8,999",
              image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a"
            },
            {
              name: "Ruby",
              planet: "Sun",
              benefits: "Authority, leadership, vitality",
              price: "₹28,999",
              image: "https://images.unsplash.com/photo-1601121141569-7c21ca714f14"
            },
          ].map((gemstone, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={gemstone.image}
                  alt={gemstone.name}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">{gemstone.name}</h3>
                <p className="text-gray-600 mb-1"><strong>Planet:</strong> {gemstone.planet}</p>
                <p className="text-gray-600 mb-4"><strong>Benefits:</strong> {gemstone.benefits}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">{gemstone.price}</span>
                  <Button>Purchase</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
