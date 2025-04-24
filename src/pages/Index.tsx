
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Calendar, Compass, Moon, Star } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-24">
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

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
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
          <h2 className="mb-12 text-center font-playfair text-4xl font-bold">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
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
