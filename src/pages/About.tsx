
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              About Dark Confessions
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-red-950/20 border border-red-900/30 rounded-lg p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Welcome to Dark Confessions, where the boundaries of desire and imagination blur into something beautiful, dangerous, and utterly captivating.
              </p>

              <h2 className="text-2xl font-bold text-red-400 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                We explore the depths of human passion through carefully crafted stories that dance on the edge of propriety. Each tale is a journey into the shadows where secrets are kept, desires are whispered, and the most profound truths about ourselves are revealed.
              </p>

              <h2 className="text-2xl font-bold text-red-400 mb-4">What We Offer</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our collection features mature, sophisticated content that respects the intelligence of our readers while exploring themes of:
              </p>
              
              <ul className="text-gray-300 space-y-2 mb-8 pl-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Forbidden love and secret desires
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  The psychology of attraction and seduction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Power dynamics and emotional intensity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  The beauty found in darkness
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-red-400 mb-4">Our Commitment</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Every story is crafted with care, respect, and artistic integrity. We believe that adult content can be both provocative and profound, pushing boundaries while maintaining dignity and depth.
              </p>

              <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 mt-8">
                <p className="text-red-300 text-center font-semibold">
                  "In the darkness, we find not just our desires, but our truest selves."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
