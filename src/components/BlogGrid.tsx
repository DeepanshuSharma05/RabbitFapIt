
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
      {postsToShow.map((post, index) => (
        <React.Fragment key={post.id}>
          <BlogCard post={post} />
          
          {/* Insert ads every 6 posts */}
          {(index + 1) % 6 === 0 && index < postsToShow.length - 1 && adIds[Math.floor(index / 6)] && (
            <div className="col-span-full">
              <AdBanner 
                adId={adIds[Math.floor(index / 6)]} 
                className="py-4"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogGrid;
