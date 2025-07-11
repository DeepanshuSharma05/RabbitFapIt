
import React from 'react';
import { Rabbit } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-pink-950 to-black py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Rabbit className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-400 fill-pink-400" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
            rabbitfapit
          </h1>
        </div>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
          Where shadows dance with desire and secrets find their voice
        </p>
        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-pink-600 mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
