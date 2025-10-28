"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 px-6 md:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* ===== Left Side: Floating Curved Image ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center"
        >
          {/* Curved Masked Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[440px] h-[440px] rotate-[-6deg] drop-shadow-2xl"
          >
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                <path
                  transform="scale(0.002, 0.002)"
                  d="M421.5,302.5Q401,355,355,394Q309,433,249,449.5Q189,466,141,427Q93,388,69.5,334Q46,280,59.5,218Q73,156,115,108.5Q157,61,217,54Q277,47,337,74.5Q397,102,424,151Q451,200,421.5,302.5Z"
                />
              </clipPath>
            </svg>

            {/* Background Glow */}
            <div className="absolute -inset-8 bg-blue-100 rounded-full blur-3xl opacity-50 rotate-[12deg]" />

            {/* Image inside curved shape */}
            <div className="absolute inset-0 clip-path-[url(#blobClip)] overflow-hidden">
              <Image
                src="/assets/images/overview-bg.jpg"
                alt="Global Industries"
                fill
                className="object-cover scale-110 hover:scale-125 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Tagline below image */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center text-gray-700 text-lg italic max-w-md"
          >
            “Engineering sustainable growth with precision and purpose.”
          </motion.p>

          {/* Stats section below */}
          <div className="mt-10 grid grid-cols-3 gap-10 text-center">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "100+", label: "Successful Projects" },
              { number: "15+", label: "Industries Served" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl font-bold text-blue-800">
                  {item.number}
                </span>
                <span className="text-gray-600 text-sm mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== Right Side: Text Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Redefining Industrial Excellence
          </h2>
          <p className="mb-4 leading-relaxed">
            Founded in 1999 by visionary entrepreneur{" "}
            <b>Mr. K. Srirami Reddy</b>, Global Industries began as a
            pioneering force in power and process boiler industries, later
            expanding into steel and ferro-alloy projects across India.
          </p>
          <p className="mb-4 leading-relaxed">
            Today, Global Industries leads the market in{" "}
            <b>Air Pollution Control</b>, <b>HVAC Systems</b>,{" "}
            <b>Clean Room Solutions</b>, and <b>Bulk Material Handling</b>.
            Through cutting-edge innovation and a commitment to sustainability,
            we deliver <b>EPC</b>, <b>PMC</b>, and <b>EPCM</b> projects that
            merge engineering precision with reliability.
          </p>
          <p className="leading-relaxed">
            Our mission is to create value through intelligent design,
            sustainable technologies, and a client-centric approach. We aim to
            drive a new era of industrial performance that balances progress
            with environmental responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
