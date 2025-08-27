import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useProjects } from "../hook/allData";
import { useEffect } from "react";
import Loader from "../components/Loader";

export default function Projects() {
  const {
    projects,
    project,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
    loading,
    error,
  } = useProjects();
  // Show only 3 projects
  useEffect(() => {
    fetchProjects();
  }, []);
  const displayedProjects = projects.slice(0, 3);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section
          id="projects"
          className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-12">
              My <span className="text-pink-400">Projects</span>
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <AnimatePresence>
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-2xl bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
                  >
                    {/* Project Image with hover zoom + shadow */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(255, 105, 180, 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="p-6 flex flex-col gap-3">
                      {/* Title */}
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      {/* Description */}
                      <p className="text-gray-300 text-sm">
                        {project.description}
                      </p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-pink-500/30 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-md  transition-all duration-300"
                    >
                      <Link to={`/projects/${project._id}`}>Read More →</Link>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* See More Button */}
            {projects.length > displayedProjects.length && (
              <div className="mt-10">
                <Link
                  to="/projects"
                  className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition"
                >
                  See More Projects
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
