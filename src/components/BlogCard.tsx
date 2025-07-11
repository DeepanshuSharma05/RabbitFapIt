
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group h-full">
      <Link to={`/post/${post.id}`} className="block h-full">
        <div className="bg-white border border-pink-200/30 rounded-lg overflow-hidden hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20 h-full flex flex-col">
          {/* Responsive Square Cover Image with Play Button */}
          <div className="w-full aspect-square relative flex-shrink-0">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover filter blur-md"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-pink-600/90 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-all duration-300 backdrop-blur-sm">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white ml-0.5" fill="white" />
              </div>
            </div>
          </div>
          
          {/* Responsive Content */}
          <div className="p-3 sm:p-4 md:p-5 lg:p-6 bg-white flex-grow flex flex-col">
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
              <time className="truncate">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </time>
              <span>•</span>
              <span className="truncate">{post.readTime}</span>
            </div>
            
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-pink-600 mb-2 sm:mb-3 group-hover:text-pink-500 transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h3>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-pink-500 font-semibold group-hover:text-pink-400 transition-colors mt-auto pt-2">
              <span className="text-sm sm:text-base">Read More</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
