import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";
import { TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);
  if (!post) {
    return (
      <p className="flex items-center justify-center h-[100vh] font-roboto">
        Blog post not found.
      </p>
    );
  }
  return (
    <section className="bg-bg-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 font-roboto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Blog Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Blog Image */}
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover"
            />

            {/* Blog Title */}
            <h1 className="text-3xl font-bold">{post.title}</h1>

            {/* Blog Meta Data */}
            <div className="text-gray-600 flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <span>By Yiga Richard</span>
              <span>On {post.date}</span>
              <span>Category: Technology</span>
            </div>

            {/* Blog Content */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>{post.content}</p>
              {/* More blog content */}
            </div>

            {/* Comments Section */}
            <div className="space-y-4">
              {/* Single Comment */}
              <div className="space-y-2">
                <h2 className="text-heading font-semibold">
                  Comments on this Post
                </h2>
                <div className="bg-white shadow-lg p-4 flex space-x-4">
                  <AccountCircleIcon className="text-gray-600" />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-800">Alice</span>
                      <span className="text-sm text-gray-500">
                        October 27, 2024
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      This is a very insightful post about AI. Thanks for
                      sharing!
                    </p>
                    <button className="text-primary mt-2">Reply</button>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="space-y-2">
                <h2 className="text-heading font-semibold">Leave A Comment</h2>
                <div className="bg-white shadow-lg p-4">
                  <form className="space-y-6">
                    <TextField
                      fullWidth
                      label="Comment"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#3315F4",
                          },
                          "&:hover fieldset": {
                            borderColor: "#3315F4",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#3315F4",
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#3315F4",
                          },
                          "&:hover fieldset": {
                            borderColor: "#3315F4",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#3315F4",
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#3315F4",
                          },
                          "&:hover fieldset": {
                            borderColor: "#3315F4",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#3315F4",
                          },
                        },
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        height: "50px",
                        backgroundColor: "#3315F4",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#00A3F5",
                        },
                      }}
                    >
                      Comment
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Blog Category List */}
            <div className="bg-white shadow-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">Categories</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Technology</li>
                <li>AI</li>
                <li>Web Development</li>
                <li>Design</li>
                <li>Data Science</li>
              </ul>
            </div>

            {/* Trending Blogs */}
            <div className="bg-white shadow-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">Trending Blogs</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-gray-800 font-semibold">
                    React Tips and Tricks
                  </h4>
                  <p className="text-sm text-gray-500">October 20, 2024</p>
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold">
                    Mastering JavaScript ES2024
                  </h4>
                  <p className="text-sm text-gray-500">October 10, 2024</p>
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold">
                    CSS Layout Techniques
                  </h4>
                  <p className="text-sm text-gray-500">October 5, 2024</p>
                </div>
                {/* More trending blogs */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
