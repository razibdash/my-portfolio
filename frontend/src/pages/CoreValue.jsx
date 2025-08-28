import { motion } from "framer-motion";
import {
  GraduationCap,
  Handshake,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";

const coreValues = [
  {
    id: 1,
    title: "Commitment to Integrity",
    description:
      "I uphold honesty and transparency in all my work, ensuring ethical and lawful practices in a remote environment.",
    icon: <GraduationCap className="w-8 h-8 text-pink-500" />,
  },
  {
    id: 2,
    title: "Continuous Learning",
    description:
      "I strive to expand my knowledge and skills consistently, adapting to new technologies and methodologies.",
    icon: <Lightbulb className="w-8 h-8 text-indigo-500" />,
  },
  {
    id: 3,
    title: "Collaboration & Communication",
    description:
      "I value teamwork and effective communication, ensuring smooth coordination across diverse teams and projects.",
    icon: <Users className="w-8 h-8 text-pink-500" />,
  },
  {
    id: 4,
    title: "Innovation & Creativity",
    description:
      "I approach problems with creativity and innovation, delivering unique solutions that add value.",
    icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
  },
];

export default function CoreValues() {
  const borderAnimation = {
    animate: {
      borderImageSlice: [0, 100, 0], // will animate stroke effect
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  };

  return (
    <section
      id="values"
      className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white overflow-hidden"
    >
      {/* Floating Background Blobs */}
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

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-pink-400">Core Values</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-lg shadow-lg flex flex-col items-center text-center cursor-pointer overflow-hidden"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 shadow-lg border-purple-800/40 pointer-events-none"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              />

              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="p-4 rounded-full bg-white/10 flex items-center justify-center shadow-lg"
              >
                {value.icon}
              </motion.div>
              <h3 className="relative text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="relative text-gray-300 text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
