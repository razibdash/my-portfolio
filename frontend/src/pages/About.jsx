// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  const about = [
    {
      id: 1,
      title: "My Programming Journey",
      content:
        "I started my programming journey with curiosity about how software works, beginning with C and C++. Over time, I explored Java, and eventually found my passion in web development with JavaScript, React, and the MERN stack.",
    },

    {
      id: 2,
      title: "The Work I Enjoy",
      content:
        "I love building user-friendly web apps with clean design and interactive features. Problem-solving excites me, and I enjoy working on real-world projects where creativity meets logic.",
    },

    {
      id: 3,
      title: "Hobbies & Interests",
      content:
        "Outside programming, I enjoy reading tech blogs and exploring creative design. These hobbies keep me energized and bring fresh ideas into my coding work.",
    },

    {
      id: 4,
      title: "Future Aspirations",
      content:
        "I aim to deepen my expertise in web development and explore emerging technologies like AI and blockchain. My goal is to create impactful solutions that enhance user experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="relative mt-10 py-20 bg-gradient-to-r px-5 from-gray-900 via-black to-gray-900 text-white overflow-hidden"
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
      <div className="relative mt-10 ">
        <div className="absolute lg:left-1/2 left-0 transform -tracking-x-1/2 lg:-translate-x-0 w-1 h-full bg-gradient-to-r from-pink-500 to-purple-600 "></div>
        {about.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center  pr-3 lg:pr-0 mb-12 ${
              item.id % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            } `}
          >
            <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-2 border-primary w-5 h-5  rounded-full flex justify-center items-center shadow-2xl shadow-secondary z-10"></div>

            <div
              className={`w-full lg:max-w-lg px-8 py-12 lg:py-16  border border-pink-500  rounded-bl-4xl  rounded-tr-4xl shadow-md shadow-primary bg-gray-900  backdrop:blur-lg ${
                item.id % 2 === 0
                  ? "lg:ml-0, lg:text-left"
                  : "lg:mr-0,lg:text-right"
              } lg:ml-55 lg:mr-55 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
