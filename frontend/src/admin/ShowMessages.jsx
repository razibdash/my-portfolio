import { useState } from "react";
import { motion } from "framer-motion";

// Sample messages
const initialMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Portfolio Inquiry",
    message: "Hi Razib, I love your portfolio! Can you help me with MERN?",
    date: "2025-08-27",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Collaboration",
    message: "Would you like to collaborate on a project?",
    date: "2025-08-26",
  },
];

export default function ShowMessages() {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-800 mb-8">Messages</h2>

      {/* Messages Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Message
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.map((msg) => (
              <motion.tr
                key={msg.id}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer transition"
              >
                <td className="px-6 py-4 font-medium text-gray-700">
                  {msg.name}
                </td>
                <td className="px-6 py-4 text-gray-500">{msg.email}</td>
                <td className="px-6 py-4 text-gray-500">{msg.subject}</td>
                <td className="px-6 py-4 text-gray-500">{msg.message}</td>
                <td className="px-6 py-4 text-gray-500">{msg.date}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
