
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const blogPosts = {
  'midnight-serenade': {
    title: 'Midnight Serenade',
    date: '2024-01-20',
    readTime: '9 min read',
    coverImage: '/lovable-uploads/3e051e23-9e35-4a6a-ad25-9c06498ac132.png',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">In the velvet darkness of midnight, the city transforms into a symphony of whispered desires and unspoken promises.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The piano keys felt cool beneath her fingertips as she began to play, each note floating through the empty apartment like a prayer to the night. She had always played better in darkness, when the weight of watching eyes lifted and her soul could speak through music.</p>

      <p class="text-gray-300 leading-relaxed mb-6">He stood in the doorway, transfixed by the melody that seemed to pull secrets from the very air. This wasn't just music – it was confession, seduction, and surrender all woven into a single, haunting tune that made his chest tighten with longing.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"Don't stop," he whispered as her hands paused above the keys. The silence stretched between them like a held breath, pregnant with possibility.</p>

      <p class="text-gray-300 leading-relaxed mb-6">She smiled without turning around, her fingers finding a new melody – slower now, more intimate. This was their language, the way they spoke when words weren't enough. Each phrase was a question, each harmony an answer, each crescendo a promise of what the night might hold.</p>

      <p class="text-gray-300 leading-relaxed mb-6">He moved closer, drawn by the magnetic pull of her music. The moonlight streaming through the windows painted silver patterns on her bare shoulders, and he found himself memorizing every curve, every shadow, every breath that shaped the melody.</p>

      <p class="text-gray-300 leading-relaxed mb-6">"Play me something dangerous," he requested, his voice rough with desire. She laughed, a sound like wind chimes in a summer storm, and her fingers shifted to something darker, more primal.</p>

      <p class="text-gray-300 leading-relaxed mb-6">The music wrapped around them both now, creating a cocoon of sound and sensation. Time moved differently here, in this space between heartbeats, where every note was a caress and every pause a kiss waiting to happen.</p>

      <p class="text-gray-300 leading-relaxed mb-6">When the last note finally faded into silence, they remained frozen in the moment, neither daring to move and break the spell. The night had given them something precious – a perfect moment of understanding, where souls touched through music and hearts beat in perfect synchrony.</p>

      <p class="text-gray-300 leading-relaxed mb-8">"Again," he whispered, and she smiled, her fingers already finding their way back to the keys. Some serenades, she realized, were meant to last until dawn.</p>
    `
  },
  'forbidden-desires': {
    title: 'Forbidden Desires',
    date: '2024-01-15',
    readTime: '8 min read',
    coverImage: '/lovable-uploads/f6ef997f-bda9-4746-99ba-bee0982205bd.png',
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
    coverImage: '/lovable-uploads/3ad660f5-65ea-4458-b6e6-f183c25b62c9.png',
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
    coverImage: '/lovable-uploads/6e65b3bb-094b-465a-96f4-75b9a7e48e20.png',
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
    coverImage: '/lovable-uploads/ec99a2b4-5e20-4d72-adb1-33a607045350.png',
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
          <h1 className="text-4xl font-bold text-pink-400 mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-8">The story you're looking for doesn't exist.</p>
          <Link to="/" className="text-pink-400 hover:text-pink-300 font-semibold">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
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
            
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            {/* Square Cover Image with Play Button */}
            <div className="flex justify-center mb-12">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden border border-pink-400/30 relative">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover filter blur-md"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-pink-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="bg-white border border-pink-200/30 rounded-lg p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Navigation */}
          <div className="mt-16 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold transition-colors"
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
