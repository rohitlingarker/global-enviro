"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Overview() {
  return (
    <div className="overflow-hidden text-gray-800">
      {/* ===== Banner Section ===== */}
      <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-20">
        {/* SVG Curve */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f9fafb"
            d="M0,32 C360,100 1080,0 1440,80 L1440,120 L0,120 Z"
          />
        </svg>

        {/* Banner Title */}
        <div className="relative container mx-auto px-6 pt-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-blue-900 tracking-wide"
          >
            ABOUT US
          </motion.h1>
        </div>
      </section>

      {/* ===== Middle Overview Section (with background image) ===== */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: "url('/assets/images/bg-industrial.jpg')", // <-- add your background image here
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        <div className="relative container mx-auto grid md:grid-cols-2 gap-10 px-6 items-start">
          {/* Left — Image + Floating Tagline */}
          <div className="relative flex justify-center">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/assets/images/hero-section.png"
                alt="Global Industries Overview"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>

            {/* Floating Tagline Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -top-8 left-8 bg-blue-200 text-blue-900 px-6 py-4 rounded-md shadow-lg max-w-[200px]"
            >
              <p className="font-semibold">Some Content<br />like tagline</p>
            </motion.div>
          </div>

          {/* Right — Overview Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 bg-opacity-70 p-8 rounded-lg shadow-md leading-relaxed"
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-4">OVERVIEW</h2>
            <p className="text-gray-700 mb-4">
              <strong>Driving Innovation. Delivering Excellence.</strong>  
              Global Industries has been at the forefront of engineering and industrial innovation
              for over two decades — delivering end-to-end solutions across Air Pollution Control,
              HVAC Systems, and Clean Room technologies.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in 1999 by visionary entrepreneur <b>Mr. K. Srirami Reddy</b>, the company
              began as a pioneering force in the power and process boiler industries and expanded
              into steel and ferro-alloy projects across India.
            </p>
            <p className="text-gray-700">
              Today, Global Industries leads in <b>Air Pollution Control</b>, <b>HVAC</b>,
              <b> Clean Room Solutions</b>, and <b>Bulk Material Handling</b>, delivering
              <b> EPC</b>, <b> PMC</b>, and <b> EPCM</b> projects with excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
