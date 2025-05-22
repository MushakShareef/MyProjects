import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-10 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="rounded-full bg-blue-100 p-2 flex items-center justify-center">
              <Sun className="h-6 w-6 text-amber-500" />
            </div>
            <h1 className="text-2xl font-semibold text-blue-800">Om Shanti</h1>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-gray-700">
              <li>
                <Link 
                  to="/" 
                  className={`py-2 transition-colors duration-200 hover:text-blue-600 ${isActive('/') ? 'font-medium text-blue-600 border-b-2 border-blue-600' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`py-2 transition-colors duration-200 hover:text-blue-600 ${isActive('/about') ? 'font-medium text-blue-600 border-b-2 border-blue-600' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/meditation" 
                  className={`py-2 transition-colors duration-200 hover:text-blue-600 ${isActive('/meditation') ? 'font-medium text-blue-600 border-b-2 border-blue-600' : ''}`}
                >
                  Meditation
                </Link>
              </li>
              <li>
                <Link 
                  to="/address" 
                  className={`py-2 transition-colors duration-200 hover:text-blue-600 ${isActive('/address') ? 'font-medium text-blue-600 border-b-2 border-blue-600' : ''}`}
                >
                  Address
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className={`py-2 transition-colors duration-200 hover:text-blue-600 ${isActive('/gallery') ? 'font-medium text-blue-600 border-b-2 border-blue-600' : ''}`}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
          
          <MobileMenu className="block md:hidden relative" />
        </div>
      </div>
    </header>
  );
};

export default Header;