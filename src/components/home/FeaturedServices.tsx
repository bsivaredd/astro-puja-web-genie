import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';

// Sample services data
const servicesData = [
  {
    id: '1',
    name: 'Personal Horoscope Reading',
    description: 'Get a detailed analysis of your birth chart by our expert astrologers.',
    image: 'https://images.pexels.com/photos/9301125/pexels-photo-9301125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 2999,
    category: 'astrology',
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '2',
    name: 'Navgraha Shanti Puja',
    description: 'Ritual to pacify the nine planetary deities for harmony and prosperity.',
    image: 'https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 5499,
    category: 'puja',
    rating: 4.9,
    reviewCount: 124
  },
  {
    id: '3',
    name: 'Blue Sapphire (Neelam)',
    description: 'Premium quality gemstone for Saturn to bring discipline and career growth.',
    image: 'https://images.pexels.com/photos/5370795/pexels-photo-5370795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 12999,
    category: 'gemstones',
    rating: 4.7,
    reviewCount: 98
  },
  {
    id: '4',
    name: 'Marriage Compatibility Analysis',
    description: 'Detailed kundli matching to assess compatibility for a harmonious relationship.',
    image: 'https://images.pexels.com/photos/4964669/pexels-photo-4964669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 3499,
    category: 'astrology',
    rating: 4.6,
    reviewCount: 87
  },
  {
    id: '5',
    name: 'Lakshmi Puja for Prosperity',
    description: 'Sacred ritual to invoke Goddess Lakshmi for wealth and abundance.',
    image: 'https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 4999,
    category: 'puja',
    rating: 4.9,
    reviewCount: 142
  },
  {
    id: '6',
    name: 'Red Coral (Moonga)',
    description: 'Certified natural red coral to strengthen Mars energy for courage and vitality.',
    image: 'https://images.pexels.com/photos/5370737/pexels-photo-5370737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 8999,
    category: 'gemstones',
    rating: 4.8,
    reviewCount: 76
  }
];

const FeaturedServices: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const { addToCart } = useCart();
  const { addNotification } = useNotification();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : servicesData.length - visibleCount));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < servicesData.length - visibleCount ? prev + 1 : 0));
  };

  const handleAddToCart = (service: typeof servicesData[0]) => {
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image
    });
    addNotification('success', `${service.name} added to cart!`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Featured Services
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular spiritual services to help you navigate life's journey with clarity and purpose.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {servicesData.map((service) => (
                <div 
                  key={service.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase font-medium">
                          {service.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="ml-1 text-sm font-medium text-gray-700">{service.rating}</span>
                        </div>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{service.reviewCount} reviews</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-2xl font-bold text-gray-800">₹{service.price}</span>
                        <div className="space-x-2">
                          <button
                            onClick={() => handleAddToCart(service)}
                            className="px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm"
                          >
                            Add to Cart
                          </button>
                          <Link
                            to={`/services/${service.id}`}
                            className="px-3 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition-colors text-sm"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors inline-flex items-center"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;