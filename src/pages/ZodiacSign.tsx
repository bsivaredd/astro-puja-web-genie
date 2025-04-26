
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/Image";
import { useEffect } from "react";

export default function ZodiacSign() {
  const { sign } = useParams<{ sign: string }>();
  const capitalizedSign = sign ? sign.charAt(0).toUpperCase() + sign.slice(1) : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sign]);

  // Define zodiac sign data
  const zodiacData: Record<string, { 
    dateRange: string; 
    element: string; 
    ruling_planet: string;
    traits: string[];
    compatibility: string[];
    description: string;
    image: string;
  }> = {
    aries: {
      dateRange: "March 21 - April 19",
      element: "Fire",
      ruling_planet: "Mars",
      traits: ["Courageous", "Determined", "Confident", "Enthusiastic", "Impulsive"],
      compatibility: ["Leo", "Sagittarius", "Gemini"],
      description: "Aries is the first sign of the zodiac, and that's exactly how they like to be regarded: as the first. Aries are known for their fiery energy, enthusiasm, and dynamism. They're natural-born leaders who are brave, direct, and assertive.",
      image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621"
    },
    taurus: {
      dateRange: "April 20 - May 20",
      element: "Earth",
      ruling_planet: "Venus",
      traits: ["Reliable", "Patient", "Practical", "Devoted", "Stubborn"],
      compatibility: ["Virgo", "Capricorn", "Cancer"],
      description: "Taurus is an earth sign represented by the bull. Taureans are known for their practicality, reliability, and love of comfort and luxury. They are patient and hardworking, with an appreciation for beauty and the finer things in life.",
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7"
    },
    gemini: {
      dateRange: "May 21 - June 20",
      element: "Air",
      ruling_planet: "Mercury",
      traits: ["Gentle", "Curious", "Adaptable", "Quick-witted", "Indecisive"],
      compatibility: ["Libra", "Aquarius", "Aries"],
      description: "Gemini is represented by the celestial twins, and these air signs are known for their dual nature. They're curious, intelligent, and excellent communicators, with a love of learning and sharing ideas with others.",
      image: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc"
    },
    cancer: {
      dateRange: "June 21 - July 22",
      element: "Water",
      ruling_planet: "Moon",
      traits: ["Tenacious", "Emotional", "Sympathetic", "Protective", "Moody"],
      compatibility: ["Scorpio", "Pisces", "Taurus"],
      description: "Cancer is a water sign represented by the crab. Cancers are known for their emotional depth, nurturing nature, and strong intuition. They value security, home, and family above all else.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    leo: {
      dateRange: "July 23 - August 22",
      element: "Fire",
      ruling_planet: "Sun",
      traits: ["Creative", "Generous", "Warm-hearted", "Cheerful", "Arrogant"],
      compatibility: ["Aries", "Sagittarius", "Libra"],
      description: "Leo is represented by the lion, and these fire signs are the kings and queens of the celestial jungle. They're passionate, loyal, and dramatic, with a flair for showmanship and a love of being in the spotlight.",
      image: "https://images.unsplash.com/photo-1517089672556-39c9c6391b13"
    },
    virgo: {
      dateRange: "August 23 - September 22",
      element: "Earth",
      ruling_planet: "Mercury",
      traits: ["Analytical", "Practical", "Diligent", "Modest", "Critical"],
      compatibility: ["Taurus", "Capricorn", "Cancer"],
      description: "Virgo is an earth sign represented by the goddess of wheat and agriculture. Virgos are known for their practicality, attention to detail, and methodical approach to life. They are perfectionists who value order and efficiency.",
      image: "https://images.unsplash.com/photo-1533279443086-d1c19a186416"
    },
    libra: {
      dateRange: "September 23 - October 22",
      element: "Air",
      ruling_planet: "Venus",
      traits: ["Diplomatic", "Cooperative", "Fair-minded", "Social", "Indecisive"],
      compatibility: ["Gemini", "Aquarius", "Leo"],
      description: "Libra is represented by the scales, the only inanimate symbol of the zodiac. Libras are known for their diplomacy, charm, and desire for balance and harmony. They value partnerships and have a strong sense of justice.",
      image: "https://images.unsplash.com/photo-1549558549-415fe4c37b60"
    },
    scorpio: {
      dateRange: "October 23 - November 21",
      element: "Water",
      ruling_planet: "Pluto, Mars",
      traits: ["Resourceful", "Passionate", "Stubborn", "Brave", "Secretive"],
      compatibility: ["Cancer", "Pisces", "Virgo"],
      description: "Scorpio is one of the most misunderstood signs of the zodiac. They are passionate, intense, and transformative, with an emotional depth that few can match. They value truth, loyalty, and deep connections.",
      image: "https://images.unsplash.com/photo-1527079739242-f92c216eaa2c"
    },
    sagittarius: {
      dateRange: "November 22 - December 21",
      element: "Fire",
      ruling_planet: "Jupiter",
      traits: ["Generous", "Idealistic", "Philosophical", "Optimistic", "Restless"],
      compatibility: ["Aries", "Leo", "Aquarius"],
      description: "Sagittarius is represented by the archer, and these fire signs are always on a quest for knowledge. They're adventurous, optimistic, and philosophical, with a love of travel and exploration.",
      image: "https://images.unsplash.com/photo-1519846348828-2d25da7cd095"
    },
    capricorn: {
      dateRange: "December 22 - January 19",
      element: "Earth",
      ruling_planet: "Saturn",
      traits: ["Responsible", "Disciplined", "Self-controlled", "Practical", "Unforgiving"],
      compatibility: ["Taurus", "Virgo", "Pisces"],
      description: "Capricorn is represented by the sea goat, a mythological creature with the body of a goat and the tail of a fish. Capricorns are known for their ambition, discipline, and practicality. They're patient, strategic planners who value tradition and structure.",
      image: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17"
    },
    aquarius: {
      dateRange: "January 20 - February 18",
      element: "Air",
      ruling_planet: "Uranus, Saturn",
      traits: ["Independent", "Original", "Humanitarian", "Progressive", "Detached"],
      compatibility: ["Gemini", "Libra", "Sagittarius"],
      description: "Aquarius is represented by the water bearer, but it's actually an air sign. Aquarians are visionaries and innovators who march to the beat of their own drum. They're intellectual, humanitarian, and forward-thinking.",
      image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031"
    },
    pisces: {
      dateRange: "February 19 - March 20",
      element: "Water",
      ruling_planet: "Neptune, Jupiter",
      traits: ["Compassionate", "Artistic", "Intuitive", "Dreamy", "Escapist"],
      compatibility: ["Cancer", "Scorpio", "Capricorn"],
      description: "Pisces is represented by two fish swimming in opposite directions, symbolizing the constant division of Pisces' attention between fantasy and reality. They're compassionate, artistic, and deeply intuitive, with a connection to the spiritual realm.",
      image: "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c"
    }
  };

  const currentSign = sign ? zodiacData[sign.toLowerCase()] : null;

  if (!currentSign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sign Not Found</h1>
          <p className="mb-8">The zodiac sign you're looking for doesn't exist.</p>
          <Link to="/" className="text-primary hover:text-primary/80 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative hero-gradient text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={currentSign.image}
            alt={`${capitalizedSign} zodiac sign`}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center">{capitalizedSign}</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            {currentSign.dateRange}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">About {capitalizedSign}</h2>
              <p className="text-gray-700 mb-6">{currentSign.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium text-primary mb-1">Element</h3>
                  <p>{currentSign.element}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium text-primary mb-1">Ruling Planet</h3>
                  <p>{currentSign.ruling_planet}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium text-primary mb-1">Symbol</h3>
                  <p>{capitalizedSign}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">Key Traits</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentSign.traits.map((trait, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-playfair text-2xl font-bold mb-4">Compatibility</h2>
              <p className="text-gray-700 mb-4">{capitalizedSign} is most compatible with:</p>
              <div className="flex flex-wrap gap-2">
                {currentSign.compatibility.map((compatSign, index) => (
                  <Link to={`/zodiac/${compatSign.toLowerCase()}`} key={index}>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition-colors">
                      {compatSign}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="font-playfair text-xl font-bold mb-4">Today's Horoscope</h2>
              <p className="text-gray-700 mb-4">
                Today is a good day for {capitalizedSign}. You might encounter opportunities for growth in your personal or professional life. Stay open to new experiences.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Updated today</span>
                <Button variant="outline" size="sm">Read Full Horoscope</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="font-playfair text-xl font-bold mb-4">Personal Reading</h2>
              <p className="text-gray-700 mb-4">
                Get a detailed personal reading based on your birth chart and current planetary positions.
              </p>
              <Button className="w-full">Book Consultation</Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-playfair text-xl font-bold mb-4">All Zodiac Signs</h2>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(zodiacData).map((zodiacSign) => (
                  <Link 
                    to={`/zodiac/${zodiacSign}`} 
                    key={zodiacSign}
                    className={`text-center p-2 rounded-md ${zodiacSign === sign?.toLowerCase() ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    {zodiacSign.charAt(0).toUpperCase() + zodiacSign.slice(1)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
