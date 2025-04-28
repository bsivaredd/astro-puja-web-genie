import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ServicesPage: React.FC = () => {
  const [_services, _setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Mock API call
    const mockServices: Service[] = [
      {
        id: '1',
        name: 'Personalized Puja',
        description: 'Customized puja for your specific needs and desires.',
        price: 49.99,
        imageUrl: 'https://images.pexels.com/photos/277586/pexels-photo-277586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: '2',
        name: 'Astrology Consultation',
        description: 'Get insights into your future with our expert astrologers.',
        price: 79.99,
        imageUrl: 'https://images.pexels.com/photos/7792655/pexels-photo-7792655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: '3',
        name: 'Gemstone Recommendation',
        description: 'Find the perfect gemstone to enhance your luck and well-being.',
        price: 99.99,
        imageUrl: 'https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ];

    _setServices(mockServices);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {_services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={service.imageUrl} alt={service.name} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${service.price}</span>
                <Link to="/cart" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center">
                  Add to Cart <ShoppingCart className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
