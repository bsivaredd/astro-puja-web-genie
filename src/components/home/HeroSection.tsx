import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          transform: "translateZ(-10px) scale(2)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
        
        {/* Sacred Geometry Overlay */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2908894/pexels-photo-2908894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Spiritual Path Through Ancient Wisdom
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Expert astrology consultations, sacred pujas, and gemstone recommendations to guide your journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 flex items-center"
            >
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling animation hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm mb-2 opacity-80">Scroll to discover more</p>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
          <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;