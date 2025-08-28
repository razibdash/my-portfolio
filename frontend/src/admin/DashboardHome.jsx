import { motion } from "framer-motion";
import { BookOpen, Briefcase, PenSquare, MessageSquare } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../context/AdminAuthContext";
import DashboardCharts from "./DashboardChart";

export default function DashboardHome() {
  const { admin } = useContext(AdminAuthContext);
  const [counts, setCounts] = useState({});
  useEffect(() => {
    // Fetch counts from the backend API
    const fetchCounts = async () => {
      try {
        const response = await fetch(
          "https://myportfolio-ebon-tau.vercel.app/api/counts",
          {
            headers: {
              Authorization: `Bearer ${admin?.token}`, // Use token from context
            },
          }
        );
        const data = await response.json();
        setCounts(data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-indigo-800">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Skills Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center p-6 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl shadow-xl text-white cursor-pointer"
        >
          <BookOpen size={36} className="mr-4 text-pink-400" />
          <div>
            <h3 className="text-lg font-semibold">Skills</h3>
            <p className="text-2xl font-bold">{counts.skills}</p>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center p-6 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl shadow-xl text-white cursor-pointer"
        >
          <Briefcase size={36} className="mr-4 text-pink-400" />
          <div>
            <h3 className="text-lg font-semibold">Projects</h3>
            <p className="text-2xl font-bold">{counts.projects}</p>
          </div>
        </motion.div>

        {/* Blogs Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center p-6 bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl shadow-xl text-white cursor-pointer"
        >
          <PenSquare size={36} className="mr-4 text-yellow-300" />
          <div>
            <h3 className="text-lg font-semibold">Blogs</h3>
            <p className="text-2xl font-bold">{counts.blogs}</p>
          </div>
        </motion.div>

        {/* Messages Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center p-6 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl shadow-xl text-white cursor-pointer"
        >
          <MessageSquare size={36} className="mr-4 text-green-400" />
          <div>
            <h3 className="text-lg font-semibold">Messages</h3>
            <p className="text-2xl font-bold">{counts.contacts}</p>
          </div>
        </motion.div>
      </div>
      <section>
        <DashboardCharts />
      </section>
    </div>
  );
}
