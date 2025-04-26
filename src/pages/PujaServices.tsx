
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function PujaServices() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
            alt="Temple flames"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">Online Puja Services</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Book sacred rituals and ceremonies performed by experienced Vedic priests for your spiritual well-being.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Puja Services */}
          {[
            {
              title: "Grah Shanti Puja",
              description: "Planetary peace ritual to reduce negative influences",
              price: "₹11,999",
              image: "https://images.unsplash.com/photo-1585506942812-e72b29cef752"
            },
            {
              title: "Lakshmi Puja",
              description: "Ritual to attract prosperity and wealth",
              price: "₹9,499",
              image: "https://images.unsplash.com/photo-1626068297851-8d0d37ecea41"
            },
            {
              title: "Navgraha Puja",
              description: "Balance the influences of all nine planets",
              price: "₹15,999",
              image: "https://images.unsplash.com/photo-1567591370504-fbd3bd1ad08c"
            },
          ].map((puja, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={puja.image}
                  alt={puja.title}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">{puja.title}</h3>
                <p className="text-gray-600 mb-4">{puja.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">{puja.price}</span>
                  <Button>Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
