
import React from 'react';
import { Rabbit } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-pink-950 to-black py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Rabbit className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-pink-400 fill-pink-400 flex-shrink-0" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent leading-tight">
            rabbitfapit
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-2">
          Where shadows dance with desire and secrets find their voice
        </p>
        <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
