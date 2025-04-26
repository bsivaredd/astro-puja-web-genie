
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function Vastu() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503174971373-b1f69850bded"
            alt="Harmonious architecture"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">Vastu Shastra</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Ancient architectural science to create harmony and positive energy in your living spaces.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-6">What is Vastu Shastra?</h2>
            <p className="text-gray-700 mb-4">
              Vastu Shastra is the ancient Indian science of architecture and design, focusing on the interplay of various energies and their effect on the inhabitants of a space.
              It combines principles of design with spiritual elements to create harmonious living environments that promote health, wealth, and happiness.
            </p>
            <p className="text-gray-700 mb-6">
              By aligning your home or office with Vastu principles, you can enhance positive energy flow and minimize negative influences, bringing balance and prosperity to your life.
            </p>
            <Button className="mb-4">Book Vastu Consultation</Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
              alt="Harmonious home design"
              aspectRatio={4/3}
            />
          </div>
        </div>

        <h2 className="font-playfair text-3xl font-bold text-center mb-12">Key Vastu Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Principles */}
          {[
            {
              title: "North Direction",
              description: "Associated with wealth and prosperity. Place your cash box or safe in this direction."
            },
            {
              title: "East Direction",
              description: "Connected to health and spirituality. Ideal for prayer rooms and meditation spaces."
            },
            {
              title: "Kitchen Placement",
              description: "Southeast is the best location for your kitchen as it represents the fire element."
            },
            {
              title: "Master Bedroom",
              description: "Southwest is ideal for the master bedroom, promoting stability and grounding."
            },
          ].map((principle, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our Vastu experts can provide personalized consultations for your home or office,
            helping you create a space that supports your goals and promotes well-being.
          </p>
          <Button size="lg">Schedule Consultation</Button>
        </div>
      </main>
    </div>
  );
}
