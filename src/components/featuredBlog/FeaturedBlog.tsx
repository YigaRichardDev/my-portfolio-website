import React from "react";
import { blogPosts, BlogPost } from "./blogData";

const FeaturedBlog: React.FC = () => {
  return (
    <section className="bg-bg-color">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 lg:h-[600px] font-roboto">
      {/* Blog Header */}
      <h2 className="font-medium text-heading text-center mb-p4">Latest <span className="text-primary">Blogs</span></h2>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post: BlogPost) => (
          <div
            key={post.id}
            className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p1"
          >
            {/* Blog Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="space-y-p1">
              {/* Title */}
              <h3 className="text-link font-semibold mb-4">{post.title}</h3>
              {/* Date */}
              <p className="text-sm text-text-light">{post.date}</p>
              {/* Content */}
              <p className=" text-gray-600 text-sm line-clamp-3">
                {post.content}
              </p>
              {/* Read More Button */}
              <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
              Read More
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
   
  );
};

export default FeaturedBlog;
