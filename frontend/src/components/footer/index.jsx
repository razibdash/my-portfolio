import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-gray-300 pt-12 pb-6">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: [0, -20, 20, 0],
            y: [0, 20, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute bottom-0 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-700 rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left relative z-10">
        {/* Left - Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Razib<span className="text-pink-400">.</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm">
            Building intelligent apps with MERN & AI. Always learning. Always
            innovating.
          </p>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-pink-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-pink-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://www.linkedin.com/in/razibdash/"
              target="_blank"
              className="text-white hover:text-pink-400 transition"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              href="https://github.com/razibdash"
              target="_blank"
              className="text-white hover:text-pink-400 transition"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://www.facebook.com/avronilrajib"
              target="_blank"
              className="text-white hover:text-pink-400 transition"
            >
              <FaFacebook size={24} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400 relative z-10">
        © {new Date().getFullYear()} Razib Dash. All Rights Reserved.
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}
