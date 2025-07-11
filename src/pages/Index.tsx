
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AgeGate from '../components/AgeGate';
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';
import BlogGrid from '../components/BlogGrid';
import SidebarAds from '../components/SidebarAds';
import AdBanner from '../components/AdBanner';
import { blogPosts } from '../data/blogPosts';

const Index = () => {
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified === 'true') {
      setShowAgeGate(false);
    }
  }, []);

  const handleAgeVerification = (isVerified: boolean) => {
    if (isVerified) {
      localStorage.setItem('ageVerified', 'true');
      setShowAgeGate(false);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  if (showAgeGate) {
    return <AgeGate onVerify={handleAgeVerification} />;
  }

  const firstHalf = Math.floor(filteredPosts.length / 2);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      
      {/* Top Navigation Banner Ad */}
      <AdBanner adId="_2609859" className="py-4 bg-gray-900/50" />
      
      {/* Top Banner Ad */}
      <AdBanner adId="_2609856" className="py-4 bg-gray-900/50" />

      <HeroSection />

      {/* After Hero Banner Ad */}
      <AdBanner adId="_2609851" className="py-4 bg-gray-900/30" />

      {/* Blog Posts Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {/* Left Sidebar - Hidden on mobile and tablet */}
            <div className="hidden lg:block lg:col-span-1">
              <SidebarAds side="left" />
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-pink-400">Latest</h2>
              
              <SearchBar onSearch={handleSearch} />
              
              {/* Content Area Banner Ad */}
              <AdBanner adId="_2609850" className="py-6 mb-8" />
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No posts found matching your search.</p>
                </div>
              ) : (
                <>
                  {/* First Half of Posts */}
                  <BlogGrid 
                    posts={filteredPosts}
                    startIndex={0}
                    endIndex={firstHalf}
                    adIds={['_2609854']}
                  />

                  {/* Middle Banner Ad */}
                  <AdBanner adId="_2609860" className="py-8 my-8" />

                  {/* Second Half of Posts */}
                  <BlogGrid 
                    posts={filteredPosts}
                    startIndex={firstHalf}
                    adIds={['_2609861']}
                  />
                </>
              )}
            </div>

            {/* Right Sidebar - Hidden on mobile and tablet */}
            <div className="hidden lg:block lg:col-span-1">
              <SidebarAds side="right" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner Ad */}
      <AdBanner adId="_2609858" className="py-6 bg-gray-900/30" />

      <Footer />
    </div>
  );
};

export default Index;
