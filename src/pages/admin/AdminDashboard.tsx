import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Notifications from '../../components/common/Notifications';
import { LineChart, BarChart, PieChart, Calendar, Users, ShoppingBag, MessageSquare, Settings, LogOut, Bell, Search, Menu, X, ChevronDown, ChevronUp, DollarSign, TrendingUp, Package, Eye, Edit, Plus, Image, Trash2 } from 'lucide-react';

// Sample orders data with extended information
const orders = [
  {
    id: 'ORD-7829',
    customer: {
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    service: {
      name: 'Personal Horoscope Reading',
      price: 2999,
      image: 'https://images.pexels.com/photos/7792655/pexels-photo-7792655.jpeg'
    },
    date: '15 Apr 2025',
    status: 'completed'
  }
];

// Sample services data
const services = [
  {
    id: '1',
    name: 'Personal Horoscope Reading',
    description: 'Get a detailed analysis of your birth chart by our expert astrologers.',
    price: 2999,
    category: 'astrology',
    image: 'https://images.pexels.com/photos/7792655/pexels-photo-7792655.jpeg'
  }
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [editingService, setEditingService] = useState<any>(null);
  const [isAddingService, setIsAddingService] = useState(false);
  const [statsPeriod, setStatsPeriod] = useState('weekly');
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
    }
    document.title = 'Admin Dashboard - AstroPuja';
  }, [isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditingService(null);
    setIsAddingService(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Notifications />
      
      {/* Top Bar */}
      <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-4 text-gray-500 focus:outline-none lg:hidden"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <h1 className="text-xl font-bold text-gray-800">AstroPuja Admin</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="py-2 pl-10 pr-4 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          {/* Notifications */}
          <div className="relative">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">3</span>
            </button>
          </div>
          
          {/* Admin Profile */}
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Admin"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="ml-2 font-medium text-gray-700 hidden md:inline">Admin User</span>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside 
          className={`bg-gradient-to-b from-purple-800 to-indigo-900 text-white w-64 flex-shrink-0 ${
            isSidebarOpen ? 'block' : 'hidden'
          } lg:block transition-all duration-300 ease-in-out`}
        >
          <div className="px-4 py-6">
            <div className="mb-8 text-center">
              <div className="bg-white/10 p-3 rounded-lg inline-block">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-3 text-xl font-semibold">Admin Portal</h3>
            </div>
            
            <nav className="space-y-1">
              {[
                { name: 'Dashboard', icon: <LineChart className="h-5 w-5" />, id: 'dashboard' },
                { name: 'Orders', icon: <ShoppingBag className="h-5 w-5" />, id: 'orders' },
                { name: 'Services', icon: <Package className="h-5 w-5" />, id: 'services' },
                { name: 'Customers', icon: <Users className="h-5 w-5" />, id: 'customers' },
                { name: 'Messages', icon: <MessageSquare className="h-5 w-5" />, id: 'messages', badge: 2 },
                { name: 'Calendar', icon: <Calendar className="h-5 w-5" />, id: 'calendar' },
                { name: 'Settings', icon: <Settings className="h-5 w-5" />, id: 'settings' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
              
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-3">Logout</span>
              </button>
            </nav>
          </div>
        </aside>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {activeTab === 'services' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Manage Services</h2>
                <button
                  onClick={() => setIsAddingService(true)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
                >
                  <Plus className="h-5 w-5 mr-2" /> Add Service
                </button>
              </div>

              {(isAddingService || editingService) && (
                <div className="p-6 border-b border-gray-200">
                  <form onSubmit={handleServiceSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Service Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border rounded-md"
                          defaultValue={editingService?.name}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <select className="w-full px-4 py-2 border rounded-md">
                          <option value="astrology">Astrology</option>
                          <option value="puja">Puja</option>
                          <option value="gemstones">Gemstones</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Price (₹)
                        </label>
                        <input
                          type="number"
                          required
                          className="w-full px-4 py-2 border rounded-md"
                          defaultValue={editingService?.price}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Image
                        </label>
                        <div className="flex items-center space-x-4">
                          {editingService?.image && (
                            <img
                              src={editingService.image}
                              alt=""
                              className="h-20 w-20 object-cover rounded"
                            />
                          )}
                          <label className="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                            <input type="file" accept="image/*" className="sr-only" />
                            <Image className="h-5 w-5 inline mr-2" />
                            Upload Image
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md"
                        defaultValue={editingService?.description}
                      ></textarea>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingService(null);
                          setIsAddingService(false);
                        }}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                      >
                        {editingService ? 'Update Service' : 'Add Service'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {services.map((service) => (
                      <tr key={service.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src={service.image} alt="" className="h-10 w-10 rounded object-cover" />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{service.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            {service.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ₹{service.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => setEditingService(service)}
                            className="text-purple-600 hover:text-purple-900 mr-3"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Order Management</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Details</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Info</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={order.service.image} alt="" className="h-10 w-10 rounded object-cover" />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{order.service.name}</div>
                              <div className="text-sm text-gray-500">₹{order.service.price.toLocaleString()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={order.customer.photo} alt="" className="h-10 w-10 rounded-full object-cover" />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{order.customer.name}</div>
                              <div className="text-sm text-gray-500">{order.customer.phone}</div>
                              <div className="text-sm text-gray-500">{order.customer.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            className="text-sm border rounded-full px-3 py-1"
                            defaultValue={order.status}
                          >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-purple-600 hover:text-purple-900">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                
                <div className="flex space-x-2">
                  {['daily', 'weekly', 'monthly', 'yearly'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setStatsPeriod(period)}
                      className={`px-3 py-1 text-sm rounded-md ${
                        statsPeriod === period
                          ? 'bg-purple-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Total Revenue', value: '₹2,56,947', icon: <DollarSign className="h-6 w-6 text-green-500" />, change: '+12.5%', trend: 'up', bg: 'bg-gradient-to-br from-green-400 to-green-600' },
                  { title: 'New Orders', value: '385', icon: <ShoppingBag className="h-6 w-6 text-blue-500" />, change: '+8.2%', trend: 'up', bg: 'bg-gradient-to-br from-blue-400 to-blue-600' },
                  { title: 'New Customers', value: '127', icon: <Users className="h-6 w-6 text-indigo-500" />, change: '+5.1%', trend: 'up', bg: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
                  { title: 'Page Views', value: '12,567', icon: <Eye className="h-6 w-6 text-purple-500" />, change: '-2.3%', trend: 'down', bg: 'bg-gradient-to-br from-purple-400 to-purple-600' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                      </div>
                      <div className={`p-3 rounded-full ${stat.bg} bg-opacity-10`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="flex items-center">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change} from last {statsPeriod.slice(0, -2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && activeTab !== 'services' && activeTab !== 'orders' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section</h2>
              <p className="text-gray-600">This section is under development.</p>
              <p className="text-gray-500 mt-2">Please check back later.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// For missing icon
const TrendingDown = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
    <polyline points="17 18 23 18 23 12"></polyline>
  </svg>
);

// For missing icon
const Shield = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default AdminDashboard;