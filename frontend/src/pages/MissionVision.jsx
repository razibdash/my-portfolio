import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react"; // ✅ Import icons

export default function MissionVision() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white py-20 overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-pink-400 mb-16"
        >
          <span className="text-white">My Mission</span> & Vision
        </motion.h2>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-pink-500/40 transition group"
          >
            {/* Animated Border Pulse */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-500 animate-[pulse_2s_infinite]"></div>

            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-pink-400">Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My mission is to create impactful solutions through technology,
              combining innovation and integrity. I strive to empower
              individuals and organizations by leveraging AI, web development,
              and modern digital tools to build a smarter future.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-indigo-500/40 transition group"
          >
            {/* Animated Border Pulse */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-500 animate-[pulse_2s_infinite]"></div>

            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-indigo-400" /> {/* 👁 Icon */}
              <h3 className="text-2xl font-semibold text-indigo-400">Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My vision is to become a global leader in AI-driven solutions and
              full-stack innovation, contributing to a world where technology
              simplifies lives, drives education, and supports sustainable
              growth while keeping human values at the core.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
