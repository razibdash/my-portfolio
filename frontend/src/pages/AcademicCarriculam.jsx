import { motion } from "framer-motion";

export default function Curriculum() {
  const academics = [
    {
      year: "2018 - 2022",
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Metropolitan University, Sylhet",
      details:
        "Focused on Artificial Intelligence, Machine Learning, and Full-Stack Web Development. Built projects like LMS System, Medical Chatbot, and AI-powered applications.",
    },
    {
      year: "2016 - 2018",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sylhet Govt. College",
      details:
        "Specialized in Science with a strong foundation in Mathematics, Physics, and Computer Science.",
    },
    {
      year: "2014 - 2016",
      degree: "Secondary School Certificate (SSC)",
      institution: "Sylhet Govt. Pilot High School",
      details:
        "Completed SSC with distinction, developing early interests in programming and problem-solving.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white min-h-screen overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-pink-400 mb-16"
        >
          <span className="text-white">Academic</span> Curriculum
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-pink-500 ml-6">
          {academics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              {/* Dot */}
              <div className="absolute -left-5 w-6 h-6 bg-pink-500 rounded-full border-4 border-black"></div>

              {/* Card */}
              <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-pink-500/40 hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-pink-400">
                  {item.degree}
                </h3>
                <p className="text-gray-400">{item.institution}</p>
                <span className="text-sm text-indigo-400">{item.year}</span>
                <p className="mt-4 text-gray-300">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
