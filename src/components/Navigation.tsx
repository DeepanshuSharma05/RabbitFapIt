
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-red-900/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            Dark Confessions
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-red-400 ${
                isActive('/') ? 'text-red-400' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors hover:text-red-400 ${
                isActive('/about') ? 'text-red-400' : 'text-gray-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors hover:text-red-400 ${
                isActive('/contact') ? 'text-red-400' : 'text-gray-300'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-red-400 transition-colors"
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
          <div className="md:hidden py-4 border-t border-red-900/30">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors hover:text-red-400 ${
                  isActive('/') ? 'text-red-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors hover:text-red-400 ${
                  isActive('/about') ? 'text-red-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors hover:text-red-400 ${
                  isActive('/contact') ? 'text-red-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
