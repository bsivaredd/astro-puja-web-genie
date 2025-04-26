
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function DailyHoroscope() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            alt="Sky with stars"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">Daily Horoscope</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Discover what the stars have in store for you today with our personalized daily horoscope readings.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Zodiac Signs Grid */}
          {[
            "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
            "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
          ].map((sign) => (
            <Link to={`/zodiac/${sign.toLowerCase()}`} key={sign} className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
                <h3 className="font-playfair text-xl font-bold text-primary group-hover:text-secondary mb-2">
                  {sign}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {`March 21 - April 19`}
                </p>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white">
                  Read Horoscope
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
