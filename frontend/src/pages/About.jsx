// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mt-10 py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Floating Gradient Blobs (Background) */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            src="https://i.ibb.co.com/sp20bDHw/Avro-4.jpg"
            alt="Razib Dash"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-purple-500/30 relative z-10"
            animate={{
              y: [0, -10, 0], // Floating animation
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-pink-400 font-semibold">Razib Dash</span>, a
            passionate developer specializing in modern web technologies and
            Artificial Intelligence. I thrive on building creative, scalable,
            and efficient solutions that bridge the gap between
            <span className="text-purple-400">
              {" "}
              innovation and practicality
            </span>
            . My focus lies in delivering high-quality projects that make an
            impact — from AI-driven applications to interactive web experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond coding, I believe in{" "}
            <span className="text-pink-400 font-semibold">
              continuous learning
            </span>
            and adapting to the fast-paced tech landscape. Collaboration,
            integrity, and problem-solving drive my approach to both personal
            and professional growth. 🚀
          </p>

          {/* CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(236,72,153,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-pink-500/40 transition"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
