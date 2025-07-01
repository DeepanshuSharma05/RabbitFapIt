import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AgeGate from '../components/AgeGate';
import SearchBar from '../components/SearchBar';

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
  },
  {
    id: 'silken-whispers',
    title: 'Silken Whispers',
    excerpt: 'Soft touches and gentle caresses reveal the power of tenderness in the most unexpected moments...',
    date: '2023-12-28',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'electric-dreams',
    title: 'Electric Dreams',
    excerpt: 'When technology meets desire, the boundaries between reality and fantasy become beautifully blurred...',
    date: '2023-12-25',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'desert-heat',
    title: 'Desert Heat',
    excerpt: 'In the scorching embrace of endless dunes, passion burns hotter than the midday sun...',
    date: '2023-12-22',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    excerpt: 'As twilight paints the sky in shades of amber, two souls discover the magic of perfect timing...',
    date: '2023-12-20',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'feline-grace',
    title: 'Feline Grace',
    excerpt: 'With movements like liquid silk and eyes that hold ancient secrets, she prowls through the night...',
    date: '2023-12-18',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'neon-nights',
    title: 'Neon Nights',
    excerpt: 'City lights reflect off rain-soaked streets as strangers become lovers in the urban maze...',
    date: '2023-12-15',
    readTime: '11 min read',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'mirror-mirror',
    title: 'Mirror Mirror',
    excerpt: 'Reflections reveal more than just physical beauty as she discovers her deepest desires...',
    date: '2023-12-12',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'ocean-waves',
    title: 'Ocean Waves',
    excerpt: 'The rhythmic crash of waves against the shore mirrors the passionate rhythm of two hearts as one...',
    date: '2023-12-10',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'sapphire-dreams',
    title: 'Sapphire Dreams',
    excerpt: 'Blue as the deepest ocean, her eyes hold promises of adventures that exist only in dreams...',
    date: '2023-12-08',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 'ivory-tower',
    title: 'Ivory Tower',
    excerpt: 'High above the world in her pristine sanctuary, she learns that perfection has its own temptations...',
    date: '2023-12-05',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=center'
  }
];

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
          <h2 className="text-3xl font-bold mb-12 text-center text-red-400">Latest</h2>
          
          <SearchBar onSearch={handleSearch} />
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No posts found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/post/${post.id}`} className="block">
                    <div className="bg-gradient-to-br from-gray-900 to-red-950/20 border border-red-900/30 rounded-lg overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20">
                      {/* Square Cover Image */}
                      <div className="w-full aspect-square">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <time>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-red-300 mb-3 group-hover:text-red-200 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                          <span>Read More</span>
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
