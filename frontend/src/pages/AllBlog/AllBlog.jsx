import { motion } from "framer-motion";
import { useEffect } from "react";
import { useBlog } from "../../hook/allData";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const { blogs, loading, fetchBlogs } = useBlog();
  console.log(blogs);
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section
          id="blogs"
          className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white overflow-hidden"
        >
          {/* Floating background blobs for life */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -15, 15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              className="absolute top-10 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-40"
            />
            <motion.div
              animate={{
                x: [0, -25, 25, 0],
                y: [0, 20, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-30"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-12">
              My <span className="text-pink-400">Blogs</span>
            </h2>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 3 }}
                  className="relative bg-gradient-to-br from-purple-800/30 to-indigo-800/30 p-6 rounded-2xl shadow-xl backdrop-blur-lg text-left overflow-hidden"
                >
                  {/* Snake Border Animation */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                    animate={{
                      background: [
                        "linear-gradient(90deg, #ec4899, #6366f1, transparent)",
                        "linear-gradient(180deg, #ec4899, #6366f1, transparent)",
                        "linear-gradient(270deg, #ec4899, #6366f1, transparent)",
                        "linear-gradient(360deg, #ec4899, #6366f1, transparent)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 10 }}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "2px",
                    }}
                  />
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    By <span className="text-pink-400">{blog.author}</span> on{" "}
                    {blog.date.slice(0, 10)}
                  </p>
                  <p className="text-gray-300 mb-6">
                    {blog.description.slice(0, 100)}...
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-md  transition-all duration-300"
                  >
                    <Link to={`/blog/${blog._id}`}>Read More →</Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
