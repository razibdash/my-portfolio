import axios from "axios";
import { motion } from "framer-motion";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my-portfolio-pyar.onrender.com/api/contacts/contact",
        contactData
      );

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setContactData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-pink-400 mb-12 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="text-white ">Contact</span> Me
      </motion.h2>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6 text-pink-400">
            Get In Touch
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/70 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/70 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-gray-800/70 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/30 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl shadow-lg border border-white/10"
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.907683986434!2d90.41251891429738!3d23.81033199204957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a60c26c5b7%3A0x9a6bfa41063f6368!2sDhaka!5e0!3m2!1sen!2sbd!4v1675589691382!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[450px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
