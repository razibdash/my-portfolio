import { motion } from "framer-motion";

const coreValues = [
  {
    id: 1,
    title: "Commitment to Integrity",
    description:
      "I uphold honesty and transparency in all my work, ensuring ethical and lawful practices in a remote environment.",
  },
  {
    id: 2,
    title: "Continuous Learning",
    description:
      "I strive to expand my knowledge and skills consistently, adapting to new technologies and methodologies.",
  },
  {
    id: 3,
    title: "Collaboration & Communication",
    description:
      "I value teamwork and effective communication, ensuring smooth coordination across diverse teams and projects.",
  },
  {
    id: 4,
    title: "Innovation & Creativity",
    description:
      "I approach problems with creativity and innovation, delivering unique solutions that add value.",
  },
];

export default function CoreValues() {
  return (
    <section
      id="values"
      className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-pink-400">Core Values</span>
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-lg shadow-lg hover:shadow-pink-500/30 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Value Title */}
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              {/* Value Description */}
              <p className="text-gray-300 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
