"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Waste Heat Recovery",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Crude Flexibility",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Unconventional Gas",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Solar Power Integration",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Wastewater Treatment",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
];

const Project = () => {
  const [offset, setOffset] = useState(0);
  const cardWidth = 350; // width + gap

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const displayedProjects = [...projects, ...projects];
  const centerIndex = offset;

  return (
    <section className="w-full py-16 bg-background text-foreground transition-colors overflow-hidden">
      {/* Container */}
      <div className="w-full px-4 md:px-8 max-w-[1600px] mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-9">
          <h2 className="text-xl  md:text-5xl font-bold text-accent">
            Our Projects
          </h2>
          <a
            href="#"
            className="inline-flex font-medium items-center text-xl text-accent hover:text-primary transition"
          >
            All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Carousel */}
        <div className="flex justify-center ">
          <motion.div
            className="flex gap-20"
            animate={{ x: -offset * cardWidth }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {displayedProjects.map((project, index) => {
              const isCenter = index % projects.length === centerIndex;

              return (
                <motion.div
                  key={index}
                  className="min-w-[400px] min-h-[30px] bg-card rounded-xl overflow-hidden shadow-md border border-border transition-transform duration-500"
                  whileHover={{ scale: 1.02 }}
                  animate={{ scale: isCenter ? 1.02 : 1 }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-accent mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {project.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition"
                    >
                      READ MORE
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
