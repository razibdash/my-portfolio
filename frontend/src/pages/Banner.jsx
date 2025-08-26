import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-40"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Left Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-pink-400">Razib Dash</span>
          </h1>
          {/* <ReactTypingEffect
            text={["MERN Stack Developer", "AI Enthusiast"]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#1D5861]">{cursor}</span>
            )}
          ></ReactTypingEffect> */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            MERN Stack & AI Enthusiast
          </h2>
          <p className="text-lg text-gray-400 max-w-md">
            Passionate about building intelligent applications with AI, ML, and
            modern web technologies. Always exploring the edge of innovation.
          </p>
          <a
            href="/cv.pdf" // replace with your CV path
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-2xl text-white font-medium shadow-lg hover:scale-105 transition card-content "
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ y: 50, opacity: 5 }}
          animate={{ y: [1, -20, 1], opacity: 1 }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/sp20bDHw/Avro-4.jpg" // replace with your image
            alt="Razib Dash"
            className="w-72 md:w-[500px] rounded-full border-4 border-pink-400 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
