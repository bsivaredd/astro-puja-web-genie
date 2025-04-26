
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function VedicAstrology() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
            alt="Ancient scriptures"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">Vedic Astrology</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Ancient wisdom for modern life based on the time-tested principles of Jyotish.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-6">What is Vedic Astrology?</h2>
            <p className="text-gray-700 mb-4">
              Vedic astrology, also known as Jyotish, is the traditional Hindu system of astrology which originated in ancient India. 
              Unlike Western astrology, Vedic astrology uses the sidereal zodiac which aligns the zodiac signs with their actual 
              constellations in the night sky.
            </p>
            <p className="text-gray-700 mb-6">
              This ancient science offers profound insights into your personality, relationships, career, and spiritual path based on the 
              exact positions of celestial bodies at your time of birth.
            </p>
            <Button className="mb-4">Get Your Vedic Chart Reading</Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700"
              alt="Vedic astrology chart"
              aspectRatio={4/3}
            />
          </div>
        </div>

        <h2 className="font-playfair text-3xl font-bold text-center mb-12">Key Elements of Vedic Astrology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Elements */}
          {[
            {
              title: "Nakshatras",
              description: "The 27 lunar mansions that provide deeper insight into personality traits and life events."
            },
            {
              title: "Dashas",
              description: "Planetary periods that indicate when the effects of planets will be experienced in your life."
            },
            {
              title: "Planetary Remedies",
              description: "Specific actions, rituals, and gemstones to mitigate negative planetary influences."
            },
          ].map((element, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">{element.title}</h3>
              <p className="text-gray-600">{element.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
