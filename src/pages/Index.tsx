import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AgeGate from '../components/AgeGate';
import SearchBar from '../components/SearchBar';

const blogPosts = [
  {
    id: 'midnight-serenade',
    title: 'Midnight Serenade', 
    excerpt: 'In the symphony of the night, hearts compose their most intimate melodies, each note a whispered promise...',
    date: '2024-01-20',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1494790108755-2616c4e2e29b?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'forbidden-desires',
    title: 'Forbidden Desires',
    excerpt: 'An exploration of the hidden depths of human passion and the boundaries we dare not cross...',
    date: '2024-01-15',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'midnight-confessions',
    title: 'Midnight Confessions',
    excerpt: 'In the darkness of night, secrets are whispered and truths are revealed in ways daylight never allows...',
    date: '2024-01-10',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'velvet-shadows',
    title: 'Velvet Shadows',
    excerpt: 'Between pleasure and pain lies a delicate balance that few dare to explore. This is that journey...',
    date: '2024-01-05',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'crimson-nights',
    title: 'Crimson Nights',
    excerpt: 'When darkness falls and inhibitions fade, the most intense stories begin to unfold in shades of crimson...',
    date: '2024-01-01',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'silken-whispers',
    title: 'Silken Whispers',
    excerpt: 'Soft touches and gentle caresses reveal the power of tenderness in the most unexpected moments...',
    date: '2023-12-28',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'electric-dreams',
    title: 'Electric Dreams',
    excerpt: 'When technology meets desire, the boundaries between reality and fantasy become beautifully blurred...',
    date: '2023-12-25',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'desert-heat',
    title: 'Desert Heat',
    excerpt: 'In the scorching embrace of endless dunes, passion burns hotter than the midday sun...',
    date: '2023-12-22',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    excerpt: 'As twilight paints the sky in shades of amber, two souls discover the magic of perfect timing...',
    date: '2023-12-20',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'feline-grace',
    title: 'Feline Grace',
    excerpt: 'With movements like liquid silk and eyes that hold ancient secrets, she prowls through the night...',
    date: '2023-12-18',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'neon-nights',
    title: 'Neon Nights',
    excerpt: 'City lights reflect off rain-soaked streets as strangers become lovers in the urban maze...',
    date: '2023-12-15',
    readTime: '11 min read',
    coverImage: 'https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'mirror-mirror',
    title: 'Mirror Mirror',
    excerpt: 'Reflections reveal more than just physical beauty as she discovers her deepest desires...',
    date: '2023-12-12',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'ocean-waves',
    title: 'Ocean Waves',
    excerpt: 'The rhythmic crash of waves against the shore mirrors the passionate rhythm of two hearts as one...',
    date: '2023-12-10',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'sapphire-dreams',
    title: 'Sapphire Dreams',
    excerpt: 'Blue as the deepest ocean, her eyes hold promises of adventures that exist only in dreams...',
    date: '2023-12-08',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop&crop=center&blur=5'
  },
  {
    id: 'ivory-tower',
    title: 'Ivory Tower',
    excerpt: 'High above the world in her pristine sanctuary, she learns that perfection has its own temptations...',
    date: '2023-12-05',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=center&blur=5'
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
                      {/* Square Cover Image with Play Button */}
                      <div className="w-full aspect-square relative">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                          <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-all duration-300 backdrop-blur-sm">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
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
