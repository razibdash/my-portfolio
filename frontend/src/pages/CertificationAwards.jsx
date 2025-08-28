import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

export default function CertificationAwards() {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [certificates, setCertificates] = useState([]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  // 🔹 Fetch All Certificates
  const fetchCertificates = async () => {
    try {
      const res = await axios.get(
        "https://myportfolio-ebon-tau.vercel.app/api/certificates/certificate/"
      );
      setCertificates(res.data.certificates);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch certificates:", err);
    }
  };
  useEffect(() => {
    fetchCertificates();
  }, [current]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="relative min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white py-20 overflow-hidden">
          {/* Floating Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-pink-400 mb-12 flex flex-wrap items-center justify-center gap-3"
            >
              <span className="text-white ">Certifications</span> & Awards
            </motion.h2>

            {/* Slider */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute  left-0 md:-left-16 p-3 md:bg-white/10 hover:bg-white/20 rounded-full transition"
              >
                <ChevronLeft className="w-2 h-2 hidden md:block md:w-6 md:h-6 text-pink-400" />
              </button>

              <motion.div
                key={certificates._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full md:w-3/4"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Certificate Image */}
                  <motion.img
                    src={certificates[current].img}
                    alt={certificates[current].title}
                    className="w-full md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Certificate Details */}
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                      {certificates[current].title}
                    </h3>
                    <p className="text-gray-300">
                      <span className="font-bold">Issuer:</span>{" "}
                      {certificates[current].issuer}
                    </p>
                    <p className="text-gray-400 mb-4">
                      <span className="font-bold">Date:</span>{" "}
                      {certificates[current].date.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </motion.div>

              <button
                onClick={nextSlide}
                className="absolute  right-0 md:-right-16 p-3 md:bg-white/10 hover:bg-white/20 rounded-full transition"
              >
                <ChevronRight className="w-2 h-2 md:w-6 md:h-6 hidden md:block text-pink-400" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? "bg-pink-500" : "bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
