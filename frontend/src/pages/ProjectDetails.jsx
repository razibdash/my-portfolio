import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p>Project not found.</p>
        <Link to="/projects" className="ml-4 text-pink-400 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-pink-400"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          {project.longDesc}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-purple-600/50 text-white text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={project.title}
              className="rounded-2xl shadow-lg"
            />
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-6 mt-8"
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-pink-500/50 transition"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800/70 text-white rounded-xl shadow-lg hover:shadow-gray-500/50 transition"
          >
            GitHub
          </a>
          <Link
            to="/projects"
            className="px-6 py-3 border border-pink-500 text-pink-400 rounded-xl hover:bg-pink-500/20 transition"
          >
            Back to Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
