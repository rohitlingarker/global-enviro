"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaGlobeAsia, FaRecycle } from "react-icons/fa";

export default function OurJourney() {
  const milestones = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "Global Enviro was founded with a clear vision — to protect the environment by introducing sustainable innovations that minimize pollution and promote green energy.",
      icon: <FaLeaf className="text-accent text-3xl" />,
    },
    {
      year: "2015",
      title: "Expanding Horizons",
      description:
        "We expanded globally, forming partnerships with eco-conscious organizations and government initiatives for sustainable industrial growth.",
      icon: <FaGlobeAsia className="text-accent text-3xl" />,
    },
    {
      year: "2018",
      title: "People & Impact",
      description:
        "Our team grew to 500+ passionate professionals dedicated to reducing carbon footprints and increasing renewable energy awareness worldwide.",
      icon: <FaUsers className="text-accent text-3xl" />,
    },
    {
      year: "2023",
      title: "Sustainability Drive",
      description:
        "We launched key programs focusing on waste management, water recycling, and circular economy solutions for a cleaner planet.",
      icon: <FaRecycle className="text-accent text-3xl" />,
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, #0A1833 0%, #417DD8 50%, #EAF2FF 100%)", // Dark navy to blue to light blue gradient
      }}
    >
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12 text-white text-center"
      >
        Our Journey
      </motion.h1>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-4 border-white pl-8 space-y-14">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-white"
          >
            {/* Icon */}
            <div className="absolute -left-10 flex items-center justify-center w-12 h-12 bg-white/25 rounded-full backdrop-blur-sm">
              {milestone.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-[#EAF2FF]">{milestone.year}</h3>
            <h2 className="text-2xl font-bold text-[#AECBFF] mb-2">
              {milestone.title}
            </h2>
            <p className="text-[#D8E4F7] leading-relaxed">
              {milestone.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 text-center max-w-3xl"
      >
        <p className="text-lg italic text-[#EAF2FF]">
          “Every milestone we cross strengthens our commitment to building a sustainable world for generations to come.”
        </p>
      </motion.div>
    </div>
  );
}
