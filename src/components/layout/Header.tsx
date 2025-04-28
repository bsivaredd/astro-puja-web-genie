
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import NavLinks from './NavLinks';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-700">
              AstroPuja
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500 w-40 transition-all focus:w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            
            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
                    <User className="h-5 w-5" />
                    <span>{user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {isAdmin ? (
                      <Link to="/admin/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">
                        Admin Dashboard
                      </Link>
                    ) : (
                      <Link to="/user/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">
                        My Account
                      </Link>
                    )}
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-x-2">
                  <Link to="/login" className="px-4 py-2 text-purple-600 hover:text-purple-700">
                    Login
                  </Link>
                  <Link to="/register" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Register
                  </Link>
                  <Link to="/admin/login" className="px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800">
                    Admin
                  </Link>
                </div>
              )}
              
              {/* Cart */}
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-purple-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-purple-600 text-white text-xs rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-purple-600 text-white text-xs rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <NavLinks isMobile />
            
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            
            {isAuthenticated ? (
              <div className="flex flex-col space-y-2">
                {isAdmin ? (
                  <Link to="/admin/dashboard" className="px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">
                    Admin Dashboard
                  </Link>
                ) : (
                  <Link to="/user/dashboard" className="px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">
                    My Account
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="px-4 py-2 text-left text-gray-700 hover:bg-purple-50 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link to="/login" className="px-4 py-2 text-center text-purple-600 border border-purple-600 rounded">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 text-center bg-purple-600 text-white rounded">
                  Register
                </Link>
                <Link to="/admin/login" className="px-4 py-2 text-center bg-indigo-700 text-white rounded">
                  Admin Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
