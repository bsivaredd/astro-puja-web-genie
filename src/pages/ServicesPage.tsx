import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, Search, ShoppingCart } from 'lucide-react';
import Notifications from '../components/common/Notifications';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';

// Sample service data - in a real app, this would come from an API
const allServices = Array.from({ length: 50 }, (_, i) => {
  const categories = ['astrology', 'puja', 'gemstones'];
  const category = categories[i % 3];
  
  let name, description, image, basePrice;
  
  if (category === 'astrology') {
    const options = [
      {
        name: 'Personal Horoscope Reading',
        description: 'Detailed analysis of your birth chart by expert astrologers.',
        image: 'https://images.pexels.com/photos/7792655/pexels-photo-7792655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 2999
      },
      {
        name: 'Career Consultation',
        description: 'Guidance on career paths and timing for job changes.',
        image: 'https://images.pexels.com/photos/4185980/pexels-photo-4185980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 3499
      },
      {
        name: 'Marriage Compatibility',
        description: 'Comprehensive kundli matching for harmonious relationships.',
        image: 'https://images.pexels.com/photos/4964669/pexels-photo-4964669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 2499
      },
      {
        name: 'Yearly Prediction',
        description: 'Forecast for the coming year covering all life aspects.',
        image: 'https://images.pexels.com/photos/2317771/pexels-photo-2317771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 4999
      }
    ];
    const selection = options[i % options.length];
    name = selection.name;
    description = selection.description;
    image = selection.image;
    basePrice = selection.basePrice;
  } else if (category === 'puja') {
    const options = [
      {
        name: 'Navgraha Shanti Puja',
        description: 'Ritual to pacify the nine planetary deities.',
        image: 'https://images.pexels.com/photos/5875089/pexels-photo-5875089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 5499
      },
      {
        name: 'Lakshmi Puja',
        description: 'Sacred ritual for prosperity and abundance.',
        image: 'https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 4999
      },
      {
        name: 'Ganesh Puja',
        description: 'Ritual to remove obstacles and bring good fortune.',
        image: 'https://images.pexels.com/photos/7266899/pexels-photo-7266899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 3999
      },
      {
        name: 'Saraswati Puja',
        description: 'Ceremony to enhance learning and artistic abilities.',
        image: 'https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 3499
      }
    ];
    const selection = options[i % options.length];
    name = selection.name;
    description = selection.description;
    image = selection.image;
    basePrice = selection.basePrice;
  } else {
    const options = [
      {
        name: 'Blue Sapphire (Neelam)',
        description: 'Premium quality gemstone for Saturn to bring discipline.',
        image: 'https://images.pexels.com/photos/5370795/pexels-photo-5370795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 12999
      },
      {
        name: 'Red Coral (Moonga)',
        description: 'Natural red coral to strengthen Mars energy.',
        image: 'https://images.pexels.com/photos/5370737/pexels-photo-5370737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 8999
      },
      {
        name: 'Yellow Sapphire (Pukhraj)',
        description: 'Certified yellow sapphire for Jupiter energy.',
        image: 'https://images.pexels.com/photos/5370811/pexels-photo-5370811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 15999
      },
      {
        name: 'Emerald (Panna)',
        description: 'Premium emerald to enhance Mercury effects.',
        image: 'https://images.pexels.com/photos/2735967/pexels-photo-2735967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        basePrice: 18999
      }
    ];
    const selection = options[i % options.length];
    name = selection.name;
    description = selection.description;
    image = selection.image;
    basePrice = selection.basePrice;
  }
  
  // Add some price variation
  const price = basePrice + (Math.floor(i / 4) * 500);
  
  return {
    id: `service-${i + 1}`,
    name,
    description,
    image,
    price,
    category,
    rating: 4 + (Math.random() * (5 - 4)),
    reviewCount: Math.floor(Math.random() * 200) + 50,
    popularity: Math.floor(Math.random() * 100) + 1
  };
});

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const [services, setServices] = useState(allServices);
  const [filteredServices, setFilteredServices] = useState(allServices);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedService, setSelectedService] = useState<typeof allServices[0] | null>(null);
  
  const { addToCart } = useCart();
  const { addNotification } = useNotification();

  useEffect(() => {
    // Update document title
    document.title = 'Services - AstroPuja';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check for category parameter in URL
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  useEffect(() => {
    let result = [...allServices];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(service => service.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(service => 
        service.name.toLowerCase().includes(query) || 
        service.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by price range
    result = result.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );
    
    // Sort results
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
      default:
        result.sort((a, b) => b.popularity - a.popularity);
        break;
    }
    
    setFilteredServices(result);
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const handleAddToCart = (service: typeof allServices[0]) => {
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image
    });
    addNotification('success', `${service.name} added to cart!`);
  };

  const handleOpenModal = (service: typeof allServices[0]) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <Notifications />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Services
          </h1>
          <p className="text-center text-lg max-w-2xl mx-auto text-purple-100">
            Explore our comprehensive range of astrology consultations, pujas, and gemstones 
            carefully selected to guide you on your spiritual journey.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800"
            />
            <Search className="absolute right-4 top-3 text-gray-500 h-5 w-5" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow border border-gray-200"
            >
              <Filter className="h-5 w-5 text-purple-600" />
              <span>{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
          </div>
          
          {/* Filters Sidebar */}
          <div 
            className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 ${
              isFilterOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden lg:max-h-screen lg:opacity-100'
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCategory === null 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  All Services
                </button>
                {['astrology', 'puja', 'gemstones'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md capitalize transition-colors ${
                      selectedCategory === category 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            {/* Sort By */}
            <div>
              <h3 className="text-lg font-medium mb-3">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredServices.length} Services Found
              </h2>
            </div>
            
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <div 
                    key={service.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img 
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase font-medium">
                          {service.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-800">₹{service.price.toLocaleString()}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleOpenModal(service)}
                            className="px-3 py-1 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition-colors text-sm"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleAddToCart(service)}
                            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm flex items-center"
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" /> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                    setPriceRange([0, 20000]);
                  }}
                  className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-90vh overflow-auto relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-6">
                <div className="mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase font-medium">
                    {selectedService.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedService.name}
                </h2>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < Math.floor(selectedService.rating) ? 'fill-current' : 'stroke-current'}`}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {selectedService.rating.toFixed(1)} ({selectedService.reviewCount} reviews)
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {selectedService.description}
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu felis vel nisl volutpat ultrices. 
                  Nullam vestibulum, est vel aliquet feugiat, nulla dolor commodo velit, a tincidunt odio nisi vitae metus. 
                  Suspendisse potenti. Fusce varius augue eget libero efficitur vestibulum.
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Spiritual growth and enlightenment</li>
                    <li>Improved clarity and decision making</li>
                    <li>Enhanced prosperity and well-being</li>
                    <li>Removal of negative energies</li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <span className="text-3xl font-bold text-gray-800">₹{selectedService.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 ml-2">Including GST</span>
                  </div>
                  
                  <button
                    onClick={() => {
                      handleAddToCart(selectedService);
                      handleCloseModal();
                    }}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;