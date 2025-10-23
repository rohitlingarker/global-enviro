"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Waste Heat Recovery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Crude Flexibility",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Unconventional Gas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Solar Power Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Wastewater Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor.",
  }
];

const Project = () => {
  return (
    <section className="w-full py-20 bg-background text-foreground transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-2">
              Our Projects
            </h2>
          </div>
          <div>
            <a href="#" className="inline-flex items-center  text-xl  text-accent/100 hover:text-primary">
              All Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  READ MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
