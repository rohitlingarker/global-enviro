"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-0 px-6 md:px-16 pb-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ===== Left Side: Image ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[500px] h-[500px] rounded-[60px] overflow-hidden shadow-2xl border-[4px] border-blue-100">
            <Image
              src="/assets/images/overview-bg.jpg"
              alt="Global Industries"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* ===== Right Side: Text Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Redefining Industrial Excellence
          </h2>
          <p className="mb-4 leading-relaxed text-[16px]">
            Founded in 1999 by visionary entrepreneur{" "}
            <b>Mr. K. Srirami Reddy</b>, Global Industries began as a pioneering
            force in the power and process boiler industries, later expanding
            into steel and ferro-alloy projects across India.
          </p>
          <p className="mb-4 leading-relaxed text-[16px]">
            Today, Global Industries stands as a leader in{" "}
            <b>Air Pollution Control</b>, <b>HVAC Systems</b>,{" "}
            <b>Clean Room Solutions</b>, and <b>Bulk Material Handling</b>.
            Through cutting-edge technology and a commitment to quality, we
            deliver <b>EPC</b>, <b>PMC</b>, and <b>EPCM</b> projects that
            redefine reliability and innovation.
          </p>
          <p className="leading-relaxed text-[16px]">
            Our mission is to merge engineering precision with sustainability,
            empowering industries to grow responsibly and create long-term value
            for our clients and the environment.
          </p>

          {/* Highlights below text (aligned with image) */}
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "100+", label: "Projects Delivered" },
              { number: "15+", label: "Industries Served" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl font-bold text-blue-800">
                  {item.number}
                </span>
                <span className="text-gray-600 text-sm mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ===== Full-Width Subheading Below ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-10 text-center text-white rounded-3xl shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">
          “Engineering sustainable growth with precision and purpose.”
        </h3>
        <p className="text-gray-200 max-w-3xl mx-auto text-sm md:text-base">
          Building a better, cleaner, and smarter industrial future — together.
        </p>
      </motion.div>
    </section>
  );
}
