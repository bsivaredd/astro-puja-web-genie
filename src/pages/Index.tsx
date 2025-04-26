import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Calendar, Compass, Moon, Star } from "lucide-react";
import { Image } from "@/components/Image";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            alt="Mystical night sky"
            className="opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-5xl font-bold leading-tight md:text-6xl">
              Discover Your Path Through the Stars
            </h1>
            <p className="mt-6 text-lg opacity-90">
              Expert astrological guidance for life's journey. Connect with our experienced astrologers
              for personalized readings and spiritual solutions.
            </p>
            <Button className="mt-8 bg-white text-primary hover:bg-white/90" size="lg">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/daily-horoscope" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">Daily Horoscope</h3>
                <p className="text-sm text-gray-600">Get your daily astrological predictions</p>
              </div>
            </Link>
            <Link to="/puja-services" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">Online Puja Services</h3>
                <p className="text-sm text-gray-600">Book sacred rituals and ceremonies</p>
              </div>
            </Link>
            <Link to="/astrology-consultation" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">Astrology Consultation</h3>
                <p className="text-sm text-gray-600">Connect with expert astrologers</p>
              </div>
            </Link>
            <Link to="/gemstones" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">Sacred Gemstones</h3>
                <p className="text-sm text-gray-600">Find your spiritual gemstone</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-playfair text-4xl font-bold">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Birth Chart Reading"
              description="Deep analysis of your natal chart to reveal your life's purpose and potential."
              price="$99"
            />
            <ServiceCard
              title="Relationship Compatibility"
              description="Understanding your relationship dynamics through astrological synastry."
              price="$129"
            />
            <ServiceCard
              title="Career Guidance"
              description="Astrological insights for professional growth and career decisions."
              price="$149"
            />
          </div>
        </div>
      </section>

      {/* Zodiac Signs Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">Explore Your Zodiac Sign</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
              "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
            ].map((sign) => (
              <Link to={`/zodiac/${sign.toLowerCase()}`} key={sign} className="group">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                  <h3 className="font-playfair font-semibold text-primary group-hover:text-secondary">
                    {sign}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-muted py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Spiritual mountains"
            className="opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-center font-playfair text-4xl font-bold">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Star,
                title: "Expert Astrologers",
                description: "Years of experience in vedic astrology",
              },
              {
                icon: Moon,
                title: "Personal Attention",
                description: "Tailored readings for your unique situation",
              },
              {
                icon: Compass,
                title: "Accurate Guidance",
                description: "Precise astronomical calculations",
              },
              {
                icon: Calendar,
                title: "Flexible Scheduling",
                description: "Convenient online consultations",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-playfair text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="mb-12 font-playfair text-4xl font-bold">What Our Clients Say</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <TestimonialCard
                  name="Sarah Johnson"
                  text="The birth chart reading was incredibly accurate and helped me understand myself better."
                  rating={5}
                />
                <TestimonialCard
                  name="Michael Chen"
                  text="Excellent career guidance that helped me make important decisions with confidence."
                  rating={5}
                />
                <TestimonialCard
                  name="Priya Sharma"
                  text="The relationship compatibility reading provided valuable insights for my marriage."
                  rating={5}
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
                alt="Ancient temple at night"
                aspectRatio={3/4}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Stay Connected with the Cosmos</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to receive daily horoscopes, spiritual insights, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      {/* Special Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/vedic-astrology" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
                  alt="Vedic Astrology"
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-playfair text-xl font-bold mb-2">Vedic Astrology</h3>
                    <p className="text-sm opacity-90">Ancient wisdom for modern life</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/numerology" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                  alt="Numerology"
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-playfair text-xl font-bold mb-2">Numerology</h3>
                    <p className="text-sm opacity-90">Discover your life path number</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/vastu" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                  alt="Vastu"
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-playfair text-xl font-bold mb-2">Vastu Shastra</h3>
                    <p className="text-sm opacity-90">Harmonize your living spaces</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative hero-gradient py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Spiritual sunrise"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-playfair text-4xl font-bold">Begin Your Spiritual Journey Today</h2>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Let our expert astrologers guide you towards clarity, purpose, and spiritual fulfillment.
          </p>
          <Button className="mt-8 bg-white text-primary hover:bg-white/90" size="lg">
            Schedule Your Reading
          </Button>
        </div>
      </section>
    </div>
  );
}
