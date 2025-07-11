
import React from 'react';
import BlogCard from './BlogCard';
import AdBanner from './AdBanner';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  startIndex?: number;
  endIndex?: number;
  adIds: string[];
}

const BlogGrid = ({ posts, startIndex = 0, endIndex, adIds }: BlogGridProps) => {
  const postsToShow = endIndex ? posts.slice(startIndex, endIndex) : posts.slice(startIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 auto-rows-fr">
      {postsToShow.map((post, index) => (
        <React.Fragment key={post.id}>
          <BlogCard post={post} />
          
          {/* Insert ads every 8 posts on larger screens, every 4 on mobile */}
          {((index + 1) % 4 === 0 || (index + 1) % 8 === 0) && 
           index < postsToShow.length - 1 && 
           adIds[Math.floor(index / 8)] && (
            <div className="col-span-full my-6">
              <AdBanner 
                adId={adIds[Math.floor(index / 8)]} 
                label={`IN-CONTENT AD ${Math.floor(index / 8) + 1}`}
                className="py-2"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogGrid;
