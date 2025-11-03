"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUS() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb] text-gray-800 font-inter">
      {/* CONTACT BANNER SECTION */}
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

        {/* Banner Text */}
        <div className="relative container mx-auto px-6 pt-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-blue-900 tracking-wide"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg"
          >
            We’re here to help! Reach out to Global Enviro Air Systems for
            enquiries, support, or partnership discussions.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO BAR */}
      <section className="relative z-10 -mt-10 bg-white shadow-lg rounded-2xl w-[92%] max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <Phone className="w-7 h-7 text-[#0284c7] mb-2" />
          <h4 className="font-semibold text-[#0f172a]">Call Us</h4>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            +91 9666 669 922<br />
            +91 9666 266 113<br />
            +91 9666 879 977<br />
            08418 257264 to 68
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Mail className="w-7 h-7 text-[#0284c7] mb-2" />
          <h4 className="font-semibold text-[#0f172a]">Email</h4>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            info@globalenviro.in<br />
            ksr@globalenviro.in<br />
            service@globalenviro.in
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <MapPin className="w-7 h-7 text-[#0284c7] mb-2" />
          <h4 className="font-semibold text-[#0f172a]">Head Office</h4>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            Survey No. 163/A (Part), Gagillapur (Vill.),<br />
            Quthbullapur (Mdl), Hyderabad – 500043, Telangana
          </p>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] text-center mb-8">
            Our Locations
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-gray-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
                Global Enviro Air Systems – Unit I & II
              </h3>
              <p className="text-gray-600 text-sm">
                Survey No. 163/A (Part), Gagillapur (Vill.), Quthbullapur (Mdl),
                R.R. Dist, Hyderabad – 500043, Telangana.
              </p>
            </div>

            <div className="border border-gray-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
                Hyderabad – Jeedimetla Unit
              </h3>
              <p className="text-gray-600 text-sm">
                Survey No 303, Rami Reddy Nagar, Quthbullapur (Mdl), I.D.A
                Jeedimetla, Hyderabad – 500055, Telangana.
              </p>
            </div>

            <div className="border border-gray-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
                Global Metallurgicals
              </h3>
              <p className="text-gray-600 text-sm">
                Plot No 89, Aleap Industrial Estate, Surampalli Village,
                Gannavaram Mandal, Krishna District – 521212, Andhra Pradesh.
              </p>
            </div>

            <div className="border border-gray-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
                Jet Tech (Philippines Branch)
              </h3>
              <p className="text-gray-600 text-sm">
                3rd Floor, Vitra Building, P. Alcantara Street, San Pablo City,
                Laguna, Philippines – 4000.<br />
                Tel: (63) 999-881-1927 / (02) 381-5530<br />
                Email: jettech_power@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & MAP */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start">
          {/* FORM */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#0284c7] outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#0284c7] outline-none"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#0284c7] outline-none"
              />
              <button
                type="submit"
                className="mt-1 bg-[#0284c7] hover:bg-[#0369a1] text-white w-full py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          {/* GOOGLE MAP */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Global Enviro Air Systems - Gagillapur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.7368658972755!2d78.39407517512182!3d17.59745768345095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8eb0081aaaab%3A0x82bf120ade91c860!2sGlobal%20Enviro%20Air%20Systems%20pvt%20limited!5e0!3m2!1sen!2sin!4v1730649852000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
