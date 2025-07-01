
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AgeGate from '../components/AgeGate';

const blogPosts = [
  {
    id: 'forbidden-desires',
    title: 'Forbidden Desires',
    excerpt: 'An exploration of the hidden depths of human passion and the boundaries we dare not cross...',
    date: '2024-01-15',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'midnight-confessions',
    title: 'Midnight Confessions',
    excerpt: 'In the darkness of night, secrets are whispered and truths are revealed in ways daylight never allows...',
    date: '2024-01-10',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'velvet-shadows',
    title: 'Velvet Shadows',
    excerpt: 'Between pleasure and pain lies a delicate balance that few dare to explore. This is that journey...',
    date: '2024-01-05',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'crimson-nights',
    title: 'Crimson Nights',
    excerpt: 'When darkness falls and inhibitions fade, the most intense stories begin to unfold in shades of crimson...',
    date: '2024-01-01',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center'
  }
];

const Index = () => {
  const [showAgeGate, setShowAgeGate] = useState(true);

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

  if (showAgeGate) {
    return <AgeGate onVerify={handleAgeVerification} />;
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-red-950 to-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            RabitFapit
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Where shadows dance with desire and secrets find their voice
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-400">Latest Stories</h2>
          
          <div className="grid gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <Link to={`/post/${post.id}`} className="block">
                  <div className="bg-gradient-to-br from-gray-900 to-red-950/20 border border-red-900/30 rounded-lg overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20">
                    <div className="flex flex-col lg:flex-row">
                      {/* Square Cover Image */}
                      <div className="lg:w-80 lg:h-80 h-64 w-full flex-shrink-0">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 flex-1">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <time>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-red-300 mb-4 group-hover:text-red-200 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                          <span>Read More</span>
                          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
