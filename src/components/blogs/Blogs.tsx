import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts, BlogPost } from "./blogData";

const Blogs: React.FC = () => {
  return (
    <section className="bg-bg-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 font-roboto">
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post: BlogPost) => (
            <motion.div
              key={post.id}
              className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
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
                <p
                  className="flex text-sm text-text-light"
                  style={{ lineHeight: "1.5rem" }}
                >
                  <span className="mr-2 flex items-center">
                    <CalendarTodayIcon
                      sx={{ fontSize: 16, lineHeight: "inherit" }}
                    />
                  </span>
                  {post.date}
                </p>
                {/* Content */}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.content}
                </p>
                {/* Read More Button */}
                <div>
                <Link to={`/blog/${post.slug}`}>
                <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
                  Read More
                </button>
                </Link>
                </div>
               
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
