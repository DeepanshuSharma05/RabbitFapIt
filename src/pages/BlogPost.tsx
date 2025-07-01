
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const blogPosts = {
  'forbidden-desires': {
    title: 'Forbidden Desires',
    date: '2024-01-15',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop&crop=center',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">The human heart is a labyrinth of wants and needs, some whispered in daylight, others hidden in the deepest chambers of our souls.</p>

      <p class="text-gray-300 leading-relaxed mb-6">There exists a realm where propriety dissolves like sugar in rain, where the boundaries we've constructed around ourselves become nothing more than shadows on the wall. It is here, in this space between what is and what could be, that our most profound truths reside.</p>

      <p class="text-gray-300 leading-relaxed mb-6">She stood at the window, watching the city lights blur through the rain-streaked glass. The reflection staring back at her was a stranger – someone who had learned to want things that polite society would never understand. Her fingers traced the cool surface, leaving ephemeral marks that disappeared as quickly as they appeared.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"What makes a desire forbidden?" she wondered aloud to the empty room. "Is it the object of our longing, or the intensity with which we long for it?"</p>

      <p class="text-gray-300 leading-relaxed mb-6">The phone buzzed against the marble countertop. A message. Simple words that sent electricity through her veins: "Tonight, if you're ready."</p>

      <p class="text-gray-300 leading-relaxed mb-6">Ready. Such a deceptively simple word for something so complex. Ready to cross lines drawn in sand. Ready to explore territories marked "forbidden" on all the maps she'd been given. Ready to discover who she truly was when all the masks were removed.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The city below pulsed with its own rhythm, millions of hearts beating, millions of secrets kept. And somewhere in that vast expanse of humanity, someone else was staring at their own reflection, asking the same questions, feeling the same pull toward something they couldn't quite name but couldn't quite resist.</p>

      <p class="text-gray-300 leading-relaxed mb-6">In the end, perhaps that's what makes a desire truly forbidden – not its nature, but our willingness to deny it. The moment we acknowledge it, give it form and substance, it transforms from something forbidden into something inevitable.</p>

      <p class="text-gray-300 leading-relaxed mb-8">She picked up the phone. Her thumb hovered over the keyboard. Three letters. Y-e-s. Such a small word to change everything.</p>
    `
  },
  'midnight-confessions': {
    title: 'Midnight Confessions',
    date: '2024-01-10',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=600&fit=crop&crop=center',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">There's something about the witching hour that strips away pretense, leaving only raw honesty in its wake.</p>

      <p class="text-gray-300 leading-relaxed mb-6">At midnight, the world becomes a different place. The harsh light of day fades, taking with it the judgments and expectations that bind us during waking hours. In darkness, we find a freedom that daylight never allows – the freedom to be completely, utterly ourselves.</p>

      <p class="text-gray-300 leading-relaxed mb-6">It was in these sacred hours that she found herself most honest. The phone calls that lasted until dawn, voices hushed not from fear of waking others, but from the reverence these conversations demanded. These were the hours when masks fell away like autumn leaves.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"Tell me something true," became their midnight greeting. Not hello, not how are you, but this invitation into authenticity. And in the safety of darkness, truths spilled forth like wine from an overturned glass.</p>

      <p class="text-gray-300 leading-relaxed mb-6">She spoke of desires that had no names, of yearnings that couldn't be catalogued or categorized. He listened with the kind of attention that was itself a form of worship – complete, unwavering, without judgment.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"The person I am at midnight," she whispered into the phone, "is more real than any version of myself I show the world."</p>

      <p class="text-gray-300 leading-relaxed mb-6">And he understood. In the darkness, they were both more themselves than they'd ever been with anyone else. The confessions came easier now – not just of desire, but of fear, of hope, of the thousand small compromises that make up a life.</p>

      <p class="text-gray-300 leading-relaxed mb-8">As dawn approached, she always felt a kind of melancholy. Soon, the masks would return. The roles would be resumed. But for these precious hours, she had been seen – truly seen – and that was worth more than all the daylight propriety in the world.</p>
    `
  },
  'velvet-shadows': {
    title: 'Velvet Shadows',
    date: '2024-01-05',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=600&fit=crop&crop=center',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">Between pleasure and pain lies a territory few dare to explore – a realm where sensation transcends the physical and becomes something approaching the divine.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The room was painted in shadows and whispers, velvet curtains filtering the city lights into something soft and dreamlike. Here, in this sanctuary removed from the ordinary world, different rules applied. Here, vulnerability was strength, and surrender was victory.</p>

      <p class="text-gray-300 leading-relaxed mb-6">She had never understood the appeal until she felt it herself – that moment when control shifts, when trust becomes absolute, when the boundaries between self and other begin to blur. It wasn't about power in any crude sense, but about the profound intimacy that comes from complete honesty about what you need.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"Are you afraid?" he asked, his voice low and careful.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"Terrified," she replied, and they both smiled at the honesty of it. Fear and desire, she was learning, were not opposites but dance partners, each one leading to heights the other alone could never reach.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The silk against her skin was both barrier and invitation, the soft restraints a paradox of freedom found through surrender. Every sensation was heightened, every touch electric with meaning. This was what it meant to be present – not just in body, but in every cell, every nerve, every breath.</p>

      <p class="text-gray-300 leading-relaxed mb-6">Outside, the world continued its relentless pace, but in this velvet-wrapped sanctuary, time moved differently. Here, a moment could stretch into eternity, and eternity could collapse into a single heartbeat.</p>

      <p class="text-gray-300 leading-relaxed mb-6">She understood now why artists and poets had spent centuries trying to capture this – the way pleasure and pain intertwined like lovers' fingers, the way absolute trust could unlock doors to rooms in the soul she'd never known existed.</p>

      <p class="text-gray-300 leading-relaxed mb-6">In the afterglow, wrapped in warmth and silk, she felt transformed. Not broken down but built up, not diminished but expanded. The velvet shadows had shown her something about herself she'd never imagined – that strength could be found in the most unexpected places, even in surrender.</p>

      <p class="text-gray-300 leading-relaxed mb-8">"How do you feel?" he asked, and she searched for words that could contain the complexity of what she'd experienced. In the end, she settled on the simplest truth: "Like myself. Finally, completely myself."</p>
    `
  },
  'crimson-nights': {
    title: 'Crimson Nights',
    date: '2024-01-01',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop&crop=center',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">When darkness falls and inhibitions fade, the most intense stories begin to unfold in shades of crimson.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The club pulsed with its own heartbeat, red lights casting everything in shades of desire and danger. She moved through the crowd like smoke, untouchable yet drawing every eye. Tonight was different. Tonight, she had made a decision that would change everything.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The letter in her purse felt heavier than paper should, weighted with possibility and risk. Three months of correspondence, of words that grew bolder with each exchange, of confessions that had started as curiosity and bloomed into something that demanded action.</p>

      <p class="text-gray-300 leading-relaxed mb-6">He was waiting at the bar, exactly as described. Tall, elegant, with eyes that seemed to see straight through all her carefully constructed defenses. When he smiled, she felt something shift inside her chest – not her heart, but something deeper, more fundamental.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"You came," he said, and she heard surprise in his voice, as if he hadn't quite believed she would.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"Did you think I wouldn't?" she replied, accepting the glass of wine he offered. Crimson liquid that matched the lights, the atmosphere, the current running between them.</p>

      <p class="text-gray-300 leading-relaxed mb-6">They talked for hours, or maybe minutes – time seemed fluid here, bending around their conversation like light around a star. Every word was weighted with subtext, every glance a question and answer simultaneously.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The music changed, becoming something slower, more hypnotic. Without words, he extended his hand, and she took it, allowing herself to be led onto the dance floor where bodies moved in rhythm with desires too complex for words.</p>

      <p class="text-gray-300 leading-relaxed mb-6">Against him, she felt the full weight of what they were contemplating. This wasn't just attraction or lust – this was the decision to step off the cliff of ordinary life and see if she could fly.</p>

      <p class="text-gray-300 leading-relaxed mb-8">As the night deepened to true crimson, she realized that some choices can't be unmade, and some nights change everything that comes after. In his arms, surrounded by red light and possibility, she discovered that sometimes the most beautiful transformations happen in the dark.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-gray-100">
        <Navigation />
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-8">The story you're looking for doesn't exist.</p>
          <Link to="/" className="text-red-400 hover:text-red-300 font-semibold">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-gray-400 mb-8">
              <time>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            {/* Square Cover Image */}
            <div className="flex justify-center mb-12">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden border border-red-900/30">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="bg-gradient-to-br from-gray-900 to-red-950/20 border border-red-900/30 rounded-lg p-8 md:p-12">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Navigation */}
          <div className="mt-16 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Stories
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
