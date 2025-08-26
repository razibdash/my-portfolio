import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Skills", "Blog", "About", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-900 via-indigo-900 to-[#010001] backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">
          <Link to="/">
            Razib<span className="text-pink-400">.</span>
          </Link>
        </div>

        {/* Middle Menu (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-pink-300 transition duration-300"
            >
              {item === "Home" ? (
                <Link to="/">{item}</Link>
              ) : (
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Social Icons */}
        <div className="hidden md:flex space-x-5 text-white">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            href="https://github.com"
            target="_blank"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://facebook.com"
            target="_blank"
          >
            <FaFacebook size={24} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-800/90 to-indigo-900/90 text-white px-6 py-6 space-y-4">
          <ul className="space-y-4 text-lg font-medium">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-pink-300 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex space-x-5 mt-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedin size={26} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com"
              target="_blank"
            >
              <FaGithub size={26} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              target="_blank"
            >
              <FaFacebook size={26} />
            </motion.a>
          </div>
        </div>
      )}
    </nav>
  );
}
