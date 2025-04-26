
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function Numerology() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
            alt="Numbers and mathematics"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">Numerology</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Discover your life path number and unlock the mystical significance of numbers in your life.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-6 text-center">Calculate Your Life Path Number</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              Your Life Path Number is one of the most important numbers in your numerology chart. It reveals your life's purpose, 
              the path you're meant to follow, and the challenges you may face along the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Birth Month</label>
                <select className="w-full p-2 border rounded-md">
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Birth Day</label>
                <select className="w-full p-2 border rounded-md">
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Birth Year</label>
                <input type="text" placeholder="YYYY" className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <Button className="w-full">Calculate My Number</Button>
          </div>
        </div>

        <h2 className="font-playfair text-3xl font-bold text-center mb-10">Life Path Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Life Path Numbers */}
          {[
            {
              number: 1,
              title: "The Leader",
              traits: "Independent, ambitious, determined"
            },
            {
              number: 2,
              title: "The Mediator",
              traits: "Cooperative, diplomatic, sensitive"
            },
            {
              number: 3,
              title: "The Creative",
              traits: "Expressive, optimistic, social"
            },
            {
              number: 4,
              title: "The Builder",
              traits: "Practical, reliable, disciplined"
            },
            {
              number: 5,
              title: "The Free Spirit",
              traits: "Adaptable, versatile, adventurous"
            },
            {
              number: 6,
              title: "The Nurturer",
              traits: "Responsible, loving, compassionate"
            },
            {
              number: 7,
              title: "The Seeker",
              traits: "Analytical, introspective, spiritual"
            },
            {
              number: 8,
              title: "The Achiever",
              traits: "Ambitious, confident, authoritative"
            },
            {
              number: 9,
              title: "The Humanitarian",
              traits: "Compassionate, selfless, generous"
            },
          ].map((path) => (
            <div key={path.number} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full font-bold text-xl mx-auto mb-4">
                {path.number}
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-2">{path.title}</h3>
              <p className="text-gray-600">{path.traits}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
