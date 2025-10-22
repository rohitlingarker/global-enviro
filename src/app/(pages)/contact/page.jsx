"use client";
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f6fafd] flex flex-col items-center">
      {/* Header */}
      <div className="py-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-5">Get in Touch</h1>
        <p className="text-1xl font-semibold text-gray-700 max-w-1xl mx-auto">Ready to discuss your environmental solution needs? Contact our expert team for personalized consultation and project planning.</p>
      </div>
      {/* Main Card */}
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left: Info */}
        <div className="md:w-1/2 w-full bg-gradient-to-tr   from-blue-700 via-blue-400 to-teal-600 px-10 py-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-7">Contact Information</h2>
            <div className="space-y-7">
              <div className="flex gap-4 items-center">
                <span className="bg-white/20 rounded-full p-3"><MapPinIcon className="w-7 h-7 text-white" /></span>
                <div>
                  <p className="font-semibold text-white text-lg">Global Headquarters</p>
                  <p className="text-white/80">123 Environmental Drive, Green City, GC 12345</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="bg-white/20 rounded-full p-3"><PhoneIcon className="w-7 h-7 text-white" /></span>
                <div>
                  <p className="font-semibold text-white text-lg">Phone</p>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="bg-white/20 rounded-full p-3"><EnvelopeIcon className="w-7 h-7 text-white" /></span>
                <div>
                  <p className="font-semibold text-white text-lg">Email</p>
                  <p className="text-white/80">info@globalenvirogroup.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="bg-white/20 rounded-full p-3"><ClockIcon className="w-7 h-7 text-white" /></span>
                <div>
                  <p className="font-semibold text-white text-lg">Business Hours</p>
                  <p className="text-white/80">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-white font-semibold mb-3">Follow Us</p>
            <div className="flex gap-8">
              <a href="#" className="bg-white/30 rounded-full p-3"><FaLinkedin size={28} color="#fff" /></a>
              <a href="#" className="bg-white/30 rounded-full p-3"><FaTwitter size={28} color="#fff" /></a>
              <a href="#" className="bg-white/30 rounded-full p-3"><FaFacebook size={28} color="#fff" /></a>
              <a href="#" className="bg-white/30 rounded-full p-3"><FaYoutube size={28} color="#fff" /></a>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <form className="md:w-1/2 w-full px-10 py-12 bg-white flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="w-1/2 rounded-lg border px-4 py-3 text-lg" />
            <input type="text" placeholder="Last Name" className="w-1/2 rounded-lg border px-4 py-3 text-lg" />
          </div>
          <input type="email" placeholder="Email" className="rounded-lg border px-4 py-3 text-lg" />
          <input type="text" placeholder="Company" className="rounded-lg border px-4 py-3 text-lg" />
          <select className="rounded-lg border px-4 py-3 text-lg">
            <option>Select a service</option>
            <option>Environmental Consulting</option>
            <option>Project Planning</option>
            <option>Regulatory Assistance</option>
          </select>
          <textarea rows={4} placeholder="Message" className="rounded-lg border px-4 py-3 text-lg" />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-4 py-4 rounded-xl font-bold text-xl text-white shadow-lg
                bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400
                hover:from-blue-600 hover:to-teal-500 transition"
            >
            <FaTelegramPlane size={28} />
            Send Message
            </button>
        </form>
      </div>
    </div>
  );
}
