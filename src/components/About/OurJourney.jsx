import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaGlobeAsia, FaRecycle } from "react-icons/fa";

export default function OurJourney() {
  const milestones = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "Global Enviro was born with a mission to make our planet greener and cleaner through sustainable innovations.",
      icon: <FaLeaf className="text-primary text-3xl" />,
    },
    {
      year: "2015",
      title: "Expanding Horizons",
      description:
        "We expanded our operations globally, collaborating with eco-conscious partners and environmental agencies.",
      icon: <FaGlobeAsia className="text-primary text-3xl" />,
    },
    {
      year: "2018",
      title: "People & Impact",
      description:
        "Over 500 dedicated members joined hands to reduce carbon footprints and promote renewable energy awareness.",
      icon: <FaUsers className="text-primary text-3xl" />,
    },
    {
      year: "2023",
      title: "Sustainability Drive",
      description:
        "We launched initiatives focusing on waste management, recycling, and circular economy development.",
      icon: <FaRecycle className="text-primary text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center py-16 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-10 text-center text-primary"
      >
        Our Journey 🌿
      </motion.h1>

      {/* Timeline Section */}
      <div className="relative max-w-5xl mx-auto border-l-4 border-primary pl-6 space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-card text-card-foreground rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -left-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
              {milestone.icon}
            </div>

            <h3 className="text-xl font-semibold text-accent">{milestone.year}</h3>
            <h2 className="text-2xl font-bold mb-2">{milestone.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
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
        className="mt-16 text-center max-w-3xl"
      >
        <p className="text-lg italic text-muted-foreground">
          “Every milestone we achieve is a step closer to a sustainable tomorrow.”
        </p>
      </motion.div>
    </div>
  );
}
