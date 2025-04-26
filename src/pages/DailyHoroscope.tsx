
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
            {
              sign: "Aries",
              dates: "March 21 - April 19",
              image: "https://images.unsplash.com/photo-1618477202872-89cec6f8d62e"
            },
            {
              sign: "Taurus",
              dates: "April 20 - May 20",
              image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3"
            },
            {
              sign: "Gemini",
              dates: "May 21 - June 20",
              image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec"
            },
            {
              sign: "Cancer",
              dates: "June 21 - July 22",
              image: "https://images.unsplash.com/photo-1527435205980-449ff2163e41"
            },
            {
              sign: "Leo",
              dates: "July 23 - August 22",
              image: "https://images.unsplash.com/photo-1618477386014-1e7e2fa9e14d"
            },
            {
              sign: "Virgo",
              dates: "August 23 - September 22",
              image: "https://images.unsplash.com/photo-1618477392323-c84dd24485b6"
            },
            {
              sign: "Libra",
              dates: "September 23 - October 22",
              image: "https://images.unsplash.com/photo-1618477274728-f3c3fb479483"
            },
            {
              sign: "Scorpio",
              dates: "October 23 - November 21",
              image: "https://images.unsplash.com/photo-1618477252522-165f7056ed43"
            },
            {
              sign: "Sagittarius",
              dates: "November 22 - December 21",
              image: "https://images.unsplash.com/photo-1618477319548-1ff4e74b1f5c"
            },
            {
              sign: "Capricorn",
              dates: "December 22 - January 19",
              image: "https://images.unsplash.com/photo-1618477247616-540883c3e6f4"
            },
            {
              sign: "Aquarius",
              dates: "January 20 - February 18",
              image: "https://images.unsplash.com/photo-1618477371303-b79a0f8d3d3c"
            },
            {
              sign: "Pisces",
              dates: "February 19 - March 20",
              image: "https://images.unsplash.com/photo-1618477320670-25df3bf3a560"
            }
          ].map((zodiac) => (
            <Link to={`/zodiac/${zodiac.sign.toLowerCase()}`} key={zodiac.sign} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 relative">
                  <Image 
                    src={zodiac.image}
                    alt={`${zodiac.sign} zodiac sign`}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-bold text-primary group-hover:text-secondary mb-2">
                    {zodiac.sign}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {zodiac.dates}
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white">
                    Read Horoscope
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
