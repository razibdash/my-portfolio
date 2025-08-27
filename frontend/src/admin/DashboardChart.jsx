import { useEffect, useState, useContext } from "react";
import { AdminAuthContext } from "../context/AdminAuthContext";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DashboardCharts() {
  const { admin } = useContext(AdminAuthContext);
  const [blogs, setBlogs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsRes, skillsRes, projectsRes] = await Promise.all([
          fetch("http://localhost:5000/api/blogs/blog/", {
            headers: { Authorization: `Bearer ${admin?.token}` },
          }),
          fetch("http://localhost:5000/api/skills/skill/", {
            headers: { Authorization: `Bearer ${admin?.token}` },
          }),
          fetch("http://localhost:5000/api/projects/project/", {
            headers: { Authorization: `Bearer ${admin?.token}` },
          }),
        ]);

        const blogsData = await blogsRes.json();
        const skillsData = await skillsRes.json();
        const projectsData = await projectsRes.json();

        setBlogs(blogsData);
        setSkills(skillsData);
        setProjects(projectsData);
      } catch (err) {
        console.error("Failed to fetch chart data:", err);
      }
    };
    fetchData();
  }, [admin]);

  // Prepare chart data
  const blogsByAuthor = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1;
    return acc;
  }, {});
  const blogsPieData = Object.entries(blogsByAuthor).map(([name, value]) => ({
    name,
    value,
  }));

  const skillsByCategory = skills.reduce((acc, skill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1;
    return acc;
  }, {});
  const skillsBarData = Object.entries(skillsByCategory).map(
    ([category, count]) => ({ category, count })
  );

  const projectsByTech = projects.reduce((acc, proj) => {
    if (proj.tech && proj.tech.length > 0) {
      const tech = proj.tech[0];
      acc[tech] = (acc[tech] || 0) + 1;
    }
    return acc;
  }, {});
  const projectsBarData = Object.entries(projectsByTech).map(
    ([tech, count]) => ({ tech, count })
  );

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Blogs Pie Chart */}
      <motion.div
        variants={cardVariants}
        className="bg-gradient-to-r from-indigo-700 to-purple-700 p-4 rounded-2xl shadow-xl"
      >
        <h3 className="text-white font-semibold mb-4 text-center">
          Blogs by Author
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={blogsPieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {blogsPieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Skills Bar Chart */}
      <motion.div
        variants={cardVariants}
        className="bg-gradient-to-r from-pink-500 to-pink-700 p-4 rounded-2xl shadow-xl"
      >
        <h3 className="text-white font-semibold mb-4 text-center">
          Skills by Category
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={skillsBarData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Projects Bar Chart */}
      <motion.div
        variants={cardVariants}
        className="bg-gradient-to-r from-purple-700 to-indigo-700 p-4 rounded-2xl shadow-xl"
      >
        <h3 className="text-white font-semibold mb-4 text-center">
          Projects by Tech
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={projectsBarData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tech" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
