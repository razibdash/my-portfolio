import { useParams, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useProjects } from "../hook/allData";
import Loader from "../components/Loader";
export default function ProjectDetails() {
  const { id } = useParams();
  const { project, fetchProjectById, loading, error } = useProjects();

  useEffect(() => {
    fetchProjectById(id);
  }, []);

  if (!project && !loading) {
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
    <>
      {loading ? (
        <Loader />
      ) : (
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
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              {project.tech.map((tech, i) => (
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
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-6 mt-8"
            >
              <NavLink
                to={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2  lg:px-6 lg:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-pink-500/50 transition"
              >
                Live Demo
              </NavLink>
              <NavLink
                to={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 lg:px-6 lg:py-3 bg-gray-800/70 text-white rounded-xl shadow-lg hover:shadow-gray-500/50 transition"
              >
                GitHub
              </NavLink>
              <Link
                to="/projects"
                className="px-6 py-3 border border-pink-500 text-pink-400 rounded-xl hover:bg-pink-500/20 transition"
              >
                Back to Projects
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
