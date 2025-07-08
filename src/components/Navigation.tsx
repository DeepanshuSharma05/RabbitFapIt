
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rabbit } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-pink-200/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Rabbit className="w-8 h-8 text-pink-500 fill-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              rabbitfapit
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-pink-500 ${
                isActive('/') ? 'text-pink-500' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-pink-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-200/30">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors hover:text-pink-500 ${
                  isActive('/') ? 'text-pink-500' : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
