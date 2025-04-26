
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function AstrologyConsultation() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518358246973-70c9fb02e672"
            alt="Stars and planets"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">Astrology Consultation</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Connect with our experienced astrologers for personalized guidance on life's important questions.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Featured Astrologers */}
          {[
            {
              name: "Pandit Sharma",
              specialty: "Vedic Astrology, Numerology",
              experience: "20+ years",
              image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857"
            },
            {
              name: "Dr. Patel",
              specialty: "Birth Chart Analysis, Marriage Compatibility",
              experience: "15+ years",
              image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            },
          ].map((astrologer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <Image 
                  src={astrologer.image}
                  alt={astrologer.name}
                  aspectRatio={1}
                  className="h-full"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">{astrologer.name}</h3>
                <p className="text-gray-600 mb-1"><strong>Specialty:</strong> {astrologer.specialty}</p>
                <p className="text-gray-600 mb-4"><strong>Experience:</strong> {astrologer.experience}</p>
                <Button>Book Consultation</Button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-playfair text-3xl font-bold text-center mb-8">Our Consultation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Consultation Types */}
          {[
            {
              title: "Personal Reading",
              description: "One-on-one consultation about your life path",
              price: "$99",
              duration: "30 min"
            },
            {
              title: "Career Analysis",
              description: "Detailed guidance for professional decisions",
              price: "$149",
              duration: "45 min"
            },
            {
              title: "Relationship Compatibility",
              description: "Synastry analysis for relationships",
              price: "$129",
              duration: "40 min"
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">{service.price}</span>
                <span className="text-sm text-gray-500">{service.duration}</span>
              </div>
              <Button className="w-full">Book Now</Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
