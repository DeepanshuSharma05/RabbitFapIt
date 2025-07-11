
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Rabbit } from 'lucide-react';
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
    coverImage: '/lovable-uploads/3e051e23-9e35-4a6a-ad25-9c06498ac132.png'
  },
  {
    id: 'forbidden-desires',
    title: 'Forbidden Desires',
    excerpt: 'An exploration of the hidden depths of human passion and the boundaries we dare not cross...',
    date: '2024-01-15',
    readTime: '8 min read',
    coverImage: '/lovable-uploads/f6ef997f-bda9-4746-99ba-bee0982205bd.png'
  },
  {
    id: 'midnight-confessions',
    title: 'Midnight Confessions',
    excerpt: 'In the darkness of night, secrets are whispered and truths are revealed in ways daylight never allows...',
    date: '2024-01-10',
    readTime: '6 min read',
    coverImage: '/lovable-uploads/3ad660f5-65ea-4458-b6e6-f183c25b62c9.png'
  },
  {
    id: 'velvet-shadows',
    title: 'Velvet Shadows',
    excerpt: 'Between pleasure and pain lies a delicate balance that few dare to explore. This is that journey...',
    date: '2024-01-05',
    readTime: '10 min read',
    coverImage: '/lovable-uploads/6e65b3bb-094b-465a-96f4-75b9a7e48e20.png'
  },
  {
    id: 'crimson-nights',
    title: 'Crimson Nights',
    excerpt: 'When darkness falls and inhibitions fade, the most intense stories begin to unfold in shades of crimson...',
    date: '2024-01-01',
    readTime: '7 min read',
    coverImage: '/lovable-uploads/ec99a2b4-5e20-4d72-adb1-33a607045350.png'
  },
  {
    id: 'silken-whispers',
    title: 'Silken Whispers',
    excerpt: 'Soft touches and gentle caresses reveal the power of tenderness in the most unexpected moments...',
    date: '2023-12-28',
    readTime: '5 min read',
    coverImage: '/lovable-uploads/6adc0d19-6e9f-4406-9928-0f48ba4c0a89.png'
  },
  {
    id: 'electric-dreams',
    title: 'Electric Dreams',
    excerpt: 'When technology meets desire, the boundaries between reality and fantasy become beautifully blurred...',
    date: '2023-12-25',
    readTime: '9 min read',
    coverImage: '/lovable-uploads/12d3ad6d-7d26-402f-959e-bbae780d76f7.png'
  },
  {
    id: 'desert-heat',
    title: 'Desert Heat',
    excerpt: 'In the scorching embrace of endless dunes, passion burns hotter than the midday sun...',
    date: '2023-12-22',
    readTime: '7 min read',
    coverImage: '/lovable-uploads/de22f24f-afc2-4248-93b4-d0e36e983133.png'
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    excerpt: 'As twilight paints the sky in shades of amber, two souls discover the magic of perfect timing...',
    date: '2023-12-20',
    readTime: '6 min read',
    coverImage: '/lovable-uploads/319dac6b-e802-4607-9db4-68b7917901bc.png'
  },
  {
    id: 'feline-grace',
    title: 'Feline Grace',
    excerpt: 'With movements like liquid silk and eyes that hold ancient secrets, she prowls through the night...',
    date: '2023-12-18',
    readTime: '8 min read',
    coverImage: '/lovable-uploads/3e051e23-9e35-4a6a-ad25-9c06498ac132.png'
  },
  {
    id: 'neon-nights',
    title: 'Neon Nights',
    excerpt: 'City lights reflect off rain-soaked streets as strangers become lovers in the urban maze...',
    date: '2023-12-15',
    readTime: '11 min read',
    coverImage: '/lovable-uploads/f6ef997f-bda9-4746-99ba-bee0982205bd.png'
  },
  {
    id: 'mirror-mirror',
    title: 'Mirror Mirror',
    excerpt: 'Reflections reveal more than just physical beauty as she discovers her deepest desires...',
    date: '2023-12-12',
    readTime: '6 min read',
    coverImage: '/lovable-uploads/3ad660f5-65ea-4458-b6e6-f183c25b62c9.png'
  },
  {
    id: 'ocean-waves',
    title: 'Ocean Waves',
    excerpt: 'The rhythmic crash of waves against the shore mirrors the passionate rhythm of two hearts as one...',
    date: '2023-12-10',
    readTime: '9 min read',
    coverImage: '/lovable-uploads/6e65b3bb-094b-465a-96f4-75b9a7e48e20.png'
  },
  {
    id: 'sapphire-dreams',
    title: 'Sapphire Dreams',
    excerpt: 'Blue as the deepest ocean, her eyes hold promises of adventures that exist only in dreams...',
    date: '2023-12-08',
    readTime: '7 min read',
    coverImage: '/lovable-uploads/ec99a2b4-5e20-4d72-adb1-33a607045350.png'
  },
  {
    id: 'ivory-tower',
    title: 'Ivory Tower',
    excerpt: 'High above the world in her pristine sanctuary, she learns that perfection has its own temptations...',
    date: '2023-12-05',
    readTime: '10 min read',
    coverImage: '/lovable-uploads/6adc0d19-6e9f-4406-9928-0f48ba4c0a89.png'
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
      
      {/* Top Banner Ad */}
      <div className="w-full flex justify-center py-4 bg-gray-900/50">
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            var a = document.createElement('div'); a.id = '_2609856'; a.className = '_3eca654a6';
            var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
            var c = document.getElementsByTagName('head')[0];
            var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
            if (!window.prpubappended && !window.prpubappendedlocal) {
            window.prpubappendedlocal = true; c.appendChild(d);
            }
          `
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-pink-950 to-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rabbit className="w-12 h-12 text-pink-400 fill-pink-400" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              rabbitfapit
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Where shadows dance with desire and secrets find their voice
          </p>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </div>
      </section>

      {/* After Hero Banner Ad */}
      <div className="w-full flex justify-center py-4 bg-gray-900/30">
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            var a = document.createElement('div'); a.id = '_2609851'; a.className = '_3eca654a6';
            var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
            var c = document.getElementsByTagName('head')[0];
            var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
            if (!window.prpubappended && !window.prpubappendedlocal) {
            window.prpubappendedlocal = true; c.appendChild(d);
            }
          `
        }} />
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="col-span-12 lg:col-span-2 space-y-6">
              {/* Top Left Side Banner */}
              <div className="flex justify-center">
                <script type="text/javascript" dangerouslySetInnerHTML={{
                  __html: `
                    var a = document.createElement('div'); a.id = '_2609848'; a.className = '_3eca654a6';
                    var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                    var c = document.getElementsByTagName('head')[0];
                    var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                    if (!window.prpubappended && !window.prpubappendedlocal) {
                    window.prpubappendedlocal = true; c.appendChild(d);
                    }
                  `
                }} />
              </div>

              {/* Middle Left Side Banner */}
              <div className="flex justify-center">
                <script type="text/javascript" dangerouslySetInnerHTML={{
                  __html: `
                    var a = document.createElement('div'); a.id = '_2609852'; a.className = '_3eca654a6';
                    var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                    var c = document.getElementsByTagName('head')[0];
                    var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                    if (!window.prpubappended && !window.prpubappendedlocal) {
                    window.prpubappendedlocal = true; c.appendChild(d);
                    }
                  `
                }} />
              </div>

              {/* Bottom Left Side Banner */}
              <div className="flex justify-center">
                <script type="text/javascript" dangerouslySetInnerHTML={{
                  __html: `
                    var a = document.createElement('div'); a.id = '_2609853'; a.className = '_3eca654a6';
                    var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                    var c = document.getElementsByTagName('head')[0];
                    var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                    if (!window.prpubappended && !window.prpubappendedlocal) {
                    window.prpubappendedlocal = true; c.appendChild(d);
                    }
                  `
                }} />
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-3xl font-bold mb-12 text-center text-pink-400">Latest</h2>
              
              <SearchBar onSearch={handleSearch} />
              
              {/* Content Area Banner Ad */}
              <div className="w-full flex justify-center py-6 mb-8">
                <script type="text/javascript" dangerouslySetInnerHTML={{
                  __html: `
                    var a = document.createElement('div'); a.id = '_2609850'; a.className = '_3eca654a6';
                    var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                    var c = document.getElementsByTagName('head')[0];
                    var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                    if (!window.prpubappended && !window.prpubappendedlocal) {
                    window.prpubappendedlocal = true; c.appendChild(d);
                    }
                  `
                }} />
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No posts found matching your search.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                  {filteredPosts.map((post, index) => (
                    <React.Fragment key={post.id}>
                      <article className="group h-full">
                        <Link to={`/post/${post.id}`} className="block h-full">
                          <div className="bg-white border border-pink-200/30 rounded-lg overflow-hidden hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20 h-full flex flex-col">
                            {/* Square Cover Image with Play Button */}
                            <div className="w-full aspect-square relative flex-shrink-0">
                              <img 
                                src={post.coverImage} 
                                alt={post.title}
                                className="w-full h-full object-cover filter blur-md"
                              />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                                <div className="w-16 h-16 bg-pink-600/90 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-all duration-300 backdrop-blur-sm">
                                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                </div>
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 bg-white flex-grow flex flex-col">
                              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <time>{new Date(post.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}</time>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                              
                              <h3 className="text-xl font-bold text-pink-600 mb-3 group-hover:text-pink-500 transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              
                              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center text-pink-500 font-semibold group-hover:text-pink-400 transition-colors mt-auto pt-2">
                                <span>Read More</span>
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </article>
                      
                      {/* Insert ads every 6 posts */}
                      {(index + 1) % 6 === 0 && index < filteredPosts.length - 1 && (
                        <div className="col-span-full flex justify-center py-4">
                          <script type="text/javascript" dangerouslySetInnerHTML={{
                            __html: `
                              var a = document.createElement('div'); a.id = '_2609854'; a.className = '_3eca654a6';
                              var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                              var c = document.getElementsByTagName('head')[0];
                              var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                              if (!window.prpubappended && !window.prpubappendedlocal) {
                              window.prpubappendedlocal = true; c.appendChild(d);
                              }
                            `
                          }} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="col-span-12 lg:col-span-2 space-y-6">
              {/* Top Right Side Banner */}
              <div className="flex justify-center">
                <script type="text/javascript" dangerouslySetInnerHTML={{
                  __html: `
                    var a = document.createElement('div'); a.id = '_2609849'; a.className = '_3eca654a6';
                    var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                    var c = document.getElementsByTagName('head')[0];
                    var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                    if (!window.prpubappended && !window.prpubappendedlocal) {
                    window.prpubappendedlocal = true; c.appendChild(d);
                    }
                  `
                }} />
              </div>

              {/* Middle Right Side Banner */}
              <div className="flex justify-center">
                <script type="text/javascript" dangerouslySetInnerHTML={{
                  __html: `
                    var a = document.createElement('div'); a.id = '_2609855'; a.className = '_3eca654a6';
                    var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                    var c = document.getElementsByTagName('head')[0];
                    var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                    if (!window.prpubappended && !window.prpubappendedlocal) {
                    window.prpubappendedlocal = true; c.appendChild(d);
                    }
                  `
                }} />
              </div>

              {/* Bottom Right Side Banner */}
              <div className="flex justify-center">
                <script type="text/javascript" dangerouslySetInnerHTML={{
                  __html: `
                    var a = document.createElement('div'); a.id = '_2609857'; a.className = '_3eca654a6';
                    var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
                    var c = document.getElementsByTagName('head')[0];
                    var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
                    if (!window.prpubappended && !window.prpubappendedlocal) {
                    window.prpubappendedlocal = true; c.appendChild(d);
                    }
                  `
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner Ad */}
      <div className="w-full flex justify-center py-6 bg-gray-900/30">
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            var a = document.createElement('div'); a.id = '_2609858'; a.className = '_3eca654a6';
            var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
            var c = document.getElementsByTagName('head')[0];
            var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
            if (!window.prpubappended && !window.prpubappendedlocal) {
            window.prpubappendedlocal = true; c.appendChild(d);
            }
          `
        }} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
