
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-pink-200/30 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <p className="text-gray-500 mb-2">
            © {currentYear} rabbitfapit. All rights reserved.
          </p>
          <p className="text-pink-500 font-semibold text-sm">
            ⚠️ This website contains adult-themed content. 18+ only.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
