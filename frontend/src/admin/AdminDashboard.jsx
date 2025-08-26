import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  PenSquare,
  Briefcase,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import DashboardHome from "./DashboardHome";
import AddSkill from "./AddSkill";
import AddCertificate from "./AddCertificate";

// Dummy Components for Pages
// const Skills = () => <div className="p-6">⚡ Manage Skills</div>;
// const Certificates = () => <div className="p-6">🏆 Manage Certificates</div>;
const Blog = () => <div className="p-6">📝 Manage Blog Posts</div>;
const Projects = () => <div className="p-6">💻 Manage Projects</div>;
const Messages = () => <div className="p-6">📨 View Messages</div>;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <BookOpen size={20} /> },
    { id: "skills", label: "Skills", icon: <BookOpen size={20} /> },
    { id: "certificate", label: "Certificates", icon: <Award size={20} /> },
    { id: "blog", label: "Blog", icon: <PenSquare size={20} /> },
    { id: "project", label: "Projects", icon: <Briefcase size={20} /> },
    { id: "message", label: "Messages", icon: <MessageSquare size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardHome />;
      case "skills":
        return <AddSkill />;
      case "certificate":
        return <AddCertificate />;
      case "blog":
        return <Blog />;
      case "project":
        return <Projects />;
      case "message":
        return <Messages />;
      default:
        return <Skills />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ x: sidebarOpen ? 0 : -200 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-b from-indigo-900 to-purple-900 text-white w-64 min-h-screen shadow-xl fixed"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-indigo-700">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <LayoutDashboard size={22} /> Admin Panel
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white md:hidden"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-2 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === item.id
                  ? "bg-pink-500 text-white shadow-lg"
                  : "hover:bg-white/10"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl font-bold text-indigo-800 mb-4 capitalize">
            {activeTab}
          </h1>
          <div className="text-gray-700">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
