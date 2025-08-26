import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

// ✅ Sample data (you can fetch later from backend)
const certificates = [
  {
    id: 1,
    title: "Java Programming Basics",
    issuer: "Hakerrank",
    date: "2024-05-10",
    img: "/javaBasic.PNG",
  },
  {
    id: 2,
    title: "AI & Machine Learning Specialization",
    issuer: "Coursera",
    date: "2024-03-15",
    img: "/javaBasic.PNG",
  },
  {
    id: 3,
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023-12-20",
    img: "/javaBasic.PNG",
  },
];

export default function CertificationAwards() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white py-20 overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-400 mb-12 flex items-center justify-center gap-3"
        >
          <Award className="w-8 h-8 text-white" />
          <span className="text-white">Certifications</span> & Awards
        </motion.h2>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-pink-400" />
          </button>

          <motion.div
            key={certificates[current].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full md:w-3/4"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Certificate Image */}
              <motion.img
                src={certificates[current].img}
                alt={certificates[current].title}
                className="w-full md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition"
                whileHover={{ scale: 1.05 }}
              />

              {/* Certificate Details */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                  {certificates[current].title}
                </h3>
                <p className="text-gray-300">
                  <span className="font-bold">Issuer:</span>{" "}
                  {certificates[current].issuer}
                </p>
                <p className="text-gray-400 mb-4">
                  <span className="font-bold">Date:</span>{" "}
                  {certificates[current].date}
                </p>
              </div>
            </div>
          </motion.div>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-pink-400" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-pink-500" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
