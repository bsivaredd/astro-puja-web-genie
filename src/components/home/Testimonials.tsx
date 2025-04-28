import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'The personal horoscope reading provided profound insights into my career path. The predictions came true within months, and I was able to make informed decisions that positively impacted my life.',
    rating: 5,
    service: 'Personal Horoscope Reading'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'After performing the Navgraha Shanti Puja recommended by AstroPuja, I noticed a significant decrease in obstacles in my business. The rituals were authentic and performed with utmost devotion.',
    rating: 5,
    service: 'Navgraha Shanti Puja'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    location: 'Bangalore',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'The Blue Sapphire gemstone I purchased has brought stability to my career. I was skeptical at first, but the quality of the stone and the detailed guidance provided convinced me of its authenticity.',
    rating: 4,
    service: 'Blue Sapphire (Neelam)'
  },
  {
    id: 4,
    name: 'Ananya Patel',
    location: 'Ahmedabad',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'The marriage compatibility analysis was incredibly accurate. It highlighted potential areas of conflict which we were able to address before our wedding. I highly recommend this service to all couples.',
    rating: 5,
    service: 'Marriage Compatibility Analysis'
  },
  {
    id: 5,
    name: 'Sanjay Mehta',
    location: 'Chennai',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'The Lakshmi Puja ceremony was conducted with great devotion. Within weeks, I noticed positive changes in my financial situation. The pandits were knowledgeable and professional.',
    rating: 5,
    service: 'Lakshmi Puja for Prosperity'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our clients who have experienced positive transformations through our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative pb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 relative">
                    {/* Decorative quote mark */}
                    <div className="absolute top-6 left-8 text-purple-200 text-6xl font-serif">"</div>
                    
                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      
                      {/* Testimonial text */}
                      <p className="text-gray-700 text-lg mb-6 italic">
                        {testimonial.text}
                      </p>
                      
                      {/* Service used */}
                      <p className="text-purple-600 font-medium mb-6">
                        Service: {testimonial.service}
                      </p>
                      
                      {/* Client info */}
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-purple-200"
                        />
                        <div>
                          <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-purple-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;