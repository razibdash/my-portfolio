import { useParams, Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useBlog } from "../hook/allData";
import { useEffect } from "react";
import Loader from "../components/Loader";

export default function BlogDetails() {
  const { blogs, loading, fetchBlogs } = useBlog();
  useEffect(() => {
    fetchBlogs();
  }, []);
  const { id } = useParams();
  const blog = blogs.find((b) => b._id === id);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p>Blog not found.</p>
        <Link to="/blog" className="ml-4 text-pink-400 underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white min-h-screen">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-pink-400"
            >
              {blog.title}
            </motion.h1>

            {/* Author & Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400"
            >
              By {blog.author} on {blog.date}
            </motion.div>

            {/* Image */}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-2xl shadow-lg mt-6"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-300 text-lg leading-relaxed mt-6"
            >
              {blog.description}
            </motion.p>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <Link
                to="/blog"
                className="px-6 py-3 border border-pink-500 text-pink-400 rounded-xl hover:bg-pink-500/20 transition"
              >
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
