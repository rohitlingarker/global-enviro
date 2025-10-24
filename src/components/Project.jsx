"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Waste Heat Recovery",
    description:
      "Enhancing energy efficiency by capturing and reusing industrial heat waste for a sustainable future.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Crude Flexibility",
    description:
      "Developing systems that allow refineries to adapt to variable crude compositions while minimizing emissions.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Unconventional Gas",
    description:
      "Optimizing extraction and processing of natural gas from unconventional reservoirs with cutting-edge technology.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516110833967-5780e87dc136",
    title: "Solar Power Integration",
    description:
      "Seamlessly integrating solar power into industrial infrastructure to reduce dependency on fossil fuels.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1535378917041-10a22c95931a",
    title: "Wastewater Treatment",
    description:
      "Advanced treatment solutions that recycle and purify wastewater to protect our environment.",
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-background to-muted/30 text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent tracking-tight">
            Our  Projects
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-lg text-accent hover:text-primary transition-all"
          >
             All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Slideshow */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[current].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
            >
              {/* Image Left */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="w-full h-[400px] md:h-[480px] object-cover rounded-2xl shadow-md hover:shadow-lg transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition"></div>
              </motion.div>

              {/* Text Right */}
              <motion.div
                className="flex flex-col justify-center space-y-6 text-left"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-semibold text-accent">
                  {projects[current].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                  {projects[current].description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-all w-fit"
                >
                  Explore Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-14">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-transparent border border-border hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-transparent border border-border hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
