
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
      
      {/* Top Navigation Banner Ad - Responsive */}
      <div className="w-full px-2 sm:px-4">
        <AdBanner 
          adId="_2609859" 
          label="TOP NAV BANNER" 
          className="py-3 sm:py-4" 
        />
      </div>
      
      {/* Main Top Banner Ad - Responsive */}
      <div className="w-full px-2 sm:px-4">
        <AdBanner 
          adId="_2609856" 
          label="MAIN TOP BANNER" 
          className="py-3 sm:py-4" 
        />
      </div>

      <HeroSection />

      {/* After Hero Banner Ad - Responsive */}
      <div className="w-full px-2 sm:px-4">
        <AdBanner 
          adId="_2609851" 
          label="POST-HERO BANNER" 
          className="py-4 sm:py-6" 
        />
      </div>

      {/* Main Content Section - Improved Responsive Layout */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 lg:px-6">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
          
          {/* Mobile/Tablet Layout (< lg) */}
          <div className="block lg:hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-pink-400">
              Latest
            </h2>
            
            <div className="max-w-2xl mx-auto mb-6">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            {/* Mobile Content Banner Ad */}
            <div className="mb-6">
              <AdBanner 
                adId="_2609850" 
                label="MOBILE CONTENT BANNER" 
                className="py-4" 
              />
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No posts found matching your search.</p>
              </div>
            ) : (
              <>
                {/* First Half of Posts - Mobile */}
                <BlogGrid 
                  posts={filteredPosts}
                  startIndex={0}
                  endIndex={firstHalf}
                  adIds={['_2609854']}
                />

                {/* Middle Banner Ad - Mobile */}
                <div className="my-8">
                  <AdBanner 
                    adId="_2609860" 
                    label="MOBILE MIDDLE BANNER" 
                    className="py-4" 
                  />
                </div>

                {/* Second Half of Posts - Mobile */}
                <BlogGrid 
                  posts={filteredPosts}
                  startIndex={firstHalf}
                  adIds={['_2609861']}
                />
              </>
            )}
          </div>

          {/* Desktop Layout (lg+) */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 xl:gap-8">
            
            {/* Left Sidebar - Desktop Only */}
            <div className="lg:col-span-2 xl:col-span-2">
              <SidebarAds side="left" />
            </div>

            {/* Main Content - Desktop */}
            <div className="lg:col-span-8 xl:col-span-8">
              <h2 className="text-3xl xl:text-4xl font-bold mb-8 xl:mb-12 text-center text-pink-400">
                Latest
              </h2>
              
              <div className="max-w-3xl mx-auto mb-8">
                <SearchBar onSearch={handleSearch} />
              </div>
              
              {/* Desktop Content Area Banner Ad */}
              <div className="mb-8">
                <AdBanner 
                  adId="_2609850" 
                  label="DESKTOP CONTENT BANNER" 
                  className="py-6" 
                />
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No posts found matching your search.</p>
                </div>
              ) : (
                <>
                  {/* First Half of Posts - Desktop */}
                  <BlogGrid 
                    posts={filteredPosts}
                    startIndex={0}
                    endIndex={firstHalf}
                    adIds={['_2609854']}
                  />

                  {/* Middle Banner Ad - Desktop */}
                  <div className="my-10">
                    <AdBanner 
                      adId="_2609860" 
                      label="DESKTOP MIDDLE BANNER" 
                      className="py-6" 
                    />
                  </div>

                  {/* Second Half of Posts - Desktop */}
                  <BlogGrid 
                    posts={filteredPosts}
                    startIndex={firstHalf}
                    adIds={['_2609861']}
                  />
                </>
              )}
            </div>

            {/* Right Sidebar - Desktop Only */}
            <div className="lg:col-span-2 xl:col-span-2">
              <SidebarAds side="right" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner Ad - Responsive */}
      <div className="w-full px-2 sm:px-4">
        <AdBanner 
          adId="_2609858" 
          label="BOTTOM BANNER" 
          className="py-4 sm:py-6" 
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
