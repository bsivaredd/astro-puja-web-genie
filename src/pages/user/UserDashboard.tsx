import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Notifications from '../../components/common/Notifications';
import { User, ShoppingBag, Heart, Calendar, Bell, LogOut, Clock, Package, CreditCard, MessageSquare, ChevronRight } from 'lucide-react';

// Sample order data
const orderHistory = [
  { id: 'ORD-7829', service: 'Personal Horoscope Reading', date: '15 Apr 2025', amount: 2999, status: 'completed' },
  { id: 'ORD-7830', service: 'Navgraha Shanti Puja', date: '10 Apr 2025', amount: 5499, status: 'processing' },
  { id: 'ORD-7831', service: 'Blue Sapphire (Neelam)', date: '28 Mar 2025', amount: 12999, status: 'delivered' }
];

// Sample wishlist data
const wishlistItems = [
  { id: '1', name: 'Lakshmi Puja for Prosperity', price: 4999, image: 'https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: '2', name: 'Red Coral (Moonga)', price: 8999, image: 'https://images.pexels.com/photos/5370737/pexels-photo-5370737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: '3', name: 'Career Consultation', price: 3499, image: 'https://images.pexels.com/photos/4185980/pexels-photo-4185980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
];

// Sample upcoming appointments
const upcomingAppointments = [
  { id: 'APT-001', service: 'Vastu Consultation', date: '18 Apr 2025', time: '10:30 AM', consultant: 'Dr. Ravi Shankar' },
  { id: 'APT-002', service: 'Ganesh Puja', date: '25 Apr 2025', time: '9:00 AM', consultant: 'Pandit Suresh Joshi' }
];

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
    
    // Update document title
    document.title = 'My Account - AstroPuja';
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16">
      <Notifications />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* User Profile Summary */}
                <div className="p-6 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-white/30 flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{user?.name}</h2>
                      <p className="text-purple-200">{user?.email}</p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <nav className="p-4">
                  <div className="space-y-1">
                    {[
                      { name: 'Profile Information', icon: <User className="h-5 w-5" />, id: 'profile' },
                      { name: 'Order History', icon: <ShoppingBag className="h-5 w-5" />, id: 'orders' },
                      { name: 'Wishlist', icon: <Heart className="h-5 w-5" />, id: 'wishlist' },
                      { name: 'Appointments', icon: <Calendar className="h-5 w-5" />, id: 'appointments' },
                      { name: 'Payment Methods', icon: <CreditCard className="h-5 w-5" />, id: 'payment' },
                      { name: 'Messages', icon: <MessageSquare className="h-5 w-5" />, id: 'messages', badge: 1 },
                      { name: 'Notifications', icon: <Bell className="h-5 w-5" />, id: 'notifications', badge: 3 }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                          activeTab === item.id
                            ? 'bg-purple-50 text-purple-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`${activeTab === item.id ? 'text-purple-700' : 'text-gray-500'}`}>
                            {item.icon}
                          </span>
                          <span className="ml-3 font-medium">{item.name}</span>
                        </div>
                        
                        {item.badge && (
                          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                    
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="h-5 w-5" />
                      <span className="ml-3 font-medium">Logout</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Profile Information */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={user?.name}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={user?.email}
                          disabled
                          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          defaultValue="+91 98765 43210"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <textarea
                        id="address"
                        rows={3}
                        defaultValue="123 Spiritual Lane, Cosmic City, Universe 12345"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Order History */}
              {activeTab === 'orders' && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">Order History</h2>
                    <p className="text-gray-600 mt-1">Track and manage your orders</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orderHistory.map((order) => (
                          <tr key={order.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.service}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{order.amount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-purple-600 hover:text-purple-900">View Details</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {orderHistory.length === 0 && (
                    <div className="p-8 text-center">
                      <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">No orders yet</h3>
                      <p className="text-gray-500">When you place an order, it will appear here.</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Wishlist */}
              {activeTab === 'wishlist' && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">My Wishlist</h2>
                    <p className="text-gray-600 mt-1">Services you've saved for later</p>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-20 object-cover rounded-md"
                        />
                        <div className="sm:ml-6 mt-4 sm:mt-0 flex-grow">
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="text-lg font-bold text-gray-900 mt-1">₹{item.price.toLocaleString()}</p>
                        </div>
                        <div className="mt-4 sm:mt-0 flex space-x-3">
                          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                            Add to Cart
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {wishlistItems.length === 0 && (
                    <div className="p-8 text-center">
                      <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Your wishlist is empty</h3>
                      <p className="text-gray-500">Save items you like by clicking the heart icon.</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Appointments */}
              {activeTab === 'appointments' && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">My Appointments</h2>
                    <p className="text-gray-600 mt-1">Upcoming puja and consultation bookings</p>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {upcomingAppointments.map((apt) => (
                      <div key={apt.id} className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{apt.service}</h3>
                            <p className="text-gray-500 mt-1">Consultant: {apt.consultant}</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-medium">
                            Upcoming
                          </span>
                        </div>
                        
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{apt.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{apt.time}</span>
                        </div>
                        
                        <div className="mt-4 flex space-x-3">
                          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                            Join Online
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                            Reschedule
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {upcomingAppointments.length === 0 && (
                    <div className="p-8 text-center">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">No upcoming appointments</h3>
                      <p className="text-gray-500">When you book a service, your appointments will appear here.</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Other tabs (placeholders) */}
              {['payment', 'messages', 'notifications'].includes(activeTab) && (
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {activeTab === 'payment' && 'Payment Methods'}
                    {activeTab === 'messages' && 'Messages'}
                    {activeTab === 'notifications' && 'Notifications'}
                  </h2>
                  <p className="text-gray-600 mb-8">This section is under development.</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center"
                    >
                      Return to Profile <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;