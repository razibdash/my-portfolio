import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "./skillsData";

export default function Skills() {
  const categories = ["All", "Frontend", "Backend", "AI/ML", "Tools"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  // Show only first 6 skills for preview
  const displayedSkills = filteredSkills.slice(0, 8);

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-pink-400">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl font-medium transition ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: index * 0.1, duration: 0.9 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-lg shadow-lg flex flex-col items-center text-center cursor-pointer overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl border-b shadow-lg border-purple-900 pointer-events-none "
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                  }}
                />
                {/* Skill Logo */}
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                {/* Skill Name */}
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Animated Border */}

        {/* See More Button */}
        {filteredSkills.length > displayedSkills.length && (
          <div className="mt-10">
            <a
              href="/skills" // Replace with your full skills page route
              className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition"
            >
              See More Skills
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
