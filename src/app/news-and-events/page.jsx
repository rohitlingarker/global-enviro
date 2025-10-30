"use client";

import React from "react";
import { motion } from "framer-motion";

const mockNews = [
  {
    id: 1,
    title: "Global Enviro launches new cleanroom equipment line",
    date: "October 15, 2025",
    description:
      "Global Enviro has announced its latest line of energy-efficient cleanroom equipment designed for pharmaceutical and semiconductor industries.",
    image:
      "https://images.unsplash.com/photo-1581091012184-7c54c7d4b3c4?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 2,
    title: "Participation in Environmental Expo 2025",
    date: "September 20, 2025",
    description:
      "Our team showcased advanced dust extraction systems at the International Environmental Expo held in Mumbai.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 3,
    title: "CSR Activity – Tree Plantation Drive",
    date: "August 5, 2025",
    description:
      "As part of our commitment to sustainability, Global Enviro employees participated in a tree plantation drive across Pune.",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=60",
  },
];

const NewsAndEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        News & Events
      </h1>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {mockNews.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{item.date}</p>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
